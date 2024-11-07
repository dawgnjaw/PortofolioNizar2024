import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { IoLogoLaravel } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    intial: {y: -5},
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(.8)}
            intial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            intial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl text-gray-200"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            intial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-5xl text-purple-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            intial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoLaravel className="text-5xl text-red-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            intial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl text-green-7  00"/>
            </motion.div>
            <motion.div
            variants={iconVariants(.8)}
            intial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-5xl text-blue-600"/>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies
