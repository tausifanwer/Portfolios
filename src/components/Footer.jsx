import React from "react";

/**
 * Renders the site footer showing the current year, author credit, and an availability indicator.
 *
 * @returns {JSX.Element} The footer element containing copyright text and an "Available for Hire" indicator.
 */
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