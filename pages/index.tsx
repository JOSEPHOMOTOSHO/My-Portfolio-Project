import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeUp, fading, routerAnimation, stagger } from "../animation";
const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        {" "}
        2 years experience building web applications with the MERN Stack. I
        adapt to the latest technological advancements and build software with
        them.
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //what is important is that we need to return a specific shape from the get server side props
  //calculation
  /*
make a request to our services end point
grab our services data
pass the sevices data as prop to the index component above
in the props in the index component we can access the services data
*/
  // const res = await fetch(`${process.env.VERCEL_URL}/api/service`);
  // const data = await res.json();
  // console.log("SERVER", data.services);
  // return {
  //   props: {
  //     services: data.services,
  //   },
  // };
};
