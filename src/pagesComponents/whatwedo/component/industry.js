import Container from '../../../components/Container'
import styles from '../industry.module.scss'
// industry component
export const IndustryIntro = () => {
  return (
    <Container containerCls={styles.outerContainer}>
      <div className={styles.industryContainer}>
        <h2>Industry</h2>
        <h4>
          The technology industry is constantly evolving, and our company is at
          the forefront of these changes. We have a team of exceptionally
          outstanding hard workers who ensure that your project is of the finest
          quality, set to outstand in the competitive market of IT.
        </h4>
        <p>
          {`We specialize in developing games and apps that provide immersive and engaging user experiences, as well as leveraging technology to transform the healthcare industry through our telehealth services. Our professional incubation center supports emerging businesses, providing access to industry-specific resources, mentorship, and networking opportunities. Our work is guided by our commitment to innovation and our passion for leveraging technology to drive positive change. As we continue to grow and evolve, we remain focused on staying ahead of the curve and driving meaningful impact in our industry.`}
        </p>
      </div>
    </Container>
  )
}
