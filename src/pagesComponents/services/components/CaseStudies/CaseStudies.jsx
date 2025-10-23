import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./CaseStudies.module.scss";

const caseStudies = [
    {
        title: "Global E-commerce Platform",
        client: "Fortune 500 Retailer",
        industry: "E-commerce",
        description:
            "Built a scalable multi-vendor marketplace handling 1M+ daily transactions",
        image: "/resources/images/projects/project1/appDemoImage.webp",
        results: [
            { icon: "fa-solid fa-chart-line", label: "300% Revenue Growth" },
            { icon: "fa-solid fa-users", label: "5M+ Active Users" },
            { icon: "fa-solid fa-clock", label: "99.9% Uptime" },
        ],
        technologies: ["React", "Node.js", "AWS", "MongoDB"],
        timeline: "8 months",
    },
    {
        title: "Healthcare Management System",
        client: "Regional Hospital Network",
        industry: "Healthcare",
        description:
            "HIPAA-compliant patient management system serving 50+ hospitals",
        image: "/resources/images/projects/project2/appDemoImage.webp",
        results: [
            { icon: "fa-solid fa-users", label: "100K+ Patients" },
            { icon: "fa-solid fa-chart-line", label: "40% Efficiency Gain" },
            { icon: "fa-solid fa-clock", label: "24/7 Availability" },
        ],
        technologies: [".NET", "SQL Server", "Azure", "React"],
        timeline: "12 months",
    },
    {
        title: "Fintech Mobile App",
        client: "Digital Banking Startup",
        industry: "Fintech",
        description:
            "Secure mobile banking app with advanced fraud detection",
        image: "/resources/images/projects/project3/appDemoImage.webp",
        results: [
            { icon: "fa-solid fa-users", label: "500K+ Downloads" },
            { icon: "fa-solid fa-chart-line", label: "Zero Security Breaches" },
            { icon: "fa-solid fa-clock", label: "2s Average Load Time" },
        ],
        technologies: ["React Native", "Python", "PostgreSQL", "AWS"],
        timeline: "6 months",
    },
];

export default function CaseStudies() {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const variants = {
        enter: { y: -120, opacity: 0 },
        center: { y: 0, opacity: 1 },
        exit: { y: 120, opacity: 0 },
    };

    const current = caseStudies[index];

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>Success Stories</h2>
            <p className={styles.sectionDescription}>
                Real projects, real results  see how we&apos;ve helped businesses transform digitally.
            </p>

            <div className={styles.cardContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className={styles.card}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <div className={styles.imageSection}>
                            <Image src={current.image} alt={current.title} className={styles.image} />
                        </div>

                        <div className={styles.infoSection}>
                            <p className={styles.industry}>{current.industry}</p>
                            <h3 className={styles.title}>{current.title}</h3>
                            <p className={styles.client}>
                                <strong>Client:</strong> {current.client}
                            </p>
                            <p className={styles.timeline}>
                                <strong>Timeline:</strong> {current.timeline}
                            </p>
                            <p className={styles.description}>{current.description}</p>

                            <div className={styles.results}>
                                {current.results.map((r, i) => (
                                    <div key={i} className={styles.resultItem}>
                                        <i className={r.icon}></i>
                                        <p>{r.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.techStack}>
                                {current.technologies.map((tech, i) => (
                                    <span key={i} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.buttons}>
                                <button className={styles.navButton} onClick={prevCard}>
                                    <i className="fa-solid fa-arrow-left"></i> Prev
                                </button>
                                <button className={styles.navButton} onClick={nextCard}>
                                    Next <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
