import Container from '../../../../components/Container'
import styles from './Values.module.scss'
import VissionPhoto from '/public/resources/images/value.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
// Vision section
export const Values = () => {
  return (
    <Container fwcCls={styles.innerContainer} id='values'>
      <div className={styles.ValuesSec}>
        <h2>Values</h2>
        <div className={styles.ValuesContainer}>
          <motion.div
            className={styles.ValuesIllust}
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, x: -100 }}
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
              className={styles.ValuesImage}
              alt='vission-statement-illustration-terafort'
            />
          </motion.div>
          <div className={styles.ValuesText}>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  delay: 0.5,
                },
              }}
            >
              <h3>Compassion</h3>
              <p>Caring & Committed to Uplift</p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  delay: 0.6,
                },
              }}
            >
              <h3>Integrity</h3>
              <p>Trustworthy, Honest, Responsible & Probity</p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  delay: 0.7,
                },
              }}
            >
              <h3>Innovation </h3>
              <p>Creative Minds Adding Value & Ahead of the Curve</p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              viewport={{ amount: 1, once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  delay: 0.8,
                },
              }}
            >
              <h3>Transparency</h3>
              <p>Open, Communicative & Accountable</p>
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
            >
              <h3>Growth</h3>
              <p>Purposeful & Progressive</p>
            </motion.span>
          </div>
        </div>
      </div>
    </Container>
  )
}
