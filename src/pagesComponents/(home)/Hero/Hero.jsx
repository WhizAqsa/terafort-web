"use client";

import styles from './Hero.module.scss';
import Link from "next/link";
import Image from "next/image";
import { AnimatedCounter } from '@/components/ui/animated-counter';
import Beams from '@/components/ui/Beams';

export function Hero() {

  return (
    <section className={styles.heroSection}>
      {/* Beams Background */}
      <div className={styles.beamsBackground}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={16}
          lightColor="#f7b733"
          speed={2.5}
          noiseIntensity={1.2}
          scale={0.15}
          rotation={0}
        />
      </div>

      {/* Main Hero Content */}
      <div className={styles.innerLayer}>
        <div className={styles.innerContainer}>
          <div className={styles.heroContent}>
            <div className={styles.textSection}>
              <div className={styles.headingSection}>
                <h1 className={styles.mainHeading}>Transforming Ideas into Global Solutions</h1>
                <p className={styles.subHeading}>
                  From our humble beginnings as a mobile game studio to becoming a global leader in software exports and professional training, Terafort has been pioneering technological innovation for over 11 years.
                </p>
              </div>

              <div className={styles.buttonSection}>
                <Link href="/contact" className={styles.primaryButton}>
                  Request a Quote →
                </Link>
                <Link href="/whatwedo" className={styles.secondaryButton}>
                  Explore Services
                </Link>
              </div>

              <div className={styles.statsSection}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>
                      <AnimatedCounter
                        end={100}
                        suffix="+"
                        duration={2}
                        className={styles.statNumber}
                      />
                    </div>
                    <div className={styles.statLabel}>Projects Delivered</div>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>
                      <AnimatedCounter
                        end={100}
                        suffix="+"
                        duration={2.5}
                        className={styles.statNumber}
                      />
                    </div>
                    <div className={styles.statLabel}>Million Daily Active Users</div>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>
                      <AnimatedCounter
                        end={5}
                        suffix="+"
                        duration={1.5}
                        className={styles.statNumber}
                      />
                    </div>
                    <div className={styles.statLabel}>Billion Downloads Globally</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.imageSection}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/resources/images/hero/hero1.webp"
                  alt="Terafort team working on software development"
                  className={styles.heroImage}
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
