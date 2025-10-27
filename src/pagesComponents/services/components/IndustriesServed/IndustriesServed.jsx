import { useState, useEffect } from 'react';
import styles from './IndustriesServed.module.scss';

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
    ];

    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextCard = () => setIndex((prev) => (prev + 1) % industries.length);
    const prevCard = () => setIndex((prev) => (prev - 1 + industries.length) % industries.length);

    const renderCard = (industry) => (
        <div className={styles.industryCard}>
            <div className={styles.industryIcon}><i className={industry.icon}></i></div>
            <h3 className={styles.industryTitle}>{industry.title}</h3>
            <p className={styles.industryDescription}>{industry.description}</p>
            <div className={styles.industryProjects}>{industry.projects}</div>
        </div>
    );

    return (
        <section className={styles.industriesSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Industries We Serve</h2>
                    <p className={styles.sectionDescription}>
                        Deep domain expertise across diverse industries with proven track records
                    </p>
                </div>
                {isMobile ? (
                    <div className={styles.mobileCarousel}>
                        {renderCard(industries[index])}
                        <div className={styles.carouselArrows}>
                            <button
                                onClick={prevCard}
                                aria-label="Previous Industry"
                                className={styles.arrowButton}
                            >
                                <span className={styles.arrowIcon} aria-hidden="true">&#8592;</span>
                            </button>
                            <span className={styles.carouselIndicator}>{index + 1} / {industries.length}</span>
                            <button
                                onClick={nextCard}
                                aria-label="Next Industry"
                                className={styles.arrowButton}
                            >
                                <span className={styles.arrowIcon} aria-hidden="true">&#8594;</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.industriesGrid}>
                        {industries.map((industry, i) => renderCard(industry))}
                    </div>
                )}
            </div>
        </section>
    );
}
