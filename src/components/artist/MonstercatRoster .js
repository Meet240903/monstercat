import React, { useState } from "react";
import "../../assets/styles/artist/monstercatroster.css";

// Manually importing 70 images
import img1 from "../../assets/images/artists/artistcenter/img1.jfif";
import img2 from "../../assets/images/artists/artistcenter/img2.jfif";
import img3 from "../../assets/images/artists/artistcenter/img3.jfif";
import img4 from "../../assets/images/artists/artistcenter/img4.jfif";
import img5 from "../../assets/images//artists/artistcenter/img5.jfif";
import img6 from "../../assets/images/artists/artistcenter/img6.jfif";
import img7 from "../../assets/images/artists/artistcenter/img7.jfif";
import img8 from "../../assets/images//artists/artistcenter/img8.jfif";
import img9 from "../../assets/images/artists/artistcenter/img9.jfif";
import img10 from "../../assets/images/artists/artistcenter/img10.jfif";
import img11 from "../../assets/images/artists/artistcenter/img11.jfif";
import img12 from "../../assets/images/artists/artistcenter/12.jfif";
import img13 from "../../assets/images/artists/artistcenter/img13.jfif";
import img14 from "../../assets/images/artists/artistcenter/img14.jfif";
import img15 from "../../assets/images/artists/artistcenter/img15.jfif";
import img16 from "../../assets/images/artists/artistcenter/img16.jfif";
import img17 from "../../assets/images/artists/artistcenter/img17.jfif";
import img18 from "../../assets/images/artists/artistcenter/img18.jfif";
import img19 from "../../assets/images/artists/artistcenter/img19.jfif";
import img20 from "../../assets/images/artists/artistcenter/img20.jfif";
import img21 from "../../assets/images/artists/artistcenter/img21.jfif";
import img22 from "../../assets/images/artists/artistcenter/img22.jfif";
import img23 from "../../assets/images/artists/artistcenter/img23.jfif";
import img24 from "../../assets/images/artists/artistcenter/img24.jfif";
import img25 from "../../assets/images/artists/artistcenter/img25.jfif";
import img26 from "../../assets/images/artists/artistcenter/img26.jfif";
import img27 from "../../assets/images/artists/artistcenter/img27.jfif";
import img28 from "../../assets/images/artists/artistcenter/img28.jfif";
import img29 from "../../assets/images/artists/artistcenter/img29.jfif";
import img30 from "../../assets/images/artists/artistcenter/img30.jfif";
import img31 from "../../assets/images/artists/artistcenter/img31.jfif";
import img32 from "../../assets/images/artists/artistcenter/img32.jfif";
import img33 from "../../assets/images/artists/artistcenter/img33.jfif";
import img34 from "../../assets/images/artists/artistcenter/img34.jfif";
import img35 from "../../assets/images/artists/artistcenter/img35.jfif";
import img36 from "../../assets/images/artists/artistcenter/img36.jfif";
import img37 from "../../assets/images/artists/artistcenter/img37.jfif";
import img38 from "../../assets/images/artists/artistcenter/img38.jfif";
import img39 from "../../assets/images/artists/artistcenter/img39.jfif";
import img40 from "../../assets/images/artists/artistcenter/img40.jfif";
import img41 from "../../assets/images/artists/artistcenter/img41.jfif";
import img42 from "../../assets/images/artists/artistcenter/img42.jfif";
import img43 from "../../assets/images/artists/artistcenter/img43.jfif";
import img44 from "../../assets/images/artists/artistcenter/img44.jfif";
import img45 from "../../assets/images/artists/artistcenter/img45.jfif";
import img46 from "../../assets/images/artists/artistcenter/img46.jfif";
import img47 from "../../assets/images/artists/artistcenter/img47.jfif";
import img48 from "../../assets/images/artists/artistcenter/img48.jfif";
import img49 from "../../assets/images/artists/artistcenter/img49.jfif";
import img50 from "../../assets/images/artists/artistcenter/img50.jfif";
import img51 from "../../assets/images/artists/artistcenter/img51.jfif";
import img52 from "../../assets/images/artists/artistcenter/img52.jfif";
import img53 from "../../assets/images/artists/artistcenter/img53.jfif";
import img54 from "../../assets/images/artists/artistcenter/img54.jfif";
import img55 from "../../assets/images/artists/artistcenter/img56.jfif";
import img56 from "../../assets/images/artists/artistcenter/img57.jfif";
import img57 from "../../assets/images/artists/artistcenter/img58.jfif";
import img58 from "../../assets/images/artists/artistcenter/img60.jfif";
import img59 from "../../assets/images/artists/artistcenter/img59.jfif";
import img60 from "../../assets/images/artists/artistcenter/img60.jfif";
import img61 from "../../assets/images/artists/artistcenter/img62.jfif";
import img62 from "../../assets/images/artists/artistcenter/img63.jfif";
import img63 from "../../assets/images/artists/artistcenter/img64.jfif";
import img64 from "../../assets/images/artists/artistcenter/img65.jfif";
import img65 from "../../assets/images/artists/artistcenter/img66.jfif";
import img66 from "../../assets/images/artists/artistcenter/img67.png";
import img67 from "../../assets/images/artists/artistcenter/img68.jfif";
import img68 from "../../assets/images/artists/artistcenter/img69.jfif";
import img69 from "../../assets/images/artists/artistcenter/img70.jfif";

const MonstercatRoster = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20; // Set to 12 items per page for a 4x3 grid

	// Manually define 70 image URLs and content
	const allArtists = [
		{ id: 1, image: img1, content: "A.M.R." },
		{ id: 2, image: img2, content: "AC Slater" },
		{ id: 3, image: img3, content: "ALLKNIGHT" },
		{ id: 4, image: img4, content: "ARMNHMR" },
		{ id: 5, image: img5, content: "ATLiens" },
		{ id: 6, image: img6, content: "ATTLAS" },
		{ id: 7, image: img7, content: "  AVANCE" },
		{ id: 8, image: img8, content: "Ace Aura" },
		{ id: 9, image: img9, content: "   Afinity" },
		{ id: 10, image: img10, content: "     Alan Walker" },
		{ id: 11, image: img11, content: "  Angara" },

		{ id: 13, image: img13, content: "  Arcando" },
		{ id: 14, image: img14, content: " Asketa" },
		{ id: 15, image: img15, content: " Au5" },
		{ id: 16, image: img16, content: "  Aviella" },
		{ id: 17, image: img17, content: "  Ayda Rose" },
		{ id: 18, image: img18, content: "   BEAUZ" },
		{ id: 19, image: img19, content: "BKAYE" },
		{ id: 20, image: img20, content: " BT" },
		{ id: 21, image: img21, content: "  Bad Computer" },
		{ id: 22, image: img22, content: " Banaati" },
		{ id: 23, image: img23, content: " Bertie Scott  " },
		{ id: 24, image: img24, content: " Bishu" },
		{ id: 25, image: img25, content: "   Blanke" },
		{ id: 26, image: img26, content: "  Blood Groove & Kikis" },
		{ id: 27, image: img27, content: "  Bok Nero" },
		{ id: 28, image: img28, content: "  Bossfight" },
		{ id: 29, image: img29, content: " Bound to Divide" },
		{ id: 30, image: img30, content: " Boy North" },
		{ id: 31, image: img31, content: " Brandon Mignacca" },
		{ id: 32, image: img32, content: "  Brandyn Burnette" },
		{ id: 33, image: img33, content: "  Britt Lari" },
		{ id: 34, image: img34, content: "CHYL   " },
		{ id: 35, image: img35, content: " CLOUD ZERO" },
		{ id: 36, image: img36, content: " COPYCATT" },
		{ id: 37, image: img37, content: " Carey" },
		{ id: 38, image: img38, content: "Clayton" },
		{ id: 39, image: img39, content: " Casey" },
		{ id: 40, image: img40, content: "  Cook" },
		{ id: 41, image: img41, content: "    Caster" },
		{ id: 42, image: img42, content: "    Chime" },
		{ id: 12, image: img12, content: "      Anita Tatlow" },
		{ id: 43, image: img43, content: "    Circadian" },
		{ id: 44, image: img45, content: "Clarico" },
		{ id: 45, image: img44, content: "  Clockvice" },
		{ id: 46, image: img46, content: "Cloudcage" },
		{ id: 47, image: img47, content: "Codd" },
		{ id: 48, image: img48, content: " Dubz" },
		{ id: 49, image: img49, content: "    Codeko" },
		{ id: 50, image: img50, content: "    Conro" },
		{ id: 51, image: img51, content: "    Control Freak" },
		{ id: 52, image: img52, content: "    Convexity" },
		{ id: 53, image: img53, content: "    Cornelius SA" },
		{ id: 54, image: img54, content: " Curbi" },
		{ id: 55, image: img55, content: " Culprate" },
		{ id: 56, image: img56, content: "    Cyclops" },
		{ id: 57, image: img57, content: " DIESEL" },
		{ id: 58, image: img58, content: "   DYSON" },
		{ id: 59, image: img59, content: "Dada Life" },
		{ id: 60, image: img60, content: "    Dani Demand" },
		{ id: 61, image: img61, content: "    David Feldman" },
		{ id: 62, image: img62, content: "Dead Pony" },
		{ id: 63, image: img63, content: " Decimate" },
		{ id: 64, image: img64, content: " Def3" },
		{ id: 65, image: img65, content: " Delaney" },
		{ id: 66, image: img66, content: " Kai" },
		{ id: 67, image: img67, content: " Derpcat" },
		{ id: 68, image: img68, content: "  Diandra Faye" },
		{ id: 69, image: img69, content: "Dias Ridge" },
	];

	const totalPages = Math.ceil(allArtists.length / itemsPerPage);

	// Get current items for the page
	const currentItems = allArtists.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	// Pagination controls
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="roster-container-roster">
			<div className="left-content-roster">
				<h1>Monstercat Roster</h1>
			</div>
			<div className="grid-container-roster">
				{currentItems.map((item) => (
					<div className="grid-item-roster" key={item.id}>
						<img src={item.image} alt={item.content} />
						<p>{item.content}</p>
					</div>
				))}
			</div>
			<div className="pagination-roster">
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index + 1}
						onClick={() => handlePageChange(index + 1)}
						className={currentPage === index + 1 ? "active" : ""}
					>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default MonstercatRoster;
