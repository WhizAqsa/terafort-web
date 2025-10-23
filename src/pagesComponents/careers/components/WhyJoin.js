'use client'
import { motion } from 'framer-motion'
import styles from '../careers.module.scss'
import Container from '../../../components/Container'
import whyJoinImage from '../resources/whyjoinImage.webp'
import Image from 'next/image'
export const WhyJoin = () => {
  return (
    <Container id='comejoin'>
      <div className={styles.joinSec}>
        <motion.h2
          initial={{
            opacity: 0,
            x: -100,
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
          Why join Terafort?
        </motion.h2>
        <div className={styles.innerContainer}>
          <motion.div
            className={styles.whyJoinText}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ amount: 0.5, once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'tween',
                delay: 0.4,
                duration: 0.7,
                ease: 'easeOut',
              },
            }}
          >
            <h3>
              Entrepreneurs, Intrapreneurs, Tech Lovers & Freethinkers… you’ve
              come to the Right Place!
            </h3>
            <p>
              We are building a culture where incredibly talented individuals
              are polished with highly promising skills & empowered with a
              vision of becoming future leaders in the IT industry. We envision
              to be the forerunners in contribution to our country’s economic &
              GDP growth by paving a path to foreign direct investment. In order
              to foster that greatness, we consider ourselves devoted and in a
              state of battle with the unemployment crisis of passionate and
              primed youngsters. We have a mission of “Developing globally
              sought & choice of everyone products through devotion and
              innovation in an enabling organizational.
            </p>
          </motion.div>
          <motion.div
            className={styles.whyjoinImage}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ amount: 0.5, once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'tween',
                delay: 0.7,
                duration: 0.7,
                ease: 'easeOut',
              },
            }}
          >
            <Image
              src={whyJoinImage}
              alt='terafort-why-join-image'
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
