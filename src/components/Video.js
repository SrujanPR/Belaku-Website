import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Video.css";
import videos from "../data/videos.json";

const Video = () => {
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
    const isManuallyPausedRef = useRef(true);
    const videoRef = useRef(null);
    const touchStartX = useRef(0);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;
            video.pause();
            video.src = videos[selectedVideoIndex].video;

            video.onloadeddata = () => {
                if (!isManuallyPausedRef.current) {
                    video.play().catch((err) => console.warn("Autoplay blocked:", err));
                }
            };

            video.onplay = () => (isManuallyPausedRef.current = false);
            video.onpause = () => (isManuallyPausedRef.current = true);
        }
    }, [selectedVideoIndex]);

    useEffect(() => {
        const preventAutoplay = () => {
            if (videoRef.current) videoRef.current.pause();
        };

        document.addEventListener("visibilitychange", preventAutoplay);
        document.addEventListener("focus", preventAutoplay);
        document.addEventListener("click", preventAutoplay);

        return () => {
            document.removeEventListener("visibilitychange", preventAutoplay);
            document.removeEventListener("focus", preventAutoplay);
            document.removeEventListener("click", preventAutoplay);
        };
    }, []);

    useEffect(() => {
        const enableVideoInteraction = () => {
            isManuallyPausedRef.current = false;
            document.removeEventListener("click", enableVideoInteraction);
        };

        document.addEventListener("click", enableVideoInteraction);
        return () => document.removeEventListener("click", enableVideoInteraction);
    }, []);

    const toggleVideoPlay = () => {
        if (videoRef.current) {
            const video = videoRef.current;

            if (video.paused) {
                video.play();
                isManuallyPausedRef.current = false;
            } else {
                video.pause();
                isManuallyPausedRef.current = true;
            }
        }
    };

    const changeVideo = (direction) => {
        setSelectedVideoIndex((prevIndex) => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) newIndex = videos.length - 1;
            if (newIndex >= videos.length) newIndex = 0;
            return newIndex;
        });

        isManuallyPausedRef.current = true;
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;

        if (Math.abs(deltaX) > 50) {
            changeVideo(deltaX > 0 ? 1 : -1);
        }
    };

    return (
        <div className="video-section">
            <h6 className="watch-text">Not a fan of reading? Then see it in action!</h6>
            <img
                src="/assets/Videos/arrow.png"
                alt="Arrow pointing to videos"
                className="arrow-image"
            />

            <div className="video-carousel-container">
                <div className="video-title-overlay">
                    <p>{videos[selectedVideoIndex].title}</p>
                </div>

                <div
                    className="video-container"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={toggleVideoPlay}
                >
                    <button className="carousel-btn left" onClick={() => changeVideo(-1)}>
                        ❮
                    </button>
                    <video
                        ref={videoRef}
                        className="video-item"
                        controls
                        controlsList="nodownload"
                        onTouchEnd={toggleVideoPlay}
                    >
                        <source src={videos[selectedVideoIndex].video} type="video/mp4" />
                    </video>

                    <button className="carousel-btn right" onClick={() => changeVideo(1)}>
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Video;