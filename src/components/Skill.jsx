import React, { Children, useState } from "react";
import { skillData, toolsData } from "../store/skill-data";
function Skill() {
	const [skill, setSkill] = useState("skill");

	return (
		<div className="skill-tools-container">
			<h2>Skills & Tools</h2>
			<div className="skill-container">
				<div className="skill-detail">
					<h2>What Are My Proficiencies?</h2>
					<p>
						I craft straightforward, user-friendly, and adaptive interfaces that
						facilitate users in achieving their objectives with utmost
						efficiency and expeditiousness, employing the latest cutting-edge
						technologies.
					</p>
					<div key={"skill"} className="skill-button-container">
						<span className="skill-button-box">
							<button
								className="skill-button"
								onClick={() => setSkill("skill")}
							>
								Skills
							</button>
							<button className="tool-button" onClick={() => setSkill("tool")}>
								Tools
							</button>
						</span>
					</div>
				</div>
				<div key={"tools"} className="skill-img">
					{skill === "skill"
						? skillData.map((item, index) => (
								<>
									<img key={index} src={item} alt="" />
									{/* <span>{skillName[index]}</span> */}
								</>
						  ))
						: toolsData.map((item, index) => (
								<>
									<img key={index} src={item} alt="" />
								</>
						  ))}
				</div>
			</div>
		</div>
	);
}

export default Skill;
