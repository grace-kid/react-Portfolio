import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const skills = [
    { name: 'Web Developer', logo: 'src/assets/pic13.webp' },
    { name: 'Graphics Designer', logo: 'src/assets/pic15.webp' },
    { name: 'Brand Designer', logo: 'src/assets/pic16.webp' },
    { name: 'Content Creator', logo: 'src/assets/pic17.webp' },
];

const Skills = () => {
         useEffect(() => {
                 // Initialize AOS
                 AOS.init({
                   duration: 1000, // Duration of animation in milliseconds
                   easing: 'ease-in-out', // Easing type
                   once: false, // Run animation only once
                 });
               }, []);
    return (
        <div className="flex skills-body z-10  flex-wrap justify-center gap-6 p-6">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="w-64 h-64 z-10   rounded-lg shadow-lg transform transition duration-500 hover:scale-0.1 hover:shadow-2xl"
                    data-aos="flip-left" data-aos-offset="200"
                >
                    <div className="flex z-10 top-0 flex-col card1 logo  items-center justify-center h-full p-4">
                        <img src={skill.logo} alt={`${skill.name} logo`} className="w-24 z-10 img h-24 mb-4" />
                        <h2 className="text-2xl text-center  z-10  test  font-semibold">{skill.name}</h2>
                        <div className="w-64 skills-box h-64 absolute z-0 border-2 border-b-red-500 border-t-red-300 border-r-red-400  rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl    "></div>
                    </div>
                </div>
            ))}
           
        </div>
    );
};

export default Skills;