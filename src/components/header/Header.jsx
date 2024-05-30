import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Janm Arch Rubio</h1>
				<h5 className="text-light">Fullstack Developer</h5>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img
						src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1707281587/my_portfolio/profile/img_1_vpbkjy.png"
						alt="me"
						className="images"
					/>
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
