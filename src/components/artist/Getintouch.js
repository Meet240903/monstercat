import React from "react";
import "../../assets/styles/artist/getintouch.css"; // Import the CSS file
import sampleImage from "../../assets/images/artists/artistbackground.webp"; // Replace with the path to your image

const MonstercatArtist = () => {
	return (
		<div className="artist-container">
			<div className="artist-content">
				<div className="artist-left">
					<h1>Want to be an artist on Monstercat?</h1>
					<p>Get in touch with us!</p>
					<button className="learn-more-btn-vision">Learn More</button>
				</div>
				<div className="artist-right">
					<img src={sampleImage} alt="Artist" />
				</div>
			</div>
		</div>
	);
};

export default MonstercatArtist;
