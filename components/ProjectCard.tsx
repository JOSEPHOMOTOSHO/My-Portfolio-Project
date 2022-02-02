import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "../animation";
const ProjectCard: FunctionComponent<{
  value: IProject;
  setShowDetails: (id: number | null) => void;
  showDetails: number | null;
}> = ({
  value: {
    id,
    name,
    image_path,
    description,
    deployed_url,
    github_url,
    tech_tags,
  },
  setShowDetails,
  showDetails,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto grid-cols-2 p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name} /> */}
            <motion.div variants={fadeUp} className="border-4 border-gray-100">
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeUp}
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 "
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {tech_tags.map((tech, index) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            type="button"
            title="Add"
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} onClick={() => setShowDetails(null)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;