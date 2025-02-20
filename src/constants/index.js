import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/LeloYar.png";

export const HERO_CONTENT = 'The one who gets the job done.';

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have worked on different techs like JavaScript, HTML, CSS, C++, Python, React.js, Node.js, Express.js, and state management with Redux Toolkit and Context API. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan/2022 - Mar/2023",
    role: "Subject Matter Expert, CSE",
    company: "Chegg, India Inc.",
    description: "Solved questions based on multiple programming languages and frameworks for students mainly in the USA",
    technologies: ["Javascript", "MERN stack", "Google Cloud", "C"],
  },
  {
    year: "July/2024 - Oct/2024",
    role: "Backend Development Intern",
    company: "Webmyze",
    description: "Developed and optimized backend services using Node.js, Express.js, and MongoDB, designed RESTful APIs, and worked on professional client projects, gaining hands-on experience",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "API development"],
  }
];

export const PROJECTS = [
  {
    title: "Dexter Luxuries : Online Store for Digital Products",
    image: project1,
    description:
      "Built a responsive online Ecom store with React.js frontend and a scalable Node.js + Express backend, handling 1,000+ successful purchases and 150K+ user reach. Integrated MongoDB for secure data storage, Razorpay API for seamless payments, and Meta Pixel + Conversion API for optimized ad performance. Achieved 99% automation from (user footfall -> user purchase).",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "API development", "Nodemailer", "Render"],
  },
  {
    title: "AI Agent for Current Temperature - Realtime data fetch*",
    image: project2,
    description:
      "Developed an AI-powered weather assistant using Node.js, OpenAI API (GPT-4o), and OpenWeather API to fetch real-time weather data based on user queries. Implemented a conversational AI flow with structured planning, action execution, and observation handling using JavaScript (ES6), Fetch API, and readline-sync for interactive command-line input.",
    technologies: ["React", "Node", "Javascript", "OpenAI API", "WeatherAPI"],
  },
];

export const CONTACT = {
  address: "Lucknow, India",
  phoneNo: "+91 7985338330",
  email: "ethicalnitinhere@gmail.com",
};

