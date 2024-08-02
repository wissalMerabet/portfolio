import skills from '../data/Skills.json';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      
  return (
    <div className="container mx-auto  mt-32 " id="skills">
        <h1 className="font-bold text-bgYellow text-3xl text-center uppercase mb-8" data-aos="fade-down"> Skills</h1>

        <div className=" grid grid-cols-2 p-8 md:grid-cols-5">
            {skills.map((skill , id) => {
                return(
                    <div key={id} className="flex justify-center items-center">
                        <div className="bg-BgPurpleF m-5 p-8 rounded-full ">
                            <img src={skill.imageSrc} alt="skill img"  className="max-w-full h-auto"/>
                        </div>
                        
                    </div>
                );
            })}

        </div>

    </div>
  );
}
