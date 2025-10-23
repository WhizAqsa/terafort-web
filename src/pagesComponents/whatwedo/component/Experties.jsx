import Container from '../../../components/Container'
import styles from './Experties.module.scss'
import { expertiesList } from './helper'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function ExpertiesList() {
  return (
    <Container fwcCls={styles.outerContainer}>
      <div className={styles.expertiesContainer}>
        {expertiesList.map((it, idx) => (
          <div key={idx} className={styles.whySection} id={it.id}>
            <motion.div
              className={styles.whyText}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ amount: 0.1, once: true }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: 'tween',
                  delay: 0.5,
                  duration: 0.5,
                  ease: 'easeOut',
                },
              }}
            >
              <div className={styles.headings}>
                <h2>{it.heading}</h2>
                {it.linkText && <Link href={it.linkRef}>{it.linkText}</Link>}
              </div>
            </motion.div>
            <div className={styles.whyCardsSec}>
              {it.cards.map((i, idx) => (
                <motion.div
                  key={idx}
                  className={styles.whyCard}
                  initial={{ opacity: 0, x: 100 }}
                  viewport={{ amount: 0.4, once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'tween',
                      delay: 0.5,
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <h5>{i.heading}</h5>
                  <p>
                    {i.descr}{' '}
                    <span style={{ fontSize: '.9rem' }}>{i?.descr2}</span>
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
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
