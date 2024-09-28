import React from "react";
import "../../../assets/styles/music/insticnt/vibrantemotional.css";
import vibrant from "../../../assets/images/music/instinct/vibrant.webp";
import { FaAngleRight } from "react-icons/fa";
const vibrantSection = () => {
	return (
		<div className="content-wrapper-vibrant">
			{/* Centered content at the top */}
			<div className="center-content-vibrant">
				<h2>Vibrant Emotional Melodic</h2>
			</div>

			{/* 50/50 split div */}
			<div className="split-container-vibrant">
				<div className="split-left-vibrant">
					<img
						src={vibrant} // Replace with your image URL
						alt="Left Side Image"
						className="responsive-image-vibrant"
					/>
				</div>
				<div className="split-right-vibrant">
					<h1>Monstercat Instinct</h1>
					<p>
						Monstercat Instinct represents an important development in the
						tastes and interests of the Monstercat family. As we’ve grown, new
						music, events, and clothing brands inspire use to strive for further
						innovation. Through an exploration of art, creativity, and beauty.
						Instinct will develop the unique stories of our artists worldwide.
					</p>
					<button className="right-button-vibrant">
						Listen on Youtube
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default vibrantSection;
