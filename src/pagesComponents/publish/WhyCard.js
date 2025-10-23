import styles from './Publish.module.scss'
import { cards } from './helper'
import Image from 'next/image'
export default function Cards() {
  return (
    <div className={styles.whyCardsSec}>
      {cards.map((i, idx) => (
        <div key={idx} className={styles.whyCard}>
          <h5>{i.heading}</h5>
          <p>
            {i.descr} <span style={{ fontSize: '.9rem' }}>{i?.descr2}</span>
          </p>
          <div className={styles.cardDetail}>
            {i.matter.map((i, idx) => {
              if (i.content3) {
                return (
                  <div key={idx} className={styles.cardImages}>
                    <div className={styles.imageClass}>
                      <Image
                        src={i.content1}
                        alt='terafort-why-publish-with-us-icon'
                      />
                    </div>
                    <div className={styles.imageClass}>
                      <Image
                        src={i.content2}
                        alt='terafort-why-publish-with-us-icon'
                      />
                    </div>
                    <div className={styles.imageClass}>
                      <Image
                        src={i.content3}
                        alt='terafort-why-publish-with-us-icon'
                      />
                    </div>
                    <div className={styles.imageClass}>
                      <Image
                        src={i.content4}
                        alt='terafort-why-publish-with-us-icon'
                      />
                    </div>
                    <div className={styles.imageClass}>
                      <Image
                        src={i.content5}
                        alt='terafort-why-publish-with-us-icon'
                      />
                    </div>
                    <div className={styles.imageClass}>
                      <Image
                        src={i.content6}
                        alt='terafort-why-publish-with-us-icon'
                      />
                    </div>
                  </div>
                )
              } else if (typeof i.content1 !== 'string') {
                return (
                  <div className={styles.imageClass} key={idx}>
                    <Image
                      src={i.content1}
                      alt='terafort-why-publish-with-us-icon'
                    />
                  </div>
                )
              } else {
                return (
                  <p key={idx}>
                    <span>{i.content1}</span>
                    {i.content2}
                  </p>
                )
              }
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
