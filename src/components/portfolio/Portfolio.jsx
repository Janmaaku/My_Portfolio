import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio_final.png";
import IMG4 from "../../assets/calculator.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// Do not use the images in production

const Portfolio = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSliding, setIsSliding] = useState(false);
	const [itemsToShow, setItemsToShow] = useState(3);


	const data = [
		{
			id: 1,
			image: IMG1,
			title: "Rock Paper Scissors",
			github: "https://github.com",
			demo: "https://github.com/Janmaaku/rsp_sige",
		},
		{
			id: 2,
			image: IMG2,
			title: "Christmas Tree",
			github: "https://github.com/Janmaaku/christmas",
			demo: "https://janmaaku.github.io/christmas/",
		},
		{
			id: 3,
			image: IMG3,
			title: "Farmers-Hub",
			demo: "https://farmers-hub-wzef.vercel.app/?fbclid=IwAR2MvmQ2JrILZu6MVDRRGAjRvVl3Lr30IPlhxVgRrDQVq90kXh8wBUknDvY",
		},
		{
			id: 4,
			image: IMG4,
			title: "Calculator",
			demo: "https://janmaaku.github.io/calculator5-y/#calce",
		},
	];

  
	const handleNext = () => {
		if (isSliding) return;
		setIsSliding(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex < data.length - 3 ? prevIndex + 1 : prevIndex
			);
			setIsSliding(false);
		}, 500);
	};

	const handlePrev = () => {
		if (isSliding) return;
		setIsSliding(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex > 0 ? prevIndex - 1 : prevIndex
			);
			setIsSliding(false);
		}, 500);
	};

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="carousel-container">
				<div className="carousel">
					{data
						.slice(currentIndex, currentIndex + 3)
						.map(({ id, image, title, github, demo }) => {
							return (
								<article key={id} className="portfolio__item">
									<div className="portfolio__item-image">
										<img src={image} alt={title} className="images" />
									</div>
									<h3>{title}</h3>
									<div className="portfolio__item-cta">
										{/* <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank"  rel="noreferrer">Live Demo</a> */}
									</div>
								</article>
							);
						})}
				</div>
				<button onClick={handlePrev} className="carousel-button prev">
					<BsArrowLeftCircle className="arrow__left" />
				</button>
				<button onClick={handleNext} className="carousel-button next">
					<BsArrowRightCircle className="arrow__right" />
				</button>
			</div>
		</section>
	);
};

export default Portfolio;
