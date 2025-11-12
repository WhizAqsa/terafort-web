import Head from 'next/head'
import { aboutus } from './../pagesComponents/aboutus/helper'
import HeroLayout from '../components/HeroLayout/HeroLayout'
import AboutHero from '../pagesComponents/aboutus/components/AboutHero'
import TeamSection from '../pagesComponents/aboutus/components/TeamSection'
import { GreenPlanet } from '@/pagesComponents/aboutus/components/GreenPlanet'
import { Mission } from '../pagesComponents/aboutus/components/Mission'
import { Values } from '../pagesComponents/aboutus/components/Values'
import { Vision } from '../pagesComponents/aboutus/components/Vision'

//about us page
export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Terafort | About</title>
      </Head>
      <HeroLayout
        text={aboutus.heroLayout.text}
        linkText={aboutus.heroLayout.linkText}
        linkRef={aboutus.heroLayout.linkRef}
        heading={aboutus.heroLayout.heading}
      />
      <main>
        <AboutHero />
        <Mission />
        <Values />
        <Vision />
        <TeamSection />
        <GreenPlanet />
      </main>
    </>
  )
}
