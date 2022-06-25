import Bar from "../components/Bar";
import { technologies } from "../data";
import { motion } from "framer-motion";
import { fading, routerAnimation } from "../animation";
import Head from "next/head";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2 "
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Omotosho Joseph</title>
      </Head>

      <div className="grid gap-6 md:grid-cols-2">
        {/* education and technologies */}
        <div>
          <motion.div variants={fading} initial="initialY" animate="animateY">
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Industrial Physics - Renewable Energy
              </h5>
              <p className="font-semibold">Covenant University (2014 - 2018)</p>
            </div>
          </motion.div>

          <div className="flex flex-col h-96 ">
            <h5 className="my-3 text-2xl font-bold">Technologies</h5>
            <div className="h-full my-2 overflow-y-scroll scrollbar-hide ">
              {technologies.map((technology) => (
                <Bar data={technology} key={technology.name} />
              ))}
            </div>
          </div>
        </div>
        {/* div for everything experience below */}
        <motion.div variants={fading} initial="initialX" animate="animateX">
          <div className="flex flex-col h-full ">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="overflow-y-scroll h-116 ">
              <div>
                <h5 className="my-2 text-xl font-bold">
                 Software Engineer
                </h5>
                <p className="font-semibold">
                  Kobo360 (January 2022 - Present)
                </p>
                <p className="my-3">
                  Developing applications, Debugging and testing code
                </p>
              </div>
              <div>
                <h5 className="my-2 text-xl font-bold">
                  Software Engineer
                </h5>
                <p className="font-semibold">
                  Decagon (June 2021 - December 2021)
                </p>
                <p className="my-3">
                  Worked on projects for multiple clients using NodeJs,
                  ReactJs,Typescript, Express, and MongoDB.
                </p>
              </div>
              <div>
                <h5 className="my-2 text-xl font-bold">
                  Tech Tutor and  Software Engineer
                </h5>
                <p className="font-semibold">
                  9jaCodeKids Academy (November 2019 - June 2021 )
                </p>
                <p className="my-3">
                  <ul>
                    <li> Built freelance projects for personal clients using NodeJs,
                  ReactJs,Typescript, Express, and MongoDB</li>
                  <li>Built a Student Management System.</li>
                  </ul>
          
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
