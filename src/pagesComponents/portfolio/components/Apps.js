'use client'
import { motion } from 'framer-motion'
import Container from '../../../components/Container'
import styles from '../profile.module.scss'
import Image from 'next/image'
import { apps } from '../helper'
// app detail component
export const Apps = () => {
  return (
    <Container containerCls={styles.innerContainer}>
      <ul className={styles.appLists}>
        {apps.map((it, indx) => (
          <li key={indx}>
            <div className={styles.appDetail}>
              <motion.div
                className={styles.appImage}
                initial={{ opacity: 0, x: (indx + 1) % 2 ? '-100px' : '100px' }}
                viewport={{ amount: 0.5, once: true }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: 'tween',
                    delay: 0.9,
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                }}
              >
                <Image src={it.appImage} alt='terafort-app-icon' />
              </motion.div>
              <motion.div
                className={styles.appDesc}
                initial={{ opacity: 0, x: (indx + 1) % 2 ? '100px' : '-100px' }}
                viewport={{ amount: 0.5, once: true }}
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
                <h2>{it.heading}</h2>
                <p>{it.detail}</p>
                <ul className={styles.platforms}>
                  {it.platforms.map((i, n) => (
                    <li key={n}>
                      <a href={i.link}>
                        <Image src={i.icon} alt='terafort-stack-icon' />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
