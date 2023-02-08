import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio_final.png'
import IMG4 from '../../assets/calculator.png'

// Do not use the images in production

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Rock Paper Scissors',
      github: 'https://github.com',
      demo: 'https://github.com/Janmaaku/rsp_sige'
    }, 
    {
      id: 2,
      image: IMG2,
      title: 'Christmas Tree',
      github: 'https://github.com/Janmaaku/christmas',
      demo: 'https://janmaaku.github.io/christmas/'
    },
    {
      id: 3,
      image: IMG3,
      title: "Farmers-Hub",
      demo: 'https://farmers-hub-wzef.vercel.app/?fbclid=IwAR2MvmQ2JrILZu6MVDRRGAjRvVl3Lr30IPlhxVgRrDQVq90kXh8wBUknDvY'
    },
    {
      id: 4,
      image: IMG4,
      title: "Calculator",
      demo: 'https://janmaaku.github.io/calculator5-y/#calce',
    }
    
    
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} className="images"/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
