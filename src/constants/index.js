const personalInfo = {
  name: "W G Rashmika Prabodhana",
  shortName: "Rashmika Prabodhana",
  title: "Software Engineer Undergraduate | Full-Stack Developer",
  email: "rashmikaprabodana415@gmail.com",
  phone: "+94772355140",
  phoneDisplay: "+94 772 355 140",
  location: "Tissamaharama, Sri Lanka",
  github: "https://github.com/rashmika415",
  linkedin: "https://www.linkedin.com/in/rashmika-prabodana",
  summary:
    "3rd-year Software Engineering undergraduate at SLIIT (GPA 3.45), experienced in full-stack MERN development, microservices architecture, and Android development with Kotlin. Built production-grade systems including a containerized healthcare platform deployed with Docker and Kubernetes. A fast learner who thrives in collaborative, agile environments and is passionate about crafting clean, scalable software solutions.",
  cvPath: "/cv.pdf",
  cvFileName: "Rashmika_Prabodhana_CV.pdf",
};

const navLinks = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const terminalRoles = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Android Developer",
  "Microservices Architect",
];

const techSkills = [
  {
    name: "REACT",
    percentage: 90,
    accent: "cyan",
    description: "Component architecture, hooks, and state management for scalable SPAs.",
    iconClass: "devicon-react-original colored",
  },
  {
    name: "NODE.JS",
    percentage: 88,
    accent: "lime",
    description: "REST APIs, Express middleware, JWT authentication, and microservices.",
    iconClass: "devicon-nodejs-plain colored",
  },
  {
    name: "MONGODB",
    percentage: 85,
    accent: "cyan",
    description: "Schema design, aggregation pipelines, and MERN-stack data modeling.",
    iconClass: "devicon-mongodb-plain colored",
  },
  {
    name: "DOCKER",
    percentage: 82,
    accent: "lime",
    description: "Containerization, Docker Compose, and Kubernetes deployment workflows.",
    iconClass: "devicon-docker-plain colored",
  },
  {
    name: "KOTLIN",
    percentage: 80,
    accent: "cyan",
    description: "Native Android development, UI/UX, and local data persistence.",
    iconClass: "devicon-kotlin-plain colored",
  },
  {
    name: "PYTHON",
    percentage: 78,
    accent: "lime",
    description: "Scripting, data structures, and AI/ML fundamentals.",
    iconClass: "devicon-python-plain colored",
  },
];

const words = [
  { text: "Full-Stack Developer", imgPath: "/images/ideas.svg" },
  { text: "MERN Stack Developer", imgPath: "/images/concepts.svg" },
  { text: "Android Developer", imgPath: "/images/designs.svg" },
  { text: "Microservices Developer", imgPath: "/images/code.svg" },
  { text: "Backend Developer", imgPath: "/images/ideas.svg" },
  { text: "Full-Stack Developer", imgPath: "/images/concepts.svg" },
  { text: "Android Developer", imgPath: "/images/designs.svg" },
  { text: "Software Engineer", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Completed Projects" },
  { value: 6, suffix: "+", label: "Certifications Earned" },
  { value: 8, suffix: "+", label: "Programming Languages" },
  { value: 3, suffix: "+", label: "Years in Software Engineering" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "Analytical thinker who breaks down complex requirements into clean, scalable software solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Teamwork & Communication",
    desc: "Thrives in collaborative, agile environments with clear communication and reliable teamwork.",
  },
  {
    imgPath: "/images/time.png",
    title: "Attention to Detail",
    desc: "Delivers high-quality results on schedule with focus, adaptability, and strong time management.",
  },
];

const techStackIcons = [
  { name: "JavaScript", category: "frontend", iconClass: "devicon-javascript-plain colored" },
  { name: "React.js", category: "frontend", iconClass: "devicon-react-original colored" },
  { name: "Tailwind CSS", category: "frontend", iconClass: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", category: "backend", iconClass: "devicon-nodejs-plain colored" },
  { name: "Express.js", category: "backend", iconClass: "devicon-express-original colored" },
  { name: "PHP", category: "backend", iconClass: "devicon-php-plain colored" },
  { name: "MongoDB", category: "backend", iconClass: "devicon-mongodb-plain colored" },
  { name: "MySQL", category: "backend", iconClass: "devicon-mysql-plain colored" },
  { name: "Docker", category: "backend", iconClass: "devicon-docker-plain colored" },
  { name: "Kubernetes", category: "backend", iconClass: "devicon-kubernetes-plain colored" },
  { name: "Python", category: "languages", iconClass: "devicon-python-plain colored" },
  { name: "C", category: "languages", iconClass: "devicon-c-plain colored" },
  { name: "Java", category: "languages", iconClass: "devicon-java-plain colored" },
  { name: "C++", category: "languages", iconClass: "devicon-cplusplus-plain colored" },
  { name: "Kotlin", category: "languages", iconClass: "devicon-kotlin-plain colored" },
  { name: "Android Studio", category: "tools", iconClass: "devicon-android-plain colored" },
  { name: "Eclipse", category: "tools", iconClass: "devicon-eclipse-plain colored" },
  { name: "VS Code", category: "tools", iconClass: "devicon-vscode-plain colored" },
  { name: "Git", category: "tools", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", category: "tools", iconClass: "devicon-github-original colored" },
  { name: "Postman", category: "tools", iconClass: "devicon-postman-plain colored" },
  { name: "IntelliJ", category: "tools", iconClass: "devicon-intellij-plain colored" },
  { name: "Figma", category: "tools", iconClass: "devicon-figma-plain colored" },
  { name: "AWS", category: "tools", iconClass: "devicon-amazonwebservices-original colored" },
];

const techStackImgs = [];

const expCards = [
  {
    review:
      "Pursuing BSc (Hons) in Information Technology, specializing in Software Engineering, with hands-on experience in MERN, microservices, and Android development.",
    imgPath: "/images/sliit.png",
    logoPath: "/images/logos/sliit.png",
    title:
      "SLIIT — BSc (Hons) Information Technology, Software Engineering",
    date: "2023 - Present (Expected Graduation: June 2027)",
    highlights: [
      "Sri Lanka Institute of Information Technology (SLIIT), Malabe",
      "GPA: 3.45 (first four semesters)",
      "Skills: React, Node.js, MongoDB, Kotlin, Java, Python, Microservices, Docker, Kubernetes, JWT, REST APIs",
    ],
  },
  {
    review:
      "Completed GCE Advanced Level in Physical Science stream with strong foundation in mathematics and analytical thinking.",
    imgPath: "/images/school.png",
    logoPath: "/images/logos/school.png",
    title: "H/Debarawewa Central College — GCE Advanced Level",
    date: "2022 / 2023",
    highlights: [
      "Physical Science Stream (Combined Mathematics, Physics, Chemistry)",
      "Results: 3Cs",
      "Tissamaharama, Sri Lanka",
    ],
  },
  {
    review:
      "Completed GCE Ordinary Level with strong academic performance across multiple subjects.",
    imgPath: "/images/school.png",
    logoPath: "/images/logos/school.png",
    title: "H/Debarawewa Janadhipathi K. Vidyalaya — GCE Ordinary Level",
    date: "2018",
    highlights: [
      "Results: 7A, B and Cs",
      "Including Information Technology, Commerce, and Music",
      "Tissamaharama, Sri Lanka",
    ],
  },
];

const expLogos = [
  { name: "sliit", imgPath: "/images/logos/sliit.png" },
  { name: "school", imgPath: "/images/logos/school.png" },
];

const projects = [
  {
    title: "Nexus Health — Telemedicine & Patient Care System",
    description:
      "Healthcare platform built with microservices architecture (API Gateway, Patient, Doctor, Appointment, Payment, Video, AI Symptom, and Notification services). Features JWT auth, Stripe payments, video consultations, and AI-powered specialty recommendations. Containerized with Docker Compose and Kubernetes.",
    image: "/images/project1.png",
    alt: "Nexus Health",
    github: "https://github.com/rashmika415",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodana",
    tech: "React, Node.js, Express, MongoDB, Docker, Kubernetes, JWT",
    tags: ["React", "MongoDB", "Docker", "Kubernetes"],
    featured: true,
    caseLabel: "CASE_STUDY_01",
  },
  {
    title: "Smart Water — SDG 17 Smart Water Tracking System",
    description:
      "Household water management system with usage tracking, personalized water-saving plans, carbon-footprint analytics, and admin notifications. Comprehensive test coverage using Jest, Supertest, and Artillery.",
    image: "/images/project2.png",
    alt: "Smart Water",
    github: "https://github.com/rashmika415",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodana",
    tech: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT",
    tags: ["React", "Node.js", "MongoDB", "Jest"],
  },
  {
    title: "Aqua Peak — Fish Farm Management System",
    description:
      "MERN-stack application to digitally transform fish farm operations. RESTful APIs for fish stock, feeding schedules, health monitoring, and farm analytics.",
    image: "/images/project3.png",
    alt: "Aqua Peak",
    github: "https://github.com/rashmika415",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodana",
    tech: "React, Node.js, Express, MongoDB, JWT",
    tags: ["MERN", "REST API", "JWT"],
  },
  {
    title: "Daylog — Daily Habit Tracker",
    description:
      "Native Android app with daily habit tracking, emoji-based mood journal, and hydration reminders. Local data persistence using SharedPreferences with a user-friendly UI/UX.",
    image: "/images/project4.png",
    alt: "Daylog",
    github: "https://github.com/rashmika415",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodana",
    tech: "Kotlin, XML, Android Studio, SharedPreferences",
    tags: ["Kotlin", "Android", "XML"],
  },
];

const certifications = [
  "AI/ML Engineer — Stage 1 | SLIIT",
  "AWS S3 Basics | Coursera / Amazon Web Services",
  "Practical GitHub Actions | LinkedIn Learning",
  "Docker Foundations Professional Certificate | LinkedIn Learning",
  "Agile Project Management Professional Certificate | LinkedIn Learning",
  "Certificate in English Language | Vocational Training Authority of Sri Lanka",
];

const testimonials = [
  {
    name: "Tharindu Dharmasena",
    mentions: "Lecturer, Department of Computing, Curtin University Colombo / SLIIT",
    review:
      "Tharindu Dharmasena is available as an academic reference. Email: tharindu.dharmasena@curtin.edu.au | tharindu.d@sliit.lk | Phone: +94 712 093 374",
    imgPath: "/images/client1.png",
  },
  {
    name: "Supun Wanasundara",
    mentions: "Cloud Engineer, Finetech Consultancy (Pvt) Ltd",
    review:
      "Supun Wanasundara is available as a professional reference. Email: supun.w@fcpl.biz | Phone: +94 710 403 469",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/rashmika415",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/rashmika-prabodana",
  },
];

export {
  personalInfo,
  words,
  terminalRoles,
  techSkills,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  projects,
  certifications,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
