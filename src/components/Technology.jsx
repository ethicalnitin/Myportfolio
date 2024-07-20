import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { motion } from "framer-motion";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity: 1 , y : 0}} initial = {{opacity : 0 , y : -100}} transition={{duration : 1.5}}  className="my-20 text-center text-4xl text-white">
        Technologies
      </motion.h2>

      <motion.div  whileInView={{opacity: 1 , x : 0}} initial = {{opacity : 0 , x : -100}} transition={{duration : 0.5}}  className="flex flex-wrap justify-center items-center gap-4">
        <motion.div variants={IconVariant(2)} initial='initial' animate='animate' className="rounded-2xl border bg-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={IconVariant(2.2)} initial='initial' animate='animate' className="rounded-2xl border bg-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-white" />
        </motion.div>
        <motion.div variants={IconVariant(2.4)} initial='initial' animate='animate' className="rounded-2xl border bg-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={IconVariant(2.6)} initial='initial' animate='animate' className="rounded-2xl border bg-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-600" />
        </motion.div>
        <motion.div variants={IconVariant(2.8)} initial='initial' animate='animate' className="rounded-2xl border bg-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={IconVariant(3)} initial='initial' animate='animate' className="rounded-2xl border bg-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
