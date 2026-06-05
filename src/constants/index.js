const personalInfo = {
  name: "W G Rashmika Prabodhana",
  shortName: "Rashmika Prabodhana",
  title: "Software Engineer Undergraduate | Full-Stack Developer",
  email: "rashmikaprabodana415@gmail.com",
  phone: "+94772355140",
  phoneDisplay: "+94 772 355 140",
  location: "Colombo, Sri Lanka",
  github: "https://github.com/rashmika415",
  linkedin: "https://www.linkedin.com/in/rashmika-prabodhana-896486318/",
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
  "App Developer",
  "UI/UX Designer",
];

const techSkills = [
  {
    name: "Frontend & UI",
    accent: "cyan",
    iconClass: "devicon-react-original colored",
    description:
      "Building responsive, interactive web apps with modern component-based architecture and clean UI patterns.",
    techniques: ["React.js", "JavaScript", "Tailwind CSS", "Hooks & State", "Responsive Design",],
  },
  {
    name: "Backend & APIs",
    accent: "lime",
    iconClass: "devicon-nodejs-plain colored",
    description:
      "Designing RESTful services, authentication flows, and scalable server-side logic for production systems.",
    techniques: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices", "PHP"],
  },
  {
    name: "Databases",
    accent: "cyan",
    iconClass: "devicon-mongodb-plain colored",
    description:
      "Modeling, querying, and managing data across NoSQL and relational databases in full-stack applications.",
    techniques: ["MongoDB", "MySQL", "Schema Design", "Aggregation", "MERN Data Layer"],
  },
  {
    name: "Mobile Development",
    accent: "lime",
    iconClass: "devicon-kotlin-plain colored",
    description:
      "Native Android apps with intuitive UI/UX, local persistence, and user-centric feature design.",
    techniques: ["Kotlin", "Android Studio", "XML Layouts", "SharedPreferences", "Material UI"],
  },
  {
    name: "DevOps & Cloud",
    accent: "cyan",
    iconClass: "devicon-docker-plain colored",
    description:
      "Containerizing applications and deploying services with modern DevOps workflows and cloud tooling.",
    techniques: ["Docker", "Kubernetes", "Docker Compose", "GitHub Actions", "AWS S3"],
  },
  {
    name: "Languages & Tooling",
    accent: "lime",
    iconClass: "devicon-python-plain colored",
    description:
      "Polyglot development across systems programming, scripting, and everyday engineering workflows.",
    techniques: ["Python", "Java", "C / C++", "Git & GitHub", "Postman", "VS Code"],
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
  { value: 4, suffix: "+", label: "Projects", hint: "Built & shipped", icon: "fas fa-folder-open", accent: "cyan" },
  { value: 8, suffix: "+", label: "Certifications", hint: "Industry validated", icon: "fas fa-award", accent: "lime" },
  { value: 8, suffix: "+", label: "Languages", hint: "Polyglot coder", icon: "fas fa-code", accent: "cyan" },
  { value: 2, suffix: "+", label: "Years", hint: "Software engineering", icon: "fas fa-clock", accent: "lime" },
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
    title: "Quality Focus",
    tagline: "Careful work, simple code",
    desc: "I try to keep my code clean, easy to read, and well organized.",
    icon: "fas fa-trophy",
    accent: "gold",
    traits: ["Clean Code", "Testing", "Small Improvements", "Good Structure"],
    footer: [
      { icon: "fas fa-check-double", text: "Well-organized output" },
      { icon: "fas fa-search", text: "Checks details early" },
    ],
  },
  {
    title: "Reliable Communication",
    tagline: "Clear updates and teamwork",
    desc: "I like to share progress clearly and work well with others.",
    icon: "fas fa-comment-dots",
    accent: "cyan",
    traits: ["Status Updates", "Teamwork", "Feedback", "Documentation"],
    footer: [
      { icon: "fas fa-users", text: "Works well in teams" },
      { icon: "fas fa-file-alt", text: "Keeps things clear" },
    ],
  },
  {
    title: "On-Time Delivery",
    tagline: "Simple planning, steady progress",
    desc: "I plan my work step by step and try to finish on time.",
    icon: "fas fa-stopwatch",
    accent: "purple",
    traits: ["Planning", "Priorities", "Milestones", "Time Management"],
    footer: [
      { icon: "fas fa-tasks", text: "Step-by-step progress" },
      { icon: "fas fa-bolt", text: "Steady delivery" },
    ],
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
    type: "University",
    org: "SLIIT",
    institution: "Sri Lanka Institute of Information Technology",
    title: "Bachelor of Science (BSc), Information Technology",
    subtitle: "Specialize in Software Engineering",
    location: "Malabe, Sri Lanka",
    date: "Jul 2023 — Jul 2027",
    description:
      "Pursuing a degree with a focus on software engineering, actively engaging in various programming languages and technologies.",
    skills: [
      "Python",
      "JavaScript",
      "Kotlin",
      "PHP",
      "SQL",
      "React.js",
      "Front-End Development",
      "Back-End Web Development",
      "Problem Solving",
    ],
  },
  {
    type: "School",
    org: "Secondary Education",
    title: "GCE O/L & A/L",
    subtitle: "Physical Science Stream · Tissamaharama",
    location: "Tissamaharama, Sri Lanka",
    date: "2018 — 2023",
    badge: "O/L 7A · A/L 3C",
  },
];

const expLogos = [
  { name: "sliit", imgPath: "/images/logos/sliit.png" },
  { name: "school", imgPath: "/images/logos/school.svg" },
];

const projects = [
  {
    title: "Nexus Health",
    subtitle: "Telemedicine & Patient Care System",
    description:
      "Healthcare platform built with microservices architecture — API Gateway, Patient, Doctor, Appointment, Payment, Video, AI Symptom, and Notification services.",
    image: "/images/project1.png",
    imagePosition: "center top",
    alt: "Nexus Health",
    github: "https://github.com/rashmika415/healthcare-platform",
    linkedin: "hhttps://www.linkedin.com/in/rashmika-prabodhana-896486318/",
    category: "Healthcare",
    tags: ["React", "MongoDB", "Docker", "Kubernetes"],
    highlights: [
      "Microservices with API Gateway pattern",
      "JWT auth, Stripe payments & video consults",
      "Docker Compose & Kubernetes deployment",
    ],
    featured: true,
    caseLabel: "CASE_STUDY_01",
  },
  {
    title: "Smart Water",
    subtitle: " Smart Water Tracking System",
    description:
      "Household water management with usage tracking, personalized saving plans, carbon-footprint analytics, and admin notifications.",
    image: "/images/project2.png",
    imagePosition: "center top",
    alt: "Smart Water",
    github: "https://github.com/rashmika415/Smart-Water",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodhana-896486318/",
    category: "Sustainability",
    tags: ["React", "Node.js", "MongoDB", "Jest"],
    highlights: [
      "Real-time usage & carbon analytics",
      "Jest, Supertest & Artillery test suite",
      "Personalized water-saving plans",
    ],
  },
  {
    title: "Aqua Peak",
    subtitle: "Fish Farm Management System",
    description:
      "MERN-stack app digitizing fish farm operations with RESTful APIs for stock, feeding, health monitoring, and analytics.",
    image: "/images/project3.png",
    imagePosition: "center top",
    alt: "Aqua Peak",
    github: "https://github.com/isara5/Aqua-peak",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodhana-896486318/",
    category: "AgriTech",
    tags: ["MERN", "REST API", "JWT"],
    highlights: [
      "Fish stock & feeding schedule APIs",
      "Health monitoring dashboards",
      "Farm analytics & reporting",
    ],
  },
  {
    title: "Daylog",
    subtitle: "Daily Habit Tracker",
    description:
      "Native Android app for habit tracking, emoji-based mood journaling, and hydration reminders with local persistence.",
    image: "/images/project4.png",
    imagePosition: "center top",
    alt: "Daylog",
    github: "https://github.com/rashmika415",
    linkedin: "https://www.linkedin.com/in/rashmika-prabodhana-896486318/",
    category: "Mobile",
    tags: ["Kotlin", "Android", "XML"],
    highlights: [
      "Daily habits & mood journal",
      "Hydration reminder notifications",
      "SharedPreferences local storage",
    ],
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
    url: "https://www.linkedin.com/in/rashmika-prabodhana-896486318/",
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
