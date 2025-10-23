// dependencies
import Image from 'next/image'
import Logo from '/public/resources/icons/terafortFooterLogo.svg'
import terafortIcon from '/public/resources/icons/terafortfooterIcon.svg'
import Container from '../Container'
import Classes from './Footer.module.scss'
import { FooterLinks } from './FooterLinks'
import { BottomLinks } from './BottomLinks'
import { FollowUs } from './followUs'
//
export function Footer() {
  const { containerClass, image, imageContainer } = Classes
  return (
    <Container fwcCls={containerClass}>
      <section
        className='w-100 flexColumn'
        style={{ rowGap: 20, padding: '5rem 0' }}
      >
        <div className='flexRowSpaceBetweenAlignStart w-100 '>
          <div className='flexColumn' style={{ width: '50%' }}>
            <h4 className='text-2-bold mb-1'>Get in Touch</h4>
            <Image
              src={terafortIcon}
              width='64'
              height={'32'}
              alt='terafort-logo'
            />
          </div>
          <div className={imageContainer}>
            <Image src={Logo} alt='terafort-logo' className={image} />
          </div>
        </div>
        {/* <p className='text-1'>
          Technology you can <span className='text-2-bold'>trust.</span>
        </p> */}
        <FooterLinks />
        <BottomLinks />
        <FollowUs />
      </section>
    </Container>
  )
}
