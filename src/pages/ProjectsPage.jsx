import PageHero from '../components/PageHero'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title={<>Our <span className="text-gradient">Project Portfolio</span></>}
        subtitle="Open any project card to see detailed planning, architecture decisions, and optimization strategies."
      />
      <Projects showHeader={false} />
    </>
  )
}
