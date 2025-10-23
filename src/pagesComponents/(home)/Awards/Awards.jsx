'use client'
import styles from './Awards.module.scss'
import { motion } from 'framer-motion'
// import Carousel from './Carousel'
import MyCarousel from './Carousel'
export const Awards = () => {
  return (
    <>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ amount: 1, once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
        id='awards'
      >
        Awards & recognitions
      </motion.h2>
      <MyCarousel />
    </>
  )
}
