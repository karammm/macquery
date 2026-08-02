import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import Industries from '../components/Industries'
import Services from '../components/Services'
import About from '../components/About'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import PoweredBy from '../components/PoweredBy'
import SectionCTA from '../components/SectionCTA'
import Seo from '../components/Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        title="MacQuery — GenAI Consulting for Regulated European Businesses | EU AI Act & GDPR"
        description="We design, build and document generative AI for European companies in regulated sectors — against the EU AI Act, GDPR, DORA and NIS2. Readiness assessments, GDPR-safe architecture and ISO 42001 governance, delivered by the team that ships the code."
        keywords="GenAI consulting Europe, EU AI Act compliance consulting, EU AI Act readiness assessment, Article 50 transparency obligations, GDPR AI compliance, AI governance consulting, ISO 42001 implementation, DORA compliance, NIS2, EU data residency AI, high-risk AI systems, MacQuery, SIILARD LABS LLP"
        path="/"
      />
      <Hero />
      {/* <LogoMarquee /> */}
      <Industries />
      <Services preview />
      <SectionCTA to="/services" label="View all services" />
      <About preview />
      <SectionCTA to="/about" label="Learn more about us" />
      <div id="projects">
        <Projects preview showHeader />
      </div>
      <SectionCTA to="/projects" label="View all projects" />
      <div id="testimonials">
        <Testimonials />
      </div>
      <WhyChooseUs />
      <PoweredBy />
    </>
  )
}
