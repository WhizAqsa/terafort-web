import styles from './TeamSection.module.scss'

export default function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            role: 'Co-Founder & VP',
            title: 'Faraz Khalid',
            department: 'Strategic Leadership & Vision',
            description: 'Leading Terafort\'s mission to bridge technology and education for global impact.'
        },
        {
            id: 2,
            role: 'Co-Founder & VP | Finance & Strategy',
            title: 'Asad Asif',
            department: 'Technical Innovation & Architecture',
            description: 'Driving technological excellence and innovative solutions across all our platforms.'
        },
        {
            id: 3,
            role: 'Founder & CEO',
            title: 'Shafique Anwar',
            department: 'Learning & Development',
            description: 'Designing comprehensive training programs that shape the next generation of tech leaders.'
        },
        {
            id: 4,
            role: 'VP of Business Development',
            title: 'Muhammad Kashif',
            department: 'Global Partnerships & Growth',
            description: 'Expanding our global reach and building strategic partnerships worldwide.'
        },
    ]

    return (
        <section className={styles.teamSection}>
            <div className={styles.container}>
                <div className={styles.teamHeader}>
                    <h2 className={styles.teamTitle}>
                        Meet Our <span className={styles.primaryText}>Leadership Team</span>
                    </h2>
                    <p className={styles.teamDescription}>
                        Our diverse team of experts brings together decades of experience in software development,
                        education, and business leadership to drive innovation and excellence.
                    </p>
                </div>

                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={styles.teamCard}
                            style={{ '--card-index': index }}
                        >
                            <div className={styles.memberAvatar}>
                                <span className={styles.avatarText}>IMAGE</span>
                            </div>
                            <h3 className={styles.memberTitle}>{member.title}</h3>
                            <p className={styles.memberDepartment}>{member.role}</p>
                            <p className={styles.memberDescription}>
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
