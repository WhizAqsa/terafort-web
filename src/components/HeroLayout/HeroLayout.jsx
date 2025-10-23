import { motion } from 'framer-motion'
import Link from 'next/link'
import classes from './HeroLayout.module.scss'
export default function HeroLayout({ heading, text, linkRef, linkText }) {
  return (
    <div className={classes.heroContainer}>
      <video
        src={'https://terafort.s3.ap-southeast-1.amazonaws.com/heroVideo.mp4'}
        type='video/mp4'
        autoPlay
        loop
        muted
      />
      <div className={classes.innerLayout}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={classes.info}
      >
        <h1>{heading}</h1>
        <p>{text}</p>

        {linkText && <Link href={linkRef}>{linkText}</Link>}
      </motion.div>
    </div>
  )
}
