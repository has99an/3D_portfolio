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
    java,
    csharp,
    python,
    sql,
    dotnet,
    meta,
    starbucks,
    tesla,
    shopify,
    ucn,
    candylicious,
    handyrent,
    solita,
    portfolio,
    vesterbjerg,
    handwriting,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Full Stack Developer",
      icon: web, // adjust the icon according to your preference
    },
    {
      title: "C# and .NET Developer",
      icon: backend, // adjust the icon accordingly
    },
    {
      title: "Python Developer",
      icon: mobile, // change the icon if needed
    },
    {
      title: "Machine Learning Enthusiast",
      icon: creator, // adjust the icon accordingly
    },
  ];
  
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: ".NET",
      icon: dotnet,
    },
    {
      name: "Git",
      icon: git,
    },
];

  
const experiences = [
  {
    title: "Portfolio Website (Ongoing Project)",
    company_name: "Personal Project",
    icon: portfolio, 
    iconBg: "#383E56",
    date: "Oktober 2024",
    points: [
      "Developing a personal portfolio website using React, Framer Motion, and Tailwind CSS.",
      "Showcasing my skills, projects, and experience in a professional online format.",
      "Planning to deploy the final version soon.",
    ],
  },
];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Vesterbjerg Byggecenter",
      description:
        "Opdatering af lager-, salgs- og udlejningssystem for at optimere ledelse og medarbejderes overblik. Udviklet med Java Swing GUI, Eclipse og Git ved hjælp af 3-lags arkitektur og vandfaldsmodellen.",
      tags: [
        { name: "java", color: "blue-text-gradient" },
        { name: "swing", color: "green-text-gradient" },
        { name: "git", color: "pink-text-gradient" },
      ],
      image: vesterbjerg,
      source_code_link: "https://github.com/viktor-bd/SemesterProjekt_1",
    },
    {
      name: "Candylicious",
      description:
        "Digitaliseret vagtplanlægning, som gjorde det muligt for medarbejdere at acceptere vagter direkte. Brugt Java, Swing, SQL og MSSQL til et intuitivt GUI-system udviklet i en 3-lags arkitektur.",
      tags: [
        { name: "java", color: "blue-text-gradient" },
        { name: "sql", color: "green-text-gradient" },
        { name: "gui", color: "pink-text-gradient" },
      ],
      image: candylicious,
      source_code_link: "https://github.com/Melihoz98/VagtplanProjectGr4",
    },
    {
      name: "Handy Rent",
      description:
        "Distribueret værktøjsudlejningssystem med samtidighedshåndtering, bygget i ASP.NET og inkluderende web API, desktop- og webapp-klient. Inkluderede transaktionsstyring, identifikation og autentifikation.",
      tags: [
        { name: "asp.net", color: "blue-text-gradient" },
        { name: "c#", color: "green-text-gradient" },
        { name: "sql", color: "pink-text-gradient" },
      ],
      image: handyrent,
      source_code_link: "https://github.com/MarwanAlmzayek/SemesterProjectGr4 ",
    },
    {
      name: "Handwriting Recognition",
      description:
        "Tekstgenkendelse af håndskrift fra billeder konverteret til PDF, udviklet med Python og deep learning-teknikker i samarbejde med Solita A/S.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "deep learning", color: "green-text-gradient" },
        { name: "image recognition", color: "pink-text-gradient" },
      ],
      image: handwriting,
      source_code_link: {
        api: "https://github.com/has99an/handwriting-recognition-angular-ui",
        ui: "https://github.com/has99an/handwriting-recognition-api",
      },
    },
/*    {
      name: "ShiftScheduler",
      description:
        "Vagtplansystem i C# og MAUI med mobil- og webapplikation for hhv. medarbejdere og administratorer. Bygget med API til databasestyring.",
      tags: [
        { name: "c#", color: "blue-text-gradient" },
        { name: "maui", color: "green-text-gradient" },
        { name: "api", color: "pink-text-gradient" },
      ],
      image: shiftscheduler,
      source_code_link: "https://github.com/",
    },
*/
    {
      name: "Portfolio",
      description:
        "Portfolio-side udviklet med React, Framer Motion og Tailwind CSS, der viser mine projekter og kompetencer.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwind", color: "green-text-gradient" },
        { name: "framer motion", color: "pink-text-gradient" },
      ],
      image: portfolio,
      source_code_link: "https://github.com/has99an/3D_portfolio",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };