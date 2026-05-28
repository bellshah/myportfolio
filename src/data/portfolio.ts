export interface SkillCategory {
  label: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  highlight?: string
}

export interface Experience {
  role: string
  company: string
  period: string
  duration: string
  location: string
  type: 'internship' | 'part-time' | 'freelance'
  bullets: string[]
}

export interface Certification {
  name: string
  issuer: string
  year: string
  category: 'cloud' | 'ai' | 'security' | 'networking' | 'academic' | 'merit'
  accentColor: string
}

export interface Achievement {
  title: string
  sub: string
  date: string
  icon: string
}

export interface Education {
  degree: string
  field: string
  institution: string
  period: string
  cgpa: string
  honours: string[]
}

export const personal = {
  name:      'Nabilah binti Mohammad Shahidan',
  shortName: 'Nabilah Shahidan',
  role:      'Software Engineering Graduate',
  tagline:   'Class of 2026 · UMPSA',
  bio:       'A Software Engineering graduate with a dual UMPSA qualification — completing both a Diploma in Computer Science and a Degree in Software Engineering at the same institution. Currently serving as AI & Digitalization Intern at TNB Renewables Sdn. Bhd. where I independently developed and deployed a production web system and authored SRS documents for three enterprise systems.',
  location:  'Klang, Selangor, Malaysia',
  email:     'nanabellashah03@gmail.com',
  phone:     '+6010-9648871',
  linkedin:  'https://linkedin.com/in/nabilahshahidan',
  github:    '',
  available: 'August 2026',
  openTo:    ['Selangor', 'Kuala Lumpur', 'Pahang', 'Remote'],
  resumeUrl: '/resume/nabilah-resume.pdf',
}

export const education: Education[] = [
  {
    degree:      'Bachelor of Computer Science',
    field:       'Software Engineering with Honours',
    institution: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)',
    period:      '2023 – 2026',
    cgpa:        '3.31',
    honours:     ["Dean's List Semester 5", '109 Credits', 'Second Class Upper'],
  },
  {
    degree:      'Diploma in Computer Science',
    field:       '',
    institution: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)',
    period:      'Aug 2021 – Aug 2023',
    cgpa:        '3.26',
    honours:     ["Dean's List Semester 1 (GPA 3.60)", 'Second Class'],
  },
]

export const skillCategories: SkillCategory[] = [
  { label: 'Programming',  skills: ['Python', 'Java', 'C', 'JavaScript', 'PHP', 'HTML', 'CSS', 'SQL'] },
  { label: 'Frameworks',   skills: ['Flask', 'Laravel', 'React Native', 'Bootstrap 5', 'WordPress'] },
  { label: 'Tools & IDEs', skills: ['VS Code', 'GitHub', 'Power BI', 'Figma', 'Android Studio'] },
  { label: 'Design',       skills: ['Canva', 'Adobe Photoshop', 'Illustrator', 'Filmora'] },
  { label: 'Cloud & Infra',skills: ['AWS', 'Render.com', 'Gunicorn', 'python-dotenv'] },
  { label: 'Languages',    skills: ['Malay (Native)', 'English (Proficient)', 'Arabic (Basic)'] },
  { label: 'Methods',      skills: ['SDLC', 'Agile', 'SRS Writing', 'UAT Testing', 'Requirements Gathering'] },
]

export const projects: Project[] = [
  {
    title:       'TNB Trainee Access Card System',
    description: 'Full-stack Flask web application replacing a manual HR process that took up to one month. Features online form submission, automated PDF generation matching the official TNB Lampiran I layout, and automated email delivery to the HR department.',
    tech:        ['Python', 'Flask', 'ReportLab', 'Pillow', 'Jinja2', 'Bootstrap 5', 'JavaScript', 'Render.com'],
    highlight:   'Production deployment — actively used by TNB Renewables HR department',
  },
  {
    title:       'Automated PDF Generation System',
    description: 'ReportLab-powered PDF engine that generates official TNB Lampiran I forms with pixel-precise layout, embedded passport photos, and canvas-drawn digital signatures.',
    tech:        ['Python', 'ReportLab', 'Pillow', 'HTML5 Canvas API'],
  },
  {
    title:       'Email Automation Module',
    description: 'Python smtplib module that auto-delivers completed access card forms and all supporting documents to HR upon submission. Engineered for Render.com headless environment without keyring dependency.',
    tech:        ['Python', 'smtplib', 'Flask', 'Render.com'],
  },
  {
    title:       'SRS Documentation — 3 Enterprise Systems',
    description: 'Authored draft Software Requirements Specifications for Solar Land Database Dashboard, HSE Reporting Dashboard, and Procurement Process Automation System (PPAS) for TNB Renewables Sdn. Bhd.',
    tech:        ['SRS', 'SDLC', 'Requirements Analysis', 'Stakeholder Interviews'],
    highlight:   'Real enterprise deliverables for TRe internal systems',
  },
]

export const experience: Experience[] = [
  {
    role:     'AI & Digitalization Intern',
    company:  'TNB Renewables Sdn. Bhd. (TRe)',
    period:   'Mar 2026 – Aug 2026',
    duration: '6 months',
    location: 'Kuala Lumpur',
    type:     'internship',
    bullets: [
      'Developed & deployed TNB Access Card System (Python/Flask) to production on Render.com',
      'Automated PDF generation with ReportLab, replacing a manual 1-month paper process',
      'Authored SRS documentation for 3 enterprise systems (Solar, HSE, Procurement)',
      'Completed 4 professional certifications during internship: AWS, Claude API, Agent Skills, AI Fluency',
    ],
  },
  {
    role:     'Computer Science Intern',
    company:  'Swift Haulage Berhad',
    period:   'Mar 2023 – Aug 2023',
    duration: '6 months',
    location: 'Klang, Selangor',
    type:     'internship',
    bullets: [
      'Data entry, filing, and report preparation',
      'Participated in company engagement and administrative activities',
    ],
  },
  {
    role:     'Store Associate (Part-time)',
    company:  "Lotus's Malaysia",
    period:   'Feb 2024; Jul – Sep 2024',
    duration: 'Part-time',
    location: 'Setia Alam, Selangor',
    type:     'part-time',
    bullets: [
      'Inventory management and visual merchandising',
      'Stock replenishment and customer service',
    ],
  },
]

export const certifications: Certification[] = [
  {
    name:        'AWS Cloud Practitioner Essentials',
    issuer:      'Amazon Web Services',
    year:        '2026',
    category:    'cloud',
    accentColor: 'border-sky-400',
  },
  {
    name:        'Building with the Claude API',
    issuer:      'Anthropic Education',
    year:        '2026',
    category:    'ai',
    accentColor: 'border-amber-400',
  },
  {
    name:        'Introduction to Agent Skills',
    issuer:      'Anthropic Education',
    year:        '2026',
    category:    'ai',
    accentColor: 'border-amber-400',
  },
  {
    name:        'Security, Compliance & Identity Fundamentals',
    issuer:      'Microsoft Certified',
    year:        '2025',
    category:    'security',
    accentColor: 'border-blue-400',
  },
  {
    name:        'ISC2 Certified in Cybersecurity (CC)',
    issuer:      'ISC2',
    year:        '2025',
    category:    'security',
    accentColor: 'border-blue-600',
  },
  {
    name:        'Cisco Networking Academy',
    issuer:      'Cisco Systems',
    year:        '2024',
    category:    'networking',
    accentColor: 'border-teal-400',
  },
]

export const achievements: Achievement[] = [
  {
    title: "Dean's List Award × 2",
    sub:   "Diploma Semester 1 (GPA 3.60) and Degree Semester 5 — UMPSA Faculty of Computing",
    date:  '2022 & 2025',
    icon:  '🏆',
  },
  {
    title: 'IFACS 2025',
    sub:   'International Festival on Artificial Intelligence & Cyber Security — participant',
    date:  'November 2025',
    icon:  '🌐',
  },
  {
    title: 'Power BI Crash Course',
    sub:   'Data visualisation and dashboard building with Microsoft Power BI, DAX formulas',
    date:  'May 2025',
    icon:  '📊',
  },
  {
    title: 'UMPSA PEKA 5 — Event Organiser',
    sub:   'Organised Escape Resident, Color Run (May 2024), and Program Inisiatif Pucuk Hijau UMW (Nov 2023)',
    date:  'Nov 2023 – May 2024',
    icon:  '🎯',
  },
  {
    title: 'International Carnival — Inclusive Technology',
    sub:   'International Carnival in Inclusive Technology & Ecosystem',
    date:  'May 2025',
    icon:  '🏛️',
  },
]
