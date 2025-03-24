import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import landingImg from "../assets/Animation-1742208975258-ezgif.com-gif-to-webp-converter.webp";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
function Landing() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "30min" });
			cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
		})();
	}, []);
	return (
		<div className="landing-container" id="home">
			<div className="landing-content">
				<span>Hi 👋, I'm</span>
				<h1>
					<span>Tausif Anwer</span>
				</h1>
				<p>
					A full-stack developer passionate about crafting innovative web
					solutions. Let's collaborate to create something exceptional!
				</p>
				<div className="button-talk animate-bounce ">
					<button
						className="cursor-pointer"
						data-cal-namespace="30min"
						data-cal-link="tausif-anwer/30min"
						data-cal-config='{"layout":"month_view"}'
					>
						Let's talk
						<FaArrowRightLong />
					</button>
				</div>
			</div>
			<div className="landing-gif">
				<img src={landingImg} alt="" />
			</div>
		</div>
	);
}

export default Landing;
