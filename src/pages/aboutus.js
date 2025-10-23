import Head from 'next/head'
import { TerafortNumbers } from '../components/TerafortNumbers'
import { Awards } from '../pagesComponents/(home)/Awards'
import AboutHero from '../pagesComponents/aboutus/components/AboutHero'
import CompanyStory from '../pagesComponents/aboutus/components/CompanyStory'
import TeamSection from '../pagesComponents/aboutus/components/TeamSection'

//about us page
export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Terafort | About</title>
      </Head>

      <main>
        <AboutHero />
        <CompanyStory />
        <TeamSection />
        <Awards />
      </main>
    </>
  )
}
