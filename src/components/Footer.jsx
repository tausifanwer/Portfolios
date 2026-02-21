import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="footer flex">
			<div>{`© ${currentYear} - Made by Tausif Anwer`}</div>
			<div className="available">
				<span className="animate-pulse"></span>Available for Hire
			</div>
		</div>
	);
}

export default Footer;
