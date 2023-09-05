'use client'

import { HomePageInfo } from '@/Types/home'
import { CMSIcon } from '@/components/CMSIcon'
import { RichText } from '@/components/RichText'
import { Button } from '@/components/button'
import { TechBadge } from '@/components/techBadge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export function HeroSection({ homeInfo }: HeroSectionProps) {
  console.log('homeInfo', homeInfo)
  const {
    introduction,
    knownTechs,
    profilePicture,
    socialMedias,
    technologies
  } = homeInfo
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section
      className="w-full lg:h-[755px] flex flex-col justify-end  bg-hero-image bg-cover bg-no-repeat bg-center 
  pb-10 sm:pb-32 lg:pb-[110px] py-32
  "
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-emerald-400 font-mono">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Valdenício Ferreira</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {technologies.map((tech, i) => (
              <TechBadge key={`${tech.name}-${i}`} name={tech.name} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex items-center gap-4">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="h-20 flex items-center gap-3 text-2xl text-gray-600 ">
              {socialMedias.map((social, i) => (
                <a
                  href={social.url}
                  key={`${social.url}-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          src={profilePicture.url}
          width={420}
          height={404}
          alt="My profile picture"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
