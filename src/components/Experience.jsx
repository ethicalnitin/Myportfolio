import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const cont = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay }
  }
});

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Work <span className="text-gray-600">Experience</span>
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mb-2 text-sm text-neutral-400"
              >
                {experience.year}
              </motion.p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                variants={cont(0)}
                initial="hidden"
                whileInView="visible"
                className="text-white mb-2 font-semibold"
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>

              <motion.p
                variants={cont(0)}
                initial="hidden"
                whileInView="visible"
                className="mb-4 text-neutral-400"
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.4 }}
                  className="mr-2 mt-4 rounded bg-neutral-400 px-2 py-1 text-white-500"
                >
                  {tech}
                </motion.span>
           
              ))}
                 </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
