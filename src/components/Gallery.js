import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "../styles/Gallery.css";
import images from "../data/gallery.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-container">
      <h4 className="gallery-heading">Our Journey, so far!</h4>

      {/* Carousel with infinite scrolling */}
      <div className="gallery-carousel">
        <Marquee speed={100} pauseOnClick={!selectedImage} play={!selectedImage} gradient={false} className="gallery-carousel-track">
          {[...images, ...images].map((img, index) => (
            <div key={index} className="gallery-carousel-item" onClick={() => setSelectedImage(img)}>
              {index % 2 === 0 ? (
                <>
                  <img src={img.src} alt={img.caption} className="gallery-carousel-image" />
                  <div className="gallery-timeline-line"></div>
                  <p className="gallery-carousel-caption subtitle">{img.caption}</p>
                  <p className="gallery-carousel-date">{img.date}</p>
                </>
              ) : (
                <>
                  <p className="gallery-carousel-caption subtitle">{img.caption}</p>
                  <p className="gallery-carousel-date">{img.date}</p>
                  <div className="gallery-timeline-line"></div>
                  <img src={img.src} alt={img.caption} className="gallery-carousel-image" />
                </>
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <>
          <div className="gallery-modal-overlay" onClick={() => setSelectedImage(null)}></div>
          <div className="gallery-modal-content">
            <button className="gallery-close-btn" onClick={() => setSelectedImage(null)}><h6>×</h6></button>
            <img src={selectedImage.src} alt="Enlarged View" className="gallery-modal-image" />
            <h6 className="gallery-modal-caption">{selectedImage.caption}</h6>
            <p className="gallery-modal-date subtitle">{selectedImage.date}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Gallery;
