import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img
							src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1716422815/my_portfolio/profile/436139900_3715321925379306_3039112617100738661_n_yg7wei.jpg"
							alt="About img"
						/>
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5> Experience </h5>
							<small className="text-base">1+ Year of experience</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5> Clients </h5>
							<small>2 Clients</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5> Projects </h5>
							<small>2 projects completed </small>
						</article>
					</div>

					<p>
						Hello, and welcome to my portfolio! I'm Janm Arch, a dedicated web
						developer with over a year of industry experience. Throughout my
						journey, I've immersed myself in the world of tech, gaining valuable
						insights and expertise in key areas such as AWS, TypeScript, and
						Tailwind CSS.Driven by a passion for innovation and a thirst for
						knowledge, I've embraced every opportunity to grow and excel in my
						field. With a keen eye for detail and a commitment to excellence, I
						approach each project with enthusiasm and dedication.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
