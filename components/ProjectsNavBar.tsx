import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) {
    className += " text-green";
  }

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}{" "}
    </li>
  );
};

export const ProjectsNavBar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="nest" {...props} />
      <NavItem value="mongoDB" {...props} />
      <NavItem value="postgresql" {...props} />
      <NavItem value="typescript" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="html" {...props} />
      <NavItem value="css" {...props} />
    </div>
  );
};
