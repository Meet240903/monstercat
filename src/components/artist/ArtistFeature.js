import React, { useState } from "react";
import "../../assets/styles/artist/ArtistFeature.css"; // Assuming your CSS is in this path
import img1 from "../../assets/images/artists/artistfeature/img1.jfif";
import img2 from "../../assets/images/artists/artistfeature/img2.jfif";
import img3 from "../../assets/images/artists/artistfeature/img3.jfif";
import img4 from "../../assets/images/artists/artistfeature/img4.jfif";
import img5 from "../../assets/images/artists/artistfeature/img5.jfif";
import img6 from "../../assets/images/artists/artistfeature/img6.jfif";
import img7 from "../../assets/images/artists/artistfeature/img7.jfif";
import img8 from "../../assets/images/artists/artistfeature/img8.jfif";
import img9 from "../../assets/images/artists/artistfeature/img9.jfif";
import img10 from "../../assets/images/artists/artistfeature/img10.jfif";
import img11 from "../../assets/images/artists/artistfeature/img11.jfif";
import img12 from "../../assets/images/artists/artistfeature/img12.jfif";
import img13 from "../../assets/images/artists/artistfeature/img13.jfif";
import img14 from "../../assets/images/artists/artistfeature/img14.jfif";
import img15 from "../../assets/images/artists/artistfeature/img15.jfif";
import img16 from "../../assets/images/artists/artistfeature/img16.jfif";
import img17 from "../../assets/images/artists/artistfeature/img17.jfif";
import img18 from "../../assets/images/artists/artistfeature/img18.jfif";
import img19 from "../../assets/images/artists/artistfeature/img19.jfif";
import img20 from "../../assets/images/artists/artistfeature/img20.jfif";

const SliderComponent = () => {
	// State to keep track of the current index of the displayed images
	const [currentIndex, setCurrentIndex] = useState(0);

	// Array of all 20 images
	const images = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
		img17,
		img18,
		img19,
		img20,
	];

	return (
		<div className="slider-container-artists">
			{/* Left Content */}
			<div className="left-content-artists">
				<h1>Monstercat</h1>
				<p>Artists</p>
				<p>Featured</p>
			</div>

			{/* Image Slider */}
			<div className="slider-artists">
				<div className="image-container-artists">
					{images.map((image, index) => (
						<img key={index} src={image} alt={`Slide ${index + 1}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderComponent;
