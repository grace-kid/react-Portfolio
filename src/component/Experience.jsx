// import "./Experience.css";
// import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
const Experience = () => {
            useEffect(() => {
                // Initialize AOS
                AOS.init({
                  duration: 1000, // Duration of animation in milliseconds
                  easing: 'ease-in-out', // Easing type
                  once: false, // Run animation only once
                });
              }, []);
return (
    <div className="experience">
        <section className="education md:p-4" id="education" data-aos="fade-up" data-aos-offset="200"> 
            <p className="text-xl text-center">What I have done so far</p>
            <p className="text-5xl text-center my-5">Work Experience</p>

            <div className="timeline-items">
                <div className="timeline-item"  data-aos="fade-up" data-aos-offset="200">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">August 2020 - February 2021</div>
                    <div className="timeline-content md:hover:scale-110">
                        <h3 className="font-extrabold">Brand Designer</h3>
                        <p>Mhuphy Concept</p>
                        <ul className="space-y-3 font-extrabold list-disc">
                            <li>Logo Design: Creating and designing logos that represent the core values and identity of the brand.</li>
                            <li>Collaboration: Working closely with other members of the creative team, including copywriters, marketers, and web developers, to ensure visual consistency across all aspects of the brand.</li>
                            <li>Client Communication: Interacting with clients or stakeholders to understand their vision, gather feedback, and present design concepts.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item"  data-aos="fade-up" data-aos-offset="200">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Feb 2021 - Dec 2021</div>
                    <div className="timeline-content md:hover:scale-110">
                        <h3 className="font-extrabold">Graphics Designer</h3>
                        <p>Macbas DE-Magnet</p>
                        <ul className="space-y-3 font-extrabold list-disc">
                            <li>Visual Design: Creating visually appealing and engaging designs for various mediums, including print, digital, and multimedia.</li>
                            <li>Branding and Identity: Designing logos, brand guidelines, and visual identity elements that represent a company&apos;s personality and values.</li>
                            <li>Photo Editing and Manipulation: Enhancing, retouching, and manipulating photos to improve their quality and align them with the overall design.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-offset="200">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Mar 2022 - Dec 2022</div>
                    <div className="timeline-content md:hover:scale-110">
                        <h3 className="font-extrabold">Web Developer</h3>
                        <p>Innovation Growth Hub</p>
                        <ul className="space-y-3 font-extrabold list-disc">
                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-offset="200">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Jan 2023 - Present</div>
                    <div className="timeline-content md:hover:scale-110">
                        <h1 className="font-extrabold">Software Developer</h1>
                        <p>Freelance</p>
                        <ul className="space-y-3 font-extrabold list-disc">
                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                            <li>Client Interaction: Communicating with clients or stakeholders to provide updates, gather feedback, and ensure software aligns with their expectations.</li>
                            <li>Problem-Solving: Analyzing complex problems and finding creative solutions through coding and algorithmic techniques.</li>
                            <li>Continuous Learning: Staying updated with the latest technologies, tools, and industry trends to improve skills and bring innovation to projects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
};

export default Experience;