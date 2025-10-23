import CardImage from '../resources/cardImage.webp'
import CardImage1 from '../resources/cardImage2.webp'
import CardImage2 from '../resources/cardImage3.webp'
import CardImage3 from '../resources/cardImage4.webp'
import CardImage4 from '../resources/cardImage5.webp'
import CardImage5 from '../resources/cardImage6.webp'
import CardImage6 from '../resources/cardImage7.webp'
import CardImage7 from '../resources/cardImage8.webp'
import GooglePlay from '/public/resources/images/technologies/googleplay.webp'
import Apple from '/public/resources/images/technologies/appStore.webp'
import Oppo from '/public/resources/images/technologies/oppo.webp'
import Amazon from '/public/resources/images/technologies/amazon.webp'
import Samsung from '/public/resources/images/technologies/samsungApp.webp'
import Huawei from '/public/resources/images/technologies/huaweiApp.webp'
export const experties = {
  heroLayout: {
    heading: 'World-class software solutions for business across the globe.',
    text: `Publishing. User Acquisition. Marketing. Game Design. Full-Cycle Production. LiveOps. UI/UX.  `,
    linkText: 'Want to Collaborate?',
    linkRef: '/publish',
  },
}
export const expertiesList = [
  {
    id: 'publishing',
    heading: 'Publishing',
    linkText: 'Want to Collaborate?',
    linkRef: '/publish',
    cards: [
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
        id: 'useracuisition',
        heading: '300+ Million',
        descr: 'Downloads acquired so far',
        matter: [
          {
            content1: '300+',
            content2: 'Million Downloads',
          },
        ],
      },
      {
        id: 'marketing',
        heading: 'We help',
        descr: `Developers of all sizes release great games that will be played by millions of players around the world. Join us and let’s work together!`,
        matter: [
          {
            content1: CardImage1,
          },
        ],
      },
      {
        heading: 'We help',
        descr: `Developers track real time metrics with our analytics solutions (Retention rate, Player
acquisition cost, Monetisation data, Daily and monthly active users, Level churn, Custom data requests, A/B
tests, Creatives CPI)`,

        matter: [
          {
            content1: CardImage,
          },
        ],
      },
    ],
  },
  {
    id: 'useracuisition',
    heading: 'User Acquisition',
    linkText: 'Want to Collaborate?',
    linkRef: '/publish',
    cards: [
      {
        heading: 'Our user acquisition',
        descr: `Team believes that every single human on earth with a smartphone & active internet
connection is our target audience`,
        matter: [
          {
            content1: CardImage2,
          },
        ],
      },
    ],
  },
  {
    id: 'marketing',
    heading: 'Marketing',
    linkText: '',
    linkRef: '/',
    cards: [
      {
        heading: 'We produce & market Purposeful & Qualitative',
        descr: `Fun with the objective making people’s lives easier &
memorable`,
        matter: [
          {
            content1: CardImage3,
          },
        ],
      },
    ],
  },
  {
    id: 'gamedesign',
    heading: 'Game Design',
    linkText: '',
    linkRef: '/',
    cards: [
      {
        heading: 'Our Game Design and Planning development department',
        descr: `Working day in day out to design state of the
art and market leading applications.`,
        matter: [
          {
            content1: CardImage4,
          },
        ],
      },
    ],
  },
  {
    id: 'cycle',
    heading: 'Full-Cycle Production',
    linkText: '',
    linkRef: '/',
    cards: [
      {
        heading: 'Starting from the',
        descr: `Concept, we develop program & engineer games & apps through its alpha and beta versions to its first release and beyond!`,
        matter: [
          {
            content1: CardImage5,
          },
        ],
      },
    ],
  },
  {
    id: 'liveOps',
    heading: 'LiveOps',
    linkText: '',
    linkRef: '/',
    cards: [
      {
        heading: 'Our LiveOps',
        descr: `Operations include, QA and testing, Server administration, Game
analytics, Community management & Monetization.`,
        matter: [
          {
            content1: CardImage6,
          },
        ],
      },
    ],
  },
  {
    id: 'uiux',
    heading: 'UI/UX',
    linkText: '',
    linkRef: '/',
    cards: [
      {
        heading: 'Our artists & designers',
        descr: `Are a blend of creativity, innovation and research. They apply their finds to every project that we undertake.`,
        matter: [
          {
            content1: CardImage7,
          },
        ],
      },
    ],
  },
]
