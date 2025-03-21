import React from "react";
import profileImg from "../assets/Animation-1742208975258-ezgif.com-gif-to-webp-converter.webp";
import tpa from "../assets/turnpike.jpeg";
import cn from "../assets/coding ninjas.png";
import { Link, useLocation } from "react-router-dom";
import AboutContact from "./AboutContact";
function About() {
	const location = useLocation();

	return (
		<div className="about-container">
			<h2>About</h2>
			<div className="about-subContainer">
				<div className="profile-img">
					<img src={profileImg} alt="" />
				</div>
				<div className="profile-detail">
					<h3>
						About me <span className="animate-pulse">.</span>
					</h3>
					<p>
						I'm a passionate software developer. I enjoy building web
						applications and constantly strive to improve. My goal is to create
						meaningful solutions that make a positive impact.
					</p>
					<p>
						I'm always up for tech discussions, collaborations, or just geeking
						out about anime or space. Feel free to reach out!
					</p>
					<div className="profile-link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(48,195,237,1)"
							width="45px"
						>
							<path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(48,195,237,1)"
							width="45px"
						>
							<path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
						</svg>
						<a href="" className="profile-resume">
							Resume
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="30px"
							>
								<path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			{location.pathname === "/about" ? (
				<div className="profile-experience">
					<h3>Experience</h3>
					<div className="exp-1 exp">
						<img src={tpa} alt="" className="w-[100px]" />
						<div className="exp-details">
							<div className="exp-details-company">
								<span>TurnPike Analyst</span>
								<span>June-2023 - July-2024</span>
							</div>
							<p>
								Experienced backend developer skilled in Node.js, Express.js,
								MongoDB, and MySQL, optimizing APIs for 30% faster responses.
								Improved system throughput by 15%, ensured data integrity, and
								enhanced data visualization using Python dashboards. 🚀
							</p>
						</div>
					</div>
					<div className="exp-2 exp ">
						<img src={cn} alt="" className="w-[100px] rounded-2xl" />
						<div className="exp-details">
							<div className="exp-details-company">
								<span>Coding Ninjas</span>
								<span>Sept-2022 - Jan-2023</span>
							</div>
							<p>
								Mentored students in Data Structures, Debugging, and
								Problem-Solving, resolving 482+ Python queries with a 4.57
								rating. Contributed to curriculum development and student
								assessments for improved learning outcomes. 🎯🚀
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="go-about">
					<Link to="/about" className="go-project-link animate-bounce">
						View More
					</Link>
				</div>
			)}
			<AboutContact></AboutContact>
		</div>
	);
}

export default About;
