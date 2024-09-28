import React from "react";
import "../../../assets/styles/music/silk/silkemotional.css";
import vibrant from "../../../assets/images/music/silk/center.jpg";
import release from "../../../assets/images/music/silk/newrelease.webp";
import { FaAngleRight } from "react-icons/fa";
const vibrantSection = () => {
	return (
		<div className="content-wrapper-silk">
			{/* Centered content at the top */}
			<div className="center-content-silk">
				<h2>Monstercat Silk Showcase</h2>
			</div>
			{/* 50/50 split div */}
			<div className="split-container-silk">
				<div className="split-left-silk">
					<img
						src={vibrant} // Replace with your image URL
						alt="Left Side Image"
						className="responsive-image-silk"
					/>
				</div>
				<div className="split-right-silk">
					<h1>Listen on spotify</h1>
					<p>
						Monstercat Silk Showcase is our weekly radio show & podcast,
						featuring emotive and intelligent house, progressive, trance, &
						chillout. Label Director Jacob Henry and residents Tom Fall, Terry
						Da Libra, A.M.R, and Sundriver co-host the show.
					</p>
					<button className="right-button-silk">
						Listen on Youtube
						<FaAngleRight />
					</button>
				</div>
			</div>{" "}
			<div className="split-container-silk-right">
				<div className="split-right-silk">
					<h1>LISTEN NOW</h1>
					<p>
						Our two curated 24⁄7 live streams provide a unique, seamless
						listening experience, ranging from chill and relaxing to uplifting
						and euphoric sounds.
					</p>
					<button className="right-button-silk">
						Listen on Youtube
						<FaAngleRight />
					</button>
				</div>
				<div className="split-left-silk">
					<img
						src={release} // Replace with your image URL
						alt="Left Side Image"
						className="responsive-image-silk"
					/>
				</div>
			</div>
		</div>
	);
};

export default vibrantSection;
