import React from "react";
import "../../../assets/styles/about/aboutmonstercat/abouthowitbegin.css";
import howitbeginimg from "../../../assets/images/about/aboutmonstercat/howitbegin.webp";

const HowItBegin = () => {
	return (
		<div className="about-howitbegin-container">
			{/* First Main Div: Image and Content */}
			<div className="about-howitbegin-row">
				{/* Left side image */}
				<div className="about-howitbegin-left">
					<img
						src={howitbeginimg}
						alt="How it began"
						className="about-howitbegin-image"
					/>
				</div>

				{/* Right side text content */}
				<div className="about-howitbegin-right">
					<h1>HOW IT BEGAN</h1>
					<p>
						In 2011, co-founders Mike Darlington and Ari Paunonen met at the
						University of Waterloo, connecting over their shared love of music
						and entrepreneurial spirit. Noticing the steady rise of video
						platforms like YouTube, as well as the booming electronic music
						scene at the time, Mike and Ari set out to launch a boundary-pushing
						digital record label that would deliver high-quality, accessible
						electronic music. With community at the core, they built a
						tight-knit family of passionate artists, global music fans, avid
						gamers, and content creators, that came to be known as Monstercat.
					</p>
				</div>
			</div>

			{/* Second Main Div: Company Values Section */}
			<div className="about-company-values">
				<h2>Company Values</h2>
				<div className="about-values-grid">
					<div className="about-value">
						<h1>Community</h1>
						<p>
							Community is at the heart of everything we do, nurtured by an
							inclusive culture of collaboration, diversity, positivity, and
							inspiring music.
						</p>
					</div>
					<div className="about-value">
						<h1>Curiosity</h1>
						<p>
							In order to grow we always ask questions, remain open to fresh
							perspectives, and challenge ourselves to think differently.
						</p>
					</div>
					<div className="about-value">
						<h1>Integrity</h1>
						<p>
							We hold ourselves accountable and follow through on our word, with
							honest and respectful communication.
						</p>
					</div>
					<div className="about-value">
						<h1>Tenacity</h1>
						<p>
							We don't fear failure. Anything is possible; if we can conceive
							it, we can achieve it.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItBegin;
