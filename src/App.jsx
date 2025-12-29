import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollTop";
import Skill from "./components/Skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clarity from "@microsoft/clarity";
import { useEffect } from "react";
import Snowfall from "react-snowfall";
function App() {
	useEffect(() => {
		Clarity.init("tryoy1tbes");
	}, []);
	return (
		<Router>
			{/* <Snowfall
				color="#87CEFA"
				snowflakeCount={120}
				style={{
					position: "fixed",
					width: "100vw",
					height: "100vh",
					zIndex: 9999,
					pointerEvents: "none", // important
				}}
			/> */}
			<Header></Header>
			<ScrollToTop />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project />} />
				<Route path="/skill" element={<Skill />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer></Footer>
		</Router>
	);
}

export default App;
