'use client'
// dependencies
import { useRef } from 'react'
import { projects } from './helper'
import Classes from './Projects.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
// project component
export const Project = () => {
  const scrollRef = useRef(null)
  return (
    <div className={Classes.projectSection}>
      <ul ref={scrollRef}>
        {projects.map((i) => (
          <li key={i.id} style={{ width: '100%' }}>
            <div
              ref={scrollRef}
              className={Classes.projectDetail}
              style={{ flexDirection: i.id % 2 == 0 && 'row-reverse' }}
            >
              <motion.div
                // initial={{ opacity: 0 }}
                // viewport={{ amount: 0.5, once: true }}
                // whileInView={{
                //   opacity: 1,
                //   delay: 3,

                //   transition: {
                //     type: 'spring',
                //     bounce: 0.4,
                //     duration: 0.8,
                //   },
                // }}
                className={Classes.appDescription}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  viewport={{ amount: 1, once: true }}
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
                  <Image src={i.appIcon} alt='project-icon' />
                </motion.span>
                <motion.p
                  className={Classes.appCategory}
                  initial={{ opacity: 0, x: -60 }}
                  viewport={{ amount: 0.5, once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'tween',
                      delay: 0.3,
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  }}
                >
                  {i.appCategory}
                </motion.p>
                <motion.span
                  className={Classes.appName}
                  initial={{ opacity: 0, x: -70 }}
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
                  <h3>{i.appName}</h3>
                  <h3>{i.appType}</h3>
                </motion.span>
                <motion.p
                  className={Classes.appDetail}
                  initial={{ opacity: 0, x: -80 }}
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
                  {i.appDescription}
                </motion.p>
                {/* <span style={{ marginTop: '4rem' }}>
                  <Link href={i.appLinkRoute} className={Classes.appLinkRoute}>
                    View Case Study
                  </Link>
                </span> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                    ease: 'easeOut',
                  },
                }}
                viewport={{ amount: 0.5, once: true }}
                className={Classes.appIllustration}
                style={{ alignItems: i.id % 2 == 0 && 'end' }}
              >
                <span
                  style={{
                    position: 'relative',
                  }}
                >
                  <Image
                    src={i.appDemoImage}
                    className={Classes.image}
                    alt='project-image'
                  />
                  {/* <BendOnMouseMove imgSrc={i.appDemoImage} /> */}
                </span>
              </motion.div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
