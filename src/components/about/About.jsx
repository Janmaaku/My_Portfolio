import React from 'react'
import './about.css'
import about from '../../assets/aboutme.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={about} alt="About Image"/>
          </div>
        </div>

        <div className='about__content'>
            <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5> Experience </h5>
                  <small>No experience</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about__icon' />
                  <h5> Clients </h5>
                  <small>No Clients</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <h5> Projects </h5>
                  <small>No projects completed </small>
                </article>
            </div>

            <p>
            I don't have any experience in Web Developer but I’m passionate about everything that goes into making websites work well and look beautiful. The web is my passion because it’s where I can find the most exciting projects to work on. It’s also where I get to express my creativity in ways that are hard to find elsewhere.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div> 
    </section>
  )
}

export default About