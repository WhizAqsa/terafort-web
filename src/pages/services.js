import Head from 'next/head'
import ServicesHero from '../pagesComponents/services/components/ServicesHero'
import ServiceCategories from '../pagesComponents/services/components/ServiceCategories'
import IndustriesServed from '../pagesComponents/services/components/IndustriesServed'
import CaseStudies from '@/pagesComponents/services/components/CaseStudies'
import QuoteForm from '@/pagesComponents/services/components/QuoteForm'

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Terafort | Services</title>
            </Head>
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
