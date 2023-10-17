import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Amanda Eleid',
  title: "Hi all, I'm Amanda",
  description:
    'My personal brand embodies unwavering dedication, integrity, and an unyielding work ethic. With fervent passion, I ensure a steadfast commitment to consistently deliver exceptional results, relentlessly pursuing improvement in all facets of life.',
  resumeLink:
    'https://docs.google.com/document/d/1LLacjv02wko1Ox3NzMYwiaYQJ-YcN8iRSHG7KPTRio4/edit?usp=sharing',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/1hanzla100/',
  github: 'https://github.com/1hanzla100',
  instagram: 'https://www.instagram.com/__hanzla100',
  facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle:
    'My expertise encompasses a wide range of skills, including leadership, team development, store management, and a deep understanding of digital marketing tools.',
  data: [
    {
      title: 'Leadership',
      lottieAnimationFile: '/lottie/skills/business-group-meeting.json', // Path of Lottie Animation JSON File
      skills: [],
      softwareSkills: [],
    },
    {
      title: 'Team Development',
      lottieAnimationFile: '/lottie/skills/business-team.json', // Path of Lottie Animation JSON File
      skills: [],
      softwareSkills: [
        // ? Check README To get icon details
      ],
    },
    {
      title: 'Store Management',
      lottieAnimationFile: '/lottie/skills/shopping-options.json', // Path of Lottie Animation JSON File
      skills: [],
      softwareSkills: [],
    },
    {
      title: 'Digital Marketing Tools',
      lottieAnimationFile: '/lottie/skills/digital-marketing.json', // Path of Lottie Animation JSON File
      skills: [],
      softwareSkills: [],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'SEO', //Insert stack or technology you have experience in
    progressPercentage: '98', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Email Marketing',
    progressPercentage: '97',
  },
  {
    Stack: 'Social Media Marketing',
    progressPercentage: '95',
  },
  {
    Stack: 'Utilizing Marketing Analytics Tools',
    progressPercentage: '94',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolLogo: "/img/CSUNS.svg.png",
    schoolName: 'California State University Northridge',
    subHeader: 'Bachelors of Science and business marketing',
    duration: 'September 2018 - April 2023',
    // desc: '',
    // grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Crew Team Leader',
    company: 'Trader Joe’s',
    // companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'NOV 2022 - JUN 2023',
    // desc: '',
    descBullets: [
    	"Trained and coached dozens of employees and oversaw daily store operations including opening and closing financials",
    	"Successfully trained and developed new crew members ensuring they were well versed in store policies and procedures",
      "Delegated daily store tasks to various crew members as well as offered support on floor and customer-facing positions as well as store operations",
      "Personalized guest experiences going extra mile to satisfy customer needs",
      "Oversaw daily stock and inventory for entirety of store",

    ],
  },
  {
    role: 'Team Manager',
    company: 'Chick-fil-a',
    // companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'MAY 2020 - JUN 2022',
    // desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    descBullets: [
    	"Improved employee performance coaching and inspiring team members to achieve target goals",
    	"Mentor team members who wanted to pursue leadership roles",
      "Oversaw front of house and back of house operations including but not limited to customer-facing roles as well as in-house roles",
      "Processed required paperwork for invoices schedules product orders and returns as well as POS reports"
    ],
  },
  {
    role: 'Private Tutor',
    company: 'Angelou Academics',
    // companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'SEPT 2017 - MAY 2021',
    // desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
    descBullets: [
    	"Oversaw dozens of students academic success",
    	"Brought struggling students up to grade level with personalized support",
      "Challenge students with fresh assignments based on Rich understanding of course material and related topics",
      "Applied learning strategies to assist students with Concepts",
      "Diversified teaching methods to meet students various learning styles",
      "Incorporated different educational methodologies to enhance classroom taught material"
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Amanda Eleid',
  description:
    '',
  author: 'Amanda Eleid',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Amanda Eleid',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Amanda Eleid Portfolio',
  ],
};
