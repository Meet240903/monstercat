import React from "react";
import "../../../assets/styles/music/uncaged/uncagedemotional.css";
import vibrant from "../../../assets/images/music/uncaged/uncagedimage.webp";
import { FaAngleRight } from "react-icons/fa";
const vibrantSection = () => {
	return (
		<div className="content-wrapper-emotional">
			{/* Centered content at the top */}
			<div className="center-content-emotional">
				<h2>ENERGETIC EXPLOSIVE HARD-HITTING</h2>
			</div>

			{/* 50/50 split div */}
			<div className="split-container-emotional">
				<div className="split-left-emotional">
					<img
						src={vibrant} // Replace with your image URL
						alt="Left Side Image"
						className="responsive-image-emotional"
					/>
				</div>
				<div className="split-right-emotional">
					<h1>Monstercat Uncaged</h1>
					<p>
						Turn the volume way up and check out Uncaged for the latest
						hard-hitting releases
					</p>
					<button className="right-button-emotional">
						Listen on Youtube
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default vibrantSection;
