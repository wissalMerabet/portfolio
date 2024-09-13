import projects from "../data/Projects.json";
import { CardProject } from "./CardProject";


export const Projects = () => {

  return (
    <div className="container mx-auto my-32 text-center " id="project">
      <h1 className="font-bold text-bgYellow text-3xl uppercase mb-12">
        projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-16 ">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
