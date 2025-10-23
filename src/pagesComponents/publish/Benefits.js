'use client'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import styles from './Publish.module.scss'
import Image from 'next/image'
import { benefits } from './helper'
export const Benefits = () => {
  return (
    <Container id='whyterafort'>
      <div className={styles.benefits}>
        <h2>Benefits of Publishing with Terafort</h2>
        <ul>
          {benefits.map((itm, indx) => (
            <motion.li
              key={indx}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ amount: 0.5, once: true }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: 'tween',
                  delay: 0.0 + `0.${indx}`,
                  duration: 0.9,
                  ease: 'easeOut',
                },
              }}
            >
              <Image src={itm.icon} alt='terafort-icon' />
              <h6>{itm.heading}</h6>
              <p>{itm.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
