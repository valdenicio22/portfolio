import { SectionTitle } from '@/components/SectionTitle'
import { WorkExperience as IWorkExperience } from '@/types/workExperience'
import { ExperienceItem } from './ExperienceItem'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container py-16 flex flex-col gap-10 md:flex-row md:gap-4 lg:gap-16 ">
      <div className="max-w-[420px]">
        <SectionTitle section="Experience" title="Professional Experience" />
        <p className="text-gray-400 mt-6">
          {`I'm excited to explore new opportunities and collaborate on projects that deliver excellent results for our clients.`}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={`${experience.companyName}-${experience.startDate}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
