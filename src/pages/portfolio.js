import Head from 'next/head.js'
import { Portfolio } from '../pagesComponents/portfolio/components/Portfolio'
import { Apps } from '../pagesComponents/portfolio/components/Apps'
import styles from '../pagesComponents/portfolio/profile.module.scss'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Terafort | Portfolio</title>
      </Head>
      <Portfolio />

      <div className={styles.sectionSpacing}></div>

      <Apps />
    </>
  )
}
