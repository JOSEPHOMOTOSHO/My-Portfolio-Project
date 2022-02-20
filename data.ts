import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
];

export const technologies: ISkill[] = [
  {
    name: "Node.js",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Express.js",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Nest.js",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Postgresql",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Typescript",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "GraphQL",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Docker",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML5",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS3",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Redux",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Version Control with Git and Github",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "Test-Driven Development",
    level: "100%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Task Management App",
    description:
      "This app alllows a user to sign up and create tasks to be done",
    image_path: "/images/taskAppNest.png",
    deployed_url: "https://josephomotosho.github.io/Task-App/#/",
    github_url: "https://github.com/JOSEPHOMOTOSHO/TaskManagementAppInNestJs",
    category: ["react", "node", "nest"],
    tech_tags: ["React", "Nest"],
  },
  {
    id: 2,
    name: "Travel Site",
    description: "A Sample travel site landing page",
    image_path: "/images/travelsite.png",
    deployed_url: "https://joseph-travel-site.netlify.app/#our-beginning",
    github_url: "https://github.com/JOSEPHOMOTOSHO/travel-site",
    category: ["html", "css"],
    tech_tags: ["Html", "Css"],
  },
  {
    id: 3,
    name: "E-Market Place",
    description: "A Basic E-commerce App",
    image_path: "/images/e-commerce.png",
    deployed_url: "https://doe-shopify.netlify.app/",
    github_url: "https://github.com/JOSEPHOMOTOSHO/MarketPlaceApp",
    category: ["react", "node", "express"],
    tech_tags: ["React", "Node"],
  },
  {
    id: 3,
    name: "Comfy E-commerce App",
    description: "A Comfy E-commerce App",
    image_path: "/images/comfy.png",
    deployed_url: "https://agitated-knuth-f3be72.netlify.app/",
    github_url: "https://github.com/JOSEPHOMOTOSHO/comfy-E-commerce",
    category: ["react"],
    tech_tags: ["React"],
  },
];
