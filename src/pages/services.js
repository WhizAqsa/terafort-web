import Head from 'next/head'
import ServicesHero from '../pagesComponents/services/components/ServicesHero'
import ServiceCategories from '../pagesComponents/services/components/ServiceCategories'
import IndustriesServed from '../pagesComponents/services/components/IndustriesServed'
import CaseStudies from '@/pagesComponents/services/components/CaseStudies'
import QuoteForm from '@/pagesComponents/services/components/QuoteForm'
import { services } from './../pagesComponents/services/helper'
import HeroLayout from '../components/HeroLayout/HeroLayout'


export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Terafort | Services</title>
            </Head>
            <HeroLayout
                text={services.heroLayout.text}
                linkText={services.heroLayout.linkText}
                linkRef={services.heroLayout.linkRef}
                heading={services.heroLayout.heading}
            />
            <main>
                <ServicesHero />
                <ServiceCategories />
                <IndustriesServed />
                <CaseStudies />
                <QuoteForm />
            </main>
        </>
    )
}
