import projects from "../data/Projects.json";
import { CardProject } from "./CardProject";


export const Projects = () => {

  return (
    <div className="container mx-auto my-32 text-center " id="project">
      <h1 className="font-bold text-bgYellow text-3xl uppercase mb-12">
        projects
      </h1>
      <div className="flex flex-col space-y-8 space-x-0 m-9 md:flex-row md:space-x-5 md:space-y-0">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
