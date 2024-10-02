import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ourmusic from "./components/music/Ourmusic";
import Instinct from "./components/music/Instinct";
import Uncaged from "./components/music/Uncaged";
import Silk from "./components/music/Silk";
import Artists from "./components/Artist";
import AboutMonstercat from "./components/about/AboutMonstercat";
import Diversity from "./components/about/Diversity";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ourmusic" element={<Ourmusic />} />
				<Route path="/instinct" element={<Instinct />} />{" "}
				<Route path="/uncaged" element={<Uncaged />} />
				<Route path="/silk" element={<Silk />} />
				<Route path="/artists" element={<Artists />} />{" "}
				<Route path="/aboutmonstercat" element={<AboutMonstercat />} />{" "}
				<Route path="/diversity" element={<Diversity />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
