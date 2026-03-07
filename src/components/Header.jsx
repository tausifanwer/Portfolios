import React, { useEffect, useState } from "react";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// import Tausif_Anwer_Resume from "../TAUSIF ANWER Resume De2.pdf";
import View from "./View";
import Switcher2 from "./ToggleButton";
import { useTheme } from "../context/ThemeContext";
/**
 * Render the top navigation bar with logo, navigation links, a resume download link, theme controls, and a responsive mobile menu.
 * 
 * The header adapts its layout based on viewport width, provides toggling for the mobile navigation, and reflects the current theme state.
 * @returns {JSX.Element} The header element containing navigation, theme switcher controls, and responsive controls (hamburger/close).
 */
function Header() {
	const { isDark, toggleTheme } = useTheme();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleToggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	const closeNav = () => {
		setIsNavOpen(false);
	};

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [])
	return (
		<div className="header-container">
			<div className="header">
				<div className="logo">
					<Link to="/">
						<h1>Tausif Anwer</h1>
					</Link>
					<View />
				</div>

				<div className={` nav-super-container ${isNavOpen ? "on" : "off"}`}>
					<div className={`nav-container`}>
						<div className="nav">
							<nav>
								<Link to="/" onClick={closeNav}>
									Home
								</Link>
								<Link to="/skill" onClick={closeNav}>
									Skills
								</Link>
								<Link to="/project" onClick={closeNav}>
									Projects
								</Link>
								<Link to="/about" onClick={closeNav}>
									About
								</Link>
							</nav>
							<div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
								<div className="Resume">
									<a
										href="/TAUSIF ANWER Resume De3.pdf"
										download="Tausif Anwer Resume"
									>
										Resume
									</a>
								</div>
								{
									isMobile ? (
										null
									) : (<div className="theme desktop" style={{ padding: "0.4rem", backdropFilter: "drop-shadow(4px 4px 10px #b1b4ba )", borderRadius: "50%" }}>
										<Switcher2
											checked={isDark}
											onToggle={toggleTheme}
										/>
									</div>)
								}
							</div>
						</div>
						<div className="close" onClick={handleToggleNav}>
							<IoCloseSharp color={isDark ? "white" : "black"} />
						</div>
					</div>
				</div>
				<div style={{ display: "flex", alignItems: "center", gap: isMobile ? "1rem" : "2rem" }}>
					<div className="theme mobileView" style={{ padding: "0.4rem", backdropFilter: "drop-shadow(4px 4px 10px #b1b4ba )", borderRadius: "50%" }} >
						<Switcher2
							checked={isDark}
							onToggle={toggleTheme}
						/>
					</div>
					<div className="hamburger" onClick={handleToggleNav}>
						<RxHamburgerMenu />
					</div>
				</div>
			</div>
		</div >
	);
}

export default Header;