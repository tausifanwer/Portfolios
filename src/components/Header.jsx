import React, { useState } from "react";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleToggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	const closeNav = () => {
		setIsNavOpen(false);
	};

	return (
		<div className="header-container">
			<div className="header">
				<div className="logo">
					<Link to="/">
						<h1>Tausif Anwer</h1>
					</Link>
				</div>
				<div className={` nav-super-container ${isNavOpen ? "on" : "off"}`}>
					<div className={`nav-container`}>
						<div className="nav">
							<nav>
								<Link to="/" onClick={closeNav}>
									Home
								</Link>
								<Link to="/skill" onClick={closeNav}>
									Skill
								</Link>
								<Link to="/project" onClick={closeNav}>
									Project
								</Link>
								<Link to="/about" onClick={closeNav}>
									About
								</Link>
								<a href="">Contact</a>
							</nav>
							<div className="Resume">
								<a href="">Resume</a>
							</div>
						</div>
						<div className="close" onClick={handleToggleNav}>
							<IoCloseSharp />
						</div>
					</div>
				</div>
				<div className="hamburger" onClick={handleToggleNav}>
					<RxHamburgerMenu />
				</div>
			</div>
		</div>
	);
}

export default Header;
