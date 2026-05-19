# 📁 Portfolio System — Complete Requirements & Developer Guide
### Nabilah Binti Mohammad Shahidan | Software Engineering Graduate | 2026

> **Purpose:** A Behance-style visual portfolio system — formatted as beautiful A4 PDF slides
> for publishing on LinkedIn, Behance, and other social media platforms. Each slide is a
> self-contained page that can be screenshotted or printed to PDF directly from the browser.

---

## Table of Contents

1. [Owner Profile (Real Data)](#1-owner-profile-real-data)
2. [Project Overview](#2-project-overview)
3. [Goals & Publishing Targets](#3-goals--publishing-targets)
4. [Slide Structure & Content Plan](#4-slide-structure--content-plan)
5. [Functional Requirements](#5-functional-requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Tech Stack](#7-tech-stack)
8. [Folder Structure](#8-folder-structure)
9. [Design System](#9-design-system)
10. [Slide-by-Slide Content Specification](#10-slide-by-slide-content-specification)
11. [VS Code Setup & Preferences](#11-vs-code-setup--preferences)
12. [Development Workflow](#12-development-workflow)
13. [How to Export & Publish](#13-how-to-export--publish)
14. [Customisation Guide](#14-customisation-guide)
15. [Complete Checklist](#15-complete-checklist)

---

## 1. Owner Profile (Real Data)

> All data below is sourced directly from the uploaded documents:
> RESUME_CV.docx · transcript.pdf · OFFCL_TRANSCRIPT_DIPLOMA.pdf ·
> FirstReportLI_NABILAH_CB23122.pdf · SRS_TNB_AccessCard_System.docx ·
> Dean_s_List_SEM_1_Diploma.pdf · SURAT_TAMAT_PENGAJIAN_DIPLOMA.pdf

### Personal Information

| Field              | Value                                                            |
|--------------------|------------------------------------------------------------------|
| Full Name          | Nabilah Binti Mohammad Shahidan                                  |
| Display Name       | Nabilah Shahidan                                                 |
| NRIC               | 030328-10-0812                                                   |
| Date of Birth      | 28 March 2003                                                    |
| Address            | 112, Jalan Galah 1E, Taman Perepat Indah, 42100 Klang, Selangor |
| Phone              | +6010-9648871                                                    |
| Email              | nanabellashah03@gmail.com                                        |
| LinkedIn           | linkedin.com/in/nabilahshahidan                                  |
| Location           | Klang, Selangor, Malaysia                                        |
| Languages          | Malay (Native) · English (Proficient) · Arabic (Basic)          |
| Target Role        | Software Engineer / Software Developer / System Analyst          |

---

### Academic Background

| Level       | Programme                                                    | Institution | Period                         | CGPA | Class              |
|-------------|--------------------------------------------------------------|-------------|--------------------------------|------|--------------------|
| **Degree**  | B.Sc. Computer Science (Software Engineering) with Honours   | UMPSA       | Oct 2023 – Present (internship to Aug 2026) | 3.19 (partial) / 3.31 (CV) | Second Class Upper |
| **Diploma** | Diploma in Computer Science                                  | UMPSA       | Aug 2021 – Aug 2023            | 3.26 | Second Class       |

> **UMPSA** = Universiti Malaysia Pahang Al-Sultan Abdullah, Pekan, Pahang

---

### Degree Transcript (Verified — transcript.pdf)

| Semester                   | GPA  | CGPA | Status |
|----------------------------|------|------|--------|
| Sem I 2023/2024            | 3.21 | 3.21 | KB     |
| Sem II 2023/2024           | 3.28 | 3.25 | KB     |
| Sem I 2024/2025            | 2.85 | 3.13 | KB     |
| Sem II 2024/2025           | 3.36 | 3.19 | KB     |
| **Final CGPA (Partial)**   | —    | **3.19** | Second Class Upper |

**Credits:** Acquired 59 · Exempted (Vertical Transfer from Diploma) 50 · Total 109

**Key Courses Completed:**
Systems Analysis & Design · Software Requirement Workshop · Software Testing ·
Object Oriented Programming · Algorithm & Complexity · AI Techniques ·
Software Design Workshop · Integrated Application Development Framework ·
Software Project Management · Software Evolution & Maintenance ·
Formal Method · Undergraduate Project I · Data Analytics & Visualization

**Vertical Credit Transfer (18 Diploma subjects credited to Degree):**
Programming Techniques · Data Structure & Algorithms · Database Systems ·
Web Development · Mobile Application Development · Software Engineering ·
Human Computer Interaction · Web Engineering · Computer Architecture ·
Data Communication & Networking · Data & Network Security · Operating Systems

---

### Diploma Transcript (Verified — OFFCL_TRANSCRIPT_DIPLOMA.pdf)

| Semester                          | GPA  | CGPA | Notable         |
|-----------------------------------|------|------|-----------------|
| Preliminary Sem 2021/2022         | 3.22 | 3.22 | —               |
| Sem I 2021/2022                   | 3.60 | 3.48 | **DEAN'S LIST** |
| Sem II 2021/2022                  | 3.44 | 3.46 | —               |
| Sem I 2022/2023                   | 2.61 | 3.26 | —               |
| Sem II 2022/2023 (Industrial Training) | 0.00 | 3.26 | HL        |
| **Final CGPA**                    | —    | **3.26** | Second Class |

---

### Dean's List Awards

| Award           | Semester                                    | GPA  | Date        | Institution |
|-----------------|---------------------------------------------|------|-------------|-------------|
| Dean's List     | Sem I Diploma — Academic Session 2021/2022  | 3.60 | 04 Mar 2022 | UMPSA (UMP) |
| Dean's List     | Sem 5 Degree                                | —    | —           | UMPSA       |

---

### Work & Internship Experience

| Role                         | Organisation                        | Period                    | Type                    |
|------------------------------|-------------------------------------|---------------------------|-------------------------|
| AI & Digitalization Intern   | TNB Renewables Sdn. Bhd. (TRe)     | 9 Mar – 21 Aug 2026       | Degree Industrial Training (6 months) |
| Store Associate (Part-time)  | Lotus's Malaysia                    | Feb 2024; Jul–Sep 2024    | Part-time               |
| Personel MySTEP (Contract)   | Jabatan Pendidikan Negeri Selangor  | Sep 2023                  | Contract                |
| Computer Science Intern      | Swift Haulage Berhad                | Mar – Aug 2023            | Diploma Industrial Training (6 months) |

---

### Degree Internship at TNB Renewables — Full Details

| Field               | Value                                               |
|---------------------|-----------------------------------------------------|
| Company             | TNB Renewables Sdn. Bhd. (TRe)                     |
| Parent Company      | Tenaga Nasional Berhad (TNB)                        |
| Department          | Finance, Strategy & Portfolio → AI & Digitalization |
| Role                | AI & Digitalization Intern                          |
| Duration            | 9 March 2026 – 21 August 2026 (6 months)           |
| Industry Supervisor | En. Ahmad Amirul Hakim Bin Mohd Hamid              |
| Faculty Supervisor  | Ts. Dr. Nabilah Filzah Mohd Radhuan                |
| University          | UMPSA, Faculty of Computing                         |
| Matric ID           | CB23122                                             |

**Projects Completed During Internship:**

1. **TNB Trainee Access Card Application System** *(Main Project)*
   - Full-stack web application replacing a manual Lampiran I process that took up to 1 month
   - Features: online form, 3 application types (New / Damaged / Lost), document upload,
     digital signature canvas, auto PDF generation (ReportLab), automated HR email (smtplib)
   - Deployed to production on Render.com with Gunicorn
   - Stack: Python · Flask · ReportLab · Pillow · smtplib · Bootstrap 5 · HTML5 Canvas API · Jinja2 · python-dotenv · Gunicorn · Render.com · Git/GitHub

2. **Draft SRS — Solar Land Database Dashboard System** *(Additional Task)*
   - Requirements document for solar energy land management dashboard
   - Stakeholders: Admin, Engineer/User, Boss/Viewer
   - Proposed Stack: React.js, Node.js, MySQL, GIS/Map API

3. **Draft SRS — HSE Reporting Dashboard System** *(Additional Task)*
   - Requirements for Health, Safety & Environment reporting at TRe

4. **Draft SRS — ESG Dashboard System** *(Additional Task)*
   - Requirements for Environmental, Social & Governance data dashboard

5. **Draft SRS — Procurement Process Automation System (PPAS)** *(Additional Task)*
   - Rule-based engine applying LOA rules for TRe and SPV entities
   - Determines procurement mode and approval authority automatically

**Certifications Completed During Internship:**
- AWS Cloud Practitioner Essentials
- Building with the Claude API (Anthropic Education)
- Introduction to Agent Skills (Anthropic Education)
- AI Fluency for Students (Anthropic Education)

---

### Full Certifications List (from CV)

| Certificate                                       | Issuer                | Year |
|---------------------------------------------------|-----------------------|------|
| AWS Cloud Practitioner Essentials                 | Amazon Web Services   | 2026 |
| Building with the Claude API                      | Anthropic Education   | 2026 |
| Introduction to Agent Skills                      | Anthropic Education   | 2026 |
| AI Fluency for Students                           | Anthropic Education   | 2026 |
| Security, Compliance & Identity Fundamentals      | Microsoft             | 2025 |
| Cisco Networking Academy (Course Completion)      | Cisco                 | —    |

---

### Technical Skills (from CV)

| Category           | Skills                                                                               |
|--------------------|--------------------------------------------------------------------------------------|
| Programming        | Python, Java, C, JavaScript, PHP, HTML, CSS, SQL                                    |
| Frameworks & Tools | Flask, Laravel, React Native, WordPress, Bootstrap 5, VS Code, Android Studio, NetBeans, Power BI |
| Database           | MySQL                                                                                |
| Version Control    | GitHub                                                                               |
| Operating Systems  | Windows, Linux                                                                       |
| Design             | Figma, Canva, Adobe Photoshop, Adobe Illustrator, Wondershare Filmora               |
| Office             | Microsoft Office (Word, Excel, PowerPoint)                                           |
| Internship-gained  | ReportLab, Pillow, smtplib, HTML5 Canvas API, Jinja2, Gunicorn, Render.com, python-dotenv |

---

### Extracurricular Activities (from CV)

| Activity                                                | Role        | Date     |
|---------------------------------------------------------|-------------|----------|
| International Festival on AI & Cyber Security (IFACS)  | Participant | Nov 2025 |
| Crash Course Power BI                                   | Participant | May 2025 |
| International Carnival in Inclusive Technology          | Participant | May 2025 |
| UMPSA PEKA 5 — Escape Resident                         | Organiser   | May 2024 |
| UMPSA PEKA 5 — Color Run                               | Organiser   | May 2024 |
| UMPSA PEKA 5 — Program Inisiatif Pucuk Hijau UMW       | Organiser   | Nov 2023 |

---

### Documents Available

| Document                              | File                                                  | Status            |
|---------------------------------------|-------------------------------------------------------|-------------------|
| Resume / CV                           | RESUME_CV.docx                                        | ✅ Ready          |
| Degree Partial Transcript             | transcript.pdf                                        | ✅ Ready          |
| Diploma Official Transcript           | OFFCL_TRANSCRIPT_DIPLOMA.pdf                          | ✅ Ready          |
| Dean's List Certificate (Diploma S1)  | Dean_s_List_SEM_1_Diploma.pdf                         | ✅ Ready          |
| Diploma Completion Letter             | SURAT_TAMAT_PENGAJIAN_DIPLOMA.pdf                     | ✅ Ready          |
| Internship Report (Degree)            | FirstReportLI_NABILAH_CB23122.pdf                     | ✅ Ready          |
| SRS — TNB Access Card System          | SRS_TNB_AccessCard_System.docx                        | ✅ Ready          |
| SRS — Solar Land Database             | SRS_OF_LAND_DATABASE_SOLAR.docx                       | ✅ Ready          |
| SRS — Procurement Process Automation  | DRAFT_SRS_OF_PROCUREMENT_PROCESS_AUTOMATION_SYSTEM.docx | ✅ Ready        |
| SPM Certificate                       | —                                                     | ⏳ Not yet uploaded |
| Degree Certificate                    | —                                                     | ⏳ Pending confer (Aug 2026) |
| Internship Completion Certificate     | —                                                     | ⏳ Pending (Aug 2026) |

---

## 2. Project Overview

| Field             | Details                                                              |
|-------------------|----------------------------------------------------------------------|
| Project Name      | Nabilah Shahidan — Software Engineering Graduate Portfolio           |
| Version           | 1.0.0                                                                |
| Format            | Behance-style A4 PDF slides (794 × 1123px per slide)                |
| Total Slides      | 10 slides                                                            |
| Output Format     | Single `.html` file → Print to PDF → Share as image slides          |
| Main File         | `portfolio_slides.html`                                              |
| Publishing Target | LinkedIn · Behance · Instagram · WhatsApp · Job application emails  |
| Audience          | Recruiters, HR personnel, hiring managers for SE/IT roles in Malaysia|
| Target Roles      | Software Engineer, Software Developer, System Analyst, IT Graduate   |

---

## 3. Goals & Publishing Targets

### Primary Goals

- Present Nabilah as a **credible Software Engineering graduate** with real deliverables
- Showcase the **TNB Renewables internship** prominently — a subsidiary of Malaysia's largest utility GLC
- Demonstrate **SE competencies**: SRS writing, system development, testing, cloud deployment
- Show **dual qualification**: Diploma (2023) + Degree (2026) from the same reputable institution
- Highlight **4 professional certifications** completed during the internship itself

### Publishing Workflow

```
1. Open portfolio_slides.html in Chrome
2. Ctrl+P (Windows) / Cmd+P (Mac)
3. Settings: Save as PDF · A4 · No margins · Background graphics ON · Scale 100%
4. Save as: Nabilah_Shahidan_Portfolio_2026.pdf
5. Upload to LinkedIn as Document Post
6. OR: Screenshot each slide → Post as 10-image carousel on LinkedIn / Instagram
7. OR: Upload PDF pages to Behance as project images
8. OR: Attach PDF to job application emails alongside CV
```

### Platform Tips

| Platform   | Format         | Best Practice                                                  |
|------------|----------------|----------------------------------------------------------------|
| LinkedIn   | Document Post  | Upload PDF directly — renders as swipeable carousel (3× reach)|
| LinkedIn   | Featured       | Add as "Featured" item on your profile                         |
| Behance    | Project        | Upload slide PNGs one by one as project images                 |
| Instagram  | Carousel       | Export each slide as PNG, post as 10-image carousel            |
| Email      | Attachment     | Attach PDF alongside CV to job application emails              |

---

## 4. Slide Structure & Content Plan

| Slide | Title                          | Background  | Primary Content                                     |
|-------|--------------------------------|-------------|-----------------------------------------------------|
| 01    | Cover Page                     | Dark Navy   | Name, UMPSA degree, TNB internship, key info cards  |
| 02    | Table of Contents              | Off-white   | 8-row navigation list of all portfolio sections     |
| 03    | About Me & Resume Summary      | Cream       | Bio, personal info, work experience, skills         |
| 04    | Education & Qualifications     | Dark Navy   | Degree + Diploma + certifications + Dean's List     |
| 05    | Internship Highlights          | Off-white   | TNB Renewables role, 6 contributions, tools used    |
| 06    | Requirements Gathering Sample  | Cream       | Real SRS from TNB Access Card System internship     |
| 07    | Test Case Examples             | Dark Navy   | Real UAT test cases from TNB Access Card System     |
| 08    | Involvement & Achievements     | Off-white   | Dean's List banner, events, extracurricular         |
| 09    | Certificates & Credentials     | Dark Navy   | 9-card certificate grid with all credentials        |
| 10    | Closing / Contact              | Coral/Red   | "Hire Me" CTA, full contact details, LinkedIn       |

---

## 5. Functional Requirements

### FR-01 — Cover Slide
- Full name: **Nabilah Binti Mohammad Shahidan**
- Subtitle: **B.Sc. Computer Science (Software Engineering) with Honours — UMPSA**
- Internship: **AI & Digitalization Intern · TNB Renewables Sdn. Bhd.**
- Info cards: Location · Degree & CGPA · Diploma · Internship · Email · LinkedIn
- Skill chips: Python · Flask · SQL · GitHub · SRS Writing · SDLC · Agile
- "Open to Work" animated indicator

### FR-02 — Table of Contents
- 8 numbered rows, each with: number, section name, sub-description, category tag
- Dark sidebar with serif heading and portfolio introduction paragraph

### FR-03 — About Me / Resume
- 3-paragraph bio referencing UMPSA dual qualification + TNB internship + SE deliverables
- 8-cell personal info grid: Name, Phone, Email, Location, CGPA, Available, LinkedIn, Reference
- 3 work experience blocks: TNB Renewables (primary) · Swift Haulage (diploma internship) · Lotus's (part-time)
- Skills by category: Programming · Frameworks · Database · Design · OS · Office
- Languages listed: Malay · English · Arabic

### FR-04 — Education
- Featured card: **Degree** — B.Sc. CS Software Engineering · UMPSA · CGPA 3.19 · Second Class Upper · Credits 109
- Dean's List semester badges on featured card (Sem 5)
- Secondary card: **Diploma** — CS · UMPSA · CGPA 3.26 · Dean's List Sem 1 · GPA 3.60
- Certification cards: AWS · Anthropic (Claude API) · Microsoft Security · Agent Skills · Cisco
- Show vertical credit transfer: 50 credits from Diploma recognised in Degree

### FR-05 — Internship Highlights
- Sidebar meta: Company · Role · Duration · Location · Department · Supervisor · Method
- 6 contribution cards (numbered 01–06): Access Card System · PDF Generation · Email Automation · Cloud Deployment · SRS Documentation (3 systems) · 4 Certifications
- Tools pills: Python · Flask · ReportLab · Pillow · smtplib · Bootstrap 5 · HTML5 Canvas · Jinja2 · Git · Render.com · Gunicorn · python-dotenv

### FR-06 — Requirements Gathering Sample
- Project: **TNB Trainee Access Card Application System** (real internship project)
- Stakeholders: Trainee/User · HR Department · Developer (Intern) · TNB Management
- Requirements table: 11 rows (FR-01 to NF-03) from real SRS document
- Columns: ID · Requirement Description · Type · Priority · Source

### FR-07 — Test Cases
- System: **TNB Access Card System** (real project)
- Scorecard: Total 12 · Passed 9 · Failed 2 · Pending 1 · Coverage 85% · Tool: Manual + DevTools
- 12 test case rows: TC ID · Scenario · Input/Steps · Expected Result · Status
- Colour-coded status: green PASS · red FAIL · amber PENDING

### FR-08 — Achievements & Involvement
- Featured Dean's List banner: **Diploma Sem 1 · GPA 3.60 · 04 Mar 2022** + **Degree Sem 5**
- 4 achievement cards: IFACS Nov 2025 · Power BI May 2025 · PEKA 5 Organiser × 3 · International Carnival May 2025

### FR-09 — Certificates
- 9-card grid (3 columns × 3 rows)
- Cards: Degree (pending) · Diploma (SURAT_TAMAT 24 Aug 2023) · Dean's List Diploma Sem 1 · TRe Internship Completion · AWS · Claude API · Microsoft Security · Agent Skills · Cisco
- Colour-coded top border per category type
- Footer note: "SPM certificate and additional credentials attached on request"

### FR-10 — Closing / Contact
- Left coral panel: "Hire Me." hero text + tagline + open-to-work badge
- Right light panel: Email · Phone · LinkedIn · Location · Degree
- Closing quote + copyright footer

### FR-11 — Print Export
- "Print / Save as PDF" button visible on screen, hidden in `@media print`
- Each `.slide` has `page-break-after: always` for clean PDF pagination
- A4 dimensions: 794px × 1123px per slide
- Page number on every slide

---

## 6. Non-Functional Requirements

### Performance
- Single `.html` file — no build step, no server, no Node.js required
- Opens in browser instantly; Google Fonts loaded from CDN
- Vanilla JS only — no React, no Vue, no jQuery

### Print Quality
- Slides output cleanly at A4 at both 96dpi (screen) and 300dpi (print)
- No content clipping, no overflow, no mid-element page breaks
- Text remains vector-sharp — not rasterised
- Background graphics preserved in Chrome print (`background-graphics: ON`)

### Visual Consistency
- Consistent design tokens (CSS custom properties) across all 10 slides
- Typography hierarchy maintained across all slides
- Dark/light alternation correct (slides 01, 04, 07, 09 = dark; 02, 03, 05, 06, 08 = light; 10 = coral)
- Each slide readable as a standalone image without surrounding context

### Accessibility
- Semantic HTML5 structure: `<header>`, `<main>`, `<section>`, `<article>`
- Decorative elements use `aria-hidden="true"`
- Colour contrast ≥ 4.5:1 on all text (WCAG AA)
- Tab-navigable interactive elements (print button)

### Browser Compatibility
- Chrome 90+ · Edge 90+ · Firefox 88+ · Safari 14+
- Print-to-PDF: Chrome and Edge recommended
- Mobile: single-column fallback at viewport < 860px

---

## 7. Tech Stack

### Core — Single HTML File, No Build Required

| Technology              | Purpose                                                  | Reason                                    |
|-------------------------|----------------------------------------------------------|-------------------------------------------|
| **HTML5**               | Slide structure, semantic markup                         | Native, zero dependency                   |
| **CSS3**                | All layout, typography, colour, animation, print styles  | Full control, `@media print` native       |
| **CSS Custom Properties**| Design token system (colours, fonts, spacing)           | Single source of truth for all theming    |
| **CSS Grid**            | Slide internal layouts (2-column, 3-column, sidebar)     | Precise multi-column control              |
| **CSS Flexbox**         | Component-level alignment (badges, rows, cards)          | Row and column alignment                  |
| **Vanilla JavaScript**  | Print button, minor page interactions                    | Zero dependency, instant execution        |

### Typography — Google Fonts CDN

| Font                   | Weights               | Usage                                       |
|------------------------|-----------------------|---------------------------------------------|
| **Cormorant Garamond** | 300, 400, 600, 700 + Italic | Hero name, section headings, slide titles |
| **Jost**               | 300, 400, 500, 600, 700 | Body text, labels, descriptions, UI copy  |
| **Inconsolata**        | 400, 600              | Mono labels, page numbers, badge text, tags |

```html
<!-- Google Fonts import (in <head>) -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,600&family=Jost:wght@300;400;500;600;700&family=Inconsolata:wght@400;600&display=swap" rel="stylesheet">
```

### Colour Palette — CSS Design Tokens

| Token       | Hex                    | Usage                                               |
|-------------|------------------------|-----------------------------------------------------|
| `--paper`   | `#F8F5EF`              | Light slide background (primary)                    |
| `--paper2`  | `#EDE8DF`              | Light slide background (alternate / cream)          |
| `--paper3`  | `#E0D9CE`              | Subtle borders, fills on light slides               |
| `--navy`    | `#1B2A4A`              | Dark slide backgrounds, headings on light slides    |
| `--navy2`   | `#22345C`              | Dark sidebars, secondary dark panels                |
| `--coral`   | `#C8472E`              | Primary accent — CTAs, labels, highlights, Slide 10 |
| `--coral2`  | `#E06B53`              | Secondary accent — softer coral for hover/text      |
| `--teal`    | `#1A6B6B`              | Tertiary accent — variety colour for badges         |
| `--gold`    | `#C49A3C`              | CGPA numbers, Dean's List highlights                |
| `--dim`     | `#7a7068`              | Muted body text, secondary labels                   |
| `--border`  | `rgba(27,42,74,0.12)`  | Dividers on light-background slides                 |

### Why No Framework / Build Tool?

This portfolio is **print-first** and **share-first**. A single `.html` file:
- Opens on any computer without installing Node.js, npm, or any tool
- Prints to PDF in one step from Chrome — no build, no deploy
- Can be emailed, uploaded to Google Drive, Behance, or LinkedIn directly
- No build errors, no dependency conflicts, no version mismatches
- Student-friendly: editable in Notepad if needed

---

## 8. Folder Structure

```
portfolio/
│
├── portfolio_slides.html          ← Main deliverable (everything inline)
├── PORTFOLIO_REQUIREMENTS.md      ← This requirements document
├── README.md                      ← Publishing & editing instructions
│
├── assets/                        ← Optional extras
│   ├── profile-photo.jpg          ← Profile photo for cover card (optional)
│   └── signature.png              ← Signature image (optional)
│
└── documents/                     ← Originals for job applications
    ├── Nabilah_Resume_CV.pdf
    ├── Degree_Transcript_Partial.pdf
    ├── Diploma_Official_Transcript.pdf
    ├── Deans_List_Diploma_Sem1.pdf
    ├── Surat_Tamat_Diploma.pdf
    ├── Internship_Report_TRe.pdf
    ├── SRS_TNB_AccessCard.pdf
    ├── SRS_Solar_Land_Database.pdf
    ├── SRS_Procurement_Automation.pdf
    ├── AWS_Certificate.pdf
    ├── Microsoft_Security_Cert.pdf
    └── Cisco_Cert.pdf
```

> The `documents/` folder is for your own use — these files are attached individually
> to job applications alongside the portfolio PDF. They are NOT embedded in the HTML.

---

## 9. Design System

### A4 Slide Dimensions

```css
:root {
  --w: 794px;   /* A4 at 96dpi — matches Chrome print output */
  --h: 1123px;  /* A4 at 96dpi */
}

.slide {
  width: var(--w);
  height: var(--h);
  overflow: hidden;           /* Hard boundary — nothing bleeds out */
  page-break-after: always;   /* Print: every slide = new PDF page */
  break-after: page;          /* Modern browsers */
}
```

### Slide Rhythm (Dark / Light Alternation)

```
Slide 01 → DARK   — #1B2A4A Navy      Cover
Slide 02 → LIGHT  — #F8F5EF Off-white  Table of Contents
Slide 03 → LIGHT  — #EDE8DF Cream      About Me
Slide 04 → DARK   — #1B2A4A Navy       Education
Slide 05 → LIGHT  — #F8F5EF Off-white  Internship
Slide 06 → LIGHT  — #EDE8DF Cream      Requirements
Slide 07 → DARK   — #1B2A4A Navy       Test Cases
Slide 08 → LIGHT  — #F8F5EF Off-white  Achievements
Slide 09 → DARK   — #22345C Navy Dark  Certificates
Slide 10 → CORAL  — #C8472E Red-Orange Closing / Contact
```

### Typography Scale

| Role              | Font                | Size (approx) | Weight    | Style      |
|-------------------|---------------------|---------------|-----------|------------|
| Hero name large   | Cormorant Garamond  | 54–68px       | 700       | Normal     |
| Hero name italic  | Cormorant Garamond  | 54–68px       | 300       | Italic     |
| Section heading   | Cormorant Garamond  | 44–52px       | 700       | Normal     |
| Section italic    | Cormorant Garamond  | Same          | 300       | Italic     |
| Body paragraph    | Jost                | 12–13px       | 300       | Normal     |
| UI label          | Jost                | 11–12px       | 500       | Normal     |
| Card title        | Jost                | 12–13px       | 600       | Normal     |
| Mono badge/tag    | Inconsolata         | 8.5–10px      | 400–600   | Uppercase  |
| Page number       | Inconsolata         | 8.5px         | 400       | 0.15em spacing |

### Spacing System

```css
/* Slide edge padding */
.slide-inner  { padding: 44px 56px; }
.slide-header { padding: 42px 56px 26px; }

/* Gap scale */
/* sm  */  gap: 7px–10px    /* Chip/badge/pill rows */
/* md  */  gap: 14px–18px   /* Card internal padding */
/* lg  */  gap: 28px–36px   /* Between section blocks */
/* xl  */  gap: 44px–56px   /* Slide edge padding */
```

### Decorative Patterns

| Pattern                  | Usage                       | Implementation                               |
|--------------------------|-----------------------------|----------------------------------------------|
| CSS grid dot background  | Slide 01 dark bg            | `linear-gradient` 55px × 55px, 3.5% opacity |
| Gradient stripe          | Slide 02 top bar            | 5px height: Navy → Coral → Teal             |
| Left accent bar          | Education & exp cards       | 4px absolute strip, gradient coral→gold      |
| Top accent bar           | Certificate cards           | 3px `::before` pseudo, category colour       |
| Radial glow              | Slide 01, Slide 10          | `radial-gradient`, 7% opacity                |
| Large watermark number   | Behind stat numbers         | Font-size: 120px+, opacity 0.03–0.06         |

---

## 10. Slide-by-Slide Content Specification

### SLIDE 01 — Cover Page

```
Background: #1B2A4A (Dark Navy) + grid background + radial glow

Left Panel (54% width):
  Eyebrow:  "Software Engineering Graduate · Class of 2026"
  Name:     NABILAH                              ← large serif, white
            Shahidan.                            ← italic, coral, font-weight 300
  Rule:     48px coral divider line
  Title:    "B.Sc. Computer Science (Software Engineering) with Honours
             Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA) · 2026"
  Bio:      "A Software Engineering graduate with a dual UMPSA qualification —
             completing both a Diploma in CS and a Degree in Software
             Engineering at the same institution. Currently serving as AI &
             Digitalization Intern at TNB Renewables Sdn. Bhd. where I
             independently developed and deployed a production web system and
             authored SRS documents for three enterprise systems."
  Chips:    Python · Flask · SQL · GitHub · SRS Writing · SDLC · Agile

Right Panel (46% width, slightly lighter navy):
  Card 1 — Location:   Klang, Selangor, Malaysia
  Card 2 — Degree:     B.Sc. CS (Software Engineering) Hons · UMPSA · CGPA 3.19
  Card 3 — Diploma:    Diploma in Computer Science · UMPSA · CGPA 3.26
  Card 4 — Internship: AI & Digitalization Intern · TNB Renewables Sdn. Bhd. (TRe) · 6 months
  Card 5 — Email:      nanabellashah03@gmail.com
  Card 6 — LinkedIn:   linkedin.com/in/nabilahshahidan

  Page stamp: 01 / 10 (bottom right, white, low opacity)
```

### SLIDE 02 — Table of Contents

```
Background: #F8F5EF (Off-white) + 5px gradient stripe at top

Sidebar (dark navy, 210px):
  Heading:  "What's"
            "Inside"      ← serif
            "Portfolio"   ← italic, coral
  Body:     "A complete portfolio of my academic qualifications,
             degree internship at TNB Renewables Sdn. Bhd.,
             software engineering deliverables, and credentials —
             compiled for Software Engineering and IT roles in Malaysia."
  Tags:     SOFTWARE ENGINEERING GRADUATE / UMPSA 2026 / OPEN TO WORK AUG 2026

Main (light):
  Section label: "Contents"
  8 rows:
    01  About Me & Resume Summary           Profile
        Personal info, skills, experience overview
    02  Education & Qualifications          Academic
        Degree, Diploma, transcripts, Dean's List
    03  Internship Highlights               Work
        TNB Renewables — contributions, tools, value
    04  Requirements Gathering Sample       Analysis
        Real SRS from TNB Access Card internship project
    05  Test Case Examples                  QA
        Real UAT test cases from TNB Access Card System
    06  Involvement & Achievements          Awards
        Dean's List, events, extracurricular activities
    07  Certificates & Credentials          Docs
        All certifications and academic credentials
    08  Contact & Closing                   Connect
        Email, phone, LinkedIn, open-to-work CTA

  Page stamp: 02 / 10
```

### SLIDE 03 — About Me / Resume

```
Background: #EDE8DF (Cream)
Header: "About / Me."  +  meta: "Slide 03 · Resume Summary"

Left column:
  Block label: PROFILE
  Bio Para 1: "I am a Software Engineering graduate from UMPSA with a
               dual qualification — a Diploma in Computer Science (CGPA 3.26,
               2023) and an ongoing Bachelor of Computer Science Software
               Engineering (CGPA 3.31). I was awarded Dean's List twice
               across both programmes."
  Bio Para 2: "During my degree internship at TNB Renewables Sdn. Bhd. I
               independently developed and deployed the TNB Trainee Access Card
               System — a real production Flask web application now used by
               the HR department. I also authored draft SRS documents for
               three enterprise systems: Solar Land Database, HSE Reporting
               Dashboard, and Procurement Process Automation System."
  Bio Para 3: "I am seeking a full-time role in Software Engineering,
               Software Development, or System Analysis — available from
               August 2026 upon completion of my internship."

  Block label: PERSONAL INFO
  Grid (8 cells):
    Full Name   | Nabilah Binti Mohammad Shahidan
    Phone       | +6010-9648871
    Email       | nanabellashah03@gmail.com
    Location    | Klang, Selangor, Malaysia
    CGPA        | 3.31 Degree · 3.26 Diploma · UMPSA
    Available   | August 2026 (Upon Internship Completion)
    LinkedIn    | linkedin.com/in/nabilahshahidan
    Reference   | Ts. Azlina Zainuddin · UMPSA · azlinaz@umpsa.edu.my

Right column:
  Block label: EXPERIENCE

  1. AI & Digitalization Intern — TNB Renewables Sdn. Bhd.
     9 Mar – 21 Aug 2026 · 6 months · Degree Industrial Training · Kuala Lumpur
     → Developed & deployed TNB Access Card System (Python/Flask → production on Render.com)
     → Automated PDF generation using ReportLab, replacing manual 1-month paper process
     → Authored SRS for 3 enterprise systems (Solar, HSE, Procurement)
     → Completed 4 certifications: AWS, Claude API, Agent Skills, AI Fluency

  2. Computer Science Intern — Swift Haulage Berhad
     Mar – Aug 2023 · 6 months · Diploma Industrial Training · Klang, Selangor
     → Data entry, filing, report preparation, company engagement activities

  3. Store Associate (Part-time) — Lotus's Malaysia
     Feb 2024; Jul – Sep 2024 · Setia Alam, Selangor
     → Inventory management, visual merchandising, stock replenishment

  Block label: SKILLS
    Programming:  Python · Java · C · JavaScript · PHP · HTML · CSS · SQL
    Frameworks:   Flask · Laravel · React Native · Bootstrap 5 · WordPress
    Tools:        VS Code · GitHub · Power BI · Figma · Android Studio
    Design:       Canva · Adobe Photoshop · Adobe Illustrator · Filmora
    Languages:    Malay (Native) · English (Proficient) · Arabic (Basic)

  Page stamp: 03 / 10
```

### SLIDE 04 — Education

```
Background: #1B2A4A (Dark Navy)
Heading: "Academic / Background."  ← serif, italic coral

Featured card (full width):
  Left side:
    Year:    "2023 – 2026 (Ongoing) · UMPSA, PEKAN, PAHANG"
    Degree:  "Bachelor of Computer Science"
    Field:   "Software Engineering with Honours"
    Uni:     "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)"
    Badges:  Dean's List Sem 5 · 109 Credits · SRS Author · Cloud Certified
  Right side:
    CGPA:    3.19  ← large gold serif number
    Label:   "CGPA / 4.00 · Second Class (Upper)"
    Credits: "59 Acquired + 50 Vertical Transfer = 109 Total"
    Dean's List row: "DEAN'S LIST" + SEM 5 pip

Grid (2 rows × 3 columns):
  Row 1:
    Diploma in Computer Science · UMPSA · Aug 2021–Aug 2023 · CGPA 3.26 · Dean's List Sem 1 (GPA 3.60)
    AWS Cloud Practitioner Essentials · Amazon Web Services · 2026
    Building with the Claude API · Anthropic Education · 2026

  Row 2:
    Microsoft Security, Compliance & Identity Fundamentals · Microsoft · 2025
    Introduction to Agent Skills · Anthropic Education · 2026
    Cisco Networking Academy · Cisco · Course Completion

  Page stamp: 04 / 10
```

### SLIDE 05 — Internship Highlights

```
Background: #F8F5EF (Off-white)
Layout: sidebar + main (2 columns)

Sidebar (dark navy, 230px):
  Title:      "Internship"
              "Report"  ← italic coral
  Divider:    coral line
  Meta rows:
    Company:    TNB Renewables Sdn. Bhd. (TRe)
    Role:       AI & Digitalization Intern
    Duration:   9 Mar 2026 – 21 Aug 2026 (6 months)
    Department: Finance, Strategy & Portfolio → AI & Digitalization
    Supervisor: En. Ahmad Amirul Hakim Bin Mohd Hamid
    Method:     Project-based / Independent
    University: UMPSA, Faculty of Computing

Main:
  Block label: KEY CONTRIBUTIONS & VALUE ADDED
  6 cards (3 × 2 grid, numbered):
    01 · TNB Access Card System Development
         "Independently developed and deployed a full-stack Flask web
          application replacing a manual Lampiran I process that previously
          took up to one month to complete."
    02 · Automated PDF Generation (ReportLab)
         "Generated the official TNB Lampiran I PDF with precise layout
          matching, photo embedding, and digital signature placement."
    03 · Email Automation (smtplib)
         "Built email module to auto-deliver completed forms and supporting
          documents to HR department upon form submission."
    04 · Cloud Deployment on Render.com
         "Deployed Flask app to production using Gunicorn on Render.com —
          resolving build errors, dependency conflicts, and env variable issues."
    05 · SRS Documentation — 3 Enterprise Systems
         "Authored draft SRS for Solar Land Database Dashboard, HSE Reporting
          Dashboard, and Procurement Process Automation System."
    06 · 4 Professional Certifications
         "Completed AWS Cloud Practitioner, Building with Claude API,
          Introduction to Agent Skills, and AI Fluency — all during internship."

  Block label: TOOLS & TECHNOLOGIES USED
  Pills (with dot indicator):
    Python · Flask · ReportLab · Pillow · smtplib · Jinja2
    Bootstrap 5 · HTML5 Canvas API · Vanilla JavaScript
    Git & GitHub · Render.com · Gunicorn · python-dotenv · VS Code

  Page stamp: 05 / 10
```

### SLIDE 06 — Requirements Gathering Sample

```
Background: #EDE8DF (Cream)
Heading: "Requirements Gathering / Sample"
Context: "Source: TNB Trainee Access Card Application System — real internship
          project at TNB Renewables Sdn. Bhd. (TRe). Requirements gathered by
          analysing the existing manual process and discussing specifications
          with the industry supervisor."

Stakeholders (4 boxes):
  🧑‍💼  Trainee / User        Completes access card application online; uploads documents
  👩‍💼  HR Department          Receives completed form and supporting docs via automated email
  💻   Developer (Intern)     Designed, built, tested, and deployed the system independently
  🏢   TNB Management         Approved digitalization initiative; provided official form template

Requirements Table:
  Columns: ID · Requirement Description · Type · Priority · Source

  FR-01  System shall allow trainees to fill the access card form online        Functional    High    User
  FR-02  System shall support 3 application types: New Card, Damaged, Lost      Functional    High    HR/User
  FR-03  System shall allow upload of supporting documents (IC, offer letter, photo) Functional High  User
  FR-04  System shall validate required fields and file types before processing  Functional   High    Technical
  FR-05  System shall auto-generate the official TNB Lampiran I PDF form        Functional    High    HR/TRe
  FR-06  System shall embed passport photo and digital signature in the PDF     Functional    High    HR
  FR-07  System shall email the PDF and all documents to HR automatically       Functional    High    HR
  FR-08  System shall allow applicant to download a copy of the completed form  Functional    Medium  User
  NF-01  System must process and respond to form submissions within 10 seconds  Non-Functional High   Technical
  NF-02  All credentials must be stored as environment variables, never hardcoded Non-Functional High Technical
  NF-03  System must function correctly on Chrome, Edge, and Firefox            Non-Functional High   Technical

  Page stamp: 06 / 10
```

### SLIDE 07 — Test Cases

```
Background: #1B2A4A (Dark Navy)
Heading: "Test Case / Examples."

Scorecard (top right):
  Total Cases  12
  ✓ Passed      9  (green)
  ✗ Failed      2  (red)
  ⏳ Pending    1  (amber)
  Coverage    85%
  Tool        Manual + Browser DevTools

Test case table (12 rows):
  TC-01  User submits form with all valid fields        All required fields + valid files → Submit   PDF generated; email sent to HR                  PASS ✓
  TC-02  Missing required field on submission           Leave "Full Name" field empty → Submit       Validation error: "Full Name is required"         PASS ✓
  TC-03  Invalid file type uploaded as passport photo  Upload .pdf file instead of image            Error: "Unsupported file type. Upload JPG/PNG"   PASS ✓
  TC-04  Select "New Card" application type            Change dropdown to "New Card"                Correct document fields appear (IC + offer letter) PASS ✓
  TC-05  Select "Damaged Card" type (dynamic JS)       Change dropdown; no page reload              Different document set shown without clearing form PASS ✓
  TC-06  Validation error — form field repopulation    Submit with error; check fields              Form repopulated with previously entered values  FAIL ✗ (initially; fixed)
  TC-07  PDF layout matches official TNB Lampiran I    Generate PDF with test data                  All fields, photo, signature correctly positioned PASS ✓
  TC-08  Passport photo embedded in correct PDF area   Upload portrait JPG; generate PDF            Photo resized and embedded in correct section    PASS ✓
  TC-09  Digital signature captured and embedded       Draw signature on canvas; submit             Signature image embedded in PDF signature field  PASS ✓
  TC-10  Automated email delivery on headless server   Submit on Render.com production              Email received by HR within 30 seconds           PASS ✓
  TC-11  smtplib replaces yagmail on headless server   Deploy with smtplib; send email on Render    Email sent successfully — no keyring error       PASS ✓
  TC-12  Full end-to-end production deployment         Deploy to Render.com; test all features      All features working in production environment   FAIL ✗ (initially; resolved)

  Page stamp: 07 / 10
```

### SLIDE 08 — Achievements & Involvement

```
Background: #F8F5EF (Off-white)
Heading: "Involvement & / Achievements."

Dean's List featured banner (full width, dark navy):
  Left:
    Pre-title: "🏅 ACADEMIC EXCELLENCE — HIGHEST RECOGNITION"
    Title:     "Dean's List Award"   ← serif italic
    Body:      "Awarded Dean's List for Semester I Academic Session 2021/2022
                of the Diploma in Computer Science programme at UMPSA —
                achieving a GPA of 3.60. Also awarded Dean's List for
                Semester 5 of the Bachelor of Computer Science (Software
                Engineering) Degree programme."
  Right:
    Number: 2×  ← large gold serif
    Label:  "Dean's List Awards"
    Pips:   DIP S1 · DEG S5

4 achievement cards (2 × 2 grid):
  1. 🌐  IFACS 2025
        International Festival on Artificial Intelligence & Cyber Security
        Participant — Nov 2025

  2. 📊  Power BI Crash Course
        Data visualisation and dashboard building programme
        Participant — May 2025

  3. 🎯  UMPSA PEKA 5 — Organiser
        Served as organiser for 3 PEKA 5 events:
        Escape Resident (May 2024) · Color Run (May 2024) · Pucuk Hijau UMW (Nov 2023)

  4. 🏛   International Carnival — Inclusive Technology & Ecosystem
        Participant — May 2025

  Page stamp: 08 / 10
```

### SLIDE 09 — Certificates

```
Background: #22345C (Dark Navy)
Heading: "Certificates & / Credentials."
Sub: "All original documents available upon request. Scanned copies attached to applications."

Certificate grid (3 × 3):
  1. 🎓  Academic · Degree
         Bachelor of Science — Computer Science (Software Engineering) with Honours
         UMPSA · 2026 · CGPA 3.19 · Second Class Upper · (Pending Confer)
         Colour: Gold

  2. 📜  Academic · Diploma
         Diploma in Computer Science
         UMPSA · Aug 2023 · CGPA 3.26 · Second Class
         (Verified: SURAT_TAMAT issued 24 August 2023)
         Colour: Coral

  3. ⭐  Merit · Dean's List
         Dean's List Award — Diploma Semester 1
         Faculty of Computing, UMPSA · GPA 3.60 · 04 Mar 2022
         (Verified: Dean_s_List_SEM_1_Diploma.pdf)
         Colour: Gold

  4. 📊  Professional · Internship
         Industrial Training Completion Certificate
         TNB Renewables Sdn. Bhd. (TRe) · Mar–Aug 2026
         (Pending — available upon internship completion Aug 2026)
         Colour: Sage/Green

  5. ☁️  Professional · Cloud
         AWS Cloud Practitioner Essentials
         Amazon Web Services · 2026
         Colour: Blue

  6. 🤖  Professional · AI
         Building with the Claude API
         Anthropic Education · 2026
         Colour: Amber

  7. 🛡   Professional · Security
         Security, Compliance & Identity Fundamentals
         Microsoft Certified · 2025
         Colour: Blue

  8. 🔗  Professional · AI
         Introduction to Agent Skills
         Anthropic Education · 2026
         Colour: Teal

  9. 🌐  Professional · Networking
         Cisco Networking Academy — Course Completion
         Cisco Systems · Year of completion
         Colour: Sage

  Footer note: "📌 SPM certificate and degree certificate (upon confer) to be added"
  Page stamp: 09 / 10
```

### SLIDE 10 — Closing / Contact

```
Layout: 50/50 split

Left Panel (coral #C8472E background):
  Pre-title:  THANK YOU FOR VIEWING
  Hero text:  "Hire"          ← very large serif, white
              "Me."           ← italic, font-weight 300
  Tagline:    "I am actively seeking a full-time Software Engineer,
               Software Developer, or System Analyst role in Malaysia.
               Graduating August 2026. Open to Selangor, Kuala Lumpur,
               Pahang, and remote opportunities."
  Badge:      ● Open to Work · Available August 2026   ← animated pulse dot

Right Panel (paper/cream background):
  Title:  GET IN TOUCH
  Rows:
    📧  Email:     nanabellashah03@gmail.com
    📞  Phone:     +6010-9648871
    💼  LinkedIn:  linkedin.com/in/nabilahshahidan
    📍  Location:  Klang, Selangor, Malaysia
    🎓  Degree:    B.Sc. CS (Software Engineering) · UMPSA

  Divider

  Quote: "The secret of getting ahead is getting started."
         — Mark Twain

  Footer:
    © 2026 NABILAH BINTI MOHAMMAD SHAHIDAN
    KLANG, SELANGOR, MALAYSIA
    SOFTWARE ENGINEERING GRADUATE PORTFOLIO · V1.0

  Page stamp: 10 / 10
```

---

## 11. VS Code Setup & Preferences

### Required Extensions

| Extension Name               | Extension ID                           | Purpose                                    |
|------------------------------|----------------------------------------|--------------------------------------------|
| Prettier — Code Formatter    | `esbenp.prettier-vscode`               | Auto-format HTML/CSS on save               |
| Live Server                  | `ritwickdey.liveserver`                | Hot-reload — see changes instantly         |
| HTML CSS Support             | `ecmel.vscode-html-css`                | CSS class autocomplete inside HTML         |
| Auto Rename Tag              | `formulahendry.auto-rename-tag`        | Rename opening + closing HTML tags together|
| Color Highlight              | `naumovs.color-highlight`              | Preview hex colours inline in CSS          |
| indent-rainbow               | `oderwat.indent-rainbow`               | Coloured indentation levels                |
| Error Lens                   | `usernamehw.errorlens`                 | Inline error messages alongside code       |
| vscode-icons                 | `vscode-icons-team.vscode-icons`       | Better file and folder icons               |

### `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.rulers": [120],
  "editor.minimap.enabled": false,
  "editor.linkedEditing": true,
  "editor.suggestSelection": "first",

  "liveServer.settings.port": 5500,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.NoBrowser": false,

  "files.associations": {
    "*.html": "html"
  },
  "emmet.includeLanguages": {
    "html": "html"
  },

  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "vscode-icons",

  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.fontSize": 13
}
```

### `.prettierrc`

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": false,
  "trailingComma": "none",
  "bracketSameLine": true,
  "htmlWhitespaceSensitivity": "ignore"
}
```

### Recommended Themes

| Theme              | ID                            | Notes                              |
|--------------------|-------------------------------|------------------------------------|
| One Dark Pro       | `zhuangtongfa.material-theme` | Good contrast for HTML/CSS editing |
| Catppuccin Mocha   | `catppuccin.catppuccin-vsc`   | Warm dark alternative              |

### Key Keyboard Shortcuts

| Shortcut             | Action                                      |
|----------------------|---------------------------------------------|
| `Alt + B`            | Open with Live Server (browser preview)     |
| `Alt + Shift + F`    | Format document (Prettier)                  |
| `Ctrl + /`           | Toggle comment on selected line             |
| `Ctrl + D`           | Select next occurrence (multi-cursor edit)  |
| `Ctrl + Shift + P`   | Open Command Palette                        |
| `Ctrl + P`           | Quick file switcher                         |
| `Ctrl + Shift + K`   | Delete current line                         |
| `Alt + ↑ / ↓`        | Move line up / down                         |
| `Ctrl + Shift + \``  | Open integrated terminal                    |
| `F12`                | Go to definition (CSS class)                |

---

## 12. Development Workflow

### Setup (No Install Required)

```bash
# Create project folder
mkdir nabilah-portfolio
cd nabilah-portfolio

# Create main file
touch portfolio_slides.html

# Open in VS Code
code .

# Start Live Server: right-click file → Open with Live Server
# OR press Alt+B with cursor inside portfolio_slides.html
# Preview: http://127.0.0.1:5500/portfolio_slides.html
```

### Editing Guide

| What to change              | Where in the HTML                              |
|-----------------------------|------------------------------------------------|
| Your name (cover)           | `.s01-name` content + `<title>` tag            |
| Personal info grid          | `.s01-card-val` on Slide 01                    |
| Bio paragraph               | `.bio-txt` on Slide 03                         |
| Work experience items       | `.exp-item` blocks on Slide 03                 |
| CGPA number                 | `.ef-cgpa` on Slide 04                         |
| Degree details              | `.edu-featured` on Slide 04                    |
| Internship meta rows        | `.s05-meta-item` rows on Slide 05              |
| Contribution cards          | `.val-card` on Slide 05                        |
| Requirements table rows     | `<tbody>` in `.req-table` on Slide 06          |
| Test case table rows        | `<tbody>` in `.tc-table` on Slide 07           |
| Dean's List details         | `.dean-banner` on Slide 08                     |
| Achievement cards           | `.ach-card` on Slide 08                        |
| Certificate cards           | `.cert-card` on Slide 09                       |
| Contact details             | `.contact-item` rows on Slide 10               |
| Accent colour (entire site) | `--coral: #C8472E` in `:root {}`               |
| Dark background colour      | `--navy: #1B2A4A` in `:root {}`                |
| Body font                   | `Jost` in Google Fonts link + `--sans` var     |

### Git Workflow

```bash
git init
git add portfolio_slides.html PORTFOLIO_REQUIREMENTS.md
git commit -m "feat: initial portfolio with Nabilah real details"

# After each edit session
git add portfolio_slides.html
git commit -m "fix: update internship dates and CGPA"

# Push to GitHub for hosting
git remote add origin https://github.com/nabilahshahidan/portfolio.git
git branch -M main
git push -u origin main
```

---

## 13. How to Export & Publish

### Step 1 — Export PDF from Chrome

```
1. Open portfolio_slides.html in Google Chrome
2. Press Ctrl+P
3. Set:
     Destination   → Save as PDF
     Paper size    → A4
     Margins       → None
     Scale         → 100
     ☑ Background graphics  → ON  (critical — preserves dark backgrounds)
4. Click Save
5. Rename: Nabilah_Shahidan_Portfolio_2026.pdf
```

### Step 2 — Share on LinkedIn (Document Post)

```
1. LinkedIn → Start a post → "Add a document"
2. Upload: Nabilah_Shahidan_Portfolio_2026.pdf
3. Title: "My Software Engineering Portfolio 2026"
4. Caption (copy-paste):
   "Fresh Software Engineering graduate from UMPSA 🎓
    6-month internship at TNB Renewables Sdn. Bhd. — developed a real
    production system (Python + Flask + Render.com) and authored SRS
    documents for 3 enterprise systems.
    Skills: Python · Flask · SQL · SRS Writing · Cloud Deployment · GitHub
    Open to work: Software Engineer / Developer / System Analyst · Aug 2026 🚀
    #SoftwareEngineering #FreshGraduate #Malaysia #OpenToWork #UMPSA"
5. Post → Document renders as swipeable carousel on LinkedIn (3× better reach than image posts)
```

### Step 3 — Add to LinkedIn Featured Section

```
Profile → Add profile section → Featured → Add media → Upload PDF
→ Appears as a visual card on your profile, visible to all recruiters
```

### Optional — GitHub Pages Hosting

```bash
# Push to GitHub (see Git Workflow above)
# Go to: GitHub repo → Settings → Pages → Source: main → root
# Live URL: https://nabilahshahidan.github.io/portfolio/portfolio_slides.html
# Share this link in your LinkedIn bio and resume
```

---

## 14. Customisation Guide

### Update CGPA When Final Result Is Released

Search for `3.19` in `portfolio_slides.html` and update in:
- Slide 01 cover card (right panel)
- Slide 03 info grid
- Slide 04 featured education card (`ef-cgpa` element)
- Slide 09 degree certificate card

### Add Degree Certificate After Convocation

In Slide 09, update Card 1:
```html
<div class="cert-type">Academic · Degree</div>
<div class="cert-name">Bachelor of Computer Science (Software Engineering) with Honours</div>
<div class="cert-issuer">UMPSA · Conferred [Month] 2026</div>
<div class="cert-year">2026 · CGPA [Final] · Second Class Upper</div>
```

### Add SPM Certificate

In Slide 09, add a 10th card (adjust grid to 4-column or add row):
```html
<div class="cert-card cc-sage">
  <div class="cert-ico">📋</div>
  <div class="cert-type">Academic · Secondary School</div>
  <div class="cert-name">Sijil Pelajaran Malaysia (SPM)</div>
  <div class="cert-issuer">Lembaga Peperiksaan Malaysia</div>
  <div class="cert-year">[Year] · Result: [Your grades]</div>
</div>
```

### Change Portfolio Accent Colour

Edit in `:root {}` — affects the entire portfolio:
```css
:root {
  --coral:  #C8472E;   /* Change this → all CTAs, labels, accents, Slide 10 */
  --navy:   #1B2A4A;   /* Change this → all dark slides */
  --gold:   #C49A3C;   /* Change this → CGPA numbers, Dean's List highlights */
}
```

### Available Certificate Card Colour Classes

```
cc-gold    → gold top border   (use for academic/merit awards)
cc-coral   → coral top border  (use for degree/diploma)
cc-sage    → teal top border   (use for internship/completion)
cc-blue    → blue top border   (use for cloud/tech certifications)
cc-amber   → amber top border  (use for AI/advanced certifications)
cc-teal    → teal top border   (use for networking/general tech)
```

---

## 15. Complete Checklist

### Content — Replace All Placeholders

- [x] Name on cover: **Nabilah Binti Mohammad Shahidan** ✅
- [x] Email: **nanabellashah03@gmail.com** ✅
- [x] Phone: **+6010-9648871** ✅
- [x] LinkedIn: **linkedin.com/in/nabilahshahidan** ✅
- [x] Location: **Klang, Selangor, Malaysia** ✅
- [x] University: **UMPSA (Universiti Malaysia Pahang Al-Sultan Abdullah)** ✅
- [x] Internship: **TNB Renewables Sdn. Bhd. · AI & Digitalization Intern** ✅
- [x] Internship dates: **9 Mar 2026 – 21 Aug 2026** ✅
- [x] CGPA Degree: **3.19** (partial transcript) / **3.31** (CV stated) ✅
- [x] CGPA Diploma: **3.26** ✅
- [x] Dean's List Diploma Sem 1 GPA: **3.60** (04 Mar 2022) ✅
- [x] Supervisor: **En. Ahmad Amirul Hakim Bin Mohd Hamid** ✅
- [ ] Final CGPA — update when official result released after internship
- [ ] SPM certificate details — add when certificate is uploaded
- [ ] Available date — update to "Immediately" after Aug 2026

### Certificates (Slide 09)

- [x] Degree — marked "Pending Confer"
- [x] Diploma — SURAT_TAMAT issued 24 Aug 2023
- [x] Dean's List Diploma Sem 1 — GPA 3.60, 04 Mar 2022
- [x] AWS Cloud Practitioner Essentials
- [x] Building with Claude API (Anthropic)
- [x] Microsoft Security, Compliance & Identity
- [x] Introduction to Agent Skills (Anthropic)
- [x] Cisco Networking Academy
- [ ] TRe Internship Completion Certificate — add when received (Aug 2026)
- [ ] SPM Certificate — add when uploaded

### Technical — Before Publishing

- [ ] All 10 slides render at 794px × 1123px (no overflow)
- [ ] Google Fonts load correctly (requires internet connection)
- [ ] Print-to-PDF tested in Chrome — outputs 10 clean A4 pages
- [ ] `@media print` hides the print bar
- [ ] Background graphics preserved in Chrome print output
- [ ] Page stamps visible on all 10 slides
- [ ] Mobile fallback tested at < 860px viewport
- [ ] No console errors in browser DevTools

### Design — Visual Check

- [ ] Dark/light alternation: slides 01,04,07,09 dark · 02,03,05,06,08 light · 10 coral
- [ ] All section headings use Cormorant Garamond (serif)
- [ ] All body text uses Jost (300–500 weight)
- [ ] All mono labels/badges use Inconsolata
- [ ] Coral accent consistent across all slides
- [ ] Gold used only for CGPA and Dean's List numbers

### Publishing — Final Steps

- [ ] PDF exported as `Nabilah_Shahidan_Portfolio_2026.pdf`
- [ ] PDF file size under 5MB (LinkedIn limit for document posts)
- [ ] LinkedIn document post drafted (caption written)
- [ ] LinkedIn Featured section updated with portfolio
- [ ] PDF added to job application email template
- [ ] GitHub Pages or Vercel hosting configured (optional)

---

## Notes for Nabilah

1. **Internship is ongoing** — the portfolio marks the degree certificate and internship completion
   certificate as "Pending." Update these after your internship ends on 21 August 2026.

2. **TNB Renewables is a very strong credential** — it is a subsidiary of Tenaga Nasional Berhad,
   one of Malaysia's largest government-linked companies. Make sure this is prominently visible
   on the cover and throughout the portfolio.

3. **The SRS documents are real professional deliverables** — the Solar Land Database, HSE
   Reporting Dashboard, and Procurement Process Automation SRS documents show genuine
   software engineering analysis skills. Mention these in job applications and interviews.

4. **Your dual qualification (Diploma + Degree from UMPSA)** is a strength — it shows continuity,
   commitment to the same institution, and that you were offered vertical transfer credit,
   which is a recognition of your Diploma performance.

5. **The TNB Access Card System** is a real production application you built and deployed
   independently. This is equivalent to a portfolio project — emphasise it in interviews as
   evidence of end-to-end software development capability.

6. **SPM certificate** — upload and add when available. Even though it is a school-level
   certificate, Malaysian employers frequently request it for fresh graduate roles.

---

*Last updated: May 2026*
*Nabilah Binti Mohammad Shahidan · CB23122 · UMPSA Faculty of Computing*
*Internship: TNB Renewables Sdn. Bhd. (AI & Digitalization) · Class of 2026*
