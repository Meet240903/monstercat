import React, { useState, useEffect } from 'react';
import '../../assets/styles/newsPageSectionsCSS/newsPageFeaturedSection.css';
import sectionImg1 from '../../assets/images/news/featuredSectionImgs/sectionImg1.jpg';
import sectionImg2 from '../../assets/images/news/featuredSectionImgs/sectionImg2.jpg';
import sectionImg3 from '../../assets/images/news/featuredSectionImgs/sectionImg3.jpg';

const NewsPageFeaturedNewsSection = () => {
    // State to track the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slide data (you can dynamically fetch it or use this static example)
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Monstercat Insider: New features for Monstercat Gold",
            date: "May 20, 2022",
            content: "Here are some of the latest updates that have been made to the Monstercat Player, Monstercat Gold, and beyond!",
        },
        {
            sectionImg: sectionImg2,
            title: "Monstercat Gold & Content Creator Licenses",
            date: "June 11, 2020",
            content: "Let’s have a chat about the use of music in creative content! What It Means to Empower Content Creators Hey Monstercat fam! You may have heard that a number of content creators have suddenly been hit with takedowns under DMCA law.",
        },
        {
            sectionImg: sectionImg3,
            title: "The Background of Bishu & 'BXU'",
            date: "April 7, 2022",
            content: "Bishu has been a familiar face at Monstercat for years. With a great sense of humour and a charming personality, his music reflects these traits with each release being noticeably different from one another while remaining incredibly catchy.",
        },
    ];

    // Function to go to the next slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sectionData.length);
        }, 3000); // Change slide every 3 seconds

        // Cleanup function to clear the interval on unmount
        return () => clearInterval(interval);
    }, [sectionData.length]);

    return (
        <div className="news-page-featured-news-section-container">
            {/* Section Title */}
            <div className="news-page-featured-news-section-title">
                <h1>featured <br /><span>news</span></h1>
            </div>

            {/* Slider */}
            <div className="news-page-featured-news-section-slider">
                <div className="news-page-featured-news-section-slider-content">
                    {/* Slide Image and Content */}
                    <div className="news-page-featured-news-section-slide" style={{ backgroundImage: `url(${sectionData[currentIndex].sectionImg})` }}>
                        <div className="news-page-featured-news-section-slide-text">
                            <h1>{sectionData[currentIndex].title}</h1>
                            <p>{sectionData[currentIndex].date}</p>
                        </div>
                    </div>
                    <div className="news-page-featured-news-section-slide-body">
                        <p>{sectionData[currentIndex].content}</p>
                        <button>read more</button>
                    </div>
                </div>

                {/* Vertical Dots */}
                <div className="news-page-featured-news-section-vertical-dots">
                    {sectionData.map((_, index) => (
                        <span
                            key={index}
                            className={`news-page-featured-news-section-dot ${index === currentIndex ? 'news-page-featured-news-section-active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPageFeaturedNewsSection;
