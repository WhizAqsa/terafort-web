import Container from '../../../../components/Container'
import styles from './Mission.module.scss'
import VissionPhoto from '/public/resources/images/mission.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
// Vision section
export const Mission = () => {
  return (
    <Container fwcCls={styles.innerContainer} id='mission'>
      <div className={styles.missionSec}>
        <h2>Mission</h2>
        <div className={styles.missionContainer}>
          <div className={styles.missionText}>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                duration: 0.5,
                transition: {
                  type: 'spring',
                  delay: 0.3,
                },
              }}
              className={styles.listItem}
              dataContent={1}
            >
              <h3>Intra- & Entrepreneureship </h3>
              {/* <p>
                Empowering customers through exceptional, personalised and
                inspiring experiences.
              </p> */}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                duration: 0.6,
                transition: {
                  type: 'spring',
                  delay: 0.5,
                },
              }}
              className={styles.listItem}
              dataContent={2}
            >
              <h3>Digital Healthcare</h3>
              {/* <p>
                Building a seamless, accessible and innovative digital
                healthcare ecosystem for everyone.
              </p> */}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                duration: 0.7,
                transition: {
                  type: 'spring',
                  delay: 0.7,
                },
              }}
              className={styles.listItem}
              dataContent={3}
            >
              <h3>Fun to Play</h3>
              {/* <p>
                {`Creating fun and entertaining content that inspires, educates
                and adds value to people's lives.`}
              </p> */}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,

                transition: {
                  type: 'spring',
                  delay: 0.9,
                },
              }}
              className={styles.listItem}
              dataContent={4}
            >
              <h3>AI Powered Apps</h3>
              {/* <p>
                Fostering a culture of entrepreneurship, innovation and
                risk-taking to drive growth and success.
              </p> */}
            </motion.span>
          </div>
          <motion.div
            className={styles.missionIllust}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ amount: 0.5, once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'tween',
                delay: 0.5,
              },
            }}
          >
            <Image
              src={VissionPhoto}
              className={styles.missionImage}
              alt='vission-statement-illustration-terafort'
            />
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
