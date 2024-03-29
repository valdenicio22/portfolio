'use client'

import { Button } from '@/components/Button'
import { CMSIcon } from '@/components/CMSIcon'
import { RichText } from '@/components/RichText'
import { TechBadge } from '@/components/TechBadge'
import { techBadgeAnimation } from '@/lib/animation'
import { HomePageInfo } from '@/types/pageInfo'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export function HeroSection({ homeInfo }: HeroSectionProps) {
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
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-emerald-400 font-mono">Hi there! My name is</p>
          <h2 className="text-4xl font-medium mt-2">Valdenício Ferreira</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base text-justify">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {homeInfo?.technologies.map((tech, i) => (
              <TechBadge
                key={`${tech.name}-${i}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex items-center gap-4">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Get in touch
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="h-20 flex items-center gap-3 text-2xl text-gray-600 ">
              {homeInfo?.socialMedias.map((social, i) => (
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            src={homeInfo?.profilePicture.url}
            width={420}
            height={404}
            alt="My profile picture"
            className="w-[300px] h-[300px] mb-6 shadow-2xl rounded-lg object-cover lg:w-[420px] lg:h-[404px] lg:mb-0 "
          />
        </motion.div>
      </div>
    </section>
  )
}
