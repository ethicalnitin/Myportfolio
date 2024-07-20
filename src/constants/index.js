import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/LeloYar.png";

export const HERO_CONTENT = 'A full-stack developer who is good at DSA and an AI enthusiast, turning challenges into innovative solutions';

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have worked on different techs like JavaScript, HTML, CSS, C++, Python, React.js, Node.js, Express.js, and state management with Redux Toolkit and Context API. I’m adept at API development with REST and GraphQL and skilled in database management with MongoDB, PostgreSQL, and MySQL. My journey in tech began with a curiosity for programming and has evolved into a career where I continuously learn and adapt. I thrive in collaborative environments, solving complex problems, and delivering high-quality solutions. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan/2022 - Mar/2023",
    role: "Subject Matter Expert,CSE",
    company: "Chegg, India Inc.",
    description:"Solved questions based on multiple programming languages and frameworks for students mainly in the USA",
    technologies: ["Javascript", "MERN stack", "Google Cloud", "C"],
  }
];

export const PROJECTS = [
  {
    title: "Pomodoro Application Using Next.js",
    image: project1,
    description:
      "Developed a Pomodoro application using Next.js, leveraging React for the frontend and JavaScript for interactive functionalities. CSS was used for styling, and state management was handled with React hooks. The application included precise timing logic, enhanced with animations using Framer Motion.",
    technologies: ["JavaScript", "Next.js", "React", "CSS","Framer Motion"],
  },
  {
    title: "(Upcoming) LeloYar - A digital entertainment shopping hub",
    image: project2,
    description:
      "Developed a full-stack e-commerce website using Next.js and React.js, with MongoDB for backend data storage. Leveraged Tailwind CSS and Styled Components for a responsive and visually appealing UI. Implemented key features including user authentication, product management, and secure payment integration.",
    technologies:["MongoDB","Express","React","Node","Javascript","User Authentication","Tailwind CSS","Next.js"],
  },
  
];

export const CONTACT = {
  address: "Lucknow,India ",
  phoneNo: "+91 7985338330",
  email: "ethicalnitinhere@gmail.com",
};
