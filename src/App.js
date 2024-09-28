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
			</Routes>{" "}
			<Footer />
		</BrowserRouter>
	);
}

export default App;
