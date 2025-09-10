import { FaWhatsapp, FaGithub, FaTiktok, FaFacebook, FaEye, FaDownload } from 'react-icons/fa';
import pic11 from '../assets/pic11.jpg'; // Import image
import CV from '../assets/CV.pdf'; // Import .docx file

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Intro = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing type
      once: false, // Run animation only once
    });
  }, []);

  return (
    <div
      id='about'
      className='intro flex flex-col items-start justify-start min-h-screen bg-black text-[#4105b1]'>
      <div className='intro-box w-full m-0 md:text-center text-left'>
        {/* Title */}
        <div  className='w-full flex justify-start md:justify-center px-10'>
        <h1
          className='md:text-8xl text-left font-bold flex md:my-8 underline text-white'
          data-aos='fade-up'
          data-aos-offset='200'>
          Ab
          <span>
            <img
              data-aos='fade-down'
              data-aos-offset='300'
              src={pic11} // Image imported correctly
              alt='Samson'
              className='md:w-22 md:h-22 rounded-full border-2 h-10 w-10 border-white mb-4 shadow-lg transform transition duration-500 hover:scale-110 animate-bounce'
            />
          </span>
          ut Me
        </h1>
        </div>

        {/* Description */}
        <p
          className='md:text-center text-left  md:text-6xl mb-4 md:mx-0 mx-10'
          data-aos='fade-up'
          data-aos-offset='200'>
          Hello! My name is Samson. I am a passionate software developer with
          experience in building web applications using modern technologies. I
          enjoy solving complex problems and continuously learning new skills to
          improve my craft.
        </p>

        {/* Social Media Links */}
        <div className='flex space-x-4 mb-8 mt-8 md:text-2xl'>
          <a
            href='http://wa.me/2347082865002'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-800 transition duration-300 fff shadow-indigo-50'>
            <FaWhatsapp size={30} />
          </a>
          <a
            href='http://github.com/grace-kid'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-600 transition fff duration-300'>
            <FaGithub size={30} />
          </a>
          <a
            href='https://www.tiktok.com/@grace.kid59?_t=ZM-8uuGNR2eBN7&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-600 transition fff duration-300'>
            <FaTiktok size={30} />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100089490734680'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-600 transition fff duration-300'>
            <FaFacebook size={30} />
          </a>
        </div>

        {/* CV Buttons */}
        <div className='md:flex space-y-4 text-white space-x-4 md:space-x-0 md:space-y-0 justify-center'>
          {/* View CV Button */}
          <a href={CV} target='_blank' rel='noopener noreferrer'>
            <button className='border-2 cv cvd border-[#4105b1] px-2 ml-2 text-2xl mr-1 rounded-sm -skew-x-16 rounded-tl-xl rounded-bl-xl font-extrabold hover:bg-[#4105b1]'>
              View CV{" "}
              <span>
                <FaEye size={30} />
              </span>
            </button>
          </a>

          {/* Download CV Button */}
          <a href={CV} download='CV.docx'>
            <button className='border-[#4105b1] cv cvd rounded-sm border-2 px-2 ml-2 -skew-x-16 rounded-tr-xl rounded-br-xl hover:bg-[#4105b1]'>
              Download CV{" "}
              <span>
                <FaDownload size={30} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;