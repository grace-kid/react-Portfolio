import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './Testimonials.css';
import  { useEffect } from 'react';
const testimonialsData = [
    {
        name: 'John Doe',
        title: 'CEO of Company',
        testimonial: 'This is an amazing service! Highly recommend to everyone.',
        image: 'path/to/image1.jpg'
    },
    {
        name: 'Jane Smith',
        title: 'Marketing Director',
        testimonial: 'After samson optimized our website, our traffic increased by 50%. We can\'t thank him enough!',
        image: 'path/to/image2.jpg'
    },
    {
        name: 'Sam Wilson',
        title: 'Product Manager',
        testimonial: 'I\'ve never met a web developer who truly cares about their clients\' success like Samson does.',
        image: 'path/to/image3.jpg'
    },
    {
        name: 'chinedum Blessing',
        title: 'Principal of Doyen British High School',
        testimonial: 'Samson  designed a great flier for our school that attracted so many students to register for our summer holiday lesson, He is good at what he does for people.',
        image: 'path/to/image3.jpg'
    }
];

  function Testimonials() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000, // Duration of animation in milliseconds
          easing: 'ease-in-out', // Easing type
          once: false, // Run animation only once
        });
      }, []);
    return (
<div className='bg-[url(/src/assets/pic9.avif)] bg-cover mt-10 md:min-h-screen bg-center bg-no-repeat '>
    <div  className='p-10 space-y-5 blend1  ' data-aos="zoom-in" data-aos-offset="200">
        <p className=' text-xl md:text-2xl font-bold'>what others say</p>
        <h1 className=" text-3xl md:text-8xl font-extrabold underline underline-offset-6">Testimonials</h1>
    </div>
<div className=" flex md:flex-rol flex-wrap justify-center space-y-8    bg-cover  blend1 text-white">
        {testimonialsData.map(({ name, title, testimonial }, index) => (
    <div href="#" key={index} className="group relative  block m-2 my-10  md:h-64 "data-aos-offset="200" data-aos="fade-up" >
 <div className="book  p-10 "  >
 <p className="testimonial-text pp">{testimonial}</p>
    <div className="cover testimonial flex flex-col text-center">
    <h3 className="testimonial-nam  text-3xl mb-10 underline underline-offset-2">@{name}</h3> 
    <h4 className="testimonial-title text-2xl ">{title}</h4>
    </div>
   </div>
    </div>
   ))}
    </div>
    
</div>
); }
testimonialsData.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Testimonials;