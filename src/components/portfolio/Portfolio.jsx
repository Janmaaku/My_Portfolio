import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/portfolio_final.png";
import IMG4 from "../../assets/calculator.png";

// Do not use the images in production

const Portfolio = () => {
	const data = [
		{
			id: 1,
			image:
				"https://res.cloudinary.com/dqig7qaz7/image/upload/v1719360935/fatTrack_ihr7yt.png",
			title: "FATrack",
			github: "https://github.com",
			details: "",
			desc: "Ionic React, Nodejs, AWS, PostgreSQL, Typescript, Tailwindcss, ReactJS",
			demo: "https://github.com/Janmaaku/rsp_sige",
		},
		{
			id: 2,
			image:
				"https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742426/my_portfolio/images/Screenshot_2024-06-07_at_2.40.00_PM_xgib1e.png",
			title: "Dealogikal",
			desc: "Reactjs, Tailwindcss, Typescript, AWS, Nodejs",
			details: "",
			github: "https://github.com/Janmaaku/christmas",
			demo: "https://janmaaku.github.io/christmas/",
		},
		{
			id: 3,
			image: IMG3,
			title: "Farmers-Hub",
			desc: "ReactJS, MySQL, Cloudinary, NodeJS, CSS",
			details: "",
			demo: "https://farmers-hub-wzef.vercel.app/?fbclid=IwAR2MvmQ2JrILZu6MVDRRGAjRvVl3Lr30IPlhxVgRrDQVq90kXh8wBUknDvY",
		},
		{
			id: 4,
			image: IMG4,
			title: "Calculator",
			desc: "HTML, Javascript, CSS",
			details: "",
			demo: "https://janmaaku.github.io/calculator5-y/#calce",
		},
		{
			id: 5,
			image:
				"https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742556/my_portfolio/images/428693736_3671017156476450_6323566606572177511_n_llaxau.jpg",
			title: "Car Rental",
			desc: "ReactJS, Figma, Tailwindcss, Typescript",
			details: "",
			demo: "https://janmaaku.github.io/calculator5-y/#calce",
		},
		{
			id: 6,
			image:
				"https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742558/my_portfolio/images/428707216_3670341396544026_3809682686989056313_n_smwoa6.jpg",
			title: "Furniture Shop",
			desc: "ReactJS, Figma, Tailwindcss, Typescript",
			details: "",
			demo: "https://janmaaku.github.io/calculator5-y/#calce",
		},
	];

	return (
		<>
			<div className="portfolio">
				<h5>My Recent Work</h5>
				<h2>Portfolio</h2>
			</div>
			<ul className="cards">
				{data.map((item) => (
					<li key={item.id}>
						<div className="card">
							<img src={item.image} className="card__image" alt={item.title} />
							<div className="card__overlay">
								<div className="card__header">
									<svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="card__header-text">
										<h3 className="card__title">{item.title}</h3>
										<span className="card__status">{item.desc}</span>
									</div>
								</div>
								<p className="card__description">{item.details}</p>
							</div>
						</div>
					</li>
				))}
			</ul>{" "}
		</>
	);
};

export default Portfolio;
