import styles from './AboutHero.module.scss'

export default function AboutHero() {
    return (
        <section className={styles.heroSection}>

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
