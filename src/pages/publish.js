import Head from 'next/head.js'
import HeroLayout from '../components/HeroLayout/HeroLayout.jsx'
import { publish } from '../pagesComponents/publish/helper'
import PublishForm from '../pagesComponents/publish/Form'
import Steps from '../pagesComponents/publish/Steps'
import { Benefits } from '../pagesComponents/publish/Benefits'
export default function Publish() {
  return (
    <>
      <Head>
        <title>Terafort | Publish</title>
      </Head>
      <HeroLayout
        text={publish.heroLayout.text}
        linkText={publish.heroLayout.linkText}
        linkRef={publish.heroLayout.linkRef}
        heading={publish.heroLayout.heading}
      />
      <Benefits />
      <Steps />
      <PublishForm />
    </>
  )
}
