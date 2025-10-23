import styles from './HomepageContact.module.scss'
import Link from "next/link"

export default function HomepageContact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                {/* Contact Header */}
                <div className={styles.contactHeader}>
                    <h2 className={styles.contactTitle}>
                        Get in <span className={styles.primaryText}>Touch</span>
                    </h2>
                    <p className={styles.contactDescription}>
                        Ready to transform your business with our software solutions or advance your career with our training
                        programs? We&apos;re here to help you succeed.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className={styles.contactGrid}>
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h4 className={styles.contactCardTitle}>Global Headquarters</h4>
                        <p className={styles.contactCardContent}>
                            Terafort (Pvt) Ltd, Office # 309, 3rd Floor
                            <br />
                            Evacuee Trust Complex, Agha Khan Road
                            <br />
                            F-5/1, Islamabad, Pakistan
                        </p>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <h4 className={styles.contactCardTitle}>Phone</h4>
                        <p className={styles.contactCardContent}>
                            +92 51 2604 504
                            <br />
                            +92 300 855 7463
                        </p>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h4 className={styles.contactCardTitle}>Email</h4>
                        <p className={styles.contactCardContent}>
                            info@terafort.com
                            <br />
                            careers@terafort.com
                        </p>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <h4 className={styles.contactCardTitle}>Business Hours</h4>
                        <p className={styles.contactCardContent}>
                            Mon - Fri: 9:00 AM - 6:00 PM
                            <br />
                            Sat: 10:00 AM - 4:00 PM
                        </p>
                    </div>
                </div>

                {/* Contact Actions */}
                <div className={styles.contactActions}>
                    <div className={styles.contactButtons}>
                        <Link href="/contact" className={styles.primaryButton}>
                            Contact Sales Team
                        </Link>
                        <Link href="/contact" className={styles.secondaryButton}>
                            Schedule a Demo
                        </Link>
                    </div>
                    <p className={styles.contactNote}>
                        Response time: Within 24 hours | Available in 15+ languages
                    </p>
                </div>
            </div>
        </section>
    )
}
