import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  route: string;
  name: string;
  setActiveItem: Function;
}> = ({ activeItem, route, name, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("About");
    }
    if (pathname === "/projects") {
      setActiveItem("Project");
    }
    if (pathname === "/resume") {
      setActiveItem("Resume");
    }
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          name="About"
          route="/"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          route="/resume"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Project"
          route="/projects"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default NavBar;
