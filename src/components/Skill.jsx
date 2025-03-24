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
					<div className="skill-button-container">
						<span className="skill-button-box">
							<button
								className="skill-button cursor-pointer"
								onClick={() => setSkill("skill")}
							>
								Skills
							</button>
							<button
								className="tool-button cursor-pointer"
								onClick={() => setSkill("tool")}
							>
								Tools
							</button>
						</span>
					</div>
				</div>
				<div className="skill-img">
					{skill === "skill"
						? skillData.map((item, index) => (
								<div key={`skill-${index}`}>
									<img src={item} alt={`skill-${index}`} />
								</div>
						  ))
						: toolsData.map((item, index) => (
								<div key={`tools-${index}`}>
									<img src={item} alt={`tools-${index}`} />
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
}

export default Skill;
