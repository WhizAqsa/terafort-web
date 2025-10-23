import React from 'react';
import { Target, Rocket, Gem, Star } from 'lucide-react';
import styles from './MissionValuesGallery.module.scss';

const MissionValuesGallery = () => {
    const missionValuesCards = [
        {
            id: 1,
            type: 'vision',
            title: 'Vision',
            content: 'Bringing Positive Change & creating Economic Opportunities through innovative technology solutions that transform businesses and empower communities worldwide.',
            icon: Target,
        },
        {
            id: 2,
            type: 'mission',
            title: 'Mission',
            content: 'Intra- & Entrepreneurship through innovative digital solutions that bridge technology gaps and create sustainable economic opportunities for all.',
            icon: Rocket,
        },
        {
            id: 3,
            type: 'values',
            title: 'Values',
            content: 'Innovation, Integrity, Excellence, and Collaboration guide everything we do. We believe in transparency, quality, and delivering value to our clients.',
            icon: Gem,
        }
    ];

    return (
        <div className={styles.missionValuesSection}>
            <div className={styles.contentLayout}>
                {/* Left side - Text content */}
                <div className={styles.textSection}>
                    <h2 className={styles.title}>Our Vision, Mission & Values</h2>
                    <p className={styles.subtitle}>
                        Bringing Positive Change & Creating Economic Opportunities through innovative
                        technology solutions that transform businesses and empower communities worldwide.
                    </p>
                    <div className={styles.description}>
                        <p>
                            At Terafort, we are committed to delivering exceptional digital solutions
                            that bridge technology gaps and create sustainable economic opportunities.
                            Our values of innovation, integrity, excellence, and collaboration guide
                            everything we do.
                        </p>
                    </div>
                </div>

                {/* Right side - Glowing border cards */}
                <div className={styles.cardsSection}>
                    <div className={styles.cardsGrid}>
                        {missionValuesCards.map((card) => (
                            <div
                                key={card.id}
                                className={styles.glowingCard}
                            >
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>
                                        <card.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <p className={styles.cardDescription}>{card.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionValuesGallery;