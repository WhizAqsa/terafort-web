'use client'
//importing dependencies
import Container from '../../../components/Container'
import { Cards } from './Cards'
// style sheet
import Classes from './Solution.module.scss'
import { motion } from 'framer-motion'
// Solution section
export const Solution = () => {
  return (
    <Container fwcCls={Classes.fwcontainer} id='areaofexperties'>
      <div className={Classes.solution}>
        <p className={Classes.area}>Areas of Expertise</p>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          viewport={{ amount: 0.5, once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          We are expert publishers, developers, co-creators, and partners. We
          commit ourselves to understand, design and deliver out-class, products
          and services for developers, creators and our users in an agile way.
        </motion.h3>
        <Cards />
      </div>
    </Container>
  )
}
