import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import HeroLayout from '../components/HeroLayout/HeroLayout'
import SuccessStoriesGrid from '../pagesComponents/success-stories/components/SuccessStoriesGrid'

export default function SuccessStories() {
  const router = useRouter()
  const { category, service } = router.query
  const [portfolioItems, setPortfolioItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (category) {
      // Filter portfolio items based on category
      const filteredItems = getPortfolioByCategory(category)
      setPortfolioItems(filteredItems)
      setLoading(false)
    }
  }, [category])

  const heroData = {
    heading: `${service || 'Success'} Stories`,
    text: `Discover our successful projects and case studies in ${service || 'various technologies'}`,
    linkText: 'Get Started',
    linkRef: '/contact'
  }

  return (
    <>
      <Head>
        <title>Terafort | {service || 'Success'} Stories</title>
        <meta name="description" content={`View our portfolio and success stories in ${service}`} />
      </Head>

      <HeroLayout
        heading={heroData.heading}
        text={heroData.text}
        linkText={heroData.linkText}
        linkRef={heroData.linkRef}
      />

      <SuccessStoriesGrid
        portfolioItems={portfolioItems}
        category={service}
        loading={loading}
      />
    </>
  )
}

// Portfolio data organized by category
function getPortfolioByCategory(category) {
  const portfolioData = {
    'digital-transformation': [
      // Web Development Projects
      {
        id: 1,
        title: 'E-Commerce Platform - Full Stack Web Development',
        description: 'Modern responsive e-commerce website with React frontend, Node.js backend, and comprehensive admin dashboard',
        image: '/resources/images/hero/hero1.webp',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'AWS S3'],
        category: 'Web Development',
        subcategory: 'E-Commerce Website',
        client: 'RetailMax Solutions',
        duration: '4 months',
        results: ['300% increase in online sales', '50% faster page load times', '95% mobile responsiveness score']
      },
      {
        id: 2,
        title: 'Corporate Website with CMS - Web Development',
        description: 'Professional corporate website with custom CMS, multi-language support, and SEO optimization',
        image: '/resources/images/hero/hero2.webp',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
        category: 'Web Development',
        subcategory: 'Corporate Website',
        client: 'Global Enterprises Ltd',
        duration: '3 months',
        results: ['200% increase in web traffic', 'First page Google rankings', '40% better user engagement']
      },
      // Mobile App Development Projects
      {
        id: 3,
        title: 'FinTech Mobile App - Cross-Platform Development',
        description: 'Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking',
        image: '/resources/images/hero/hero3.webp',
        technologies: ['React Native', 'Redux', 'Firebase', 'Plaid API', 'Biometric Auth'],
        category: 'App Development',
        subcategory: 'FinTech Mobile App',
        client: 'SecureBank Mobile',
        duration: '8 months',
        results: ['500K+ app downloads', '4.8/5 app store rating', '99.9% transaction security']
      },
      {
        id: 4,
        title: 'Food Delivery App - Native iOS & Android',
        description: 'Full-featured food delivery platform with real-time tracking, payment integration, and restaurant management',
        image: '/resources/images/hero/hero3.webp',
        technologies: ['Swift', 'Kotlin', 'Google Maps API', 'Push Notifications', 'PayPal SDK'],
        category: 'App Development',
        subcategory: 'Food Delivery App',
        client: 'QuickEats Delivery',
        duration: '6 months',
        results: ['1M+ orders processed', '25% faster delivery times', '90% customer retention rate']
      },
      // Game Development Projects
      {
        id: 5,
        title: '3D Adventure Game - Unity Game Development',
        description: 'Immersive 3D adventure game with stunning graphics, multiplayer support, and in-app purchases',
        image: '/resources/images/hero/hero1.webp',
        technologies: ['Unity 3D', 'C#', 'Photon Network', 'Blender', 'Unity Analytics'],
        category: 'Game Development',
        subcategory: '3D Adventure Game',
        client: 'GameStudio Pro',
        duration: '12 months',
        results: ['2M+ game downloads', '$500K+ revenue in first year', '4.6/5 user rating']
      },
      {
        id: 6,
        title: 'Educational Mobile Game - 2D Game Development',
        description: 'Interactive educational game for children with engaging gameplay, progress tracking, and parental controls',
        image: '/resources/images/hero/hero2.webp',
        technologies: ['Unity 2D', 'C#', 'Firebase Analytics', 'In-App Purchases', 'Cloud Save'],
        category: 'Game Development',
        subcategory: 'Educational Game',
        client: 'EduPlay Games',
        duration: '5 months',
        results: ['Used in 1000+ schools', '95% educational effectiveness', 'Apple App Store featured']
      },
      // UI/UX Development Projects
      {
        id: 7,
        title: 'SaaS Dashboard - UI/UX Design & Development',
        description: 'Complete UI/UX redesign of enterprise SaaS platform with improved user experience and modern interface',
        image: '/resources/images/hero/hero3.webp',
        technologies: ['Figma', 'React', 'Material-UI', 'D3.js', 'User Research', 'A/B Testing'],
        category: 'UI/UX Development',
        subcategory: 'SaaS Platform Redesign',
        client: 'CloudTech Solutions',
        duration: '4 months',
        results: ['60% increase in user satisfaction', '40% reduction in support tickets', '25% increase in feature adoption']
      },
      {
        id: 8,
        title: 'Healthcare App Interface - UI/UX Design',
        description: 'User-centered design for healthcare mobile app focusing on accessibility, ease of use, and medical compliance',
        image: '/resources/images/hero/hero3.webp',
        technologies: ['Adobe XD', 'Principle', 'InVision', 'Accessibility Guidelines', 'HIPAA Compliance'],
        category: 'UI/UX Development',
        subcategory: 'Healthcare App Design',
        client: 'HealthTech Innovations',
        duration: '3 months',
        results: ['WCAG 2.1 AA compliance', '50% faster task completion', '95% user approval rating']
      }
    ],
    'data-&-ai-solutions': [
      {
        id: 4,
        title: 'AI-Powered Analytics Dashboard',
        description: 'Machine learning solution for predictive business analytics with real-time data processing',
        image: '/public/resources/images/projects/ai-analytics.jpg',
        technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
        category: 'Data & AI Solutions',
        client: 'DataCorp Analytics',
        duration: '4 months',
        results: ['85% prediction accuracy', 'Real-time insights', '30% efficiency gain']
      },
      {
        id: 5,
        title: 'Generative AI Content Platform',
        description: 'AI-powered content generation platform using latest GPT models for automated content creation',
        image: '/public/resources/images/projects/genai-platform.jpg',
        technologies: ['OpenAI GPT', 'Python', 'FastAPI', 'React'],
        category: 'Data & AI Solutions',
        client: 'ContentGen LLC',
        duration: '5 months',
        results: ['90% content quality improvement', 'Automated workflows', '5x faster content creation']
      }
    ],
    'emerging-technologies': [
      {
        id: 6,
        title: 'VR Training Simulation',
        description: 'Virtual reality training platform for industrial safety with immersive 3D environments',
        image: '/public/resources/images/projects/vr-training.jpg',
        technologies: ['Unity', 'C#', 'Oculus SDK', 'Firebase'],
        category: 'Emerging Technologies',
        client: 'SafeTech Industries',
        duration: '5 months',
        results: ['90% training effectiveness', 'Reduced accidents', 'Cost-effective training']
      },
      {
        id: 7,
        title: 'Blockchain Supply Chain Solution',
        description: 'Decentralized supply chain management system using blockchain for transparency and traceability',
        image: '/public/resources/images/projects/blockchain-supply.jpg',
        technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React'],
        category: 'Emerging Technologies',
        client: 'Supply Chain Pro',
        duration: '7 months',
        results: ['100% transparency', 'Reduced fraud', 'Improved trust']
      }
    ],
    'cybersecurity-&-automation': [
      {
        id: 8,
        title: 'Enterprise Security Audit Platform',
        description: 'Comprehensive cybersecurity assessment and monitoring platform with automated threat detection',
        image: '/public/resources/images/projects/security-audit.jpg',
        technologies: ['Python', 'OWASP', 'Nessus', 'ELK Stack'],
        category: 'Cybersecurity & Automation',
        client: 'SecureBank Corp',
        duration: '6 months',
        results: ['99% threat detection', 'Zero security breaches', 'Compliance achieved']
      },
      {
        id: 9,
        title: 'Process Automation Suite',
        description: 'Intelligent process automation solution for reducing manual tasks and improving efficiency',
        image: '/public/resources/images/projects/process-automation.jpg',
        technologies: ['RPA', 'Python', 'Power Automate', 'AI/ML'],
        category: 'Cybersecurity & Automation',
        client: 'Automation First Ltd',
        duration: '4 months',
        results: ['80% task automation', '60% time savings', 'Improved accuracy']
      }
    ],
    'staff-augmentation': [
      {
        id: 10,
        title: 'Full-Stack Development Team',
        description: 'Provided skilled full-stack developers to accelerate product development for a fintech startup',
        image: '/public/resources/images/projects/staff-augmentation.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        category: 'Staff Augmentation',
        client: 'FinTech Startup Inc',
        duration: '12 months',
        results: ['50% faster delivery', 'Reduced hiring costs', 'Seamless integration']
      }
    ],
    'quality-assurance-&-compliance': [
      {
        id: 11,
        title: 'Automated Testing Framework',
        description: 'Comprehensive automated testing solution for large-scale enterprise applications',
        image: '/public/resources/images/projects/automated-testing.jpg',
        technologies: ['Selenium', 'Jest', 'Cypress', 'Jenkins'],
        category: 'Quality Assurance & Compliance',
        client: 'Enterprise Tech Solutions',
        duration: '3 months',
        results: ['90% test automation', '70% bug reduction', 'Faster releases']
      },
      {
        id: 12,
        title: 'GDPR Compliance Solution',
        description: 'Complete GDPR compliance implementation for European data processing requirements',
        image: '/public/resources/images/projects/gdpr-compliance.jpg',
        technologies: ['Privacy by Design', 'Data Encryption', 'Audit Trails'],
        category: 'Quality Assurance & Compliance',
        client: 'European Data Corp',
        duration: '5 months',
        results: ['100% GDPR compliance', 'Zero data breaches', 'Audit success']
      }
    ],
    'e-commerce-management': [
      {
        id: 13,
        title: 'Multi-vendor E-commerce Platform',
        description: 'Scalable multi-vendor e-commerce solution with advanced inventory and payment management',
        image: '/public/resources/images/projects/multi-vendor-ecommerce.jpg',
        technologies: ['Shopify Plus', 'React', 'Node.js', 'Stripe'],
        category: 'E-Commerce Management',
        client: 'Marketplace Solutions Ltd',
        duration: '8 months',
        results: ['300% sales increase', '1000+ vendors onboarded', '99.9% uptime']
      },
      {
        id: 14,
        title: 'Mobile Commerce App',
        description: 'Native mobile e-commerce application with advanced features and seamless user experience',
        image: '/public/resources/images/projects/mobile-commerce.jpg',
        technologies: ['React Native', 'Firebase', 'Stripe', 'PayPal'],
        category: 'E-Commerce Management',
        client: 'Mobile Commerce Inc',
        duration: '6 months',
        results: ['500K+ downloads', '95% user retention', '200% revenue growth']
      }
    ]
  }

  return portfolioData[category] || []
}
