import Head from 'next/head.js'
import { Portfolio } from '../pagesComponents/portfolio/components/Portfolio'
import { Apps } from '../pagesComponents/portfolio/components/Apps'
import styles from '../pagesComponents/portfolio/profile.module.scss'
import { portfolio } from '@/pagesComponents/portfolio/helper'
import HeroLayout from '../components/HeroLayout/HeroLayout'
import { TerafortNumbers } from '@/components/TerafortNumbers'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Terafort | Games & Apps</title>
      </Head>
      <HeroLayout
        text={portfolio.heroLayout.text}
        linkText={portfolio.heroLayout.linkText}
        linkRef={portfolio.heroLayout.linkRef}
        heading={portfolio.heroLayout.heading}
      />
      {/* <Portfolio /> */}


      <Apps />
      <TerafortNumbers />
    </>
  )
}
