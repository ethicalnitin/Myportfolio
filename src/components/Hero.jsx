import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Resume from "../assets/NitinSDE.pdf";
import yome from "../assets/yome.png";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 flex items-center justify-center min-h-screen">
      <motion.div  whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }} className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center lg:items-start">
       
        <div className="flex-1 flex justify-center lg:justify-start">
        <motion.img
            src={yome}
            alt="Mine"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay:1.2 }}
            className="w-150 h-auto" // 
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-8">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-6xl font-thin tracking-tight lg:mt-1 lg:text-8xl text-white text-center lg:text-left"
          >
            Nitin Srivastava
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center lg:text-left"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-white text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>

          <div className="flex justify-center lg:justify-start mt-8">
            <motion.a
              href={Resume}
              download="NitinResume.pdf"
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
