import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import drawingApp from "@/public/drawingApp.png";
import csspp from "@/public/csspp.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "MERN and PERN Bootcamp",
    location: "Dhaka, Bangladesh",
    description: "I graduated after 6 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Web Developer",
    location: "Budapest, Hungary",
    description:
      "I worked as a Wordpress and Weebly developer as an intern. I have helped to speed up and improve site performance. Also added some new features to the websites.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Chat Application",
    description:
      "The goal of this project is to develop a real-time web-based chat application that allows users to communicate with each other through text messages. The application will provide a seamless and responsive user experience, enabling individuals to connect and interact in a dynamic and user-friendly environment. Test_email: john12@gmail.com, password: Mrjohnisadeveloper1!",
    tags: ["React", "Expressjs", "MongoDB", "Tailwind", "Socket.io"],
    imageUrl: corpcommentImg,
    link: "https://schatapp-75b8f6961632.herokuapp.com/",
  },
  {
    title: "Diary App",
    description:
      "The Diary App is a digital platform designed to offer users a convenient and private way to document their thoughts, experiences, and emotions. It provides a modern solution for journaling, enabling users to capture their daily moments, reflections, and personal growth in a digital format.",
    tags: [
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Context API",
      "ExpressJs",
    ],
    imageUrl: rmtdevImg,
    link: "https://diaryappbysourov.netlify.app/",
  },
  {
    title: "Interactive SVG",
    description:
      "An interactive SVG is a Scalable Vector Graphic that responds to user interactions, such as clicks or mouse movements, to change its appearance or behavior. It can be used to create a more engaging and interactive user experience in web applications.",
    tags: ["React", "Next.js", "SVG", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "https://bdbusroutes.netlify.app/",
  },
  {
    title: "Drawing App",
    description:
      "A drawing app created using JavaScript is an application that allows users to create, edit, and manipulate digital drawings within a web browser. It leverages the power of JavaScript, HTML, and CSS to provide a rich and interactive drawing experience.",
    tags: ["React", "Canvas", "Tailwind"],
    imageUrl: drawingApp,
    link: "https://drawingappbysourov.netlify.app/",
  },
  {
    title: "CSS Property Changer",
    description:
      "CSS Property Changer is a term that refers to the process of modifying the values of CSS properties to manipulate the visual appearance of HTML elements on a web page. CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.",
    tags: ["Javascript", "Jquery", "Tailwind"],
    imageUrl: csspp,
    link: "https://dasourov.github.io/CSS-Property-Changer/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
