import React from "react";
import Landing from "./Landing";
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";
import About from "./About";
import Header from "./header";

function Home() {
	return (
		<>
			<Landing></Landing>
			<Contact></Contact>
			<Project></Project>
			<Skill></Skill>
			<About></About>
		</>
	);
}

export default Home;
