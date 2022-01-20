import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="/myimage.jpeg"
        alt="Omotosho Joseph"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan ">
        <span className="text-green">Omotosho </span> Joseph
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        FullStack Engineer
      </p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around mx-auto my-5 text-green-500 md:w-full">
        <a title="mysocial" href="https://www.linkedin.com/in/omotosho-joseph/">
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
        <a title="mysocial" href="https://github.com/JOSEPHOMOTOSHO">
          <AiFillGithub className="w-6 h-6 cursor-pointer" />
        </a>
        <a title="mysocial" href="https://twitter.com/OmotoshoJoey">
          <AiFillTwitterCircle className="w-6 h-6 cursor-pointer" />
        </a>
      </div>
      {/* my home  address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Rivers State, Nigeria</span>
        </div>
        <p className="my-2">Joseph.omotosho98@gmail.com</p>
        <p className="my-2">08168029970</p>
      </div>

      {/* button */}
      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full cursor-pointer bg-gradient-to-r from-green to to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:joseph.omotosho98@gmail.com")}
      >
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to to-blue-400 ">
        Light UI
      </button>
    </div>
  );
};

export default Sidebar;
