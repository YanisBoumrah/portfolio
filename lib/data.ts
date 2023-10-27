import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vizio from "@/public/vizio.png";
import apolean from "@/public/apolean.png";
import matahari from "@/public/matahari.png";
import cap404 from "@/public/cap404.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Master's Degree in Computer Science",
    location: "Nanterre, France",
    description:
      "I graduated after 2 years of studying in France. I learned about web development, databases, algorithms and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    title: "software engineer",
    location: "Anthony, France",
    description:
      "From April to August 2022 at Datexis, I was responsible for extracting and processing raw geolocation data. Subsequently, I contributed to the development of an API designed for postal address auto-completion. To ensure the reliability of our solutions, I also implemented unit tests and automated tests using Selenium with the Python language.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - August 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Juvisy-sur-Orge, France",
    description:
      "Since August 2022 at Atelier de création digitale • Creano, I've focused on frontend development, enhancing UX and working with React components. On the backend, I initiated projects, managed databases like Mongodb and MySql, and ensured data security with JWT.",
    icon: React.createElement(FaReact),
    date: "August 2022 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Cap404",
    description:
      "A public web app for Freelance that are looking for a job. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Sass", ".Net", "C#","PostgreSQL", "GSAP","Docker","Jenkins","AWS"],
    imageUrl: cap404,
  },
  {
    title: "Vizio Capital",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. Users can invest in real estate projects and get a return on investment.",
    tags: ["React", "Redux", "MongoDB", "Sass", "Node.js", "Express", "JWT"],
    imageUrl: vizio,
  },
  {
    title: "Apolean",
    description:
      "Apolean is a comprehensive marketing tool designed to harness the power of data, creativity, and media to help brands achieve their objectives.",
    tags: ["PHP", "Sass", "Javascript", "Html", "GSAP","Gulp","Docker"],
    imageUrl: apolean,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "MySQL",
  "Sass",
  "Bootstrap",
  "Symfony",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "C#",
  "ASP.NET",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Gsap",
  "Jenkins",
] as const;
