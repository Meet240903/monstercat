import React from "react";
import "../../assets/styles/home/homebrandsection.css"; // Create a separate CSS file for the component
import video1 from "../../assets/images/home/brands/brand_video_1.webm";
import video2 from "../../assets/images/home/brands/brand_video_2.webm";
import video3 from "../../assets/images/home/brands/brand_video_3.webm";
import latest1 from "../../assets/images/home/latest_release/latest_release_1.webp";
import latest2 from "../../assets/images/home/latest_release/latest_release_2.jfif";
import latest3 from "../../assets/images/home/latest_release/latest_release_3.jfif";
import playlist1 from "../../assets/images/home/playlist/playlist_1.webp";
import playlist2 from "../../assets/images/home/playlist/playlist_2.webp";
import playlist3 from "../../assets/images/home/playlist/playlist_3.webp";
import playlist4 from "../../assets/images/home/playlist/playlist_4.webp";
import video_inside_1 from "../../assets/images/home/brands/latest_img_1.webp";
import video_inside_2 from "../../assets/images/home/brands/latest_img_3.webp";
import video_inside_3 from "../../assets/images/home/brands/latest_img_3 (3).webp";
import { FaAngleRight } from "react-icons/fa";
const BrandsSection = () => {
	const handleMouseOver = (e) => {
		// Ensure the video is not already playing
		if (e.target.paused) {
			e.target.play().catch((error) => {
				console.error("Failed to play the video:", error);
			});
		}
	};

	const handleMouseOut = (e) => {
		// Ensure the video is not already paused
		if (!e.target.paused) {
			e.target.pause();
		}
	};

	return (
		<div className="brands-container">
			{/* Leading the movement section */}
			<div className="leading-movement">
				<h1>Leading the movement towards artist sustainability</h1>
				<p>
					At Monstercat, we strive to create artist sustainability through novel
					partnerships, career flexibility, and a global community.
				</p>
				<button className="learn-more-btn">
					Learn More{"   "}
					<FaAngleRight className="brand-right-arrow" />
				</button>
			</div>

			{/* Our Brands Section */}
			<div className="our-brands-section">
				<h1 className="section-title-brand">Our Brands</h1>
				<div className="video-row">
					<div className="video-wrapper">
						<a href="#">
							<video
								className="brand-video"
								onMouseOver={handleMouseOver}
								onMouseOut={handleMouseOut}
								muted
								loop
							>
								<source src={video1} type="video/mp4" />
							</video>{" "}
							<img src={video_inside_1} className="video_inside_img" />
						</a>
					</div>{" "}
					<div className="video-wrapper">
						<a href="#">
							<video
								className="brand-video"
								onMouseOver={handleMouseOver}
								onMouseOut={handleMouseOut}
								muted
								loop
							>
								<source src={video2} type="video/mp4" />
							</video>{" "}
							<img src={video_inside_3} className="video_inside_img" />
						</a>
					</div>{" "}
					<div className="video-wrapper">
						<a href="#">
							<video
								className="brand-video"
								onMouseOver={handleMouseOver}
								onMouseOut={handleMouseOut}
								muted
								loop
							>
								<source src={video3} type="video/mp4" />
							</video>
							<img src={video_inside_2} className="video_inside_img" />
						</a>
					</div>
				</div>
			</div>

			{/* Latest Releases, Our Artists, and Featured News Sections */}
			<div className="multi-sections">
				<div className="section">
					<h1 className="section-title">Latest Releases</h1>
					<div className="image-row">
						<div className="image-box">
							{/* Main Image */}
							<img src={latest1} alt="Release 1" className="blur-img" />
							{/* Overlay Container */}
							<div className="image-overlay">
								<img src={latest1} className="overlay-img" alt="Overlay" />
								<p className="overlay-text">POWER</p>
							</div>
						</div>
						<div className="image-box">
							<img src={latest2} alt="Release 2" className="blur-img" />
							<div className="image-overlay">
								<img src={latest2} className="overlay-img" alt="Overlay" />
								<p className="overlay-text">Black Sheep</p>
							</div>
						</div>
						<div className="image-box">
							<img src={latest3} alt="Release 3" className="blur-img" />
							<div className="image-overlay">
								<img src={latest3} className="overlay-img" alt="Overlay" />
								<p className="overlay-text">Need Some Space Go Stupid</p>
							</div>
						</div>
					</div>
				</div>

				<div className="section_playlist">
					<h1 className="section-title_playlist">Our Playlists</h1>
					<div className="image-row_playlist">
						<div className="image-box_playlist">
							<img src={playlist1} alt="Artist 1" />
						</div>
						<div className="image-box_playlist">
							<img src={playlist2} alt="Artist 2" />
						</div>
						<div className="image-box_playlist">
							<img src={playlist3} alt="Artist 3" />
						</div>
						<div className="image-box_playlist">
							<img src={playlist4} alt="Artist 3" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrandsSection;
