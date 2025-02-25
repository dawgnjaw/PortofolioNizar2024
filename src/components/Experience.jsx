import { EXPERIENCES } from "../constants";
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 2, delay: .5 }} 
        className="my-20 text-center text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.2, delay: .5 }}
                    className="w-full lg:w-1/4">
                        <p 
                        className="mb-2 text-white text-sm">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: .9, delay: .5 }}
                    className="w-full max-w-xl kg:w-3/4">
                        <h6 className="mb-2 font-bold">
                            {experience.role} - <span className="font-light text-purple-300"> {experience.company} </span>
                        </h6>
                        <p className="text-sm font-light mb-4"> {experience.description} </p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-700">
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

export default Experience
