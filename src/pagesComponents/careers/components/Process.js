import Container from '../../../components/Container'
import styles from '../careers.module.scss'
export const Process = () => {
  return (
    <Container id='process'>
      <div className={styles.appText}>
        <div className={styles.recruitClass}>
          <h2>Recruitment Process</h2>
          <p>Steps: What’s next to come!</p>
        </div>
        <ul>
          <li className={styles.listItem} datacontent={1}>
            <div>
              <h3>Apply</h3>
              <p>
                Find open vacancies on the website & our social media pages i.e.
                LinkedIn etc and apply for positions that align with your
                particular skill set.
              </p>
            </div>
          </li>
          <li className={styles.listItem} datacontent={2}>
            <div>
              <h3>Recruiter Review</h3>
              <p>
                Our recruitment committee will review your application. They
                will screen your résumé and find the best fit for you.
              </p>
            </div>
          </li>
          <li className={styles.listItem} datacontent={4}>
            <div>
              <h3>Onboarding</h3>
              <p>
                If the whole recruitment process results in a positive outcome,
                our onboarding team will give you a complete understanding of
                your professional journey at Terafort Limited.
              </p>
            </div>
          </li>
          <li className={styles.listItem} datacontent={3}>
            <div>
              <h3>Interviews (Online/Physical)</h3>
              <p>
                There is a competency-based interviewing process to identify the
                potential individuals who will thrive in our environment along
                with being professionally & culturally fit. There is usually a
                series of interviews e.g the hiring manager’s interview, and a
                combination of technical screens, panel interviews, and team
                presentations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  )
}
