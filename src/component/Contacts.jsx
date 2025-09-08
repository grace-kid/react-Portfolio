import { useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';

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
        <div className='  text-white md:flex bot1   justify-around p-10 ' >

<div className="cards" data-aos="flip-right" data-aos-offset="200"> 
  <div className="cards22 h-full">

    <form className="form" onSubmit={handleSubmit}>
      <p className='mt-5' >Get in touch</p>
      <h1  className='text-4xl font-extrabold'>
      Contact
    </h1>
    <label htmlFor="name">your name</label>
      <div className="field">
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="input-icon"
        >
          <path
            d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
          ></path>
        </svg>
                  <input
                    type="text"
                    placeholder="what's is your Name?"
                    id="name"
                    name="name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
      </div>
      <label htmlFor="email">your email</label>

      <div className="field">
      <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="input-icon"
        >
          <path
            d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
          ></path>
        </svg>
        <input
                    type="email"
                    placeholder="what's is your Email?"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                />     

                 </div>
    <label htmlFor="message">your massage</label>

                 <div className="field">

        <textarea
                    id="message"
                    name="title"
                    placeholder="what you want to say"
                    value={formData.title}
                    onChange={handleChange}
                    className="input-field h-20"
                    required
                ></textarea>
      </div>           

      <button type='submit' className="button3">send</button>
    </form>
  </div>
</div>
            {/* <Loader /> */}
        </div>
    );
};

const Loader = () => {
  return (
    <div id='contact' className=' flex  justify-center'>
<div className="section-banner max-w-screen mt-20  " data-aos="zoom-in" data-aos-offset="200">
  <div id="star-1">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-2">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  {/* <div id="star-3">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div> */}

  <div id="star-4">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-5">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-6">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-7">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>
</div>


    </div>
  );
}



export default Contacts ;