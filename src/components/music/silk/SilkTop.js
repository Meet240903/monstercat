import React, { useState } from "react";
import "../../../assets/styles/music/silk/silktop.css"; // Import CSS for styling
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaChevronDown,
} from "react-icons/fa";
import instinct_center_left from "../../../assets/images/music/silk/silk-center-left.webp"; // Import image
import instinct_center_right from "../../../assets/images/music/silk/silk-center-right.webp"; // Import image
const MonstercatInstinct = () => {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="monstercat-container-silk">
			{/* Background Image Section */}
			<div className="monstercat-bg-silk">
				<div className="monstercat-content-silk">
					<h1>Monstercat </h1>
					<h2>silk</h2>
					<div className="monstercat-icons-silk">
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
						<FaYoutube />
					</div>
					<p className="monstercat-description-silk">
						MONSTERCAT SILK IS KNOWN FOR ITS EMOTIVE AND INTROSPECTIVE QUALITIES
						THAT HAVE THE ABILITY TO TURN ‘EMOTIONS INTO SOUND.’ INSPIRED BY THE
						THERAPEUTIC POWER THAT MUSIC HAS ON OUR LIVES, MONSTERCAT SILK’S
						STRONG ETHOS AND PASSIONATE GLOBAL COMMUNITY HAS EMPOWERED THE LABEL
						TO BECOME LEADING TASTEMAKERS OF MELODIC ELECTRONIC MUSIC.
						REPRESENTING A DIVERSE FAMILY OF ARTISTS AND CONTRIBUTORS,
						MONSTERCAT SILK IS THE PREMIER PROVIDER OF POIGNANT TRACKS ACROSS
						PROGRESSIVE & DEEP HOUSE, CHILLOUT, TRANCE, AMBIENT, AND MORE.
					</p>
					<button className="watch-trailer-btn-silk">Watch Trailer</button>
					<div
						className="fade-down-arrow-silk"
						onClick={() => setShowMore(!showMore)}
					>
						<FaChevronDown />
					</div>
				</div>
			</div>

			{/* Content to Show/Hide */}
			<div className={`additional-content-silk ${showMore ? "show" : ""}`}>
				<div className="additional-content-container-silk">
					<div className="left-image-silk">
						<img src={instinct_center_left} alt="Left Content" />
					</div>
					<div className="right-content-silk">
						<h1>New Releases</h1>
						<div className="right-image-silk">
							<img src={instinct_center_right} alt="Right Content" />
							<p>Need Some Space</p>
							<p> birø & ALLKNIGHT</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonstercatInstinct;
