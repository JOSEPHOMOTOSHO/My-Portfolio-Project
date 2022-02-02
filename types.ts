import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  image_path: string;
  description: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  tech_tags: string[];
}

export type Category =
  | "node"
  | "express"
  | "nest"
  | "mongoDB"
  | "postgresql"
  | "typescript"
  | "react"
  | "html"
  | "css";
