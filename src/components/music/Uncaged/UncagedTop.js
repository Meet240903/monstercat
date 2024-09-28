import React, { useState } from "react";
import "../../../assets/styles/music/uncaged/uncagedtop.css"; // Import CSS for styling
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaChevronDown,
} from "react-icons/fa";
import instinct_center_left from "../../../assets/images/music/uncaged/uncaged-center-left.webp"; // Import image
import instinct_center_right from "../../../assets/images/music/uncaged/uncaged-center-right.webp"; // Import image
const MonstercatInstinct = () => {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="monstercat-container">
			{/* Background Image Section */}
			<div className="monstercat-bg">
				<div className="monstercat-content">
					<h1>Monstercat </h1>
					<h2>uncaged</h2>
					<div className="monstercat-icons">
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
						<FaYoutube />
					</div>
					<p className="monstercat-description">
						MONSTERCAT’S HEAVY-HITTING BRAND HAS PAVED THE WAY FOR BASS
						BEHEMOTHS LIKE MUZZ, SULLIVAN KING, AND KOVEN. FROM DUBSTEP TO DRUM
						& BASS, AND TRAP TO ELECTRO, UNCAGED HAS DELIVERED UNPARALLELED LIVE
						EVENTS, APPAREL, AND MUSIC TO THE MASSES. .
					</p>
					<button className="watch-trailer-btn">Watch Trailer</button>
					<div
						className="fade-down-arrow"
						onClick={() => setShowMore(!showMore)}
					>
						<FaChevronDown />
					</div>
				</div>
			</div>

			{/* Content to Show/Hide */}
			<div className={`additional-content ${showMore ? "show" : ""}`}>
				<div className="additional-content-container">
					<div className="left-image">
						<img src={instinct_center_left} alt="Left Content" />
					</div>
					<div className="right-content">
						<h1>New Releases</h1>
						<div className="right-image">
							<img src={instinct_center_right} alt="Right Content" />
							<p>AF1</p>
							<p>THIRST</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonstercatInstinct;
