import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import infosys from "../assets/company/infosys.png";
import shecode from "../assets/company/shecodelogo.png";
import forgeyklab from "../assets/company/forgeyklab.png";
import deloitte from "../assets/company/deloitte.png";

import mindora from "../assets/mindora.png";
import agroCarbon from "../assets/agroCarbon.png";
import weatherApp from "../assets/weatherApp.png";
//logo
//Java-Logo.png
import Java from "../assets//tech/Java-Logo.png";
import Python from "../assets//tech/Python.svg.webp";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "AI/ML",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern ",
    company_name: "Forgeyk Labs : 3-Month Internship",
    icon: forgeyklab,
    iconBg: "#FFFFFF",
    date: "July - Sept 2026",
    points: [
      "Selected as a Frontend Developer Intern to contribute to digital product development for startups, businesses, and clients.",
      "Worked on translating UI designs into responsive, user-friendly web interfaces using frontend technologies.",
      "Collaborated with developers and designers in an agency environment to support real-world project development.",
      "Gained practical exposure to frontend development workflows, project collaboration, and integrating frontend interfaces with backend APIs.",
        ],
  },
  {
    title: "AI/ML & Data Science Intern",
    company_name: "Infosys Virtual Internship",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Worked on project-based tasks in Artificial Intelligence, Machine Learning, and Data Science.",                           
      "Performed data preprocessing, analysis, and preparation for machine learning workflows.",                                 
      "Built and evaluated machine learning models while developing a practical understanding of model training and evaluation.",
      "Applied AI/ML concepts to solve data-driven problems and strengthened practical problem-solving skills.",                 
    ],
  },
  {
    title: "Web Developer",
    company_name: "SheCode",
    icon: shecode,
    iconBg:  "#E6DEDD",
    date: "Nov 2024 – Aug 2025",
    points: [
      "Engineered a responsive  Weather Forecast App | web app delivering live weather updates to 100+ daily users.",
      "Integrated API key for real-time data and enhanced UI, resulting in 25% faster load times.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Deloitte Virtual Internship",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "Jan 2025",
    points: [
      " Created a data dashboard using Tableau ",
      "Used Excel to classify data and draw business conclusions ",
      "Gained practical exposure to frontend development workflows, project collaboration, and compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Laiba Naushad",
    designation: "HR",
    company: "Innvo Ultra",
    image: "https://static.vecteezy.com/system/resources/previews/068/208/439/non_2x/user-profile-flat-icon-with-round-white-shape-avatar-sign-gender-neutral-silhouette-default-user-icon-social-media-profile-picture-user-profile-account-dp-sign-illustration-vector.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shifa Raza",
    designation: "COO",
    company: "DEF Corp",
    image: "https://static.vecteezy.com/system/resources/previews/068/208/439/non_2x/user-profile-flat-icon-with-round-white-shape-avatar-sign-gender-neutral-silhouette-default-user-icon-social-media-profile-picture-user-profile-account-dp-sign-illustration-vector.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ravi Kumar",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://static.vecteezy.com/system/resources/previews/068/208/439/non_2x/user-profile-flat-icon-with-round-white-shape-avatar-sign-gender-neutral-silhouette-default-user-icon-social-media-profile-picture-user-profile-account-dp-sign-illustration-vector.jpg",
  },
];

const projects = [
  {
    name: "Mindora – AI Mental Wellness Companiont",
    description: [
    "Built a voice-first AI reflection application using React 18 and FastAPI, integrating Google's Gemma 2B through Ollama for local LLM inference.",
    "Implemented multilingual voice interactions in English, Hindi and Hinglish using microphone input, ElevenLabs Text-to-Speech and browser-based speech fallback.",
    "Developed emotional check-ins, guided self-reflection and interactive breathing exercises.",
    "Implemented FastAPI endpoints, crisis-keyword screening, safety-oriented response handling and session-only conversation storage."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "ElevenLabs",
        color: "pink-text-gradient",
      },
      {
        name: "Gemma",              
      color: "blue-text-gradient",
     },         
      
    ],
    image: mindora,
    source_code_link: "https://github.com/AdibaNaushad/mindora_health.git",
  },
  {
    name: "AgriCarbonMRV",
    description:
       [
        " Farmer-Friendly Platform: Developed a platform that enables farmers to register and manage agricultural projects through voice input, camera and GPS.",
        " Carbon Credit Tracking: Enables project-based carbon credit estimation and income tracking with blockchain-based verification.",
        " Hindi Voice Assistant: Integrated a Hindi voice assistant to answer farmers' questions and simplify carbon markets.",
        " Transparency: Designed to make carbon credit processes more accessible, transparent and easier for farmers to understand."
       ],
    tags: [
      {
        name: "Research",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend",
        color: "green-text-gradient",
      },
      {
        name: "Eco-Friendly",      
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",           
        color: "blue-text-gradient",
      },
      
      
    ],
    image: agroCarbon,
    source_code_link: "https://github.com/AdibaNaushad/AgriCarbonMRV-project.git",
  },
  {
    name: "Live Weather App",
    description:[
      "A dynamic weather application featuring live API integration, search functionality, a clean UI, and a 6-day weather forecast layout.",
      "Improved the user interface and loading performance, achieving a reported 25% reduction in load time.",
      "Integrated a third-party Weather API using an API key to fetch and display dynamic weather data, including current temperature, weather conditions, and location-based forecasts.",
      "Improved the user interface.",
      "Built a user-friendly experience designed to support over 100 daily users with quick access to accurate and up-to-date weather information.",
    ],
    tags: [
      {
        name: "HTM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",          
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Axios API",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/AdibaNaushad/shecodeweatherHost.git",

  },
];

export { services, technologies, experiences, testimonials, projects };
