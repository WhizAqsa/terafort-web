'use client'
import { motion } from 'framer-motion'
import Container from '../../../components/Container'
import styles from '../careers.module.scss'
import { cards } from '../helper'
import Image from 'next/image'
// benefits component
export const Benefits = () => {
  return (
    <Container fwcCls={styles.outBenefitsClass} id='benefits'>
      <div className={styles.benefitsContainer}>
        <h2>Employment Benefits</h2>
        <ul className={styles.benefitsCards}>
          {cards.map((item, indx) => (
            <motion.li
              key={indx}
              className={styles.benefitCard}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ amount: 0.2, once: true }}
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
              <span>
                <Image
                  src={item.icon}
                  alt='terafort-benefits-icons'
                  className={styles.cardImage}
                />
              </span>
              <h3>{item.heading}</h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
