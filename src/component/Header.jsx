import { useState } from 'react';
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
        <header className='text-red-600 m-0 px-0 w-full z-100' data-aos="fade-down" > 
            <nav className=' justify-between md:flex hidden  '>
               <div className='border-b-2  border-red-600 py-3'> 
                <h1 className='border-red-500 border-2  h1 px-3 rounded-sm -skew-x-16 rounded-tl-xl rounded-bl-xl font-extrabold hover:bg-red-950'> Samson</h1>
                </div>
                <div className='link border-2 text-red-500 border-b-0 rounded-t-xl flex flex-auto space-x-6 px-3 pt-1 mx-2  text-center justify-center'> 
                    <div className='link  flex space-x-2 w-8 overflow-x-hidden   '>
                    <p className=' '><ion-icon size="large" name="logo-whatsapp"></ion-icon></p>
                    <p className='hover:underline underline-offset-4 hover:font-extrabold'> <a   target="_blank" href="http://wa.me/2347082865002">whatsapp</a></p>
                    </div>
                    <div className='flex space-x-2 w-8 overflow-x-hidden link '>
                    <p><ion-icon size="large" name="logo-facebook"></ion-icon></p>
                    <p className='hover:underline underline-offset-4 hover:font-extrabold'><a  target="_blank" href="https://www.facebook.com/profile.php?id=100089490734680">facebook</a></p>
                    </div>
                    <div className='flex space-x-2 w-8 overflow-x-hidden link '>
                        <p><ion-icon size="large" name="logo-tiktok"></ion-icon></p>
                    <p className='hover:underline underline-offset-4 hover:font-extrabold'><a  target="_blank" href="https://www.tiktok.com/@grace.kid59?_t=ZM-8uuGNR2eBN7&_r=1">tik tok</a></p>
                    </div>
                    <div className='flex space-x-2 w-8 overflow-x-hidden link '>
                        <p><ion-icon size="large" name="logo-github"></ion-icon></p>
                    <p className='hover:underline underline-offset-4 hover:font-extrabold'><a  target="_blank" href="http://github.com/grace-kid">github</a></p>
                    </div>
                </div>
               <div className='flex space-x-2 py-3 border-b-2 font-bold  border-red-600 '>
                 <h3 className='border-red-600 border-2 rounded-sm px-3  h1  skew-x-16 hover:bg-red-950 '><a href="#about">about</a></h3>
               <h3 className='border-red-600 rounded-sm  h1 border-2 px-3 skew-x-16 hover:bg-red-950'><a href="#contact">contact</a></h3>
               <h3 className='border-red-600 rounded-sm border-2 h1 px-3 skew-x-16 rounded-tr-xl rounded-br-xl hover:bg-red-950' ><a href="#work">work</a></h3>
               </div>
            </nav>
            <div className='flex md:hidden justify-between z-200'>
                <div className='border-b-2 px-2    border-red-600 py-2' onClick={toggleContact}><ion-icon size="large" name={contact ?"person-circle-outline" : "person-circle-sharp" }></ion-icon></div>
                <div className='link border-2 text-red-500 border-b-0 rounded-t-xl flex flex-auto  p-2  text-center justify-center'> <h1 className=' font-bold  text-3xl'> Samson</h1></div>
                <div className='border-b-2 px-2  border-red-600 py-2'>   <button onClick={toggleNav}>
                        <ion-icon size="large" name={nav ? "menu-outline" : "close-outline"}></ion-icon>
                    </button></div>
            </div>
            <nav className='justify-end flex md:hidden z-100 fixed top-17  right-1'>
                <div className={nav ? 'hidden' : 'space-y-2 flex flex-col  end-0 bg-black border-l-2 text-2xl  ' }>
                    <a className=' p-2 bg-black border-b-2 border-red-600 hover:font-extrabold ' href="#about">about</a>
                    <a className=' p-2 bg-black border-b-2 border-red-600 hover:font-extrabold ' href="#contact">contact</a>
                    <a className=' p-2 bg-black border-b-2 border-red-600 hover:font-extrabold ' href="#work">work</a>
                </div>
            </nav>
            <nav className='justify-start flex md:hidden z-100  fixed  top-17 left-1'> 
                <div className={contact ? 'hidden' : 'space-y-2 flex flex-col  end-0 z-200  font-bold bg-black border-r-2  text-2xl ' }>
                    <a className=' bg-black border-b-2 border-red-600 hover:font-extrabold  p-2'  target="_blank" href="http://github.com/grace-kid">github</a>
                    <a className=' bg-black border-b-2 border-red-600 hover:font-extrabold  p-2'  target="_blank" href="https://www.tiktok.com/@grace.kid59?_t=ZM-8uuGNR2eBN7&_r=1">tik tok</a>
                    <a className=' bg-black border-b-2 border-red-600 hover:font-extrabold  p-2'  target="_blank" href="">facebook</a>
                    <a className=' bg-black border-b-2 border-red-600 hover:font-extrabold  p-2'  target="_blank" href="http://wa.me/2347082865002">whatsapp</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
