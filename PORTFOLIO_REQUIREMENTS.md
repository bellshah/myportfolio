# Portfolio Website Requirements Document

## Project Title

Personal Portfolio Website – Nabilah Shahidan

---

# 1. Project Overview

The portfolio website is a modern, responsive, and professional personal branding platform designed to showcase:

* Personal profile
* Technical skills
* Education background
* Certifications
* Projects
* Internship experience
* Resume/CV
* Contact information

The system should provide a clean UI/UX with smooth navigation, responsive layouts, interactive animations, and modern web design practices suitable for software engineering and IT-related job applications.

---

# 2. Project Objectives

## Main Objectives

* Build a professional online portfolio for job applications
* Showcase technical and soft skills
* Present academic and internship projects
* Improve personal branding
* Provide recruiters easy access to resume and contact details

---

# 3. Functional Requirements

## 3.1 Home Section

The system shall:

* Display user introduction
* Show profile image/avatar
* Include short professional summary
* Include CTA buttons:

  * View Projects
  * Download Resume
  * Contact Me

---

## 3.2 About Section

The system shall:

* Display personal background
* Display education information
* Display career interests
* Include strengths and career goals

---

## 3.3 Skills Section

The system shall:

* Display technical skills
* Display soft skills
* Categorize skills into sections:

  * Programming Languages
  * Frontend Development
  * Backend Development
  * Database
  * Tools & IDEs
  * Version Control
  * Cloud & Cybersecurity
* Show proficiency levels or skill badges

---

## 3.4 Projects Section

The system shall:

* Display project cards
* Include:

  * Project title
  * Description
  * Technologies used
  * GitHub/demo link
  * Screenshots/images
* Allow responsive card layouts

---

## 3.5 Experience Section

The system shall:

* Display internship experience
* Display responsibilities and achievements
* Show timeline or experience cards

---

## 3.6 Certifications Section

The system shall:

* Display certification cards
* Include:

  * Certificate name
  * Organization/provider
  * Completion year
  * Certificate link (optional)

Example certifications:

* ISC2 Certified in Cybersecurity (CC)
* AWS Cloud Practitioner Essentials
* Microsoft Security Fundamentals
* Cisco Networking Academy

---

## 3.7 Resume Section

The system shall:

* Allow users to view resume
* Allow PDF resume download
* Open resume in new tab

---

## 3.8 Contact Section

The system shall:

* Include contact form
* Include:

  * Name
  * Email
  * Message
* Display social media links:

  * GitHub
  * LinkedIn
  * Email

Optional:

* WhatsApp contact button

---

# 4. Non-Functional Requirements

## Performance

* Fast loading speed
* Optimized images and assets
* Smooth scrolling and transitions

## Responsiveness

* Mobile responsive
* Tablet responsive
* Desktop optimized

## Usability

* Simple navigation
* Clean layout
* Professional appearance
* Easy-to-read typography

## Accessibility

* Proper contrast ratio
* Keyboard navigation support
* Semantic HTML structure

## Maintainability

* Modular code structure
* Reusable components
* Organized folder structure

---

# 5. Tech Stack

## Frontend

* React.js / Next.js
* Tailwind CSS
* Framer Motion
* HTML5
* CSS3
* JavaScript / TypeScript

## Optional UI Libraries

* shadcn/ui
* Lucide React Icons

## Backend (Optional)

* Node.js
* Express.js

## Database (Optional)

* Supabase
* Firebase

## Deployment

* Vercel
* Netlify

## Version Control

* Git
* GitHub

## Development Environment

* Visual Studio Code

---

# 6. Recommended Folder Structure

```bash
portfolio/
│
├── public/
├── src/
│   ├── components/
│   ├── sections/
│   ├── assets/
│   ├── styles/
│   ├── data/
│   ├── hooks/
│   └── pages/
│
├── package.json
├── tailwind.config.js
├── README.md
└── requirements.md
```

---

# 7. UI/UX Preferences

## Design Style

* Minimalist
* Modern
* Professional
* Clean spacing
* Soft shadows
* Rounded corners

## Color Theme

Preferred:

* Dark mode support
* Blue/purple accent colors
* Neutral backgrounds

## Animations

* Smooth scrolling
* Fade-in animations
* Hover effects
* Animated project cards

## Typography

Preferred fonts:

* Inter
* Poppins
* Geist

---

# 8. Portfolio Features Preferences

## Preferred Features

* Responsive navigation bar
* Sticky navbar
* Dark/light mode toggle
* Animated hero section
* Project filtering system
* Download CV button
* Scroll progress indicator
* Back-to-top button

## Optional Advanced Features

* Blog section
* Admin dashboard
* Visitor analytics
* Email integration
* AI chatbot assistant

---

# 9. Development Preferences for Claude + VS Code

## Claude Usage

Claude should assist with:

* UI component generation
* React/Tailwind code generation
* Responsive layout improvements
* Animation enhancements
* Accessibility improvements
* Refactoring and optimization

## VS Code Setup

Recommended extensions:

* ESLint
* Prettier
* Tailwind CSS IntelliSense
* Error Lens
* GitLens
* Auto Rename Tag

## Recommended Workflow

1. Design UI structure
2. Create reusable components
3. Implement responsive layouts
4. Add animations
5. Connect backend/services
6. Optimize performance
7. Deploy portfolio

---

# 10. Future Enhancements

Potential future improvements:

* CMS integration
* Dynamic project management
* Multi-language support
* AI portfolio assistant
* Interactive project demos
* Live GitHub statistics
* Blog/article system

---

# 11. Deployment Requirements

The system should:

* Be deployable on Vercel or Netlify
* Support HTTPS
* Be mobile optimized
* Include SEO optimization
* Include Open Graph metadata

---

# 12. Conclusion

This portfolio system is intended to create a strong professional online presence for software engineering and IT career opportunities. The website should emphasize professionalism, modern design, responsiveness, and user-friendly interaction while showcasing technical skills, certifications, and projects effectively.
