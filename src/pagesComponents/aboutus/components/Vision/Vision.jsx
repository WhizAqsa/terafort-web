import Container from '../../../../components/Container'
import styles from './Vision.module.scss'
import VissionPhoto from '/public/resources/images/vission.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
// Vision section
export const Vision = () => {
  return (
    <Container
      fwcCls={styles.innerContainer}
      containerCls={styles.outerContainer}
      id='vision'
    >
      <div className={styles.ValuesSec}>
        <h2>Message from the founder</h2>
        <div className={styles.visionContainer} style={{ overflow: 'hidden' }}>
          <motion.div
            className={styles.vissionIllust}
            initial={{ opacity: 0, x: -100 }}
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
            <Image
              src={VissionPhoto}
              className={styles.vissionImage}
              alt='vission-statement-illustration-terafort'
            />
          </motion.div>
          <motion.div
            className={styles.visionText}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ amount: 0.5, once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'tween',
                delay: 0.8,
                duration: 0.5,
                ease: 'easeOut',
              },
            }}
          >
            <p>
              “Terafort believes in progress, prosperity and happiness of every
              single individual connected to it and we aspire to reach new
              heights.
            </p>
            <p>
              While being optimistic about the potential to create opportunities
              and substantially improve the quality of life for humanity, we are
              on a track that we must stride with deep responsibility, care and
              humility which all makes us more than a company.
            </p>
            <p>
              We make everything possible and stay true to our vision so our
              resolve is to build a society of positive, innovative, pragmatic,
              productive and radiant leaders, shaping our growth and paving the
              way for success and a long-standing legacy.
            </p>
            <p>
              In conclusion, I would heartily say that every single being
              associated with us and our vision is the cream of the crop.”
            </p>
            <author>-Shafique Anwar</author>
            {/* <p>
            {`Preceding the way to bring foreign investment in Pakistan &
            prospering the company that contributes in the country's Economic &
            GDP growth Fight against the unemployment crisis in Pakistan by
            creating career-building jobs for all and sundry`}
          </p> */}
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
