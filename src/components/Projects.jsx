import { PROJECTS } from "../constants";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-x-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: .5 }}
                className="w-full lg:w-1/4">
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    width={350}
                    height={350}
                    className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-white">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-White ">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Projects
