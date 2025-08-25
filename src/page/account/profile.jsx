import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { axiosInstance } from "../../assets/js/config/api";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';
import { isUserLoggedIn } from '../../utils/auth';
import Footer from "../../components/partials/Footer/footer";

function UserProfile() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        profilePhoto: null,
        profile_image: null,
    });

    const [loading, setLoading] = useState(false);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhotoChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadingPhoto(true);
        const formDataForUpload = new FormData();
        formDataForUpload.append("files", file);

        try {
            // Create a temporary local URL for instant preview
            const localUrl = URL.createObjectURL(file);
            setFormData(prevData => ({
                ...prevData,
                profilePhoto: localUrl
            }));

            const response = await axiosInstance.post(
                "/file-upload",
                formDataForUpload
            );
            const photoUrl = response.data.data.fileURLs[0];

            // Preload the actual image
            const img = new Image();
            img.src = "https://files.fggroup.in/" + photoUrl;

            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
            });

            setFormData((prevData) => ({
                ...prevData,
                profilePhoto: "https://files.fggroup.in/" + photoUrl,
                profile_image: photoUrl,
            }));

            await axiosInstance.post("/account/update-profile", {
                profile_image: photoUrl,
            });

            // Clean up the temporary URL
            URL.revokeObjectURL(localUrl);
            toast.success("Profile photo uploaded successfully");
        } catch (error) {
            console.error("Error uploading photo:", error);
            toast.error("Error uploading profile photo");
        } finally {
            setUploadingPhoto(false);
        }
    };

    const handleRemovePhoto = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove your profile photo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        });

        if (result.isConfirmed) {
            try {
                await axiosInstance.post("/account/update-profile", {
                    profile_image: null,
                });

                setFormData((prevData) => ({
                    ...prevData,
                    profilePhoto: "/assets/images/default-profile-img.webp",
                    profile_image: null,
                }));

                Swal.fire(
                    'Removed!',
                    'Your profile photo has been removed.',
                    'success'
                );
            } catch (error) {
                console.error("Error removing photo:", error);
                Swal.fire(
                    'Error!',
                    'Failed to remove profile photo.',
                    'error'
                );
            }
        }
    };

    const updateData = async () => {
        try {
            const response = await axiosInstance.post(
                "/account/update-profile",
                formData
            );
            if (response.data.data) {
                getUserData();
                toast.success("User data updated successfully");
            } else {
                toast.error(" Error updating user data");
            }
        } catch (error) {
            console.error("Error updating user data:", error);
            toast.error("Error updating user data");
        }
    };

    const getUserData = async () => {
        try {
            const response = await axiosInstance.get("/account/profile");
            const userData = response.data.data;
            if (userData) {
                setFormData((prevData) => ({
                    ...prevData,
                    user_id: userData.user.uid || "",
                    first_name: userData.user.first_name || "",
                    last_name: userData.user.last_name || "",
                    mobile: userData.user.mobile || "",
                    email: userData.user.email || "",
                    profilePhoto: userData.user.profile_image
                        ? "https://files.fggroup.in/" + userData.user.profile_image
                        : "/assets/images/default-profile-img.webp",
                }));
            }
        } catch (error) {
            if (!isUserLoggedIn()) {
                // If not logged in, don't show the error toast as we're redirecting anyway
                return;
            }
            console.error("Error in getUserData:", error);
            toast.error("Error loading profile data");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await updateData();
        setLoading(false);
    };

    useEffect(() => {
        const initializeProfile = async () => {
            if (!isUserLoggedIn()) {
                navigate('/', { replace: true });
                toast.dismiss();
                toast.error('Please login to access this page');
                return;
            }
            await getUserData();
        };

        initializeProfile();
    }, [navigate]);

    return (
        <>
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <NutritionHeader />
            <div style={{ height: "105px" }}></div>
            <Container className="margintop-nutrition my-5 mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="contact-us-form contact-us-form-profile modal-form mx-auto  rounded"
                >
                    <h2 className="text-center m-4 my-5" style={{ color: "#fff" }}>
                        Update Your Profile
                    </h2>

                    <Row className="align-items-center mb-4">
                        <Col md={2} className="text-center">
                            <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto' }}>
                                <img
                                    alt="User"
                                    src={formData.profilePhoto}
                                    style={{
                                        borderRadius: '50%',
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                        display: 'block',
                                        opacity: uploadingPhoto ? '0.5' : '1',
                                        transition: 'opacity 0.3s ease'
                                    }}
                                    loading="eager"
                                />
                            </div>
                        </Col>
                        <Col md={4}>
                            <h4 className="font-weight-bold mb-3">
                                {formData.first_name} {formData.last_name}
                            </h4>
                            <input
                                accept="image/*"
                                style={{ display: "none" }}
                                id="profile-photo-upload"
                                type="file"
                                onChange={handlePhotoChange}
                            />
                            <label htmlFor="profile-photo-upload" className="btn  upload-img-btn" style={{ pointerEvents: uploadingPhoto ? 'none' : 'auto' }}>
                                {uploadingPhoto ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                            className="me-2"
                                        />
                                        Uploading...
                                    </>
                                ) : (
                                    "Upload New Photo"
                                )}
                            </label>
                            {formData.profilePhoto && (
                                <button
                                    type="button"
                                    onClick={handleRemovePhoto}
                                    className="btn btn-outline-danger m-2 "
                                    disabled={uploadingPhoto}
                                >
                                    Remove
                                </button>
                            )}
                        </Col>
                        <Col md={6} className="">
                            <p className="mb-2">User ID :</p>
                            <Form.Control
                                type="text"
                                name="user_id"
                                placeholder="User ID"
                                value={formData.user_id}
                                disabled
                                className="bg-dark text-secondary"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} className="mb-5">
                            <p className="mb-2">First Name :</p>
                            <Form.Control
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="bg-dark text-light"
                            />
                        </Col>
                        <Col md={6} className="mb-5">
                            <p className="mb-2">Last Name :</p>
                            <Form.Control
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="bg-dark text-light"
                            />
                        </Col>
                        <Col md={6} className="mb-5">
                            <p className="mb-2">E-mail :</p>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-dark text-light"
                            />
                        </Col>
                        <Col md={6} className="mb-5">
                            <p className="mb-2">Mobile Number :</p>
                            <Form.Control
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                disabled
                                className="bg-dark text-light"
                            />
                        </Col>
                    </Row>

                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="btn-highlighted"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{" "}
                                    Saving...
                                </>
                            ) : (
                                "Save Changes"
                            )}
                        </button>
                    </div>
                </form>
            </Container>
            <Footer />
        </>
    );
}

export default UserProfile;
