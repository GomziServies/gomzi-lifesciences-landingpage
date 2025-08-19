import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { axiosInstance } from "../../assets/js/config/api";
import toast from "react-hot-toast";

function UserProfile() {
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        profilePhoto: null,
        profile_image: null,
    });

    const [loading, setLoading] = useState(false); // 🔥 loader state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
                    profilePhoto:
                        "https://files.fggroup.in/" +
                        (userData.user.profile_image || ""),
                }));
            }
        } catch (error) {
            console.error("Error in getUserData:", error);
            toast.error("❌ Error in getUserData");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // 🔥 loader start
        await updateData();
        setLoading(false); // 🔥 loader stop
    };

    useEffect(() => {
        getUserData();
    }, []);

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
                    className="contact-us-form modal-form mx-auto p-4 rounded"
                >
                    <h2 className="text-center m-4" style={{ color: "#fff" }}>
                        Update Your Profile
                    </h2>

                    <Row>
                        <Col md={4} className="mb-3">
                            <Form.Control
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="bg-dark text-light"
                            />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Control
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="bg-dark text-light"
                            />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-dark text-light"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Control
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                disabled
                                className="bg-dark text-light"
                            />
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Control
                                type="text"
                                name="user_id"
                                placeholder="User ID"
                                value={formData.user_id}
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
        </>
    );
}

export default UserProfile;
