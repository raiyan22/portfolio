import TopSection from './top-section'
import DescriptionSection from './desc-section'
import InfoSection from './information-section'
import ContactSection from './contact-section'
import ExperienceSection from './experience-section'
import TechnologiesSection from './technologies-section'
import ProjectsSection from './projects-section'
import LinksSection from './links-section'
import HobbiesSection from './hobbies-section'
import SocialSection from './social-media-section'
import FooterSection from './footer-section'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-3 md:p-2 font-mono">
      <TopSection />
      <DescriptionSection/>
      {/* <InfoSection title={""} /> */}
      <ContactSection title={""} />
      {/* <ExperienceSection title={""} /> */}
      <TechnologiesSection title={""} />
      <ProjectsSection />
      <LinksSection />
      <HobbiesSection />
      <SocialSection />
      <FooterSection/>
    </main>
  )
}
