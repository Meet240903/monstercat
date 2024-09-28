import React, { useState } from "react";
import "../../../assets/styles/music/insticnt/instincttop.css"; // Import CSS for styling
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaChevronDown,
} from "react-icons/fa";
import instinct_center_left from "../../../assets/images/music/instinct/instinct-center-left.webp"; // Import image
import instinct_center_right from "../../../assets/images/music/instinct/instinct-center-right.webp"; // Import image
const MonstercatInstinct = () => {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="monstercat-container-instinct">
			{/* Background Image Section */}
			<div className="monstercat-bg-instinct">
				<div className="monstercat-content-instinct">
					<h1>Monstercat </h1>
					<h2>Instinct</h2>
					<div className="monstercat-icons-instinct">
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
						<FaYoutube />
					</div>
					<p className="monstercat-description-instinct">
						ESTABLISHED IN 2018 AS A COMPLEMENTARY FORCE TO UNCAGED, MONSTERCAT
						INSTINCT DELIVERS THE WORLD’S BEST CONTEMPORARY MELODIC DANCE MUSIC.
						IN JUST A FEW YEARS - POWERED BY FEEL-GOOD RELEASES FROM
						FAN-FAVOURITES LIKE VICETONE, CONRO, VINDATA, AND SLUSHII - INSTINCT
						HAS CARVED OUT AN INIMITABLE NICHE IN THE CROSSOVER SPACE THROUGH AN
						EXPLORATION OF ART, CREATIVITY, AND BEAUTY.
					</p>
					<button className="watch-trailer-btn-instinct">Watch Trailer</button>
					<div
						className="fade-down-arrow-instinct"
						onClick={() => setShowMore(!showMore)}
					>
						<FaChevronDown />
					</div>
				</div>
			</div>

			{/* Content to Show/Hide */}
			<div className={`additional-content-instinct ${showMore ? "show" : ""}`}>
				<div className="additional-content-container-instinct">
					<div className="left-image">
						<img src={instinct_center_left} alt="Left Content-instinct" />
					</div>
					<div className="right-content-instinct">
						<h1>New Releases</h1>
						<div className="right-image-instinct">
							<img src={instinct_center_right} alt="Right Content" />
							<p>Divergence</p>
							<p>Jason Ross</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonstercatInstinct;
