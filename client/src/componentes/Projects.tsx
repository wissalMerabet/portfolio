import projects from "../data/Projects.json";
import { useEffect } from 'react';
import { CardProject } from "./CardProject";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto my-32 text-center " id="project">
      <h1 className="font-bold text-bgYellow text-3xl uppercase mb-12" data-aos="fade-up">
        projects
      </h1>
      <div className="flex flex-col space-y-8 space-x-0 m-9 md:flex-row md:space-x-5 md:space-y-0" data-aos="fade-left">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
