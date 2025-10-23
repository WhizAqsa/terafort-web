'use client'
import { useEffect, useRef, useState } from 'react'
import { awards } from './helper'
import Image from 'next/image'
import styles from './Awards.module.scss'
import { motion } from 'framer-motion'
import { useWindowSize } from 'react-use'
//
export default function MyCarousel() {
  const size = useWindowSize()
  const [width, setWidth] = useState('')
  let carousel = useRef(null)
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    console.log(width)
  }, [carousel?.current?.offsetWidth])
  return (
    <motion.div
      className={styles.Awardcontainer}
      ref={carousel}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        whileTap={{ cursor: 'grabbing' }}
        drag={'x'}
        className={styles.innerAwardContainer}
        dragConstraints={{ right: 0, left: -width }}
        key={JSON.stringify(size)}
      >
        {awards.map((i, indx) => (
          <motion.div
            key={i.heading}
            whileTap={{ cursor: 'grabbing' }}
            className={
              styles.awardItem + ` ${(indx + 1) % 2 !== 0 && styles.evenItem}`
            }
            style={{ visibility: i.icon === '' && 'hidden' }}
          >
            <Image
              src={i.icon}
              alt='icon'
              responsive
              style={{ pointerEvents: 'none' }}
            />
            <h6>{i.heading}</h6>
            <p>{i.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
