
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import pic01 from '../assets/pic01.jpg';
import pic02 from '../assets/pic02.jpg';
import pic03 from '../assets/pic03.jpg';
import pic04 from '../assets/pic04.jpg';
import pic05 from '../assets/pic05.jpg';
import pic06 from '../assets/pic06.jpg';
import {  FaGithub,  FaLink } from 'react-icons/fa';

const projects = [
    {
        title: 'Affiliate  program',
        description: 'the project is a simple affiliate marketing program that allows users to earn money by referring people to the platform. ',
        link: 'https://github.com/grace-kid/shiba-earn',
        gitlink: 'https://github.com/grace-kid/shiba-earn',
        image: pic05,
        skills: '#css #node.js #postgreSql  ', 
    },
    {
        title: 'E-commerce Computer Store',
        description: 'this project is an e-commerce computer store that allows users to buy computer parts and accessories.',
        link: 'https://grace-kid.github.io/D.W.T-computer-store/',
        gitlink: 'https://github.com/grace-kid/D.W.T-computer-store',
        image: pic01,
        skills: '#javaScript #css  #html',
    },
    {
        title: 'CGP Calculator',
        description: 'this project is a CGP calculator that allows students to calculate their CGP. ',
        link: 'https://grace-kid.github.io/ESUT-GP-Calculator/',
        gitlink: 'https://github.com/grace-kid/ESUT-GP-Calculator',
        image: pic02,
        skills: '#html #css #angularJS ',
    },
    {
        title: 'Nova Wave',
        description: 'this investment website allows users to invest in the stock market.',
        link: 'https://github.com/grace-kid/nova-wave',
        gitlink: 'https://github.com/grace-kid/nova-wave',
        image: pic04,
        skills: '#css #node.js #postgreSql  ', 

    },
    {
        title: 'Movie search ',
        description: 'this project allows users to search for movies and get information about the movie.',
        link: 'https://github.com/grace-kid/movie-search',
        gitlink: 'https://github.com/grace-kid/movie-search',
        image: pic06,
        skills: '#ejs #node.js  #tailwindcss', 
    },
    {
        title: 'cryptopluse ',
        description: 'this investment website allows users to invest in the stock market.',
        link:'https://grace-kid.github.io/investment-site/',
        gitlink: 'https://github.com/grace-kid/investment-site-',
        image: pic03,
        skills: '#javaScript #css  #html',
    },
    // Add more projects as needed
];

const Projects = () => {
         useEffect(() => {
             // Initialize AOS
             AOS.init({
               duration: 1000, // Duration of animation in milliseconds
               easing: 'ease-in-out', // Easing type
               once: false, // Run animation only once
             });
           }, []);
    return (
      <div id='work' className=' sky '>
        <div
          className='md:text-center  text-purple-200 md:text-start md:px-20 blend px-5 py-5 pt-10 space-y-5 '
          data-aos='zoom-in'
          data-aos-offset='200'>
          <h1 className='md:text-3xl text-center text-xl underline underline-offset-6'>
            {" "}
            My Work
          </h1>
          <p className='md:text-8xl text-center text-4xl font-extrabold '>
            {" "}
            Projects
          </p>
          <p className=' text-2xl mx-10'>
            The projects I&apos;ve undertaken serve as demonstrations of my
            skills and experience using real-world instances of my work.{" "}
          </p>
        </div>
        <div className='flex flex-wrap justify-center pt-10 min-h-screen '>
          {projects.map((project, index) => (
            <StyledWrapper
              key={index}
              data-aos='flip-left'
              data-aos-offset='200'>
              <div className='container md:w-[390px] noselect '>
                <div className='canvas'>
                  <div className='tracker tr-1' />
                  <div className='tracker tr-2' />
                  <div className='tracker tr-3' />
                  <div className='tracker tr-4'>
                    <div className='absolute  mx-1   z-300 top-2 right-2 '>
                      <a
                        href={project.link}
                        className='  items-baseline  text-white'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaLink
                          className=' w-10  h-10 skills rounded-full border-2 border-purple-100 '
                          size={30}
                        />
                        {/* <span>View Project</span> */}
                      </a>
                    </div>
                  </div>
                  <div className='tracker tr-5'>
                    <div className='absolute   z-300 top-2 right-2 '>
                      <a
                        href={project.gitlink}
                        className='   items-baseline  text-white'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          className=' w-10  h-10 skills rounded-full border-2 border-red-100 '
                          size={30}
                        />{" "}
                        {/* <span>View Project</span> */}
                      </a>
                    </div>
                  </div>
                  <div className='tracker tr-6' />
                  <div className='tracker tr-7' />
                  <div className='tracker tr-8' />
                  <div className='tracker tr-9' />
                  <div className='tracker tr-10' />
                  <div className='tracker tr-11' />
                  <div className='tracker tr-12' />
                  <div className='tracker tr-13' />
                  <div className='tracker tr-14' />
                  <div className='tracker tr-15' />
                  <div className='tracker tr-16' />
                  <div className='tracker tr-17' />
                  <div className='tracker tr-18' />
                  <div className='tracker tr-19' />
                  <div className='tracker tr-20' />
                  <div className='tracker tr-21' />
                  <div className='tracker tr-22' />
                  <div className='tracker tr-23' />
                  <div className='tracker tr-24' />
                  <div className='tracker tr-25' />
                  <div
                    id='card'
                    style={{ backgroundImage: `url(${project.image})` }}
                    className='bg-cover rounded-xl border-2 border-red-100  bg-top  bg-no-repeat'>
                    <p
                      className='skills px-2 my-1 mx-2 rounded-xl border-2 border-red-100 '
                      id='prompt'>
                      {project.title}
                    </p>
                    <div className='title skills p-5'>
                      {project.description}
                    </div>
                    {/* <div className="absolute skills z-300 top-2 right-2 ">
                           <a href={project.link} className='p-3 m-2 items-baseline h-10 w-10 text-white' target="_blank"  rel="noopener noreferrer">
                           <ion-icon size="large" name="link"></ion-icon> 
                           
                           </a>
                           <a href={project.gitlink} className=' p-3 m-2 items-baseline h-10 w-10 text-white' target="_blank"  rel="noopener noreferrer">
                           <ion-icon size="large" name="logo-github"></ion-icon>                            
                           </a>

                         </div> */}
                    <div className='absolute bottom-0 border-2 border-red-100 px-2  left-3 m-1  skills shadow-2xl text-amber-50'>
                      <h1>{project.skills}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </StyledWrapper>
          ))}
        </div>
      </div>
    );
};




const StyledWrapper = styled.div`
  /*works janky on mobile :<*/
  .container {
    position: relative;
    width: 300px;
    height: 454px;
    transition: 200ms;
    margin: 10px;
    perspective: 1000px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
  }

  .subtitle {
    transform: translateY(160px);
    color: rgb(134, 110, 221);
    text-align: center;
    width: 100%;
  }

  .title {
    opacity: 0;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out-out;
    transition-delay: 100ms;
    position: absolute;
    font-weight: bold;
    color: white;
    margin: 10px;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  #prompt {
    bottom: 38px;
    left: 12px;
    z-index: 20;
    font-weight: bold;
    transition: 300ms ease-in-out-out;
    position: absolute;
    // max-width: 110px;
    color: rgb(255, 255, 255);
  }

  .tracker {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    // filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: '';
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 100;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  #card::before {
    content: '';
    // background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
    // filter: blur(2rem);
    opacity: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 200;
    transition: 200ms;
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
     /* iOS Safari */
    -webkit-user-select: none;
     /* Safari */
     /* Konqueror HTML */
    -moz-user-select: none;
     /* Old versions of Firefox */
    -ms-user-select: none;
     /* Internet Explorer/Edge */
    user-select: none;
     /* Non-prefixed version, currently
  									supported by Chrome, Edge, Opera and Firefox */
  }`;


export default Projects;