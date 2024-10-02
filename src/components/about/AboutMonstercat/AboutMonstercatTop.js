import React, { useEffect, useRef } from "react";
import "../../../assets/styles/about/aboutmonstercat/aboutmonstercattop.css";

const MonstercatVideo = () => {
	const videoRef = useRef(null);

	// Automatically play the video when the component is mounted
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	}, []);

	return (
		<div className="video-container-monstercat">
			{/* Background Video */}
			<video
				ref={videoRef}
				className="background-video-monstercat"
				loop
				muted
				autoPlay
				playsInline
			>
				<source
					src="https://cdn.monstercat.com/about/AboutMC-Banner.webm"
					type="video/mp4"
				/>
				Your browser does not support HTML5 video.
			</video>
			<div className="video-overlay-monstercat"></div>
			{/* Text Content */}
			<div className="video-content-monstercat">
				<h1>About Monstercat</h1>
				<button className="play-video-btn-monstercat">Play Video</button>
				<p>
					Monstercat is one of electronic music’s most influential independent
					record labels. Founded in Waterloo, Canada in 2011, Monstercat has
					since expanded its global footprint with offices in Vancouver, Los
					Angeles, and Singapore. Backed by passionate employees, driven
					artists, and the dedication of fans worldwide, Monstercat proves that
					independent labels have the ability to reshape and reimagine the music
					industry landscape.
				</p>
			</div>
		</div>
	);
};

export default MonstercatVideo;
