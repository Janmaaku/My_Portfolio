import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/portfolio_final.png";
import IMG4 from "../../assets/calculator.png";

// Do not use the images in production

const Portfolio = () => {

	const data = [
		{
			id: 1,
			image: "https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742348/my_portfolio/images/Login_tqj7xe.png",
			title: "FATrack",
			github: "https://github.com",
			desc: "Ionic React, Nodejs, AWS, PostgreSQL, Typescript, Tailwindcss",
			demo: "https://github.com/Janmaaku/rsp_sige",
		},
		{
			id: 2,
			image: "https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742426/my_portfolio/images/Screenshot_2024-06-07_at_2.40.00_PM_xgib1e.png",
			title: "Dealogikal",
			desc: "Reactjs, Tailwindcss, Typescript, AWS, Nodejs",
			github: "https://github.com/Janmaaku/christmas",
			demo: "https://janmaaku.github.io/christmas/",
		},
		{
			id: 3,
			image: IMG3,
			title: "Farmers-Hub",
			desc: "testing asdflkjadsf kalsdjfljasd",
			demo: "https://farmers-hub-wzef.vercel.app/?fbclid=IwAR2MvmQ2JrILZu6MVDRRGAjRvVl3Lr30IPlhxVgRrDQVq90kXh8wBUknDvY",
		},
		{
			id: 4,
			image: IMG4,
			title: "Calculator",
			desc: "testing asdflkjadsf kalsdjfljasd",
			demo: "https://janmaaku.github.io/calculator5-y/#calce",
		},
	];


	return (
		<>
		<ul class="cards">
  <li>
    <a href="" class="card">
      <img src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742348/my_portfolio/images/Login_tqj7xe.png" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1717742426/my_portfolio/images/Screenshot_2024-06-07_at_2.40.00_PM_xgib1e.png" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>
            <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>    
</ul>
		</>
		// <section id="portfolio">
		// 	<h5>My Recent Work</h5>
		// 	<h2>Portfolio</h2>

		// 	<div className="carousel-container ">
		// 		<div className="carousel">
		// 			{data.map(({ id, image, title, desc, github, demo }) => {
		// 					return (
		// 						<article key={id} className="portfolio__item">
		// 							<div className="portfolio__item-image">
		// 								<img src={image} alt={title} className="images" />
		// 							</div>
		// 							<h3>{title}</h3>
		// 							<div className="portfolio__item-cta">
		// 								<p>{desc}</p>
		// 								{/* <a href={github} className='btn'>Github</a>
    //               <a href={demo} className='btn btn-primary' target="_blank"  rel="noreferrer">Live Demo</a> */}
		// 							</div>
		// 						</article>
		// 					);
		// 				})}
		// 		</div>
		// 	</div>
		// </section>
	);
};

export default Portfolio;

