import Image from 'next/image'
import styles from './CompanyStory.module.scss'

export default function CompanyStory() {
    return (
        <section className={styles.companyStorySection}>
            <div className={styles.container}>
                <div className={styles.storyGrid}>
                    <div className={styles.storyContent}>
                        <h2 className={styles.storyTitle}>Our Journey</h2>
                        <div className={styles.storyText}>
                            <p>
                                Founded in 2009 as a mobile game development studio, Terafort quickly established itself as an
                                innovative force in the gaming industry. Our early success with mobile games taught us the
                                importance of user-centric design, scalable architecture, and global market understanding.
                            </p>
                            <p>
                                Recognizing the growing demand for custom software solutions and skilled developers worldwide, we
                                expanded our mission in 2018 to include software exports and professional training. This strategic
                                evolution allowed us to leverage our technical expertise while addressing the global skills gap in
                                technology.
                            </p>
                            <p>
                                Today, Terafort stands as a bridge between innovative software solutions and skilled professionals,
                                serving clients across 25+ countries while training the next generation of tech leaders through our
                                comprehensive educational programs.
                            </p>
                        </div>
                    </div>
                    <div className={styles.storyImageWrapper}>
                        <Image
                            src="/resources/images/vission.png"
                            alt="Terafort office and team"
                            width={600}
                            height={400}
                            className={styles.storyImage}
                        />
                        <div className={styles.imageDecoration}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
