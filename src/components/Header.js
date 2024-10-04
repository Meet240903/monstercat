import React, { useState } from "react";
import {
	FaBars,
	FaAngleDown,
	FaAngleUp,
	FaTimes,
	FaInstagram,
	FaFacebookF,
	FaWhatsapp,
	FaTwitter,
	FaTiktok,
} from "react-icons/fa"; // FontAwesome icons
import "../assets/styles/header.css"; // Import corresponding CSS for styling
import header_logo from "../assets/images/Header-logo.svg"; // Import header logo image
import logo_img from "../assets/images/home/LOGO.webp"; // Import logo image
import { Link } from "react-router-dom";
const Sidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls sidebar visibility
	const [activeSubmenu, setActiveSubmenu] = useState(""); // Tracks active submenu

	// Toggle the sidebar menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Toggle the visibility of submenus
	const toggleSubmenu = (section) => {
		setActiveSubmenu(activeSubmenu === section ? "" : section);
	};

	return (
		<div className="header">
			{/* Menu Icon (FaBars) */}
			<div className="menu-btn">
				{" "}
				<Link to="/">
					{" "}
					<img src={logo_img} className="logo-img" />{" "}
				</Link>
				<button onClick={toggleMenu}>
					<FaBars />
				</button>{" "}
				<button
					onClick={() =>
						(window.location.href = "https://www.facebook.com/yourusername")
					}
				>
					<FaFacebookF />
				</button>
				<button
					onClick={() =>
						(window.location.href = "https://www.instagram.com/yourusername")
					}
				>
					<FaInstagram />
				</button>
				<button
					onClick={() =>
						(window.location.href = "https://twitter.com/yourusername")
					}
				>
					<FaTwitter />
				</button>
				<button
					onClick={() => (window.location.href = "https://wa.me/1234567890")}
				>
					<FaWhatsapp />
				</button>
				<button
					onClick={() =>
						(window.location.href = "https://www.tiktok.com/@yourusername")
					}
				>
					<FaTiktok />
				</button>
				<div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
					<button className="close-btn" onClick={toggleMenu}>
						<FaTimes />
					</button>

					<div className="menu-content">
						{/* Logo */}
						<div className="logo">
							{" "}
							<Link to="/">
								<img src={header_logo} className="header-logo" />
							</Link>
						</div>

						{/* Menu List */}
						<ul className="menu-list">
							<li>
								<span>Music</span>
								<button onClick={() => toggleSubmenu("music")}>
									{activeSubmenu === "music" ? <FaAngleUp /> : <FaAngleDown />}
								</button>
								{activeSubmenu === "music" && (
									<ul className="submenu">
										<Link
											to="/ourmusic"
											style={{ color: "white", textDecoration: "none" }}
											onClick={() => setIsMenuOpen(false)}
										>
											<li>Our Music</li>
										</Link>{" "}
										<Link
											to="/instinct"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Instinct</li>
										</Link>
										<Link
											to="/uncaged"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Uncaged</li>
										</Link>
										<Link
											to="/silk"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Silk</li>
										</Link>
									</ul>
								)}
							</li>
							<Link
								to="/artists"
								style={{ color: "white", textDecoration: "none" }}
							>
								<li>Artists</li>
							</Link>
							<li>
								<span>About</span>
								<button onClick={() => toggleSubmenu("about")}>
									{activeSubmenu === "about" ? <FaAngleUp /> : <FaAngleDown />}
								</button>
								{activeSubmenu === "about" && (
									<ul className="submenu">
										<Link
											to="/aboutmonstercat"
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>About Monstercat</li>
										</Link>
										<Link
											to="/diversity"
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Diversity & Inclusion</li>
										</Link>
										<li>Code of Ethics</li>
										<li>Environmental</li>
										<li>Contact Us</li>
										<li>Careers</li>
									</ul>
								)}
							</li>
							<li>
								<Link
									to="/news"
									onClick={() => setIsMenuOpen(false)}
									style={{ color: "white", textDecoration: "none" }}
								>
									News
								</Link>
							</li>
							<li>
								<span>Events</span>
								<button onClick={() => toggleSubmenu("events")}>
									{activeSubmenu === "events" ? <FaAngleUp /> : <FaAngleDown />}
								</button>
								{activeSubmenu === "events" && (
									<ul className="submenu">
										<li>
											<Link
												to="/events"
												onClick={() => setIsMenuOpen(false)}
												style={{ color: "white", textDecoration: "none" }}
											>
												Monstercat Events Experience
											</Link>
										</li>
										<li>
											<Link
												to="/upcomming-events"
												onClick={() => setIsMenuOpen(false)}
												style={{ color: "white", textDecoration: "none" }}
											>
												Upcoming Events
											</Link>
										</li>
									</ul>
								)}
							</li>

							<li>
								<span>Programming</span>
								<button onClick={() => toggleSubmenu("programming")}>
									{activeSubmenu === "programming" ? (
										<FaAngleUp />
									) : (
										<FaAngleDown />
									)}
								</button>
								{activeSubmenu === "programming" && (
									<ul className="submenu">
										<li>MonstercatTV</li>
										<li>Call of the Wild</li>
										<li>Silk Showcase</li>
										<li>Upcoming Shows</li>
									</ul>
								)}
							</li>

							{/* Additional Menu Items */}
							<li>
								<Link
									to="/gold"
									onClick={() => setIsMenuOpen(false)}
									style={{ color: "white", textDecoration: "none" }}
								>
									Gold
								</Link>
							</li>
							<li>Partners</li>
							<li>Press</li>
							<li>Player</li>
							<li>Shop</li>
							<li>Lost Civilization</li>
						</ul>

						{/* Social Media Icons */}
						<div className="social-icons">
							<a
								href="https://www.instagram.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<FaFacebookF />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<FaTwitter />
							</a>
							<a
								href="https://whatsapp.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
							>
								<FaWhatsapp />
							</a>
							<a
								href="https://tiktok.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="TikTok"
							>
								<FaTiktok />
							</a>
						</div>
						{/* Sign In/Sign Up Buttons */}
						<div className="auth-buttons">
							<button>Sign In</button>
							<button>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
