import PageHero from '../components/PageHero'
import JourneyTimeline from '../components/JourneyTimeline'
import Team from '../components/Team'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import PoweredBy from '../components/PoweredBy'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About MacQuery — AI-First Software Studio | SIILARD LABS LLP"
        description="Meet MacQuery (SIILARD LABS LLP) — engineers, designers and strategists building AI-driven web, mobile and cloud products from Gurugram & Dehradun, India."
        keywords="about MacQuery, SIILARD LABS LLP, software studio India, software company Gurugram, IT company Dehradun, web development team"
        path="/about"
      />
      <PageHero
        label="About Us"
        title={<>Our <span className="text-gradient">Story</span></>}
        subtitle="We are a team of engineers, designers, and strategists dedicated to creating the next generation of digital experiences. Our passion for innovation drives everything we do."
      />

      <section className="pb-16 lg:pb-20 border-b border-border">
        <div className="site-container max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-text-secondary text-lg leading-relaxed">
              MacQuery is a specialized studio under Siilard Labs LLP. We bridge bold ideas and high-impact software — from AI automation and cloud scale to pixel-perfect product design.
            </p>
          </Reveal>
        </div>
      </section>

      <JourneyTimeline />

      <Team showHeader />

      <About showHeader={false} />

      <WhyChooseUs />

      <PoweredBy showCta={false} />
    </>
  )
}
