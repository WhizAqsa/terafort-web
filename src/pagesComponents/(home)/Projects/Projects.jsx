'use client'
//importing dependencies
import Container from '../../../components/Container'
import { motion } from 'framer-motion'
import { Project } from './Project'
// style sheet
import styles from './Projects.module.scss'
// Projects section
export const Projects = () => {
  return (
    <Container fwcCls={styles.containerClass} id='projects'>
      <div className={styles.projects}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0 }}
          viewport={{ amount: 1, once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
          We love transforming product ideas to digital realities.
        </motion.h2>
        <Project />
      </div>
    </Container>
  )
}
