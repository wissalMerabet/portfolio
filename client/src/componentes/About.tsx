import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-BgPurpleF container mx-auto space-x-4 p-12 mt-32 rounded-2xl" id="about">
        <h1 className="font-bold text-bgYellow text-3xl text-center uppercase mb-8" data-aos="fade-down"> 
            About 
        </h1>

        <div className="flex flex-col items-center md:flex-row md:space-x-10 ">
            <img
                src="./assets/navBarLogo.png"
                alt="About img"
                className="w-1/2 md:w-1/3 mb-8 md:mb-0"
                data-aos="fade-up"
            />
            <ul className="space-y-8 md:w-2/3 ">
                <li className="bg-BgPurpleC flex items-center space-x-5 p-5 rounded-xl shadow-custom-yellow" data-aos="fade-down" >
                    <img src="./assets/frontend.png" alt="" className="w-16 h-16"/>
                    <div>
                        <h3 className="font-bold mb-1 text-lg md:text-xl">Frontend Developer</h3>
                        <p>
                            I develop responsive, high-performance websites that ensure an excellent user experience.
                        </p>
                    </div>
                </li>
                <li className="bg-BgPurpleC flex items-center space-x-5 p-5 rounded-xl shadow-custom-yellow" data-aos="fade-down" data-aos-delay="200">
                    <img src="./assets/backend.png" alt="" className="w-16 h-16"/>
                    <div>
                        <h3 className="font-bold mb-1 text-lg md:text-xl ">Backend Developer</h3>
                        <p>
                            I create fast and reliable backend systems and APIs to support robust applications.
                        </p>
                    </div>
                </li>
                <li className="bg-BgPurpleC flex items-center space-x-5 p-5 rounded-xl shadow-custom-yellow" data-aos="fade-down" data-aos-delay="400">
                    <img src="./assets/dsigner.png" alt="" className="w-16 h-16"/>
                    <div>
                        <h3 className="font-bold mb-1 text-lg md:text-xl ">Designer</h3>
                        <p>
                            I design attractive and user-friendly landing pages, and build comprehensive design systems.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
