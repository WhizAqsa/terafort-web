// dependencies
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './TerafortNumbers.module.scss'
import Image from 'next/image'
import Container from '../Container'
import terafortSmile from '/public/resources/images/terafortSmile.webp'
import CountUp from 'react-countup'

export const TerafortNumbers = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Container id='terafortnumbers'>
      <motion.div
        className={styles.terafortNumbers}
        whileInView={() => setIsVisible(true)}
      >
        <div className={styles.numbers}>
          <h3>Terafort in Numbers</h3>
          <Image src={terafortSmile} alt='terafort-smile-logo' width={'50'} />
        </div>
        {/* <div className={styles.experience}>
          <h6 ref={ref}>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'8'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <p>Years of Experience working in the Industry</p>
        </div> */}
        {/* <div className={styles.professionals}>
          <h6>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'400'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <p>Highly Experienced Professionals Headcount</p>
        </div> */}
        <div className={styles.teams}>
          <h6>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'6'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <p>Teams working on Versatile Projects & Technology</p>
        </div>
        <div className={styles.projects}>
          <h6>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'50'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <p>Projects Published</p>
        </div>
        <div className={styles.downloads}>
          <h6>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'300'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <p>
            Million <br />
            Downloads
            <br /> Globally
          </p>
        </div>
        <div className={styles.empty}>
          <h2>2021</h2>
          <p>Founded</p>
        </div>
        <div className={styles.activeUsers}>
          <h6>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'100'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <h5>Millions</h5>
          <p>Daily Active Users of our Products</p>
        </div>
        <div className={styles.empty1}>
          <h6>
            {isVisible ? (
              <CountUp duration={2} className='counter' end={'100'} />
            ) : (
              '0'
            )}
            {isVisible && '+'}
          </h6>
          <p>Highly Experienced Professionals Headcount</p>
        </div>
        <div className={styles.office}>
          <h5>Corporate Offices</h5>
          <p>Lahore & Islamabad</p>
        </div>
      </motion.div>
    </Container>
  )
}
