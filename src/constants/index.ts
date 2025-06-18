import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  apeejay,
  airtel,
  smartworkflow,
  crcdrapp,
  regionalapp,
  parentapp,
} from "../assets"; // Make sure you add these assets

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Java Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Technical Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Apeejay Education Society",
    icon: apeejay, // replace with your company logo
    iconBg: "#ffffff",
    date: "Feb 2024 - Present",
    points: [
      "Developed and launched the Apeejay Parent App using React Native for 10,000+ parents.",
      "Integrated push notifications and real-time updates using Firebase.",
      "Built CRC DR App to streamline communication between doctors and medical reps.",
      "Developed Regional Manager App and a React.js Admin Panel for centralized control.",
    ],
  },
  {
    title: "Associate Software Developer Intern",
    companyName: "Bharti Airtel Limited",
    icon: airtel, // replace with your company logo
    iconBg: "#fefefe",
    date: "Feb 2023 - Sep 2023",
    points: [
      "Built data-driven dashboards for business intelligence and internal reporting.",
      "Implemented bulk CSV upload feature for large datasets.",
      "Improved internal UI flows and optimized component-based structure.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Gourav is a proactive developer who takes full ownership of his projects. His code quality and problem-solving skills are top-notch.",
    name: "Rajesh Verma",
    designation: "Project Manager",
    company: "Apeejay Education Society",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "During his internship, Gourav showed excellent technical acumen and always delivered on time.",
    name: "Priya Mehra",
    designation: "Tech Lead",
    company: "Bharti Airtel",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Apeejay Parent App",
    description:
      "Cross-platform mobile app allowing parents to monitor attendance, apply leave, and pay fees with real-time Firebase updates.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: parentapp,
    sourceCodeLink: "https://github.com/gshrmafp", // replace with actual repo if public
  },
  {
    name: "CRC DR App",
    description:
      "Doctor engagement app enabling scheduling, real-time notifications, and performance tracking for medical representatives.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: crcdrapp,
    sourceCodeLink: "https://github.com/gshrmafp",
  },
  {
    name: "Regional Manager App",
    description:
      "App for regional managers to track doctor interactions, monitor performance, and streamline workflows.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: regionalapp,
    sourceCodeLink: "https://github.com/gshrmafp",
  },
  {
    name: "Smart Workflow",
    description:
      "Full-stack task management system reducing paperwork and automating workflow with React.js, Node.js, and MySQL.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mysql", color: "orange-text-gradient" },
    ],
    image: smartworkflow,
    sourceCodeLink: "https://github.com/gshrmafp",
  },
];

export { services, technologies, experiences, testimonials, projects };
