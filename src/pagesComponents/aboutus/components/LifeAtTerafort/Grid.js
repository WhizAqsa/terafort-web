import styles from './Life.module.scss'

import boxImage1 from './images/box1.png'
import boxImage5 from './images/box5.png'
import boxImage7 from './images/box7.png'
import boxImage9 from './images/box9.png'
import boxImage11 from './images/box11.webp'
import boxImage3 from './images/box3.png'
import boxImage13 from './images/box13.png'
export default function Grid() {
  return (
    <div className={styles.lifeContainer}>
      <div
        className={styles.box + ' ' + styles.box1}
        style={{
          backgroundImage: `url(${boxImage1.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className={styles.box + ' ' + styles.box2}>
        <h3>Value based Culture</h3>
        {/* <ul>
          <li>Values that Positively Transform Characters</li>
          <li>
            Ideologies & Values infused Deeply that there is Reflection from
            Action
          </li>
        </ul> */}
      </div>
      <div
        className={styles.box + ' ' + styles.box3}
        style={{
          backgroundImage: `url(${boxImage3.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      >
        <h3>★ Training & Development Programs</h3>
        <h3> ★ Internships Program</h3>
      </div>
      <div className={styles.box + ' ' + styles.box4}>
        <h3>Working with Latest Technology Stack</h3>
        <ul>
          <li>
            {` Advance Engines, Software's & Tools for Communication & Development`}
          </li>
          <li>Cutting Edge Hardware Equipment</li>
        </ul>
      </div>
      <div
        className={styles.box + ' ' + styles.box5}
        style={{
          backgroundImage: `url(${boxImage5.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className={styles.box + ' ' + styles.box6}>
        <h3>Fun & Play</h3>
        <ul>
          <li>Sports & Gaming Events</li>
          <li>Outdoor Activities & Events</li>
          <li>Team & Company Dining Events</li>
        </ul>
      </div>
      <div
        className={styles.box + ' ' + styles.box7}
        style={{
          backgroundImage: `url(${boxImage7.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className={styles.box + ' ' + styles.box8}>
        <h3>★ Motivational Sessions</h3>
        <h3>★ Workplace Amenities</h3>
        <ul>
          <li>Gym in Office Building</li>
          <li>Gaming Area</li>
          <li>Running Coffee & Tea all time</li>
          <li>Indoor Sports Area</li>
        </ul>
      </div>
      <div
        className={styles.box + ' ' + styles.box9}
        style={{
          backgroundImage: `url(${boxImage9.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className={styles.box + ' ' + styles.box10}>
        <h3>Celebrations</h3>
        <ul>
          <li>Company & Employee Celebrations</li>
          <li>National & International Events Celebrations</li>
        </ul>
      </div>
      <div
        className={styles.box + ' ' + styles.box11}
        style={{
          backgroundImage: `url(${boxImage11.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className={styles.box + ' ' + styles.box12}>
        <h3>Awards & Incentives</h3>
        <ul>
          <li>Performance Awards</li>
          <li>Team/Project Achievement Awards</li>
          <li>Annual Increments & Bonuses</li>
        </ul>
      </div>
      <div
        className={styles.box + ' ' + styles.box13}
        style={{
          backgroundImage: `url(${boxImage13.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      >
        <h3>Exquisitely Designed Workplace</h3>
        <ul>
          <li>
            Versatile Working & Seating Places with a blend of Productivity &
            Relaxation
          </li>
          <li>Furnished with beautiful Furniture</li>
        </ul>
      </div>
    </div>
  )
}
