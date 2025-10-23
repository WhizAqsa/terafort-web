//importing components
import Head from 'next/head'
import { Hero } from '../pagesComponents/(home)/Hero/Hero'
import HomepageAbout from '../pagesComponents/(home)/HomepageAbout/HomepageAbout.jsx'

import { Technologies } from '../pagesComponents/(home)/Technologies'
import HomepageContact from '@/pagesComponents/(home)/HomepageContact'

// import { Head } from 'next/document'

// home page
export default function Home() {
  return (
    <>
      <Head>
        <title>Terafort</title>
      </Head>
      <section>
        <Hero />
        <HomepageAbout />
        <Technologies />

        <HomepageContact />
      </section>
    </>
  )
}
