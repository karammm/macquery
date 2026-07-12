import PageHero from '../components/PageHero'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects & Case Studies — Web, Mobile, AI & ERP | MacQuery"
        description="Explore MacQuery's project portfolio — Velocys, Siila.org, Magda Gallery ERP, Abhidhya, Meghnify and more — with the strategy, optimizations and real-world impact behind each build."
        keywords="software case studies, web development portfolio, ERP project, AI automation project, React project portfolio, MacQuery projects, Velocys, Magda Gallery, Siila"
        path="/projects"
      />
      <PageHero
        label="Projects"
        title={<>Our <span className="text-gradient">Project Portfolio</span></>}
        subtitle="Open any project card to see detailed planning, architecture decisions, and optimization strategies."
      />
      <Projects showHeader={false} />
    </>
  )
}
