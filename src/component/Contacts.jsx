import { useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaTiktok,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const resetForm = () => {
      setFormData({
        name: '',
        email: '',
        title: ''
      });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const userID = import.meta.env.VITE_USER_ID;

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
            resetForm();
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
      <div className='  text-white md:flex bot1   justify-around  '>
        <div className='bts w-full flex '>
          <div
            className=' max-w-screen   '
            data-aos='zoom-in'
            data-aos-offset='200'>                              
            <footer className=' min-w-screen text-white pb-10 font-inter'>
              <div>
                <div className='flex justify-center items-center md:gap-24 gap-10 m-10 flex-wrap'>
                  <div
                    className='cards w-70'
                    data-aos='flip-right'
                    data-aos-offset='200'>
                    <div className='cards22 h-full'>
                      <form className='form' onSubmit={handleSubmit}>
                        <p className='mt-5'>Get in touch</p>
                        <h1 className='text-4xl font-extrabold'>Contact</h1>
                        <label htmlFor='name'>your name</label>
                        <div className='field'>
                          <svg
                            viewBox='0 0 16 16'
                            fill='currentColor'
                            height='16'
                            width='16'
                            xmlns='http://www.w3.org/2000/svg'
                            className='input-icon'>
                            <path d='M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z'></path>
                          </svg>
                          <input
                            type='text'
                            placeholder="what's is your Name?"
                            id='name'
                            name='name'
                            className='input-field'
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <label htmlFor='email'>your email</label>

                        <div className='field'>
                          <svg
                            viewBox='0 0 16 16'
                            fill='currentColor'
                            height='16'
                            width='16'
                            xmlns='http://www.w3.org/2000/svg'
                            className='input-icon'>
                            <path d='M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z'></path>
                          </svg>
                          <input
                            type='email'
                            placeholder="what's is your Email?"
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='input-field'
                            required
                          />
                        </div>
                        <label htmlFor='message'>your massage</label>

                        <div className='field'>
                          <textarea
                            id='message'
                            name='title'
                            placeholder='what you want to say'
                            value={formData.title}
                            onChange={handleChange}
                            className='input-field h-20'
                            required></textarea>
                        </div>

                        <button type='submit' className='button3'>
                          send
                        </button>
                      </form>
                    </div>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl my-5'>Quick as</h2>
                    <p>
                      <button className='hover:underline'>
                        <a href='#about'>About us</a>
                      </button>
                    </p>
                    <p>
                      <button className='hover:underline'>
                        <a href='#work'>Work</a>
                      </button>
                    </p>

                    <p>
                      <button className='hover:underline'>
                        <a href='#contact'>Contact</a>
                      </button>
                    </p>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl my-5'>Contact Us</h2>
                    <div className='flex my-3 gap-5'>
                      <FaEnvelope />
                      <p>samsoniloha@gmail.com</p>
                    </div>
                    <div className='flex my-3 gap-5'>
                      <FaPhone />
                      <p>+ (234) 7082865002</p>
                    </div>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl my-5'>Follow Us</h2>
                    <div className='flex justify-between gap-3'>
                      <a
                        className='font-extrabold text-2xl hover:text-emerald-300'
                        target='_blank'
                        href='https://www.facebook.com/profile.php?id=100089490734680'>
                        <FaFacebook />
                      </a>

                      <a
                        className='font-extrabold text-2xl hover:text-emerald-300'
                        target='_blank'
                        href='http://github.com/grace-kid'>
                        <FaGithub />
                      </a>
                      <a
                        className='font-extrabold text-2xl hover:text-emerald-300'
                        target='_blank'
                        href='https://www.tiktok.com/@grace.kid59?_t=ZM-8uuGNR2eBN7&_r=1'>
                        <FaTiktok />
                      </a>
                      <a
                        className='font-extrabold text-2xl hover:text-emerald-300'
                        target='_blank'
                        href='http://wa.me/2347082865002'>
                        <FaWhatsapp />
                      </a>
                    </div>
                    <div className='mt-10'>
                      <h1>Newsletter</h1>
                      <div className='flex rounded-sm'>
                        <input
                          type='email'
                          className='placeholder:p-2 rounded-l-sm bg-white text-black p-2 placeholder:text-gray-700'
                          name='email'
                          placeholder='your email'
                          id=''
                        />
                        <div className='bg-[#008D27] h-10 w-10 rounded-r-sm flex justify-center items-center'>
                          {" "}
                          Send
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <p className='px-10'>
                    ©2025 Gracekid tech. All rights reserved
                  </p>
                </div>
              </div>
            </footer>{" "}
          </div>
        </div>
      </div>
    );
};

// const Loader = () => {
//   return (
//     <div id='contact' className=' flex  justify-center'>

//     </div>
//   );
// }



export default Contacts ;