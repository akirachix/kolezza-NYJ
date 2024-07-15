import React, { useState } from "react";
import './index.css';
import queen from '../images/queen.jpeg';
import princilla from '../images/princilla.jpeg';
import mary from '../images/mary.jpeg';
import christine from '../images/christine.jpeg';
import glory from '../images/glory.jpeg'
import auma from '../images/auma.png'
function Portfolio() {
    const portfolios = [
        { name: "Queen Bella", image: queen },
        { name: "Mary Njiru", image: mary },
        { name: "Christine Akinyi", image: christine },
        { name: "Princilla Mikisa", image: princilla },
        { name: "Glory Joy", image: glory },
        { name: "Agnes Auma", image: auma }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [enlargedImage, setEnlargedImage] = useState(null);

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % portfolios.length);
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + portfolios.length) % portfolios.length);
    };

    const enlargeImage = (image) => {
        setEnlargedImage(image);
    };

    const closeEnlargedView = () => {
        setEnlargedImage(null);
    };

    return (
        <div className="portfolio-container">
            <h1>
                <span className="p">P</span>
                <span className="o1">o</span>
                <span className="r">r</span>
                <span className="t">t</span>
                <span className="f">f</span>
                <span className="o2">o</span>
                <span className="l">l</span>
                <span className="i">i</span>
                <span className="o3">o</span>
            </h1>
            <div className="portfolio-slider">
                <button className="nav-button prev" onClick={prevSlide}>&lt;</button>
                <div className="portfolio-items" style={{ transform: `translateX(-${startIndex * 33.333}%)` }}>
                    {portfolios.map((portfolio, index) => (
                        <div key={index} className="portfolio-item">
                            <img 
                                src={portfolio.image} 
                                alt={portfolio.name} 
                                onClick={() => enlargeImage(portfolio.image)}
                            />
                            <p>{portfolio.name}</p>
                        </div>
                    ))}
                </div>
                <button className="nav-button next" onClick={nextSlide}>&gt;</button>
            </div>
            {enlargedImage && (
                <div className="enlarged-view" onClick={closeEnlargedView}>
                    <img src={enlargedImage} alt="Enlarged view" />
                    <button className="close-button" onClick={closeEnlargedView}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Portfolio;