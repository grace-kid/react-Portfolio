import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CV from '../assets/CV.docx';
import {  FaEye, FaDownload } from 'react-icons/fa';

const Section1 = () => {
         useEffect(() => {
             // Initialize AOS
             AOS.init({
               duration: 1000, // Duration of animation in milliseconds
               easing: 'ease-in-out', // Easing type
               once: false, // Run animation only once
             });
           }, []);
    return (
      <div>
        <section className='hidden md:block m-0 border-x-2 border-b-2 p-5  chakra-petch-light '>
          <div
            className='landing-page h-160 p-5 rounded-3xl border-2 border-[rgb(65, 5, 177)]'
            data-aos='fade-up'>
            <header className='header '>
              <h1 className='text-3xl underline text-purple-300 underline-offset-6'>
                Welcome to My Portfolio
              </h1>
              <h1 className='text-7xl w-[50%]'>
                Your one-stop solution for Software development
              </h1>
            </header>
            <section className='about w-[50%]'></section>
          </div>
          <div
            className='absolute border-l-2 border-b-2 w-[43%] h-82 rounded-bl-sm right-8 top-21'
            data-aos='flip-left'></div>
          <div
            className='bot absolute border-2 w-[41.3%] top-21 rounded-tl-sm rounded-tr-3xl rounded-br-sm rounded-bl-3xl right-8 h-76'
            data-aos='flip-left'></div>
          <div className='absolute top-105 w-[49%] p-5 right-30 rounded-tl-3xl rounded-tr-sm rounded-br-3xl rounded-bl-sm hover:font-extrabold'>
            <div className='text-xl text-red-100 mt-8' data-aos='flip-left'>
              <p className='text-4xl'>
                Hi, I am Samson, a passionate web developer with expertise in
                creating dynamic and responsive websites.
              </p>
            </div>
            <a href={CV}>
              <button
                className='border-2 cvd px-2 mt-4 h1 mr-1 rounded-sm -skew-x-16 rounded-tl-xl rounded-bl-xl font-extrabold hover:bg-red-950'
                data-aos='fade-left'>
                View CV{" "}
                <span>
                  <FaEye size={30} />
                </span>
              </button>
            </a>
            <a href={CV} download='CV.docx'>
              <button
                className='border-[rgb(65, 5, 177)] cvd h1 rounded-sm border-2 px-3 -skew-x-16 rounded-tr-xl rounded-br-xl hover:bg-red-950'
                data-aos='fade-right'>
                Download CV{" "}
                <span>
                  <FaDownload size={30} />
                </span>
              </button>
            </a>
          </div>
          <div
            className='absolute top-117 w-[38.4%] p-5 border-r-2 border-t-2 h-64 rounded-tr-sm rounded-bl-sm'
            data-aos='fade-right'></div>
          <div
            className='h-58 border-2 rounded-bl-3xl rounded-tr-2xl myPic top-123 bg-red-700 absolute w-[36.8%]'
            data-aos='fade-right'>
            <div>
              <form action=''></form>
            </div>
          </div>
        </section>
        <section className='m-0 md:hidden bot2'>
          <div className='m-0 z-0'>
            <section className='section1 m-0 border-x-2 border-b-2 p-5 chakra-petch-light'>
              <div className=' h-auto  rounded-3xl border-2  border-[rgb(65, 5, 177)] bot1'>
                <header className='header z p-5 rounded-3xl'>
                  <h1 className='text-2xl text-white underline underline-offset-6'>
                    Welcome to My Portfolio
                  </h1>
                  <h1 className='text-5xl text-white pt-4'>
                    Your one-stop solution for Software development
                  </h1>
                </header>
                <section className='about w-full'></section>
              </div>

              <div
                className=' text-white top-60  p-5 right-0 rounded-tl-3xl rounded-tr-sm rounded-br-3xl rounded-bl-sm hover:font-extrabold'
                data-aos='fade-left'>
                <div className='text-xl text-white mt-5' data-aos='zoom-in'>
                  <p className='text-2xl'>
                    Hi, I am Samson, a passionate web developer with expertise
                    in creating dynamic and responsive websites.
                  </p>
                </div>
                <a href={CV}>
                  <button
                    className='border-2 px-2  mt-7 cvd text-2xl mr-1  -skew-x-16 rounded-xl   hover:bg-red-950'
                    data-aos='zoom-in'>
                    View CV{" "}
                    <span>
                      <ion-icon name='eye'></ion-icon>
                    </span>
                  </button>
                </a>
                <a href={CV} download='CV.docx'>
                  <button
                    className='border-[rgb(65, 5, 177)] cvd  text-2xl my-3 border-2 px-3 -skew-x-16 rounded-xl hover:bg-red-950'
                    data-aos='zoom-in'>
                    Download CV{" "}
                    <span>
                      <ion-icon name='download'></ion-icon>
                    </span>
                  </button>
                </a>
              </div>
              {/* <div className=" top-80 w-full p-5 border-r-2 border-t-2 h-40 rounded-tr-sm rounded-bl-sm"></div> */}
              <div className='h-60 border-2 rounded-bl-3xl rounded-tr-2xl myPic  bg-red-700 '>
                <div>
                  <form action=''></form>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
};

export default Section1;