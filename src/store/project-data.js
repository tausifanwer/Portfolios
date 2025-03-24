import tailwind from "../assets/tailwind-css-icon.svg";
import css from "../assets/css-icon.svg";
import js from "../assets/javascript-icon.svg";
import html from "../assets/html-icon.svg";
import bootstrap from "../assets/bootstrap-icon.svg";
import node from "../assets/node-icon.svg";
import mongoDb from "../assets/mongodb-icon.svg";
import express from "../assets/express-icon.svg";
import reactJs from "../assets/react.svg";
import gsap from "../assets/gsap-greensock-icon.svg";
import tanEngiconImg from "../assets/img-1.png";
import quotesImg from "../assets/img-2.png";
import allCountryImg from "../assets/img-3.png";
import blogImg from "../assets/img-4.png";

export const proData = [
	{
		id: 1,
		proImg: tanEngiconImg,
		title: "Tan Engicon",
		imgTech: [tailwind, css, html, js, gsap],
		nameTech: ["Tailwind", "CSS", "HTML", "javaScript", "GSAP"],
		content:
			"Developed a responsive website using HTML, CSS, and JavaScript. Enabled auto-reply emails,optimized SEO , and set up a CI/CD pipeline . Configured custom domain , integrated GSAP animations , and reduced reload time  using Matrix optimization.",
		projectLink: "https://github.com/tausifanwer/tan-Engco",
		live: "https://tanengicon.com/",
	},
	{
		id: 2,
		proImg: blogImg,
		title: "Blogify",
		imgTech: [css, html, js, node, express, mongoDb, bootstrap],
		nameTech: [
			"CSS",
			"HTML",
			"javaScript",
			"Node",
			"Express",
			"MongoDb",
			"Bootstrap",
		],
		content:
			"Developed a dynamic blogging platform using EJS, Node.js, Express.js, MongoDB, and Multer , enhancing user engagement by 10%. Integrated authentication, CRUD operations, and image uploads , boosting activity by 30%. Optimized database queries , improving performance significantly. ",
		projectLink: "https://github.com/tausifanwer/Blogify",
	},
	{
		id: 3,
		proImg: quotesImg,
		title: "Quotes",
		imgTech: [css, html, js],
		nameTech: ["CSS", "HTML", "javaScript"],
		content:
			" Streamlined workflow with Git , ensuring seamless collaboration and clean code. Integrated Gemini API  for insights and infinite scrolling  for smooth exploration. Optimized performance, reducing page load times by 25%  for a better UX. ",
		projectLink: "https://github.com/tausifanwer/Quotes",
		live: "https://daily-qoutes.netlify.app/",
	},
	{
		id: 4,
		proImg: allCountryImg,
		title: "AllCountry",
		imgTech: [css, html, js, reactJs],
		nameTech: ["CSS", "HTML", "javaScript", "ReactJs"],
		content:
			" AllCountries is a sleek React-based web app offering country data. Users explore details, filter by region, and navigate easily. Deployed on Netlify, it features design, interactive UI, and transitions for an engaging experience. ",
		projectLink: "https://github.com/tausifanwer/allcountry",
		live: "https://allcountries1.netlify.app/",
	},
];
