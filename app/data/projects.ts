import CrackcodeImage from '../components/ui/projects/CrackcodeImage'
import CustomerMgmtSys from '../components/ui/projects/CustomerMgmtSys'
import JobAppTrack from '../components/ui/projects/JobAppTrack'
import NexusCRM from '../components/ui/projects/NexusCRM'

export const projects = [
  {
    id: 1,
    title: 'Crackcode',
    description: 'Gamified full-stack coding platform that uses a detective-themed interface to engage users in solving multi-language programming challenges while offering AI-powered assistance, XP-based progression, and a virtual rewards system.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Digital Ocean'],
    image: CrackcodeImage,
    github: 'https://github.com/hasaRanger',
    live: 'https://crackcodehq.com',
    status: 'live',
  },
  {
    id: 2,
    title: 'Customer Management System',
    description: 'An end-to-end customer management solution that enables efficient handling of customer data, from onboarding to updates, with features like bulk uploads, multiple contact entries, and linked family profiles.',
    tags: ['React', 'Java', 'Springboot', 'MariaDB'],
    image: CustomerMgmtSys,
    github: 'https://github.com/hasaRanger/Customer-Management-System',
    live: null,
    status: 'source available',
  },
  {
    id: 3,
    title: 'Job Application Tracker',
    description: 'A full-stack job application tracking system, offering a Kanban-style interface to efficiently organize and manage your job search process.',
    tags: ['Next.js', 'BetterAuth', 'Tailwind CSS', 'MongoDB'],
    image: JobAppTrack,
    github: 'https://github.com/hasaRanger/job-application-tracker',
    live: 'https://job-application-tracker-chi-opal.vercel.app/',
    status: 'live',
  },
  {
    id: 4,
    title: 'NexusCRM',
    description: 'A Laravel-powered CRM platform for managing customers, proposals, invoices, and payments with real-time analytics and Stripe integration.',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    image: NexusCRM,
    github: 'https://github.com/hasaRanger/NexusCRM',
    live: null,
    status: 'source available',
  },
]