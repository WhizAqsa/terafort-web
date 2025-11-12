import styles from './ServiceCategories.module.scss'
import Link from 'next/link'

export default function ServiceCategories() {
    const categories = [
        {
            icon: "fa-solid fa-code",
            title: "Digital Transformation",
            subtitle: "Web, Game & App Development, Cloud, UX/UI",
            description: "Comprehensive digital solutions including web applications, mobile games, cloud services, and user experience design",
            features: [
                "Enterprise Applications",
                "Legacy System Modernization",
                "API Development",
                "Microservices Architecture",
            ],
            technologies: ["Java", "Python", ".NET", "Node.js", "React", "Angular"],
            startingPrice: "$15,000",
        },
        {
            icon: "fa-solid fa-robot",
            title: "Data & AI Solutions",
            subtitle: "ML, Gen AI, Data Analytics",
            description: "Machine learning models, generative AI solutions, and comprehensive data analytics services",
            features: ["Machine Learning Models", "Generative AI Solutions", "Real-time Analytics", "Data Migration"],
            technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Power BI", "Tableau"],
            startingPrice: "$20,000",
        },
        {
            icon: "fa-solid fa-cube",
            title: "Emerging Technologies",
            subtitle: "VR, AR, IoT, Blockchain, Web 3",
            description: "Cutting-edge solutions in virtual reality, augmented reality, Internet of Things, blockchain, and Web 3.0 technologies",
            features: ["Virtual Reality Apps", "Augmented Reality Solutions", "IoT Development", "Blockchain Development"],
            technologies: ["Unity", "Unreal Engine", "Solidity", "Web3.js", "Arduino", "Raspberry Pi"],
            startingPrice: "$25,000",
        },
        {
            icon: "fa-solid fa-shield-halved",
            title: "Cybersecurity & Automation",
            subtitle: "Security & Process Automation",
            description: "Comprehensive cybersecurity solutions and intelligent process automation for enhanced security and efficiency",
            features: ["Security Audits", "Penetration Testing", "Process Automation", "Security Training"],
            technologies: ["OWASP", "ISO 27001", "GDPR", "SOC 2", "NIST"],
            startingPrice: "$18,000",
        },
        {
            icon: "fa-solid fa-users",
            title: "Staff Augmentation",
            subtitle: "Skilled Technical Resources",
            description: "Access to skilled developers, designers, and technical experts to augment your existing team capabilities",
            features: ["Frontend Developers", "Backend Developers", "DevOps Engineers", "UI/UX Designers"],
            technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Figma"],
            startingPrice: "$3,000/month",
        },
        {
            icon: "fa-solid fa-check-circle",
            title: "Quality Assurance & Compliance",
            subtitle: "Testing & Compliance Solutions",
            description: "Comprehensive testing services, quality assurance protocols, and regulatory compliance solutions",
            features: ["Automated Testing", "Manual Testing", "Performance Testing", "Compliance Audits"],
            technologies: ["Selenium", "Jest", "Cypress", "JMeter", "TestRail"],
            startingPrice: "$12,000",
        },
        {
            icon: "fa-solid fa-shopping-cart",
            title: "E-Commerce Management",
            subtitle: "End-to-End E-Commerce Solutions",
            description: "Complete e-commerce solutions including platform development, management, and optimization services",
            features: ["E-commerce Development", "Payment Integration", "Inventory Management", "Performance Optimization"],
            technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
            startingPrice: "$10,000",
        },
    ]

    return (
        <section className={styles.categoriesSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <p className={styles.sectionDescription}>
                        Comprehensive software solutions designed to accelerate your business growth
                    </p>
                </div>

                <div className={styles.categoriesGrid}>
                    {categories.map((category, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.categoryInfo}>
                                    <div className={styles.categoryIcon}>
                                        <i className={category.icon}></i>
                                    </div>
                                    <div className={styles.categoryDetails}>
                                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                                        <div className={styles.categorySubtitle}>{category.subtitle}</div>
                                        <div className={styles.categoryPrice}>From {category.startingPrice}</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <p className={styles.categoryDescription}>{category.description}</p>

                                <div className={styles.featuresSection}>
                                    <h4 className={styles.featuresTitle}>Key Features:</h4>
                                    <div className={styles.featuresList}>
                                        {category.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className={styles.featureItem}>
                                                <div className={styles.featureDot}></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.technologiesSection}>
                                    <h4 className={styles.technologiesTitle}>Technologies:</h4>
                                    <div className={styles.technologiesList}>
                                        {category.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className={styles.technologyTag}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.cardActions}>
                                    <Link href="/contact" className={styles.primaryButton}>
                                        Get Quote
                                    </Link>
                                    <Link href="/whatwedo" className={styles.secondaryButton}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
