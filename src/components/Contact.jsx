import { CONTACT } from "../constants";
import Location from './Location';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay }
  }
});

const Contact = () => {
  return (
    <footer className="bg-transparent pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div  whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
          variants={container(4)}
          className="text-center"
        >
          <h1 className="text-4xl text-white">
            Contact <span className="text-gray-600">Me</span>
          </h1>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: -100 }}
           transition={{ duration: 1 }}
             variants={container(5)}
            className="text-white text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>{CONTACT.address}</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
              variants={container(6)}
            className="text-white text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>{CONTACT.phoneNo}</p>
          </motion.div>

          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 2 }}
             variants={container(7)}
            className="text-white text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-blue-400 hover:underline"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>

        <motion.div
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 3 }}
         variants={container(7)}
          className="mt-8"
        >
          <Location />
        </motion.div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2025 Gonna Be Mine!</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
