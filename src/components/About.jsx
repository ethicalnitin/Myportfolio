import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay }
  }
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{opacity: 1 , y : 0}} initial = {{opacity : 0 , y : -100}} transition={{duration : 1.5}} className="text-center my-20 text-4xl text-white">
        About <span className="text-gray-700">me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 4 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="mix-blend-screen rounded-lg"
              style={{ maxWidth: "50%", height: "auto" }}
              src={about}
              alt="about"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="p-0 flex items-center justify-center lg:justify-start">
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
