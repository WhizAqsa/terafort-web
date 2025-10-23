import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.textCenter}>
                    <h1 className={styles.mainHeading}>
                        Build Your <span className={styles.highlight}>Career</span> With Us
                    </h1>
                    <p className={styles.description}>
                        Join a global team of innovators, creators, and problem-solvers who are shaping the future of software
                        development and education. Your next career adventure starts here.
                    </p>

                    <div className={styles.buttonGroup}>
                        <a
                            href="#positions"
                            className={styles.primaryButton}
                        >
                            View Open Positions
                        </a>
                        <a
                            href="#benefits"
                            className={styles.secondaryButton}
                        >
                            Learn About Our Culture
                        </a>
                    </div>

                    {/* Stats */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.iconWrapper}>
                                <Users className={styles.icon} />
                            </div>
                            <div className={styles.statNumber}>120+</div>
                            <div className={styles.statLabel}>Employees</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.iconWrapper}>
                                <Globe className={styles.icon} />
                            </div>
                            <div className={styles.statNumber}>10+</div>
                            <div className={styles.statLabel}>Working Teams</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.iconWrapper}>
                                <Award className={styles.icon} />
                            </div>
                            <div className={styles.statNumber}>5+</div>
                            <div className={styles.statLabel}>Billion
                                Downloads Globally</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.iconWrapper}>
                                <TrendingUp className={styles.icon} />
                            </div>
                            <div className={styles.statNumber}>100+</div>
                            <div className={styles.statLabel}> Million
                                Daily Active Users</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

