import styles from './AboutHero.module.scss'
import { Particles } from '../../../../components/ui/particles'

export default function AboutHero() {
    return (
        <section className={styles.heroSection}>
            <Particles
                color="#f2994a"
                particleCount={100}
                particleSize={2}
                animate={true}
                className="z-0 opacity-20"
            />
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        About <span className={styles.primaryText}>Terafort</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        From pioneering mobile game development to becoming a global leader in software exports and professional
                        training, Terafort has been at the forefront of technological innovation for over 15 years. We believe
                        in the power of combining cutting-edge software solutions with world-class education to drive global
                        growth.
                    </p>
                </div>
            </div>
        </section>
    )
}
