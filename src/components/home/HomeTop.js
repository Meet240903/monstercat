import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Icons for arrows
import "../../assets/styles/home/hometop.css"; // External CSS for styling
import slider1 from "../../assets/images/home/home_slider_1.webp";
import slider2 from "../../assets/images/home/home_slider_2.webp";
import slider3 from "../../assets/images/home/home_slider_3.webp";
import slider4 from "../../assets/images/home/home_slider_4.jfif"; // Import image for slider
const slidesData = [
	{
		title: "AF1",
		subtitle: "THIRST",
		button: "view release",
		button2: "listen on player",
		image: slider1, // Add your image URL here
		contentImage: slider1, // Add your smaller image URL here
	},
	{
		title: "Sealine",
		subtitle: "A.M.R",
		button: "view release",
		button2: "listen on player",
		image: slider2, // Add your image URL here
		contentImage: slider2, // Add your smaller image URL here
	},
	{
		title: "Divergence",
		subtitle: "Jason Ross",
		button: "view release",
		button2: "listen on player",
		image: slider3, // Add your image URL here
		contentImage: slider3, // Add your smaller image URL here
	},
];

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// Auto-rotate the slides every 4 seconds
			nextSlide();
		}, 2000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
	};

	return (
		<div className="slider-container">
			{slidesData.map((slide, index) => (
				<div
					key={index}
					className={`slide ${index === currentSlide ? "active" : ""}`}
				>
					<img src={slide.image} alt={slide.title} className="bg-image" />

					<div className="content-image-wrapper">
						<img
							src={slide.contentImage}
							alt="content"
							className="content-image"
						/>
						<div className="content-image-section">
							{" "}
							<h1>{slide.title}</h1>
							<h2>{slide.subtitle}</h2>
							<button className="slider-btn">{slide.button}</button>{" "}
							<button>{slide.button2}</button>
						</div>
					</div>
				</div>
			))}

			{/* Left and Right Arrows */}
			<button className="arrow left" onClick={prevSlide}>
				<FaAngleLeft />
			</button>
			<button className="arrow right" onClick={nextSlide}>
				<FaAngleRight />
			</button>
		</div>
	);
};

export default Slider;
