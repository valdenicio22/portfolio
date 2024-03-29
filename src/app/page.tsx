import { Experience } from '@/components/pages/home/Experience'

import { HighlightedProject } from '@/components/pages/home/HighlightedProject'
import { WorkExperience } from '@/components/pages/home/WorkExperience'
import { HomePageData } from '@/types/pageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { HeroSection } from '../components/pages/home/HeroSection'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query LandingPages {
    landingPage(where: {slug: "home"}) {
      introduction {
        raw
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socialMedias {
        url
        iconSvg
      }
      highLightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
        description {
          raw
        }
        githubUrl
        liveProjectUrl
      }
    }
    workExperiences {
      companyName
      companyUrl
      endDate
      role
      startDate
      companyLogo {
        url
      }
      description {
        raw
      }
      technologies {
        name
      }
    }
  }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24 // 1 day
  )
}

export default async function Home() {
  const { landingPage: data, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={data} />
      <Experience techs={data.knownTechs} />
      <HighlightedProject projects={data.highLightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
