import { useState, useEffect } from 'react';
import styles from './HomepageAbout.module.scss';
import Link from "next/link";
import MissionValuesGallery from '../../../components/MissionValuesGallery';
import CircularGallery from '../../../components/CircularGallery/CircularGallery';

export default function HomepageAbout() {
    const services = [
        {
            icon: "fa-solid fa-code",
            category: "Digital Transformation",
            title: "Web, Game & App Development, Cloud, UX/UI",
            description: "Comprehensive digital solutions including web applications, mobile games, cloud services, and user experience design"
        },
        {
            icon: "fa-solid fa-robot",
            category: "Data & AI Solutions",
            title: "ML, Gen AI, Data Analytics",
            description: "Machine learning models, generative AI solutions, and comprehensive data analytics services"
        },
        {
            icon: "fa-solid fa-cube",
            category: "Emerging Technologies",
            title: "VR, AR, IoT, Blockchain, Web 3",
            description: "Cutting-edge solutions in virtual reality, augmented reality, Internet of Things, blockchain, and Web 3.0 technologies"
        },
        {
            icon: "fa-solid fa-shield-halved",
            category: "Cybersecurity & Automation",
            title: "Security & Process Automation",
            description: "Comprehensive cybersecurity solutions and intelligent process automation for enhanced security and efficiency"
        },
        {
            icon: "fa-solid fa-users",
            category: "Staff Augmentation",
            title: "Skilled Technical Resources",
            description: "Access to skilled developers, designers, and technical experts to augment your existing team capabilities"
        },
        {
            icon: "fa-solid fa-check-circle",
            category: "Quality Assurance",
            title: "Quality Assurance & Compliance",
            description: "Comprehensive testing services, quality assurance protocols, and regulatory compliance solutions"
        },
        {
            icon: "fa-solid fa-shopping-cart",
            category: "E-Commerce",
            title: "E-Commerce Management",
            description: "End-to-end e-commerce solutions including platform development, management, and optimization services"
        },
        {
            icon: "fa-solid fa-cloud",
            category: "Cloud Solutions",
            title: "Cloud Migration & DevOps",
            description: "AWS, Azure, and GCP cloud solutions with CI/CD pipelines and infrastructure automation"
        },
        {
            icon: "fa-solid fa-mobile-screen",
            category: "Mobile Solutions",
            title: "Mobile App Development & Publishing",
            description: "Native iOS/Android apps and cross-platform solutions with full publishing support"
        }
    ];

    const [serviceIndex, setServiceIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextService = () => setServiceIndex((prev) => (prev + 1) % services.length);
    const prevService = () => setServiceIndex((prev) => (prev - 1 + services.length) % services.length);

    const renderServiceCard = (service) => (
        <div className={styles.serviceCard} style={{ margin: '0 auto', maxWidth: 400 }}>
            <div className={styles.serviceIcon}><i className={service.icon}></i></div>
            <div className={styles.serviceCategory}>{service.category}</div>
            <div className={styles.serviceTitle}>{service.title}</div>
            <div className={styles.serviceDescription}>{service.description}</div>
        </div>
    );

    return (
        <section className={styles.aboutSection}>
            <div className={styles.particlesBg}>

            </div>
            <div className={styles.container}>
                {/* Centered About Us Title and Description */}
                <div className={styles.aboutHeader}>
                    <h2 className={styles.aboutTitle}>About Us</h2>
                    <p className={styles.aboutDescription}>
                        Terafort is a trusted technology partner with proven
                        expertise in game and app development, AI
                        solutions, and cutting-edge emerging technologies.
                        We empower businesses worldwide with innovative,
                        reliable, and scalable digital solutions
                    </p>
                </div>
                {/* Vision & Mission Section with Rolling Gallery */}
                <div className={styles.visionMissionSection}>

                    <MissionValuesGallery />
                </div>
                {/* Core Services Section */}
                <div className={styles.servicesSection}>

                    <div className={styles.servicesHeader}>
                        <h3 className={styles.servicesTitle}>Our Core Services</h3>
                        <p className={styles.servicesDescription}>
                            Bridging the gap between innovative software solutions and skilled professionals
                        </p>
                    </div>
                    {isMobile ? (
                        <div className={styles.mobileServiceCarousel}>
                            {renderServiceCard(services[serviceIndex])}
                            <div className={styles.carouselArrows}>
                                <button
                                    onClick={prevService}
                                    aria-label="Previous Service"
                                    className={styles.arrowButton}
                                >
                                    <span className={styles.arrowIcon} aria-hidden="true">&#8592;</span>
                                </button>
                                <span className={styles.carouselIndicator}>{serviceIndex + 1} / {services.length}</span>
                                <button
                                    onClick={nextService}
                                    aria-label="Next Service"
                                    className={styles.arrowButton}
                                >
                                    <span className={styles.arrowIcon} aria-hidden="true">&#8594;</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div style={{ height: '600px', position: 'relative' }}>
                            <CircularGallery items={services} bend={3} scrollEase={0.08} />
                        </div>
                    )}
                </div>
                <div className={styles.servicesActions}>
                    <Link href="/whatwedo" className={styles.primaryButton}>
                        View All Services
                    </Link>
                    <Link href="/careers" className={styles.secondaryButton}>
                        Join Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
}
