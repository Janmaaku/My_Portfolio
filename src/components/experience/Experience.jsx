import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
	const frontendTechnologies = [
		{ name: "HTML", experience: "Experienced" },
		{ name: "CSS", experience: "Intermediate" },
		{ name: "Javascript", experience: "Experienced" },
		{ name: "Bootstrap", experience: "Experienced" },
		{ name: "Tailwindcss", experience: "Experienced" },
		{ name: "React", experience: "Experienced" },
		{ name: "RESTful API", experience: "Experienced" },
	];

	const backendTechnologies = [
		{ name: "PHP", experience: "Experienced" },
		{ name: "MySQL", experience: "Intermediate" },
		{ name: "Node JS", experience: "Experienced" },
		{ name: "Firebase", experience: "Experienced" },
		{ name: "MongoDB", experience: "Experienced" },
		{ name: "AWS", experience: "Experienced" },
	];

	const renderTechnologies = (technologies) => {
		return technologies.map((tech, index) => (
			<article key={index} className="experience__details">
				<BsPatchCheckFill className="experience_details-icon" />
				<div>
					<h4>{tech.name}</h4>
					<small className="text-light">{tech.experience}</small>
				</div>
			</article>
		));
	};

	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{renderTechnologies(frontendTechnologies)}
					</div>
				</div>

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{renderTechnologies(backendTechnologies)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
