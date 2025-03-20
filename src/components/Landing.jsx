import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import landingImg from "../assets/Animation - 1742208975258.gif";
function Landing() {
	return (
		<div className="landing-container" id="home">
			<div className="landing-content">
				<span>Hi 👋, I'm</span>
				<h1>
					<span>Tausif Anwer</span>
				</h1>
				<p>
					A full-stack developer passionate about crafting innovative web
					solutions. Let's collaborate to create something exceptional!
				</p>
				<div className="button-talk animate-bounce">
					<button>
						Let's talk
						<FaArrowRightLong />
					</button>
				</div>
			</div>
			<div className="landing-gif">
				<img src={landingImg} alt="" />
			</div>
		</div>
	);
}

export default Landing;
