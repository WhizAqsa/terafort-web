import banner1 from './resources/app1.webp'
import banner2 from './resources/app2.png'
import banner3 from './resources/app3.webp'
import banner4 from './resources/app4.webp'

export const careersHero = {
  heroLayout: {
    heading: 'What we do',
    text: `We combine innovation and technology to bring games to life. We provide game development services, game publishing for developers, a Telehealth platform, and an incubation center to help bring your ideas to fruition.`,
    linkText: 'Want to Collaborate?',
    linkRef: '/contact',
  },
}
// const apps
export const apps = [
  {
    id: 'gaming',
    banner: banner1,
    name: 'Gaming',
    desc: 'Mobile gaming is a rapidly growing industry with a global reach, encompassing a wide range of game genres and business models.',
    points: [
      'Qualitative & Purposeful Fun while fulfilling Futuristic Entertainment Advancements',
      'Gaming is the booming industry & is the No. 1 source of entertainment for younger generations',
      'Mobile First Technology',
      'Future expansion covering all Major Gaming Platforms i.e. PC, Console etc.',
    ],
  },
  {
    id: 'apps',
    banner: banner2,
    name: 'Apps',
    desc: 'The mobile app industry is a rapidly growing sector, from gaming to e-commerce, mobile apps have transformed the way we live, work, and play.',
    points: [
      'Developing Apps that make daily life easier & memorable',
      `Terafort stands among the top mobile app development companies, we
develop intuitive mobile apps that are performance-oriented and a lifestyle toolkit. We convert innovative & unexplored ideas into helpful mobile apps!`,
      'Covering platforms of Mobile',
    ],
  },
  {
    id: 'telehealth',
    banner: banner3,
    name: 'Telehealth',
    desc: 'Telehealth is a rapidly growing industry that uses digital technology to provide medical care and health-related services remotely, including virtual consultations, remote monitoring, and digital therapy.',
    points: [
      'To Create a Comprehensive Healthcare Eco-system that serves to the Health of all',
      'Stress free access to quality healthcare at doorstep',
    ],
  },
  {
    id: 'incubation',
    banner: banner4,
    name: 'Incubation',
    desc: 'To provide a platform for emerging businesses to grow and succeed by offering industry-specific resources, mentorship, and networking opportunities.',
    points: [
      'Empowering dreamers with inspiring ideas',
      'Enabling others to practically implement & build revolutionary products & solutions',
      'Making this world a better place & making people’s lives easier',
      'Angel & seed investment with Technological & Infrastructural support',
    ],
  },
]
