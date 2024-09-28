import React from "react";
import "../../assets/styles/home/homemusicesection.css"; // Create this CSS file for styles if needed
import feature1 from "../../assets/images/home/feature/feature_img_1.webp";
import feature2 from "../../assets/images/home/feature/feature_img_2.webp";
import event1 from "../../assets/images/home/feature/event1.webp";
import event2 from "../../assets/images/home/feature/event2.webp";
import event3 from "../../assets/images/home/feature/event3.webp";
import event4 from "../../assets/images/home/feature/event4.webp";
import event5 from "../../assets/images/home/feature/event5.webp";
import event6 from "../../assets/images/home/feature/event6.webp";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
const MusicSection = () => {
	const imagePaths = [event1, event2, event3, event4, event5, event6];
	const titles = [
		"Events",
		"MonstercatTV",
		"Shop",
		"Call of the Wild",
		"Silk Showcase",
		"Press",
	];
	const descriptions = [
		"  Find out where you can experience Monstercat artists performing live around the world",
		" Tune in to our weekly Twitch broadcast for livestreamed sets, artist residencies, original content and more",
		"Cop the latest looks from our apparel collections and dig through our vinyl offerings",
		" Dive into an unbound exploration of sound with Monstercat’s weekly radio show & podcast",
		" Enjoy Monstercat Silk’s weekly radio show & podcast, featuring the best in progressive house, trance, and more",
		" Catch up on breaking news, interviews, and Monstercat announcements in the media",
	];
	return (
		<div className="music-section">
			{/* Left-side title */}
			<h1 className="section-title">Use Our Music</h1>
			<hr className="divider" />

			{/* Row with two images and their titles, descriptions, and buttons */}
			<div className="features-row">
				{/* Feature 1 */}

				<div className="feature">
					<img
						src={feature1}
						alt="Unlock Gold Features"
						className="feature-image"
					/>
					<h2 className="feature-title">Unlock Gold Features</h2>
					<p className="feature-content">
						Monstercat Gold is an individual music licensing subscription that
						songs to use in their creative content.
					</p>
					<button className="feature-button">
						Learn More{"  "} <FaAngleRight />
					</button>
				</div>

				{/* Feature 2 */}
				<div className="feature">
					<img
						src={feature2}
						alt="Sync & Partnerships"
						className="feature-image"
					/>
					<h2 className="feature-title">Sync & Partnerships</h2>
					<p className="feature-content">
						Discover the unique partnerships and diverse audiences that have
						embraced the Monstercat brand.
					</p>
					<button className="feature-button">
						Learn More <FaAngleRight />
					</button>
				</div>
			</div>

			<hr className="divider" />
			<h1 className="section-title-event">get involved</h1>
			{/* Section with six images and hover effect */}
			<div className="image-grid">
				{imagePaths.map((imagePath, index) => (
					<div className="grid-item" key={index}>
						<img
							src={imagePath}
							alt={`Image ${index + 1}`}
							className="grid-image"
						/>
						{/* Use titles and descriptions based on index */}
						<h1 className="grid-title">{titles[index]}</h1>
						<p className="grid-content">{descriptions[index]}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MusicSection;
