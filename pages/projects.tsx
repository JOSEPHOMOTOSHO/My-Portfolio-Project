import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectsNavBar } from "../components/ProjectsNavBar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { motion } from "framer-motion";
import { fadeUp, routerAnimation, stagger } from "../animation";
import Head from "next/head";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Omotosho Joseph</title>
      </Head>
      <ProjectsNavBar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200 "
            variants={fadeUp}
            key={project.id}
          >
            <ProjectCard
              value={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
