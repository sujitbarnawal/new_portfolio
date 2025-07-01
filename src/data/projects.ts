import { Project } from '../types';
import NetflixImg from "../assets/netflix.png"
import ClothesImg from "../assets/clothestore.png"
import JobImg from "../assets/jobportal.png"
import foodDelImg from "../assets/fooddel.png"
import mernImg from "../assets/mernauth.png"
import lmsImg from "../assets/talentpath.png"

export const projects: Project[] = [
  {
    id: 1,
    title: 'TalentPath – Learning Management System',
    description: "TalentPath is a full-featured MERN stack-based online learning platform that connects students and instructors through intuitive interfaces and modern technologies.",
    image: lmsImg,
    technologies: ["React JS", "NodeJS", "JavaScript", "ExpressJS","Shadcn UI","MongoDB","Zustand","TailwindCSS","Esewa"],
    demoUrl: 'https://talentpath-frontend.onrender.com/',
    repoUrl: 'https://github.com/sujitbarnawal/LMS',
  },
  {
    id: 2,
    title: 'JobSeek',
    description: "JobSeek is a modern job-hunting platform designed to bridge the gap between ambitious job seekers and forward-thinking employers. Whether you're a fresh graduate stepping into the workforce or a seasoned professional looking for your next big opportunity, JobSeek helps you discover, apply, and land your dream job with ease.",
    image: JobImg,
    technologies: ["React JS", "NodeJS", "JavaScript", "ExpressJS","Shadcn UI","MongoDB","Zustand","TailwindCSS"],
    demoUrl: 'https://jobportal-frontend-p4dr.onrender.com/',
    repoUrl: 'https://github.com/sujitbarnawal/JobPortal',
  },
  {
    id: 3,
    title: 'Fashion Nepal',
    description: 'An e-commerce platform for clothing with product browsing, cart management, and secure checkout.',
    image: ClothesImg,
    technologies: ["React JS", "NodeJS", "JavaScript", "ExpressJS","MongoDB","Zustand","TailwindCSS","Stripe"],
    demoUrl: 'https://fashionnepal-frontend.onrender.com/',
    repoUrl: 'https://github.com/sujitbarnawal/FashionNepal',
  },
  {
    id: 4,
    title: 'Netflix',
    description: "Netflix, It is a clone of netflix, not exactly same I have my own assumptions of pages(without subscription feature)",
    image: NetflixImg,
    technologies: ["React JS", "NodeJS", "JavaScript", "ExpressJS","MongoDB","Material UI","Zustand","TailwindCSS","The Movie Database"],
    repoUrl: "https://github.com/sujitbarnawal/Netflix",
    demoUrl: 'https://netflix-frontend-2skz.onrender.com',
  },
  {
    id: 5,
    title: 'MithoMitho',
    description: 'MithoMitho, a food delivery application designed to connect users with delicious foods. MithoMitho aims to provide a user-friendly, efficient, and secure platform for customers to browse menus, place orders, and track deliveries seamlessly.',
    image: foodDelImg,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe','Tailwind CSS'],
    demoUrl: 'https://mithomitho-frontend.onrender.com',
    repoUrl: 'https://github.com/sujitbarnawal/Food-Delivery',
  },
  {
    id: 6,
    title: 'Mern Authentication App',
    description: 'Mern Authentication is a simple implementation of login,signup,forgot password and reset password using mern stack',
    image: mernImg,
    technologies: ["React JS", "NodeJS", "HTML", "CSS", "JavaScript", "ExpressJS","MongoDB"],
    demoUrl: 'https://mernauthenticationapp-frontend.onrender.com/',
    repoUrl: 'https://github.com/sujitbarnawal/MernAuthenticationApp',
  }
];