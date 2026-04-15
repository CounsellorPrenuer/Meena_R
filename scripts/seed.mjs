import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createClient} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in environment')
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2025-01-01',
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

async function uploadFounderImage() {
  const imagePath = path.join(rootDir, 'public', 'meena-photo.jpg')

  if (!fs.existsSync(imagePath)) {
    return null
  }

  return client.assets.upload('image', fs.createReadStream(imagePath), {
    filename: 'meena-photo.jpg',
    title: 'Meena R',
  })
}

const siteSettings = {
  _id: 'siteSettings-main',
  _type: 'siteSettings',
  brandName: 'ClariPath',
  companyName: 'ClariPath Career Counselling',
  tagline: 'Discover Yourself. Choose Your Path. Create Your Future.',
  shortNote:
    'ClariPath helps students discover their strengths, choose the right career path, and build a confident future.',
  about: [
    'At ClariPath Career Counselling, we believe that every individual has a unique path waiting to be discovered. Our mission is to bring clarity to career decisions by helping students understand themselves—their interests, strengths, and potential.',
    'We work closely with students and parents to transform confusion into confidence. Through personalized guidance, structured assessments, and thoughtful conversations, we empower young minds to make informed career choices aligned with their true abilities.',
    'At ClariPath, it’s not just about choosing a career—it’s about building a future with clarity, purpose, and confidence.',
  ],
  serviceModes: ['Online', 'Offline', 'Hybrid'],
  domains: ['claripathcounselling.com', 'ClariPath.in'],
  referenceWebsite: 'https://claryntia.com',
  brandColors: {
    primary: 'Soft Blue',
    secondary: 'Sage Green',
    base: 'White',
  },
  contact: {
    phone: '+91 9677038867',
    email: 'meena0902.mr@gmail.com',
    linkedin: 'https://www.linkedin.com/in/meenarhbel',
  },
}

const serviceGroups = [
  {
    _id: 'service-students',
    _type: 'serviceGroup',
    order: 1,
    audience: 'For Students (8th – 12th Grade)',
    subtitle: 'Career Guidance & Stream Selection',
    services: [
      {
        title: 'Career Guidance & Stream Selection',
        description: 'Helping students choose the right subjects and career direction based on their interests and abilities.',
      },
      {
        title: 'Psychometric Assessment',
        description: 'Scientific assessments to understand aptitude, personality, and interests for better decision-making.',
      },
      {
        title: 'Career Planning & Roadmap',
        description: 'Step-by-step guidance on courses, entrance exams, and career pathways.',
      },
      {
        title: 'Course & College Guidance',
        description: 'Support in selecting the right courses and colleges aligned with career goals.',
      },
      {
        title: 'One-to-One Counselling',
        description: 'Personalized sessions with students and parents to address confusion and build clarity.',
      },
    ],
  },
  {
    _id: 'service-parents',
    _type: 'serviceGroup',
    order: 2,
    audience: 'For Parents',
    subtitle: 'Parent Guidance Sessions',
    services: [
      {
        title: 'Parent Guidance Sessions',
        description: 'Helping parents understand their child’s strengths and support them in making the right career choices without pressure.',
      },
    ],
  },
  {
    _id: 'service-professionals',
    _type: 'serviceGroup',
    order: 3,
    audience: 'For Working Professionals',
    subtitle: 'Career Transition & Growth Planning',
    services: [
      {
        title: 'Career Transition Guidance',
        description: 'Support for individuals looking to switch careers or explore new opportunities.',
      },
      {
        title: 'Career Clarity & Direction',
        description: 'Helping professionals who feel stuck, confused, or dissatisfied in their current role.',
      },
      {
        title: 'Skill Mapping & Growth Planning',
        description: 'Identifying strengths and suggesting upskilling pathways for career advancement.',
      },
      {
        title: 'Second Career Planning',
        description: 'Guidance for individuals returning to work or exploring new career options after a break.',
      },
    ],
  },
  {
    _id: 'service-workshops',
    _type: 'serviceGroup',
    order: 4,
    audience: 'Workshops & Programs',
    subtitle: 'Career Awareness Workshops',
    services: [
      {
        title: 'Career Awareness Workshops (Schools & Institutions)',
        description: 'Interactive sessions on career options, future trends, and decision-making skills.',
      },
    ],
  },
]

const mentorshipPlans = [
  {
    _id: 'plan-8-9',
    _type: 'mentorshipPlan',
    order: 1,
    segment: '8-9 Students',
    standard: {
      label: 'Standard',
      name: 'Discover',
      price: 'Rs 5,500',
      cta: 'Explore Discover',
      included: [
        '1 Career Counselling Session',
        'Psychometric Assessment',
        'Lifetime Knowledge Gateway Access',
        'Webinar Invites',
      ],
      excluded: [
        '8 Sessions until Graduation',
        'Customized Reports & Education Pathways',
        'Study Abroad Guidance',
      ],
    },
    premium: {
      label: 'Premium',
      name: 'Discover Plus+',
      price: 'Rs 15,000',
      cta: 'Join Discover Plus+',
      included: [
        '8 Career Counselling Sessions (1/Year)',
        'Comprehensive Psychometric Assessments',
        'Lifetime Knowledge Gateway Access',
        'Customized Reports with Education Pathways',
        'CV Building Support',
        'Study Abroad Guidance',
      ],
      excluded: [],
    },
  },
  {
    _id: 'plan-10-12',
    _type: 'mentorshipPlan',
    order: 2,
    segment: '10-12 Students',
    standard: {
      label: 'Standard',
      name: 'Achieve Online',
      price: 'Rs 5,999',
      cta: 'Start Achieve Online',
      included: [
        '1 Career Counselling Session',
        'Psychometric Assessment',
        'Knowledge Gateway Access',
      ],
      excluded: [
        '4 Sessions Pack',
        'Live Webinar Access',
        'Customized Reports & Roadmap',
      ],
    },
    premium: {
      label: 'Premium',
      name: 'Achieve Plus+',
      price: 'Rs 10,599',
      cta: 'Get Achieve Plus+',
      included: [
        '4 Career Counselling Sessions',
        'Psychometric Assessment',
        'Live Webinar Access',
        'Customized Reports & Pathways',
        'Study Abroad Guidance',
        'CV Reviews',
      ],
      excluded: [],
    },
  },
  {
    _id: 'plan-college-graduates',
    _type: 'mentorshipPlan',
    order: 3,
    segment: 'College Graduates',
    standard: {
      label: 'Standard',
      name: 'Ascend Online',
      price: 'Rs 6,499',
      cta: 'Launch Ascend Online',
      included: [
        '1 Career Counselling Session',
        'Psychometric Assessment',
        'Knowledge Gateway Access',
      ],
      excluded: [
        '3 Sessions Pack',
        'Live Webinar Access',
        'Resume Building Resources',
      ],
    },
    premium: {
      label: 'Premium',
      name: 'Ascend Plus+',
      price: 'Rs 10,599',
      cta: 'Master Ascend Plus+',
      included: [
        '3 Career Counselling Sessions',
        'Psychometric Assessment',
        'Live Webinar Access',
        'Customized Reports',
        'Resume Building Resources',
        'Career Growth Planning',
      ],
      excluded: [],
    },
  },
  {
    _id: 'plan-working-professionals',
    _type: 'mentorshipPlan',
    order: 4,
    segment: 'Working Professionals',
    standard: {
      label: 'Standard',
      name: 'Ascend Online',
      price: 'Rs 6,499',
      cta: 'Start Ascend Online',
      included: [
        '1 Career Counselling Session',
        'Psychometric Assessment',
        'Knowledge Gateway Access',
      ],
      excluded: [
        '3 Sessions Pack',
        'Live Webinar Access',
        'Upskilling Pathways',
      ],
    },
    premium: {
      label: 'Premium',
      name: 'Ascend Plus+',
      price: 'Rs 10,599',
      cta: 'Go Ascend Plus+',
      included: [
        '3 Career Counselling Sessions',
        'Psychometric Assessment',
        'Live Webinar Access',
        'Customized Reports',
        'Upskilling & Skill Mapping',
        'Certificate/Online Course Guidance',
      ],
      excluded: [],
    },
  },
]

const customPackages = [
  {
    _id: 'custom-skill-mapping',
    _type: 'customPackage',
    order: 1,
    title: 'Skill Mapping & Growth',
    price: 'Rs 2,500',
    icon: 'strategy',
    cta: 'Book Now',
    description: 'Identifying strengths and suggesting upskilling pathways for career advancement.',
  },
  {
    _id: 'custom-transition',
    _type: 'customPackage',
    order: 2,
    title: 'Career Transition',
    price: 'Rs 3,500',
    icon: 'session',
    cta: 'Book Now',
    description: 'Support for individuals looking to switch careers or explore new opportunities.',
  },
]

async function seed() {
  const founderImage = await uploadFounderImage()

  const founder = {
    _id: 'founder-main',
    _type: 'founder',
    name: 'Meena R',
    titleLine: 'Career Counsellor | Educator | Mentor',
    bio: [
      'Choosing the right career path can often feel overwhelming—for both students and parents. With over 15+ years of experience across Teaching, HR, and the Corporate sector, I guide students (8th–12th) and working professionals towards making confident and meaningful career decisions.',
      'My approach combines psychometric assessments with personalized one-on-one counselling, helping individuals gain clear insight into their strengths, interests, and long-term goals. This ensures that every decision is not made out of pressure or confusion, but with clarity and purpose.',
      'I am deeply committed to helping individuals choose a path that truly aligns with their potential—so they can build a future defined not just by success, but also by happiness and fulfilment.',
    ],
    ...(founderImage
      ? {
          photo: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: founderImage._id,
            },
          },
        }
      : {}),
  }

  const docs = [siteSettings, founder, ...serviceGroups, ...mentorshipPlans, ...customPackages]

  for (const doc of docs) {
    await client.createOrReplace(doc)
    console.log(`Seeded: ${doc._id}`)
  }

  console.log('Sanity seed complete.')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})