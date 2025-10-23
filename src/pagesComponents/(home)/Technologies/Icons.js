'use client'
import Image from 'next/image'
import styles from './Technologies.module.scss'
import { motion } from 'framer-motion'

export const Icons = ({ iconsList }) => {
  // Duplicate the icons array for seamless infinite scroll
  const duplicatedIcons = [...iconsList, ...iconsList, ...iconsList];

  return (
    <>
      <div className={styles.infiniteScrollContainer}>
        <motion.ul
          className={styles.iconList}
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {duplicatedIcons.map((i, index) => (
            <li key={`${i.name}-${index}`}>
              <span className={styles.iconWrapper}>
                <Image src={i.icon} responsive alt='icon' />
                {i.name}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  )
}
