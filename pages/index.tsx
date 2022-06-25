import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeUp, routerAnimation, stagger } from "../animation";
import Head from "next/head";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Omotosho Joseph</title>
      </Head>
      <h5 className="my-3 font-medium">
        {" "}
        I am a passionate software developer with 2 years of experience, and I am committed to addressing problems
          by converting business requirements into efficient and scalable software solutions. I
        adapt to the latest technological advancements and build software with
        them. Always eager to learn
      </h5>
      <div
        className="flex-grow p-4 mt-4 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What i offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <motion.div
              variants={fadeUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col"
              key={index}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;



