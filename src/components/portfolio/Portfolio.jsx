import React, { useEffect } from "react";
import './portfolio.css'
import tracker from '../../assets/project/tracker.png'
import Devhub from '../../assets/project/Devhub.png'
import Safespot from '../../assets/project/safespot.png'
import Food from '../../assets/project/burgers.jpg'
import weatherman from '../../assets/project/weatherman.png'
import Zookeeper from '../../assets/project/header-bg.jpg'
import tech from '../../assets/project/techblog.png'
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
    {
        name: 'budget-tracker',
        description: 'indexDB, Node, Express, Mongoose',
        link: 'https://boiling-retreat-42311.herokuapp.com/',
        github: 'https://github.com/Marcus0224/budget-tracker',
        image: tracker
      },
      {
        name: 'Devhub',
        description:'React, NoSQL databases, Chakra UI, GraphQL APIs',
        link:'https://whispering-island-67364.herokuapp.com/cart',
        github:'https://github.com/Marcus0224/DevHub',
        image: Devhub
      },
      {
        name:'Safespot',
        description:'Express,handlebars, Bcrypt, MySQL2',
        link:'https://safespotblog.herokuapp.com/login',
        github:'https://github.com/Marcus0224/SafeSpot',
        image: Safespot
      },
      {
        name: 'Food-Festival',
        description: 'Node, service-worker, PWA, MySQL2, HTML',
        link: 'https://marcus0224.github.io/food-festival/',
        github: 'https://github.com/Marcus0224/food-festival',
        image: Food
      },
      {
        name: 'WeatherMan',
        description: 'HTML, API, Javascript',
        link:'https://marcus0224.github.io/WeatherMan/',
        github: 'https://github.com/Marcus0224/WeatherMan',
        image: weatherman   
      },
      {
        name:'Zookeeper',
        description:'Node, routes, css, HTML,Javascript',
        link:'https://marcus0224.github.io/Zookeeper/',
        github:'https://github.com/Marcus0224/Zookeeper',
        image: Zookeeper
      },
      {
        name:'tech-blog',
        description:'MySQL,Sequelize,express,bcrypt',
        link:'https://floating-beach-88217.herokuapp.com/',
        github:'https://github.com/Marcus0224/tech-blog',
        image: tech
      },
];
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  return (
    <section data-aos="flip-left" id="projects">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ name, description, link, github, image }) => {
          return (
            <article key={name} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt={name}></img>
              </div>
              <h3>{description}</h3>
              <div className="portfolio-item-cta">
                <a href={github} id="git-btn" className="btn" >
                  GitHub
                </a>
                <a href={link} className="btn btn-primary" >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
  
   