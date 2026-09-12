// =========================================================
// PORTFOLIO CONFIG — SAARA DATA YAHAN HAI
// -> Naya project/skill/experience add karna ho toh
//    bas neeche wale arrays edit karo, kahin aur code
//    chhedne ki zarurat nahi.
// -> Jo bhi "PLACEHOLDER" likha hai, use apni real
//    info se replace karo.
// =========================================================

// Basic identity + links — sabse zyada use hone wali info
export const portfolioConfig = {
  name: "Prince Gupta",
  role: "Software Developer",
  email: "PPGG15241@gmail.com", // PLACEHOLDER — apna real email daalo
  linkedin: "https://www.linkedin.com/in/prince-gupta-268a43352/",
  github: "https://github.com/PrinceGupta1212", // PLACEHOLDER — apna GitHub link daalo
  resume: "/assets/resume/princeresumefinalhaiyeahwalawithgeminiedit.pdf", // resume PDF public/assets/resume/ mein rakho
};

// Skills — category ke hisaab se filter hote hain (Skills.jsx mein)
export const skillsData = [
  { name: "Java", cat: "languages", icon: "fa-brands fa-java" },
  { name: "Python", cat: "languages", icon: "fa-brands fa-python" },
  { name: "C", cat: "languages", icon: "fa-solid fa-code" },
  { name: "JavaScript", cat: "languages", icon: "fa-brands fa-js" },
  { name: "HTML", cat: "frontend", icon: "fa-brands fa-html5" },
  { name: "CSS", cat: "frontend", icon: "fa-brands fa-css3-alt" },
  { name: "React", cat: "frontend", icon: "fa-brands fa-react" },
  { name: "Tailwind CSS", cat: "frontend", icon: "fa-solid fa-wind" },
  { name: "Node.js", cat: "backend", icon: "fa-brands fa-node-js" },
  { name: "Express.js", cat: "backend", icon: "fa-solid fa-server" },
  { name: "MongoDB", cat: "database", icon: "fa-solid fa-leaf" },
  { name: "Git", cat: "tools", icon: "fa-brands fa-git-alt" },
  { name: "GitHub", cat: "tools", icon: "fa-brands fa-github" },
  { name: "VS Code", cat: "tools", icon: "fa-solid fa-laptop-code" },
  { name: "Postman", cat: "tools", icon: "fa-solid fa-paper-plane" },
  { name: "Vercel", cat: "tools", icon: "fa-solid fa-cloud-arrow-up" },
];

// Skill category ka readable label (skill card ke neeche dikhta hai)
export const skillCatLabel = {
  languages: "Programming Language",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Developer Tool",
};

// PLACEHOLDER — apna sabse strong project yahan daalo (bada card banega)
export const featuredProjects = [{
  name: "AI full-stack Employee Management System",
  description:
    "An Employee Management System I built to handle everyday HR tasks like employee management, attendance, leaves, and payroll, with an AI assistant and useful workflow automations",
  image: "/assets/ems-image.png",
    tech: [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Vite",
  "Tailwind CSS",
  "JWT",
  "Gemini API",
  "Inngest",
  "Nodemailer",
  "Vercel"
],
  github: "https://github.com/PrinceGupta1212/FullStack-EMS.git",
  live: "https://full-stack-ems-portal.vercel.app/",
},{
 name: "GitHub Profile Analyzer Dashboard",
  description: "A web dashboard that turns GitHub profile data into clear, useful insights. It fetches real-time data from the GitHub API, calculates a developer score, visualizes language usage, highlights top repositories, and lets users compare GitHub profiles side by side.",
 image: "/assets/analyzer.png",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Chart.js",
    "GitHub REST API"
  ],
  github: "https://github.com/PrinceGupta1212/account-analyzer",
  live: "https://account-analyzer.vercel.app/"
   
}];



// Project category ka readable label (filter buttons mein use hota hai)
export const projectCatLabel = {
  all: "All",
  frontend: "Frontend",
  fullstack: "Full Stack",
  java: "Java",
  other: "Other",
};



export const educationData = [
  {
   degree: "Bachelor of Computer Applications (BCA)",
school: "United Institute Of Management (FUGS)",
when: "2024 – 2027",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    degree: "Higher Secondary (12th)",
school: "Arya Kanya Inter College",
when: "2023",
score: "83.8%",
    icon: "fa-solid fa-school",
  },
  {
     degree: "Secondary (10th)",
  school: "Arya Kanya Inter College",
  when: "2021",
  score: "70.16%",
  icon: "fa-solid fa-school"
  }
];

// PLACEHOLDER — apni real certifications yahan daalo
export const certData = [
  { name: "Viksit Bharat Youth Parliament (District Level)",
issuer: "Viksit Bharat Youth Parliament",
date: "2025",
link: "https://ik.imagekit.io/tg7oot7f5/vikshibharat.png" },
  { name: "Certificate of Merit — 2nd Position in Data Analytics",
issuer: "United Institute of Management (FUGS)",
date: "2026",
link: "https://ik.imagekit.io/tg7oot7f5/certificateofMerit.png" },
  { name: "Introduction to Java",
issuer: "SoloLearn",
date: "2025",
link: "https://ik.imagekit.io/tg7oot7f5/java.png" },
{
  name: "Generative AI & Prompt Engineering",
issuer: "United Institute of Management (FUGS)",
date: "2026",
link: "https://ik.imagekit.io/tg7oot7f5/completionofgenAI.png"

},{
  name: "Deloitte Australia — Data Analytics Job Simulation",
issuer: "Forage",
date: "August 2026",
link:"https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a7dd21800ad9dc2bfa7f21f_1786634819497_completion_certificate.pdf"
},
];


// PLACEHOLDER — GitHub link add hone ke baad real repo names daal dena
export const githubRepos = [
{ name: "employee-management-system", lang: "React / Node.js / MongoDB" },
{ name: "account-analyzer", lang: "HTML / CSS / JavaScript" },
];

// "Developer Journey" timeline ke steps — order wahi rahega jo yahan hai
export const journeyData = [
  "BCA",
  "Programming Fundamentals",
  "Java & OOP",
  "Data Structures & Algorithms",
  "Web Development",
  "MERN Stack",
  "Full-Stack Projects",
 
];

