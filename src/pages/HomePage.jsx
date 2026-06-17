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

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
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
