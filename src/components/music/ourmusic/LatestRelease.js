import React, { useState } from "react";
import "../../../assets/styles/music/ourmusic/latestrelease.css";
import releaseImage1 from "../../../assets/images/music/ourmusic/feature-latest-release/img1.webp";
import releaseImage2 from "../../../assets/images/music/ourmusic/feature-latest-release/img2.webp";
import releaseImage3 from "../../../assets/images/music/ourmusic/feature-latest-release/img3.webp";
import releaseImage4 from "../../../assets/images/music/ourmusic/feature-latest-release/img4.webp";
import releaseImage5 from "../../../assets/images/music/ourmusic/feature-latest-release/img5.webp";
import releaseImage6 from "../../../assets/images/music/ourmusic/feature-latest-release/img6.webp";
import releaseImage7 from "../../../assets/images/music/ourmusic/feature-latest-release/img7.webp";
import releaseImage8 from "../../../assets/images/music/ourmusic/feature-latest-release/img8.webp";
import releaseImage9 from "../../../assets/images/music/ourmusic/feature-latest-release/img9.webp";
import releaseImage10 from "../../../assets/images/music/ourmusic/feature-latest-release/img10.webp";
import releaseImage11 from "../../../assets/images/music/ourmusic/feature-latest-release/img11.webp";
import releaseImage12 from "../../../assets/images/music/ourmusic/feature-latest-release/img12.webp";
import releaseImage13 from "../../../assets/images/music/ourmusic/feature-latest-release/img13.webp";
import releaseImage14 from "../../../assets/images/music/ourmusic/feature-latest-release/img14.webp";
import releaseImage15 from "../../../assets/images/music/ourmusic/feature-latest-release/img15.webp";
import releaseImage16 from "../../../assets/images/music/ourmusic/feature-latest-release/img16.webp";

import releaseImage18 from "../../../assets/images/music/ourmusic/feature-latest-release/img18.webp";
import releaseImage19 from "../../../assets/images/music/ourmusic/feature-latest-release/img19.webp";
import releaseImage20 from "../../../assets/images/music/ourmusic/feature-latest-release/img20.webp";
import releaseImage21 from "../../../assets/images/music/ourmusic/feature-latest-release/img21.webp";
import releaseImage22 from "../../../assets/images/music/ourmusic/feature-latest-release/img22.webp";
import releaseImage23 from "../../../assets/images/music/ourmusic/feature-latest-release/img23.webp";
import releaseImage24 from "../../../assets/images/music/ourmusic/feature-latest-release/img24.webp";
import releaseImage25 from "../../../assets/images/music/ourmusic/feature-latest-release/img25.webp";
import releaseImage26 from "../../../assets/images/music/ourmusic/feature-latest-release/img26.webp";
import releaseImage27 from "../../../assets/images/music/ourmusic/feature-latest-release/img27.webp";
import releaseImage28 from "../../../assets/images/music/ourmusic/feature-latest-release/img28.webp";
import releaseImage29 from "../../../assets/images/music/ourmusic/feature-latest-release/img29.webp";
import releaseImage30 from "../../../assets/images/music/ourmusic/feature-latest-release/img30.webp";
import releaseImage31 from "../../../assets/images/music/ourmusic/feature-latest-release/img31.webp";
import releaseImage32 from "../../../assets/images/music/ourmusic/feature-latest-release/img32.webp";
import releaseImage33 from "../../../assets/images/music/ourmusic/feature-latest-release/img33.webp";
import releaseImage34 from "../../../assets/images/music/ourmusic/feature-latest-release/img34.webp";
import releaseImage35 from "../../../assets/images/music/ourmusic/feature-latest-release/img35.webp";
import releaseImage36 from "../../../assets/images/music/ourmusic/feature-latest-release/img36.webp";
const LatestReleases = () => {
	// Array to hold the image and content data for all pages
	const itemsPerPage = 12;
	const totalItems = 36; // Assuming 36 items to display across 3 pages

	// Create an array with the imported images and their descriptions
	const images = [
		{ src: releaseImage1, content: "Koven & Steve Aoki" },
		{ src: releaseImage2, content: "Just Kiddin & Ayda Rose" },
		{ src: releaseImage3, content: "THIRST" },
		{ src: releaseImage4, content: "A.M.R" },
		{ src: releaseImage5, content: "WHIPPED CREAM & Fourfive" },
		{ src: releaseImage6, content: "Nitro Fun" },
		{ src: releaseImage7, content: "Jason Ross" },
		{ src: releaseImage8, content: "ATLiens feat. GG Magree" },
		{ src: releaseImage9, content: "birø & ALLKNIGHT" },
		{ src: releaseImage10, content: "Whales, Soltan & Nat James" },
		{ src: releaseImage11, content: "Rezz & Virtual Riot feat. One True God" },
		{ src: releaseImage12, content: "Bishu" },
		{ src: releaseImage13, content: "Fairlane, No Etiquette & Tima Dee" },
		{ src: releaseImage14, content: "Various Artists" },
		{ src: releaseImage15, content: "Skybreak & SpaceYeti" },

		{
			src: releaseImage16,
			content: "Sullivan King, Kompany & DIESEL feat. Shaquille O'Neal",
		},
		{ src: releaseImage18, content: "Alan Walker, Joe Jonas & Julia Michaels" },
		{ src: releaseImage19, content: "RAIZHELL" },
		{ src: releaseImage20, content: "Flexible Fire & Dias Ridge" },
		{ src: releaseImage21, content: "More Plastic" },
		{ src: releaseImage22, content: "SABAI & Kermode" },
		{ src: releaseImage23, content: "Punctual & Lewis Thompson" },
		{ src: releaseImage24, content: "VØJ & Asketa" },
		{ src: releaseImage25, content: "Sound Quelle" },
		{ src: releaseImage26, content: "SampliFire" },
		{ src: releaseImage27, content: "Codd Dubz" },
		{ src: releaseImage28, content: "yetep & Marlhy" },
		{ src: releaseImage29, content: "WHIPPED CREAM & Nostalgix" },
		{ src: releaseImage30, content: "ORACLE" },
		{ src: releaseImage31, content: "AC Slater & Curbi feat. No/Me" },
		{ src: releaseImage32, content: "Vikkstar, RetroVision & DYSON" },
		{ src: releaseImage33, content: "Jason Ross & Fairlane" },
		{ src: releaseImage34, content: "CHYL & Skybreak" },
		{
			src: releaseImage35,
			content: "Shingo Nakamura x Misc.Inc x Oliver River",
		},
		{ src: releaseImage36, content: "hayve & Laminar feat. PVC" },
		{ src: releaseImage23, content: "Arcando feat. Felix Samuel" },
	];

	// State to handle the current page
	const [currentPage, setCurrentPage] = useState(1);

	// Function to handle page changes
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	// Calculate items to display based on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const displayedItems = images.slice(startIndex, startIndex + itemsPerPage);

	return (
		<div className="latest-releases-container">
			<h1>Latest Releases</h1>
			<p className="explore-text">Explore the latest in this content</p>
			<div className="latest-releases-grid">
				{displayedItems.map((item, index) => (
					<div className="release-item" key={startIndex + index}>
						<img src={item.src} alt={`Release ${startIndex + index + 1}`} />
						<p>{item.content}</p>
					</div>
				))}
			</div>
			<div className="pagination">
				{Array.from(
					{ length: Math.ceil(totalItems / itemsPerPage) },
					(_, index) => (
						<button
							key={index + 1}
							className={`pagination-button ${
								index + 1 === currentPage ? "active" : ""
							}`}
							onClick={() => handlePageChange(index + 1)}
						>
							{index + 1}
						</button>
					)
				)}
			</div>
		</div>
	);
};

export default LatestReleases;
