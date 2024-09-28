import React from "react";
import {
	FaInstagram,
	FaFacebookF,
	FaWhatsapp,
	FaTwitter,
	FaTiktok,
	FaAngleRight,
} from "react-icons/fa";
import "../assets/styles/footer.css"; // Import the CSS file for styling

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-columns">
				{/* Column 1 */}
				<div className="footer-column">
					<h3>About Monstercat</h3>
					<ul>
						<li>Contact Us</li>
						<li>Careers</li>
						<li>News</li>
						<li>Press</li>
					</ul>
				</div>

				{/* Column 2 */}
				<div className="footer-column">
					<h3>Terms & Policies</h3>
					<ul>
						<li>Terms of Service</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				{/* Column 3 */}
				<div className="footer-column">
					<h3>Monstercat News</h3>
					<p>
						Don't miss a thing, stay up to date with the latest news from us.
					</p>
					<div className="email-subscription">
						<input type="email" placeholder="Enter email" />
						<button>
							<FaAngleRight style={{ fontSize: "3rem" }} />
						</button>{" "}
						{/* Right arrow button */}
					</div>
				</div>
			</div>

			<hr />

			<div className="footer-bottom">
				<p>2011 - 2024 © Monstercat, All Rights Reserved</p>

				{/* Social Media Icons */}
				<div className="footer-icons">
					<a
						href="https://www.instagram.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="footer-icon"
					>
						<FaInstagram />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						className="footer-icon"
					>
						<FaFacebookF />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
						className="footer-icon"
					>
						<FaTwitter />
					</a>
					<a
						href="https://whatsapp.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
						className="footer-icon"
					>
						<FaWhatsapp />
					</a>
					<a
						href="https://tiktok.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="TikTok"
						className="footer-icon"
					>
						<FaTiktok />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
