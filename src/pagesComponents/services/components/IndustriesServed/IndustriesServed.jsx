import styles from './IndustriesServed.module.scss'

export default function IndustriesServed() {
    const industries = [
        { icon: "fa-solid fa-heart-pulse", title: "Healthcare", description: "HIPAA-compliant solutions for hospitals, clinics, and medical practices", projects: "50+ projects" },
        { icon: "fa-solid fa-graduation-cap", title: "Education", description: "Learning management systems and educational technology platforms", projects: "35+ projects" },
        { icon: "fa-solid fa-cart-shopping", title: "E-commerce", description: "Scalable online stores and marketplace solutions", projects: "80+ projects" },
        { icon: "fa-solid fa-coins", title: "Fintech", description: "Secure financial applications and payment processing systems", projects: "40+ projects" },
        { icon: "fa-solid fa-truck", title: "Logistics", description: "Supply chain management and tracking solutions", projects: "25+ projects" },
        { icon: "fa-solid fa-industry", title: "Manufacturing", description: "Industrial automation and inventory management systems", projects: "30+ projects" },
        { icon: "fa-solid fa-building", title: "Real Estate", description: "Property management and real estate marketplace platforms", projects: "20+ projects" },
        { icon: "fa-solid fa-gamepad", title: "Gaming", description: "Mobile games and gaming platform development", projects: "60+ projects" },
    ]

    const firstRow = industries.slice(0, 4)
    const secondRow = industries.slice(4)

    const renderCards = (list) => (
        <>
            {list.map((industry, index) => (
                <div key={index} className={styles.industryCard}>
                    <div className={styles.industryIcon}><i className={industry.icon}></i></div>
                    <h3 className={styles.industryTitle}>{industry.title}</h3>
                    <p className={styles.industryDescription}>{industry.description}</p>
                    <div className={styles.industryProjects}>{industry.projects}</div>
                </div>
            ))}
        </>
    )

    return (
        <section className={styles.industriesSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Industries We Serve</h2>
                    <p className={styles.sectionDescription}>
                        Deep domain expertise across diverse industries with proven track records
                    </p>
                </div>

                <div className={styles.marqueeWrapper}>
                    <div className={`${styles.marquee} ${styles.leftToRight}`}>
                        <div className={styles.marqueeContent}>{renderCards(firstRow)}{renderCards(firstRow)}</div>
                    </div>

                    <div className={`${styles.marquee} ${styles.rightToLeft}`}>
                        <div className={styles.marqueeContent}>{renderCards(secondRow)}{renderCards(secondRow)}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
