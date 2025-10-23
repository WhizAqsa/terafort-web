import '@/styles/globals.css'
import { Footer } from '@/components/Footer'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/Navbar/index'),
  { ssr: false }
)
export default function App({ Component, pageProps }) {
  return (
    <>
      <DynamicComponentWithNoSSR />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
