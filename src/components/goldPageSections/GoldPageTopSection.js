import React, { useState, useEffect } from 'react'
import '../../assets/styles/goldPageSectionCSS/goldPageTopSection.css'
import sectionImg1 from '../../assets/images/golds/sectionImg1.webp'
import sectionImg2 from '../../assets/images/golds/sectionImg2.svg'
import sectionBgImg1 from '../../assets/images/golds/sectionBgImg1.webp'
import sectionBgImg2 from '../../assets/images/golds/sectionBgImg2.webp'
import sectionBgImg3 from '../../assets/images/golds/sectionBgImg3.webp'
import { FaArrowAltCircleUp, FaCamera, FaCopyright, FaMusic } from 'react-icons/fa'

const GoldPageTopSection = () => {
    const bgImages = [sectionBgImg1, sectionBgImg2, sectionBgImg3];
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    // Change background image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [bgImages.length]);

    return (
        <div
            className='gold-page-top-section-container'
            style={{
                backgroundImage: `url(${bgImages[currentBgIndex]})`,
            }}
        >
            <div className='gold-page-top-section-title'>
                <img src={sectionImg2} alt='section-title-svg' />
                <h1>Monstercat <span>Gold</span></h1>
            </div>
            <div className='gold-page-top-section-content'>
                <div className='gold-page-top-section-left-content'>
                    <div className='gold-page-top-section-left-content-title'>
                        <h4>Claim free music for creators</h4>
                    </div>
                    <div className='gold-page-top-section-left-inner-content'>
                        <FaCopyright className='gold-page-top-section-left-inner-content-icon' />
                        <p>Monstercat Gold is a premium service for individual content creators to stream or download thousands of claim free songs for livestream and video content.</p>
                    </div>
                    <div className='gold-page-top-section-left-inner-content'>
                        <FaCamera className='gold-page-top-section-left-inner-content-icon' />
                        <p>Connect your YouTube, Twitch, and Twitter channels to Gold and protect your content from copyright strikes.</p>
                    </div>
                    <div className='gold-page-top-section-left-inner-content'>
                        <FaMusic className='gold-page-top-section-left-inner-content-icon' />
                        <p>Set the perfect mood with genres including Bass, Dance, Electronic, Chill, Melodic, Pop, and more.</p>
                    </div>
                    <div className='gold-page-top-section-left-inner-content'>
                        <FaArrowAltCircleUp className='gold-page-top-section-left-inner-content-icon' />
                        <p>Boost the quality of your streams using our progressive web app, Twitch “say-song” feature, and streaming widget.</p>
                    </div>
                </div>
                <div className='gold-page-top-section-right-content'>
                    <div className='gold-page-top-section-right-content-title'>
                        <h4>LEARN ALL ABOUT GOLD</h4>
                    </div>
                    <img src={sectionImg1} alt='section-img' />
                </div>
            </div>
            <div className='gold-page-top-section-bottom-content'>
                <button>get gold</button>
                <h1>$7.49 USD <span>/ mo</span></h1>
                <h1>$75 USD <span>/ yr</span></h1>
            </div>
            <div className='gold-page-top-section-bottom-content1'>
                <p>Monstercat Gold is for individual creators. If your business or team wants music, you need a Commercial License.</p>
            </div>
        </div>
    );
}

export default GoldPageTopSection;
