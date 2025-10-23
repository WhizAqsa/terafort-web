import { partners } from './helper'
import Image from 'next/image'
import styles from './TechPartners.module.scss'

// tech partners
export default function Partners() {
  return (
    <div className={styles.partnerWrapper}>
      {partners.map((image, index) => (
        <div key={image.name} className={styles.partner}>
          <span>
            <Image src={image.icon} alt='icon-image' />
          </span>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  )
}
