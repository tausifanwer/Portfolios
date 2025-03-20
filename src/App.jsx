import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/header";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project />} />
				<Route path="/skill" element={<Skill />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
