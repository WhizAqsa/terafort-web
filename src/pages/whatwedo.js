import Head from 'next/head'
import HeroLayout from '../components/HeroLayout/HeroLayout.jsx'
import { IndustryIntro } from '../pagesComponents/whatwedo/component/industry'
import { careersHero } from '../pagesComponents/whatwedo/helper'
import { Apps } from '../pagesComponents/whatwedo/component/Apps'
import ExpertiesList from '../pagesComponents/whatwedo/component/Experties'
export default function Industry() {
  return (
    <>
      <Head>
        <title>Terafort | What we do</title>
      </Head>
      <HeroLayout
        text={careersHero.heroLayout.text}
        linkText={careersHero.heroLayout.linkText}
        linkRef={careersHero.heroLayout.linkRef}
        heading={careersHero.heroLayout.heading}
      />
      <IndustryIntro />
      <Apps />
      <ExpertiesList />
    </>
  )
}
