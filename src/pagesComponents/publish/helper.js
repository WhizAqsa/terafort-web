import CardImage from './resources/cardImage.webp'
import GooglePlay from '/public/resources/images/technologies/googleplay.webp'
import Apple from '/public/resources/images/technologies/apple.webp'
import Oppo from '/public/resources/images/technologies/oppo.webp'
import Amazon from '/public/resources/images/technologies/amazon.webp'
import Samsung from '/public/resources/images/technologies/samsung.webp'
import Huawei from '/public/resources/images/technologies/huawei.webp'
import icon1 from './resources/icon1.webp'
import icon2 from './resources/icon2.webp'
import icon3 from './resources/icon3.webp'
import icon4 from './resources/icon4.webp'
import icon5 from './resources/icon5.webp'
import icon6 from './resources/icon6.webp'
export const publish = {
  heroLayout: {
    heading: 'PUBLISH WITH US',
    text: `Your dream is one step away from its digital reality. Publish your work with the most experienced hands at Terafort!`,
    linkText: 'Want to Collaborate?',
    linkRef: '/publish',
  },
}
export const benefits = [
  {
    icon: icon1,
    heading: 'Fast Publishing',
    text: 'Fast-paced Marketability Tests & KPIs results enabling Global Launch in the duration of weeks.',
  },
  {
    icon: icon2,
    heading: 'Cross Promotion',
    text: 'Direct Access to 150+ Millions Monthly Active Users',
  },
  {
    icon: icon3,
    heading: 'Access to Creative Studio',
    text: 'Direct access & coordination with promotional creatives & graphics teams',
  },
  {
    icon: icon4,
    heading: 'High Success Chances with dedicated Growth Managers',
    text: 'Access to dedicated publishing teams & success managers fostering long-term & sustainable relationships',
  },
  {
    icon: icon5,
    heading: 'Ongoing Financial Support & Investment',
    text: 'We are ready not only to test your product but also to financially support the team so that you can focus on expanding your games portfolio & studio',
  },
  {
    icon: icon6,
    heading: 'Real Time KPIs Tracking',
    text: 'Access & Ability to track real time metrics with our analytics solutions ',
  },
]
export const cards = [
  {
    heading: 'Success on',
    descr:
      '5+ App Stores e.g. Google Play, Apple, Huawei, Amazon, Samsung, Oppo & others',
    matter: [
      {
        content1: GooglePlay,
        content2: Apple,
        content3: Oppo,
        content4: Amazon,
        content5: Samsung,
        content6: Huawei,
      },
    ],
  },
  {
    heading: '3+ Billion',
    descr: 'Downloads acquired so far',
    matter: [
      {
        content1: '3+',
        content2: 'Billion Downloads',
      },
    ],
  },
  {
    heading: '1.5+ Millions',
    descr: 'Monthly Active Users',
    matter: [
      {
        content1: '1.5+ ',
        content2: 'Millions',
      },
    ],
  },
  {
    heading: 'We help developers',
    descr: `of all sizes release & grow great games that will be played by millions of
players around the world. Join us and let’s work together! Developers can track real time metrics
with our analytics solutions `,
    descr2: `(Retention rate, Player acquisition cost, Monetisation data, Daily and monthly
active users, Level churn, Custom data requests, A/B tests, Creatives CPI)`,
    matter: [
      {
        content1: CardImage,
      },
    ],
  },
]
