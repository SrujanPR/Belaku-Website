import React, { useState, useEffect } from "react";
import "../styles/ImpactStories.css";
import impactStories from "../data/impact.json";

const ImpactStories = () => {
    const [heading, setHeading] = useState("See how our Volunteers change lives — one story at a time!");
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        const updateHeading = () => {
            setHeading(window.innerWidth <= 600 
                ? "Impact Stories!!"
                : "Impact Stories!!"
            );
        };

        updateHeading();
        window.addEventListener("resize", updateHeading);
        return () => window.removeEventListener("resize", updateHeading);
    }, []);

    const handleCloseModal = () => setSelectedStory(null);

    // Safe image rendering function
    const renderImage = (story, index) => {
        if (!story?.image) return null;
        
        return (
            <img 
                src={`${process.env.PUBLIC_URL}/${story.image}`}
                alt={story.name || "Impact story"}
                className={`student-image student-image-${index + 1}`}
                onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Failed to load image: ${story.image}`);
                }}
            />
        );
    };

    return (
        <section className="impact-section">
            <h4 className="impact-heading">{heading}</h4>
            <div className="impact-body">
                <p>*All the children have their names and other identifying features hidden to comply with Child Protection Policy</p>
                
                {/* Bento Grid Layout */}
                <div className="impact-bento-grid">
                    {impactStories.slice(0, 6).map((story, index) => (
                        <div 
                            key={index}
                            className="impact-bento-item" 
                            onClick={() => story && setSelectedStory(story)}
                        >
                            {renderImage(story, index)}
                            <h6 className={`story-heading story-heading-${index + 1}`}>
                                {story?.name || "Untitled Story"}
                            </h6>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedStory && (
                <>
                    <div className="modal-overlay show" onClick={handleCloseModal}></div>
                    <div className="expanded-story-modal show">
                        <button className="close-btn" onClick={handleCloseModal}>
                            <h6>×</h6>
                        </button>
                        {selectedStory.image && (
                            <img 
                                src={`${process.env.PUBLIC_URL}/${selectedStory.image}`}
                                alt={selectedStory.name}
                                className="expanded-image-impact"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        )}
                        <div className="expanded-content">
                            <h4>{selectedStory.name}</h4>
                            <br />
                            <p className="year">
                                Volunteer: {selectedStory.volunteer}, {selectedStory.year}
                            </p>
                            <p className="subtitle">
                                {selectedStory.story?.split('\n').map((paragraph, i) => (
                                    <span key={i}>
                                        {paragraph}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default ImpactStories;