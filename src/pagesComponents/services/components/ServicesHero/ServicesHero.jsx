import styles from './ServicesHero.module.scss'
import Link from 'next/link'

export default function ServicesHero() {
    const services = [
        { icon: "fa-solid fa-code", label: "Custom Development" },
        { icon: "fa-solid fa-mobile-screen", label: "Mobile Apps" },
        { icon: "fa-solid fa-globe", label: "Web Solutions" },
        { icon: "fa-solid fa-database", label: "Data Systems" },
        { icon: "fa-solid fa-cloud", label: "Cloud Services" },
        { icon: "fa-solid fa-shield-halved", label: "Security" },
    ]

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Enterprise <span className={styles.primaryText}>Software Solutions</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        From custom applications to enterprise systems, we deliver scalable software solutions that drive business
                        growth. Trusted by companies across 25+ countries for mission-critical projects.
                    </p>

                    <div className={styles.heroActions}>
                        <Link href="/contact" className={styles.primaryButton}>
                            Request Quote
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link href="/portfolio" className={styles.secondaryButton}>
                            View Portfolio
                        </Link>
                    </div>

                    {/* Service Icons */}
                    <div className={styles.servicesIcons}>
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceIcon}>
                                <div className={styles.iconWrapper}>
                                    <i className={service.icon}></i>
                                </div>
                                <div className={styles.iconLabel}>{service.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
