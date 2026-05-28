import { Navbar } from '@/components/Navbar'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { BackToTop } from '@/components/BackToTop'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { CertificationsSection } from '@/sections/CertificationsSection'
import { ResumeSection } from '@/sections/ResumeSection'
import { ContactSection } from '@/sections/ContactSection'

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <BackToTop />
    </>
  )
}
