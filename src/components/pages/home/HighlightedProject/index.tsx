import { HorizontalDividir } from '@/components/HorizontalDividir'
import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
import { ProjectCard } from '@/components/pages/home/HighlightedProject/ProjectCard'
import { Project } from '@/types/projects'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HighlightedProjectProps = {
  projects: Project[]
}

export function HighlightedProject({ projects }: HighlightedProjectProps) {
  return (
    <section className="container py-16">
      <SectionTitle section="Highlights" title="Highlighted Projects" />
      <HorizontalDividir className="mb-16" />

      <div>
        {projects?.map((project, i) => (
          <div key={`${project.slug}-${i}`}>
            <ProjectCard project={project} />
            <HorizontalDividir className="mb-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <Link href="/projects" className="inline-flex">
            View All Projects
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
