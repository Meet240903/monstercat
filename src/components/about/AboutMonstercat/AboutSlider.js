import React, { useState, useEffect } from "react";
import "../../../assets/styles/about/aboutmonstercat/aboutslider.css"; // Import the CSS for this component.
import sliderImage1 from "../../../assets/images/about/aboutmonstercat/sliderimg1.webp";
import sliderImage2 from "../../../assets/images/about/aboutmonstercat/sliderimg2.webp";
import sliderImage3 from "../../../assets/images/about/aboutmonstercat/sliderimg3.webp";
import sliderImage4 from "../../../assets/images/about/aboutmonstercat/sliderimg4.webp";
import logo1 from "../../../assets/images/about/aboutmonstercat/logo1.png";
import logo2 from "../../../assets/images/about/aboutmonstercat/logo2.png";
import logo3 from "../../../assets/images//about/aboutmonstercat/logo3.webp";
import logo4 from "../../../assets/images/about/aboutmonstercat/img4.png";
import gridImage1 from "../../../assets/images/about/aboutmonstercat/diversity.webp";
import gridImage2 from "../../../assets/images/about/aboutmonstercat/environmental.webp";
import gridImage3 from "../../../assets/images//about/aboutmonstercat/ethics.webp";
import gridImage4 from "../../../assets/images/about/aboutmonstercat/about.jfif";
import gridImage5 from "../../../assets/images/about/aboutmonstercat/contact.webp";

const MyComponent = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const sliderImages = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];
	const logos = [logo1, logo2, logo3, logo4];
	const gridImages = [
		gridImage1,
		gridImage2,
		gridImage3,
		gridImage4,
		gridImage5,
	];
	const buttonNames = [
		"Diversity",
		"Environmental",
		"Ethics",
		"About Us",
		"Contact Us",
	];

	// Automatically change slides every 1 second
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
		}, 2000);

		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, [sliderImages.length]);

	return (
		<div className="about-main-container">
			{/* First Section: Image Slider */}
			<div className="about-slider-section">
				{/* Image Display */}
				<div className="about-slider-image-container">
					<img
						src={sliderImages[currentSlide]}
						alt={`Slide ${currentSlide + 1}`}
						className="about-slider-image"
					/>
				</div>

				{/* Progress Bar (Navigation) */}
				<div className="about-progress-bar">
					{sliderImages.map((_, index) => (
						<span
							key={index}
							className={`about-progress-step ${
								currentSlide === index ? "active" : ""
							}`}
							onClick={() => setCurrentSlide(index)}
						></span>
					))}
				</div>
			</div>

			{/* Second Section: Logos and Image Grid */}
			<div className="about-grid-section">
				{/* 2x2 Logo Grid */}
				<div className="about-logo-grid">
					{logos.map((logo, index) => (
						<div key={index} className="about-logo-item">
							<img src={logo} alt={`Logo ${index + 1}`} />
						</div>
					))}
				</div>

				{/* Single Row with 5 Columns */}
				<div className="about-image-grid">
					{gridImages.map((image, index) => (
						<div key={index} className="about-grid-item">
							<img src={image} alt={`Grid ${index + 1}`} />
							<button className="about-image-button">
								{buttonNames[index]}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyComponent;
