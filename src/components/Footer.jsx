import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
	return (
		<div className="footer flex">
			<div>© {currentYear} - Made by Tausif Anwer</div>
			<div className="available">
				<span className="animate-pulse"></span>Available for Hire
			</div>
		</div>
	);
}

export default React.memo(Footer);