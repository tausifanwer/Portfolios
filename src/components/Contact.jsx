import React from "react";
import linkInd from "../assets/linkedin-icon.svg";
import gmail from "../assets/gmail-icon.svg";
import gitHub from "../assets/github-icon.svg";
function Contact() {
	return (
		<div className="contact ">
			<a
				href="https://www.linkedin.com/in/tausif-anwer-3a73a8208/"
				target="_blank"
			>
				<img src={linkInd} alt="" />
			</a>
			<a href="mailto:tausifanwer89@gmail.com" target="_blank">
				<img src={gmail} alt="" />
			</a>
			<a id="git" href="https://github.com/tausifanwer" target="_blank">
				<img src={gitHub} alt="" />
			</a>
		</div>
	);
}

export default Contact;
