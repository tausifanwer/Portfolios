import React, { useEffect, useState } from "react";
import { proData } from "../store/project-data";
import git from "../assets/github-icon.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Project() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [hoverGit, setHoverGit] = useState(null);
	const location = useLocation();
	const displayProject =
		location.pathname === "/" ? proData.slice(0, 2) : proData;
	const handleHoverGitShow = (id) => {
		setHoverGit(id);
	};

	const handleHoverGitHide = () => {
		setHoverGit(null);
	};
	const handleShow = (id) => {
		setHoveredIndex(id);
	};

	const handleHide = () => {
		setHoveredIndex(null);
	};
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobile]);

	return (
		<div className="project" id="project">
			<h2>Projects</h2>
			{isMobile
				? displayProject.map((item, index) => {
						return (
							<div className="p-1">
								<div className="p-1-img">
									<img src={item.proImg} alt="" />
								</div>
								<div className="p-1-content">
									<div className="flex items-center gap-1">
										<h3>{item.title}</h3>
										{item.live && (
											<a
												href={item.live}
												target="_blank"
												className="text-red-700 font-medium cursor-pointer animate-bounce "
											>
												Live
											</a>
										)}
									</div>
									<p>{item.content}</p>
									<span>Technologies Used</span>
									<div className="toolkit">
										<div className="p-1-ts">
											{item.imgTech?.map((tec, ind) => (
												<div className="tech-name" key={ind}>
													<img
														className="tech-img"
														src={tec}
														alt=""
														onMouseEnter={() => handleShow(`${index}-${ind}`)}
														onMouseLeave={handleHide}
													/>
												</div>
											))}
										</div>
									</div>
									<a href={item.projectLink} target="_blank">
										Visit
									</a>
								</div>
							</div>
						);
				  })
				: displayProject.map((item, index) => (
						<div className="p-1" key={index}>
							{index % 2 === 0 ? (
								<>
									<div className="p-1-img">
										<img src={item.proImg} alt="" />
									</div>
									<div className="p-1-content">
										<div className="flex items-center gap-1">
											<h3>{item.title}</h3>
											{item.live && (
												<a
													href={item.live}
													target="_blank"
													className="text-red-700 font-medium cursor-pointer animate-bounce"
												>
													Live
												</a>
											)}
										</div>
										<p>{item.content}</p>
										<span>Technologies Used</span>
										<div className="toolkit">
											<div className="p-1-ts">
												{item.imgTech?.map((tec, ind) => (
													<div className="tech-name" key={ind}>
														<img
															className="tech-img"
															src={tec}
															alt=""
															onMouseEnter={() => handleShow(`${index}-${ind}`)}
															onMouseLeave={handleHide}
														/>
														<span
															className={
																hoveredIndex === `${index}-${ind}`
																	? "show-n"
																	: "tech-n"
															}
														>
															{item.nameTech[ind]}
														</span>
													</div>
												))}
											</div>
										</div>
										<div
											className="git"
											onMouseEnter={() => handleHoverGitShow(index)}
											onMouseLeave={handleHoverGitHide}
										>
											<a href={item.projectLink} target="_blank">
												<img src={git} alt="" />
												<span
													className={hoverGit === index ? "showGit" : "hideGit"}
												>
													Visit here
												</span>
											</a>
										</div>
									</div>
								</>
							) : (
								<>
									<div className="p-1-content">
										<div className="flex items-center gap-1">
											<h3>{item.title}</h3>
											{item.live && (
												<a
													href={item.live}
													target="_blank"
													className="text-red-700 font-medium cursor-pointer animate-pulse "
												>
													Live
												</a>
											)}
										</div>
										<p>{item.content}</p>
										<span>Technologies Used</span>
										<div className="toolkit">
											<div className="p-1-ts">
												{item.imgTech?.map((tec, ind) => (
													<div className="tech-name" key={ind}>
														<img
															className="tech-img"
															src={tec}
															alt=""
															onMouseEnter={() => handleShow(`${index}-${ind}`)}
															onMouseLeave={handleHide}
														/>
														<span
															className={
																hoveredIndex === `${index}-${ind}`
																	? "show-n"
																	: "tech-n"
															}
														>
															{item.nameTech[ind]}
														</span>
													</div>
												))}
											</div>
										</div>
										<div
											className="git"
											onMouseEnter={() => handleHoverGitShow(index)} // ✅ Correct way
											onMouseLeave={handleHoverGitHide}
										>
											<a href={item.projectLink} target="_blank">
												<img src={git} alt="" />
												<span
													className={hoverGit === index ? "showGit" : "hideGit"}
												>
													Visit here
												</span>
											</a>
										</div>
									</div>
									<div className="p-1-img">
										<img src={item.proImg} alt="" />
									</div>
								</>
							)}
						</div>
				  ))}
			{window.location.pathname === "/" ? (
				<div className="go-project">
					<Link to="/project" className="go-project-link animate-bounce">
						View More
					</Link>
				</div>
			) : null}
		</div>
	);
}

export default Project;
