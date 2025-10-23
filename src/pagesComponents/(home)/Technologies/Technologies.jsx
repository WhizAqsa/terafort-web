'use client'
import Container from '../../../components/Container'
import styles from './Technologies.module.scss'
import Tabs from './Tabs'
import { Icons } from './Icons'
import { publishing } from './helper'
import { development } from './helper'
import { monetization } from './helper'
import { acuisition } from './helper'
import { motion } from 'framer-motion'
import { Particles } from '../../../components/ui/particles'
export const Technologies = () => {
  return (
    <>
      <Container
        containerCls={styles.containerClass}
        fwcCls={styles.outerContainerTech}
        id='technologiesweworkwith'
      >
        {/* Particles Background */}
        <Particles
          color="#f2994a"
          particleCount={80}
          particleSize={1.5}
          animate={true}
          className="z-0 opacity-20"
        />

        <div className={styles.technologies}>
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
            Technology Partners
          </motion.h2>
          <Tabs>
            <div label='Publishing Platform'>
              <Icons iconsList={publishing} />
            </div>
            <div label='Development Technology'>
              <Icons iconsList={development} />
            </div>
            <div label='Monetization Platform'>
              <Icons iconsList={monetization} />
            </div>
            <div label='User Acquisition Platform'>
              <Icons iconsList={acuisition} />
            </div>
          </Tabs>
        </div>
      </Container>
    </>
  )
}
