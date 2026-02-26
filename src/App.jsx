import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Projects from './components/Projects'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <HowWeWork />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
