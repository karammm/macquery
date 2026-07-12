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
        title="MacQuery — AI Software, Web, Mobile & Cloud Development Company in India"
        description="AI-first software studio in Gurugram & Dehradun, India. We build AI-driven web apps, mobile apps, ERP software, cloud/DevOps and SEO-optimized products for startups and enterprises worldwide."
        keywords="software development company India, web development company Gurugram, software company Dehradun, AI automation agency, React development, mobile app development, cloud solutions, ERP software, UI UX design, SEO services, MacQuery, SIILARD LABS LLP"
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
