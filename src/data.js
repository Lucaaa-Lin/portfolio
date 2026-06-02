import pvwDesktop from './assets/desktop.png'
// ─── PERSONAL INFO ────────────────────────────────────────────────
export const personal = {
  name: 'Zheng(Luca) Lin',
  title: 'Frontend Developer',
  tagline: "Hi, this is Luca. I am a full-stack developer!",
  bio: [
    `My work focuses on building clean and responsive user-centered digital experiences that combine thoughtful visual design with practical frontend engineering. I enjoy creating interfaces that not only look refined, but also feel intuitive and functional across different devices and user scenarios.`,
    `I currently develop and maintain Precision Vintage Watches, a vintage watch platform where I lead website design, frontend development, CMS management, and digital content operations. The platform was rebuilt from Webflow to a custom React + Sanity CMS stack to improve performance and eliminate ongoing SaaS costs.`,
    `I'm currently looking for a frontend or web developer role in Sydney or remote.`
  ],
  location: 'Sydney, Australia',
  email: 'zhenglin5154@gmail.com',
  github: 'https://github.com/Lucaaa-Lin',
  linkedin: 'https://www.linkedin.com/in/zheng-lin-206bb929b',
  resume: '/resume.pdf',
  available: true,
}

// ─── SKILLS ───────────────────────────────────────────────────────
export const skills = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'HTML / CSS', 'Tailwind CSS', 'React Router', 'Vite', 'Framer Motion', 'Responsive Design'],
  },
  {
    label: 'Tools & Backend',
    items: ['Sanity CMS', 'Python', 'FastAPI', 'Pandas', 'Electron', 'REST APIs', 'Git / GitHub', 'Formspree'],
  },
  {
    label: 'Design',
    items: ['Figma', 'UI / UX Design', 'Wireframing', 'Typography', 'Brand Identity', 'Product Thinking'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────
export const projects = [
  {
    id: 'pvw',
    hero: true,
    live: true,
    name: 'PVW Vintage Watch Platform',
    type: 'Web Development · UX/UI · CMS',
    description:
      'A real branded platform for vintage watch collectors — not a course project. Rebuilt from Webflow to React + Sanity CMS to eliminate SaaS costs. Features dynamic routing, multi-image galleries, filter/sort/search, contact flow, and a full CMS content pipeline.',
    tags: ['React', 'Vite', 'Sanity CMS', 'React Router', 'CSS', 'Formspree'],
    liveUrl: 'https://www.precisionvintage.com.au/',
    image: pvwDesktop,
  },
  {
    id: 'report-gen',
    status: 'coming-soon',
    hero: false,
    name: 'Automated Report Generator',
    type: 'Full Stack · Desktop App',
    description:
      'Desktop app with React/Electron frontend and Python FastAPI backend. PDF export, data visualisation, JWT auth, email delivery, and guest mode.',
    tags: ['Electron', 'React', 'Python', 'FastAPI', 'Pandas', 'JWT'],
    githubUrl: 'https://github.com/yourhandle/report-gen',
    image: null,
  },
  {
    id: 'sephora',
    status: 'coming-soon',
    hero: false,
    name: 'Sephora Instagram Analytics',
    type: 'Data Analytics · Computer Vision · AI',
    description:
      'Engagement regression modelling using Google Vision API, OpenCV, OCR, and logo detection. Statistical analysis with OLS, Poisson, and Negative Binomial models.',
    tags: ['Python', 'OpenCV', 'Google Vision', 'OLS / Regression'],
    githubUrl: 'https://github.com/yourhandle/sephora-analytics',
    image: null,
  },
  {
    id: 'tree',
    status: 'coming-soon',
    hero: false,
    name: 'Dead Tree Detection',
    type: 'Computer Vision · AI Research',
    description:
      'Aerial imagery segmentation using YOLOv7, U-Net, and Mask R-CNN with SimAM attention for environmental monitoring.',
    tags: ['Python', 'OpenCV', 'Google Vision', 'OLS / Regression'],
    githubUrl: 'https://github.com/yourhandle/sephora-analytics',
    image: null,
  },
]


// ─── EXPERIENCE ───────────────────────────────────────────────────
export const experience = [
  {
    date: '2026 – Present',
    company: 'Precision Vintage Watches',
    role: 'Web Developer · Digital Designer',
    description:
      'Built and launched a vintage watch e-commerce platform from scratch. Migrated from Webflow to React + Vite + Sanity CMS. Responsible for all frontend development, CMS management, product photography, and digital content operations.',
  },
  {
    date: '2023 – 2025',
    company: 'The University of New South Wales',
    role: 'Master of Information Technology',
    description:
      'Coursework spanning frontend development, data analytics, machine learning, and software engineering. Graduation project: Automated Report Generator (React/Electron + Python FastAPI).',
  },
  {
    date: '2017 – 2023',
    company: 'Industrial Bank Co. Ltd · Suzhou, China',
    role: 'Data Analyst',
    description:
      'Worked in credit risk and loan assessment, supporting lending decisions through financial analysis, reporting, and data-driven evaluation across personal, SME, and government-related financing.',
  },
  {
    date: '2013 – 2017',
    company: 'Southeast University Chengxian College',
    role: 'Bachelor of Financial Management',
    description:
      'Undergraduate studies in financial management, accounting, and economic analysis.',
  },
]
