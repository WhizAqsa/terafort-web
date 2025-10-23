import React from 'react';
import { Code, Users, TrendingUp, Award } from 'lucide-react';
import styles from '../profile.module.scss';
import { Particles } from '@/components/ui/particles'

// industry component
export const Portfolio = () => {
  return (
    <section className={styles.portfolioSection}>
      <Particles
        color="#f2994a"
        particleCount={100}
        particleSize={2}
        animate={true}
        className="z-0 opacity-20"
      />
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 className={styles.mainHeading}>
            Our <span className={styles.highlight}>Software Products</span>
          </h1>
          <p className={styles.description}>
            Innovative solutions born from our expertise in software development and training. Each product is
            designed to solve real-world challenges and drive business growth.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#products" className={styles.primaryButton}>
              Explore Products
            </a>
            <a href="#demo" className={styles.secondaryButton}>
              Request Demo
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Code className={styles.icon} />
              </div>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projects
                Designed,developed &
                published</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Users className={styles.icon} />
              </div>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}> Million
                Daily Active Users</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <TrendingUp className={styles.icon} />
              </div>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}> Billion
                Downloads Globally</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Award className={styles.icon} />
              </div>
              <div className={styles.statNumber}>11+</div>
              <div className={styles.statLabel}> Years
                Of Experience in Games &
                Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
