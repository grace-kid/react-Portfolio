import { useState } from 'react';
import { FaWhatsapp, FaGithub, FaTiktok, FaFacebook ,  FaBars,  FaBan, FaLink } from 'react-icons/fa';
import logo from '../assets/3.png'; // Import .docx file

import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
const Header = () => {
    const [ nav ,setNav] = useState (true);
    const toggleNav = () => {
        setNav(!nav);
    };
    const [ contact ,setContact] = useState (true);
    const toggleContact = () => {
        setContact(!contact);
    };
                useEffect(() => {
                    // Initialize AOS
                    AOS.init({
                      duration: 1000, // Duration of animation in milliseconds
                      easing: 'ease-in-out', // Easing type
                      once: false, // Run animation only once
                    });
                  }, []);
    return (
      <header
        className='text-[rgb(65, 5, 177)] m-0 px-0 w-full z-100'
        data-aos='fade-down'>
        <nav className=' justify-between md:flex hidden  '>
          <div className='border-b-2  border-[rgb(65, 5, 177)] py-3'>
              <img src={logo} className='inline h-7 w-7 border mr-2  rounded-full' alt="logo" />
            <h1 className='border-[rgb(65, 5, 177)] border-2 inline-block h1 px-3 rounded-sm -skew-x-16   font-extrabold hover:bg-purple-800  hover:text-white '>
              {" "}
              Samson
            </h1>
          </div>
          <div className='link1 border-2 text-[rgb(65, 5, 177)] border-b-0 rounded-t-xl flex flex-auto space-x-6 px-3 pt-1 mx-2  text-center justify-center'>
            <div className='link  flex space-x-2 w-8 overflow-x-hidden   '>
              <p className=' '>
                <FaWhatsapp size={30} />
              </p>
              <p className='hover:underline underline-offset-4 hover:font-extrabold'>
                {" "}
                <a target='_blank' href='http://wa.me/2347082865002'>
                  whatsapp
                </a>
              </p>
            </div>
            <div className='flex space-x-2 w-8 overflow-x-hidden link '>
              <p>
                <FaFacebook size={30} />
              </p>
              <p className='hover:underline underline-offset-4 hover:font-extrabold'>
                <a
                  target='_blank'
                  href='https://www.facebook.com/profile.php?id=100089490734680'>
                  facebook
                </a>
              </p>
            </div>
            <div className='flex space-x-2 w-8 overflow-x-hidden link '>
              <p>
                <FaTiktok size={30} />
              </p>
              <p className='hover:underline underline-offset-4 hover:font-extrabold'>
                <a
                  target='_blank'
                  href='https://www.tiktok.com/@grace.kid59?_t=ZM-8uuGNR2eBN7&_r=1'>
                  tik tok
                </a>
              </p>
            </div>
            <div className='flex space-x-2 w-8 overflow-x-hidden link '>
              <p>
                <FaGithub size={30} />
              </p>
              <p className='hover:underline underline-offset-4 hover:font-extrabold'>
                <a target='_blank' href='http://github.com/grace-kid'>
                  github
                </a>
              </p>
            </div>
          </div>
          <div className='flex space-x-2 py-3 border-b-2 font-bold  border-[rgb(65, 5, 177)] '>
            <h3 className='border-[rgb(65, 5, 177)] border-2 rounded-sm px-3  h1  skew-x-16 hover:bg-purple-800  hover:text-white '>
              <a href='#about'>about</a>
            </h3>
            <h3 className='border-[rgb(65, 5, 177)] rounded-sm  h1 border-2 px-3 skew-x-16 hover:bg-purple-800  hover:text-white '>
              <a href='#contact'>contact</a>
            </h3>
            <h3 className='border-[rgb(65, 5, 177)] rounded-sm border-2 h1 px-3 skew-x-16 rounded-tr-xl rounded-br-xl hover:bg-purple-800  hover:text-white '>
              <a href='#work'>work</a>
            </h3>
          </div>
        </nav>
        <div className='flex md:hidden bot3 justify-between z-200'>
          <div
            className='border-b-2 px-2    border-[rgb(65, 5, 177)] py-2'
            onClick={toggleContact}>
            <button className='text-white'>
              {contact ? <FaLink size={30} /> : <FaBan size={30} />}
            </button>
          </div>
          <div className='link border-2 text-[rgba(233, 229, 241, 1)] border-b-0 rounded-t-xl flex flex-auto  p-2  text-center justify-center'>
            {" "}
            <h1 className=' font-bold  text-3xl'> Samson</h1>
          </div>
          <div className='border-b-2 px-2  border-[rgb(65, 5, 177)] py-2'>
            {" "}
            <button className='text-white' onClick={toggleNav}>
              {nav ? <FaBars size={30} /> : <FaBan size={30} />}
            </button>
          </div>
        </div>
        <nav className='justify-end   flex md:hidden z-100 fixed top-17  right-1'>
          <div
            className={
              nav
                ? "hidden"
                : "space-y-2 flex flex-col rounded-bl-2xl font-bold end-0 bg-black border-l-2 text-2xl  "
            }>
            <a
              className=' p-2 bg-white border-b-2 border-[rgb(65, 5, 177)] hover:font-extrabold '
              href='#about'>
              <span className='text-black '>about</span>
            </a>
            <a
              className=' p-2 bg-white border-b-2 border-[rgb(65, 5, 177)] hover:font-extrabold '
              href='#contact'>
              <span className='text-black'>contact</span>
            </a>
            <a
              className=' p-2 bg-white border-b-2 rounded-bl-2xl border-[rgb(65, 5, 177)] hover:font-extrabold '
              href='#work'>
              <span className='text-black'>work</span>
            </a>
          </div>
        </nav>
        <nav className='justify-start flex  md:hidden z-100  fixed  top-17 left-1'>
          <div
            className={
              contact
                ? "hidden"
                : "space-y-2 flex flex-col rounded-br-2xl end-0 z-200  font-bold bg-black border-r-2  text-2xl "
            }>
            <a
              className=' bg-white  border-b-2 border-[rgb(65, 5, 177)] hover:font-extrabold  p-2'
              target='_blank'
              href='http://github.com/grace-kid'>
              <span className='text-black'>github</span>
            </a>
            <a
              className=' bg-white  border-b-2 border-[rgb(65, 5, 177)] hover:font-extrabold  p-2'
              target='_blank'
              href='https://www.tiktok.com/@grace.kid59?_t=ZM-8uuGNR2eBN7&_r=1'>
              <span className='text-black'>tik tok</span>
            </a>
            <a
              className=' bg-white  border-b-2 border-[rgb(65, 5, 177)] hover:font-extrabold  p-2'
              target='_blank'
              href='https://www.facebook.com/profile.php?id=100089490734680'>
              <span className='text-black'>facebook</span>
            </a>
            <a
              className=' bg-white border-b-2 rounded-br-2xl border-[rgb(65, 5, 177)] hover:font-extrabold  p-2'
              target='_blank'
              href='http://wa.me/2347082865002'>
              <span className='text-black'>whatsapp</span>
            </a>
          </div>
        </nav>
      </header>
    );
};

export default Header;
