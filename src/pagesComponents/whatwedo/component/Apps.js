'use client'
import { motion } from 'framer-motion'
import styles from '../industry.module.scss'
import { apps } from '../helper'
import Container from '../../../components/Container'
import Image from 'next/image'
export const Apps = () => {
  return (
    <Container>
      <section className={styles.appsSec}>
        <ul>
          {apps.map((i, idx) => (
            <li
              key={idx}
              // className={styles.appDes}
              id={i.id}
            >
              <div className={styles.appWrapper}>
                <motion.div
                  className={styles.appText}
                  initial={{
                    opacity: 0,
                    x: (idx + 1) % 2 ? '-100px' : '100px',
                  }}
                  viewport={{ amount: 0.5, once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'tween',
                      delay: 0.2,
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <h2>{i.name}</h2>
                  <p>{i.desc}</p>
                  <ul>
                    {i.points.map((item, indx) => (
                      <li
                        key={indx}
                        className={styles.listItem}
                        datacontent={indx + 1}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className={styles.appBanner}
                  initial={{
                    opacity: 0,
                    x: (idx + 1) % 2 ? '100px' : '-100px',
                  }}
                  viewport={{ amount: 0.5, once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'tween',
                      delay: 0.4,
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <Image
                    src={i.banner}
                    alt='terafort-app-image'
                    className={styles.banner}
                  />
                </motion.div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}
