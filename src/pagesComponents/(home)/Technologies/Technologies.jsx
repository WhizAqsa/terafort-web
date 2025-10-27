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
import { useEffect, useState } from 'react'

export const Technologies = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Combine all icons for mobile view
  const allIcons = [
    ...publishing,
    ...development,
    ...monetization,
    ...acuisition,
  ];

  return (
    <>
      <div className={styles.particlesBg}>
        <Particles
          color="#f2994a"
          particleCount={80}
          particleSize={1.5}
          animate={true}
          className="z-0 opacity-20"
        />
      </div>
      <Container
        containerCls={styles.containerClass}
        fwcCls={styles.outerContainerTech}
        id='technologiesweworkwith'
      >
        <div className={styles.technologies}>
          <h2 className={styles.heading}>
            Technology Partners
          </h2>
          {isMobile ? (
            <div className={styles.mobileIconsGrid}>
              {allIcons.slice(0, 3).map((icon, idx) => (
                <div key={idx} className={styles.iconItem}>
                  <Icons iconsList={[icon]} />
                </div>
              ))}
              <div className={`${styles.iconItem} ${styles.last}`}>
                <Icons iconsList={[allIcons[3]]} />
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </Container>
    </>
  )
}