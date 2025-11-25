import styles from './SuccessStoriesGrid.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiClock, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

export default function SuccessStoriesGrid({ portfolioItems, category, loading }) {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = []

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards(prev => new Set([...prev, index]))
              }, index * 200) // Stagger animation by 200ms per card
            }
          },
          {
            threshold: 0.1,
            rootMargin: '50px 0px -50px 0px'
          }
        )

        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [portfolioItems])
  if (loading) {
    return (
      <section className={styles.loadingSection}>
        <div className={styles.container}>
          <div className={styles.loader}>Loading success stories...</div>
        </div>
      </section>
    )
  }

  if (portfolioItems.length === 0) {
    return (
      <section className={styles.emptySection}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h2>No Success Stories Found</h2>
            <p>We&apos;re currently updating our portfolio for this category. Check back soon!</p>
            <Link href="/contact" className={styles.contactButton}>
              Discuss Your Project
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.storiesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Success Stories in {category}</h2>
          <p>Real projects, real results, real impact</p>
        </div>

        <div className={styles.storiesGrid}>
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => cardRefs.current[index] = el}
              className={`
                ${styles.storyCard} 
                ${index % 2 === 0 ? styles.cardLeft : styles.cardRight}
                ${visibleCards.has(index) ? styles.cardVisible : styles.cardHidden}
              `}>
              <div className={styles.cardInner}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className={styles.storyImage}
                  />
                  <div className={styles.categoryBadge}>
                    {item.subcategory || item.category}
                  </div>

                </div>

                <div className={styles.cardContent}>
                  <div className={styles.contentHeader}>
                    <h3 className={styles.storyTitle}>{item.title}</h3>
                    <div className={styles.clientInfo}>
                      <span className={styles.clientLabel}>Client:</span>
                      <span className={styles.clientName}>{item.client}</span>
                    </div>
                  </div>

                  <p className={styles.storyDescription}>{item.description}</p>

                  <div className={styles.technologiesContainer}>
                    <h4>Technologies Used:</h4>
                    <div className={styles.techTags}>
                      {item.technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.resultsContainer}>
                    <h4>Key Results:</h4>
                    <ul className={styles.resultsList}>
                      {item.results.slice(0, 3).map((result, index) => (
                        <li key={index} className={styles.resultItem}>
                          <FiCheckCircle />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Create Your Success Story?</h3>
          <p>Let&apos;s discuss how we can help transform your business</p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Project
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
