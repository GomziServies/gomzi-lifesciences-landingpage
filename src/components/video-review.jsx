import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.css';


const VideoReview = () => {

    const [videoUrl, setVideoUrl] = useState("");
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideoModal = (url) => {
        setIsVideoOpen(true);
        setVideoUrl(url);
    };

    const closeVideoModal = () => {
        setIsVideoOpen(false);
        setVideoUrl("");
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="col-12 mt-5">
                    <div className="row" id="explore">
                        <div className="col-lg-4 mt-lg-4 p-3">
                            <div className="item">
                                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                                    <div className="ply position-relative">
                                        <LazyLoadImage
                                            src="/assets/images/nutrition/nutri-review-video-1.webp"
                                            width="100%"
                                            style={{ borderRadius: "10px", cursor: 'pointer' }}
                                            alt="fggroup"
                                            effect="blur"
                                        />
                                        <div className="video-btn play-btn">
                                            <button
                                                onClick={() => openVideoModal("wuNtHkWxUXY")}
                                                className="custom clickof video-button-bg cursor-pointer"
                                            >
                                                <span className="newthing">
                                                    <i className="fas fa-play cursor-pointer"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-4 p-3">
                            <div className="item">
                                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                                    <div className="ply position-relative">
                                        <LazyLoadImage
                                            src="/assets/images/nutrition/nutri-review-video-2.webp"
                                            width="100%"
                                            style={{ borderRadius: "10px", cursor: 'pointer' }}
                                            alt="fggroup"
                                            effect="blur"
                                        />
                                        <div className="video-btn play-btn">
                                            <button
                                                onClick={() => openVideoModal("K04q5L7E4S0")}
                                                className="custom clickof  cursor-pointer"
                                            >
                                                <span className="newthing">
                                                    <i className="fas fa-play cursor-pointer"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-4 p-3">
                            <div className="item">
                                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                                    <div className="ply position-relative">
                                        <LazyLoadImage
                                            src="/assets/images/nutrition/nutri-review-video-3.webp"
                                            width="100%"
                                            style={{ borderRadius: "10px" }}
                                            alt="fggroup"
                                            effect="blur"
                                        />
                                        <div className="video-btn play-btn">
                                            <button
                                                onClick={() => openVideoModal("-UhKGOkjDKQ")}
                                                className="custom clickof video-button-bg"
                                            >
                                                <span className="newthing">
                                                    <i className="fas fa-play"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isVideoOpen}
                videoId={videoUrl}
                onClose={closeVideoModal}
            />
        </>
    )
}

export default VideoReview