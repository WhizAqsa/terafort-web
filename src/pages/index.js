//importing components
import Head from 'next/head'
import { Hero } from '../pagesComponents/(home)/Hero/Hero'
import { Technologies } from '../pagesComponents/(home)/Technologies'
import { TerafortNumbers } from '@/components/TerafortNumbers'
import { Awards } from '@/pagesComponents/(home)/Awards'

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
        {/* <HomepageAbout /> */}
        <Technologies />
        <Awards />
        <TerafortNumbers />

      </section>
    </>
  )
}
