import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import asb from '../images/portfolio/asb.png';
import mangroveMobile from '../images/portfolio/mobile-mangrove.webp';
import sigagahMobile from '../images/portfolio/sigagah-mobile.jpg';
import sippohonCms from '../images/portfolio/sippohon-web.png';
import ssBhumiKhatulistiwa from '../images/portfolio/ss_bhumikhatulistiwa.webp';
import ssBlockscanMobile from '../images/portfolio/ss_blockscan_mobile.webp';
import ssGosip from '../images/portfolio/ss_gosip.webp';
import ssJurnal from '../images/portfolio/ss_jurnal.webp';
import ssMangrove from '../images/portfolio/ss_mangrove.jpg';
import ssSippohonKalbar from '../images/portfolio/ss_mobile_sippohon.webp';
import ssSemariPerkim from '../images/portfolio/ss_semariperkim.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Deni Saputra',
  description: "Welcome to my digital showcase, where my crafting technology comes to life!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Deni Saputra`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Indonesia based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Self Employed</strong> helping build a mobile and web application.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      have a deep passion for traveling, especially <strong className="text-stone-100"> going to the beach</strong>,
        riding around  <strong className="text-stone-100">the city</strong>, or exploring {' '}
        <strong className="text-stone-100">the beautiful landscapes of West Kalimantan</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a dedicated Full Stack Engineer with 8 years of experience in web and mobile development. 
  I am skilled in Node.js, Python, Java, Laravel/PHP, React.js, Next.js, and Vue.js, with a focus on creating responsive designs using Tailwind and Bootstrap.`,
  aboutItems: [
    {label: 'Location', text: 'Pontianak, West Kalimantan, Indonesia', Icon: MapIcon},
    {label: 'Age', text: '35', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian', Icon: FlagIcon},
    {label: 'Interests', text: 'Driving, Travelling, Watching', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Tanjungpura', Icon: AcademicCapIcon},
    {label: 'Employment', text: '(Eks) Nomadas Experience', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7.5,
      },
      {
        name: 'Indonesian',
        level: 10,
      },
      {
        name: 'Malay',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Vue',
        level: 8,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Tailwind',
        level: 8,
      },
      {
        name: 'Bootstrap',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      {
        name: 'Swift',
        level: 3,
      },
      {
        name: 'Android',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Analyze Standard Budgetting',
    description: 'Web landing page to analyze standard budgetting using Vue.js',
    url: '#',
    image: asb,
  },
  {
    title: 'Mobile App Sigagah',
    description: 'Mobile application to monitoring assets in West Kalimantan Government',
    url: 'https://bkad-sigagah.com/#/login',
    image: sigagahMobile,
  },
  {
    title: 'Mangrove Digital',
    description: 'Web application to offer plantation mangrove service to act again climate change',
    url: 'https://web3-mangrove-digital.vercel.app/',
    image: ssMangrove,
  },
  {
    title: 'Mobile Blockscan',
    description: 'Mobile application for crypto staking using coin payment Api',
    url: 'https://app.blockscan.cloud',
    image: ssBlockscanMobile,
  },
  {
    title: 'CMS Sippohon',
    description: 'Web application CMS for mobile app Sippohon',
    url: 'https://admin-sippohon.vercel.app/#/',
    image: sippohonCms,
  },
  {
    title: 'Bhumi Khatulistiwa',
    description: 'GIS Web Application for BPN Provinsi Kalbar (West Kalimantan Province)',
    url: 'https://bhumikhatulistiwa.com',
    image: ssBhumiKhatulistiwa,
  },
  {
    title: 'Mangrove Digital Mobile',
    description: 'Mobile application to offer plantation mangrove service to act again climate change',
    url: '#',
    image: mangroveMobile,
  },
  {
    title: 'Semari Perkim',
    description: 'A GIS web application portal to showcase all geospatial data from the West Kalimantan Housing and Settlement Agency',
    url: 'https://semari-perkim.com',
    image: ssSemariPerkim,
  },
  {
    title: 'Sippohon Kalbar',
    description: 'Mobile application to monitoring and manage all trees in West Kalimantan (Under Construction)',
    url: 'https://sippohonkalbar.com',
    image: ssSippohonKalbar,
  },
  {
    title: 'Gosip ATR/BPN Pontianak',
    description: 'Web application to manage land assets of the Pontianak City National Land Agency.',
    url: 'http://atrbpnpontianak.site',
    image: ssGosip,
  },
  {
    title: 'e-Jurnal Borneo Barat',
    description: 'Web application to manage digital journal for local campus. (Cancelled)',
    url: '#',
    image: ssJurnal,
  },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Feb 2016',
    location: 'University of Tanjungpura',
    title: 'Bachelor of Technology Information',
    content: <p>Learn all about Information of Technologies like design, programming, networking and computer science </p>,
  },
];

export const certificate: TimelineItem[] = [
  {
    date: 'Jul 2017',
    location: 'Brainmatics Jakarta',
    title: 'Scrum Project Management',
    content: <p>Learn all about scrum methodology and implement it in project management </p>,
  },
  {
    date: 'Jul 2017',
    location: 'Udemy',
    title: 'Web Developer Course',
    content: <p>Learn all about web development </p>,
  },
  {
    date: 'Jun 2023',
    location: 'Udemy',
    title: 'Python From Beginner to Intermediate',
    content: <p>Learn all about python from beginner to intermediate </p>,
  },
  {
    date: 'Oct 2024',
    location: 'HackerRank',
    title: 'Frontend Developer (React)',
    content: <p>Got certificate from HackerRank </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2023 - Oct 2024',
    location: 'Nomadas Experience Ltd Pty',
    title: 'Senior Fullstack Developer',
    content: (
      <p>
        Maintain and Develop Restful API (Backend)Maintain and Develop Web Application (Frontend);Develop Mobile Application;Maintain and Develop Feature Monolith Web Application;Fixing Bug;Maintain/Optimize Database
      </p>
    ),
  },
  {
    date: 'Jun 2023 - Sep 2023',
    location: 'Must Fintech',
    title: 'Senior Fullstack Developer',
    content: (
      <p>
        Develop Mobile Application;
      </p>
    ),
  },
  {
    date: 'Apr 2022 - Mar 2023',
    location: 'Sinarmas Agribusiness and Food',
    title: 'Senior Fullstack Developer',
    content: (
      <p>
        Maintain and Develop Restful API (Backend);Maintain and Develop Web Application (Frontend);Develop Mobile Application;Fixing Bug;Maintain/Optimize Database
      </p>
    ),
  },
  {
    date: 'Apr 2017 - May 2020',
    location: 'PSPIG University of Tanjungpura',
    title: 'Programmer',
    content: (
      <p>
        Maintain Restful API (Backend); Maintain Web Application (Frontend); Maintain System Information Application; Maintain/Optimize Database
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'M. Azhar Irwansyah - University Lecturer',
      text: 'Deni was my student at the university. He demonstrated his talent early on, assisting me with part-time projects during his studies.',
      image: 'https://scontent.fcgk22-2.fna.fbcdn.net/v/t1.6435-9/185310033_10223859337327349_5639714558944631847_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGKC_F0OLwdcx4irqDScOq9Rya3GpbJ1bhHJrcalsnVuGzNrVW5sOXIq4CLo1gfeG0&_nc_ohc=UV_CT_3GACwQ7kNvgGOWjJv&_nc_zt=23&_nc_ht=scontent.fcgk22-2.fna&_nc_gid=A5VkCwbAWRdJbTj0rSmUuUA&oh=00_AYAssi9En_evHi2c_VkzZffu-hgLZ8oMAH44ihLngale9w&oe=675AA973',
    },
    {
      name: 'Ridwan - Wordpress Enthusiast',
      text: `He's like a brother to me; we've collaborated on various government projects since 2014 to the present day.`,
      image: 'https://scontent.fcgk22-2.fna.fbcdn.net/v/t39.30808-6/465240275_8997574510260656_7883475516405925164_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGMmuJ9CboBrBR3TPADKn80T5E5n59OfbJPkTmfn059sl4hjJuh-nm_CDoOJbSf-cM&_nc_ohc=E3S685HHOxQQ7kNvgFr018P&_nc_zt=23&_nc_ht=scontent.fcgk22-2.fna&_nc_gid=A1DK_w5NIeMJLPRPRWWFT_l&oh=00_AYBNIv9CH40-vBd7e52S-4KYApLrfRblDbtA-0Lh2lAqug&oe=67391CA2',
    },
    {
      name: 'Surif Yandi - Full Stack Developer (Frontend Heavy)',
      text: 'Great mentor for me, and support me to focus using React and React Native for every my project',
      image: 'https://scontent.fcgk22-2.fna.fbcdn.net/v/t1.6435-9/198178998_1178271489356396_4916891922823124084_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHLvDkmrMlfkHo5t7J-PBcX1WGM5stypoPVYYzmy3Kmg2Kvss-8Qb6iJjByPh-oF60&_nc_ohc=HcRWYqodaHMQ7kNvgGcIKtI&_nc_zt=23&_nc_ht=scontent.fcgk22-2.fna&_nc_gid=AdGtlU2S6idrTC3BG48HFFr&oh=00_AYCq7rDCk-pIMsa9S1dIR-IdXAGiaF3YyjYdPbs7oQoAog&oe=675A93AE',
    },
    {
      name: 'Heri Apriyanto - Full Stack Developer',
      text: 'My mentor, leader of the team. Also support my every works. I also support as his assistant',
      image: 'https://scontent.fcgk22-2.fna.fbcdn.net/v/t39.30808-6/432732681_8219837634709737_7383545748464019177_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEE9v54AaC0p1o777JkOQKXAg8KXjupTTICDwpeO6lNMu9JK0z9N36OqeeNXHBbttI&_nc_ohc=q63LbNIbJ4sQ7kNvgEjuJpH&_nc_zt=23&_nc_ht=scontent.fcgk22-2.fna&_nc_gid=A54kfbKTH0OJv7mmVk9TE1p&oh=00_AYCos-PH19HqNFWmvBdLUJKfsQtbZUuONdKUIDCDVMWb1g&oe=6738ECCA',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'deniprobow@gmail.com',
      href: 'mailto:deniprobow@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pontianak, West Kalimantan, Indonesia',
      href: 'https://maps.app.goo.gl/TSRs2EWqo8L2o8RU8',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Deni Saputra',
      href: 'https://www.linkedin.com/in/deni-saputra-2b1567114/',
    },
    {
      type: ContactType.Github,
      text: 'deniprobow',
      href: 'https://github.com/deniprobow',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/deniprobow'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13142841/deni-saputra'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/eni-saputra-2b1567114/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/deni.saputra3/'},
];
