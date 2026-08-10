import CrackcodeImage from '../components/ui/projects/CrackcodeImage'
import CustomerMgmtSys from '../components/ui/projects/CustomerMgmtSys'
import JobAppTrack from '../components/ui/projects/JobAppTrack'
import NexusCRM from '../components/ui/projects/NexusCRM'

export const projects = [
  {
    id: 1,
    title: 'Customer Management System',
    description: 'Enterprise data operations demand more than a simple CRUD app. This system is engineered to handle high-volume customer records with speed, accuracy, and zero data loss.',
    points: `
    - Full customer CRUD with a searchable, paginated table view
    - Support for multiple phone numbers, multiple addresses, and family member linking
    - Bulk Excel upload handling up to 1,000,000 rows with async processing and real-time progress tracking
    - Server-managed master data (cities/countries) with no frontend exposure
    - Robust input validation and centralized error handling, backed by MariaDB and JUnit/Mockito test coverage
    `,
    tags: ['React', 'Java', 'Springboot', 'MariaDB'],
    image: CustomerMgmtSys,
    github: 'https://github.com/hasaRanger/Customer-Management-System',
    live: null,
    status: 'source available',
  },
  {
    id: 2,
    title: 'NexusCRM',
    description: 'Built for small business sales and operations teams, this platform brings the entire revenue cycle from lead to paid invoice into a single connected workspace.',
    points: `
    - Dynamic dashboard with live stats, a revenue progress gauge, and an interactive invoice status pie chart
    - Customer relationship management (CRM) hub for centralized profiles, status tracking, and proposal/invoice history
    - Proposal management with custom terms and pipeline-driven status updates
    - Stripe payment integration with checkout sessions and webhook-driven transaction tracking
    `,
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
    image: NexusCRM,
    github: 'https://github.com/hasaRanger/NexusCRM',
    live: null,
    status: 'source available',
  },
  {
    id: 3,
    title: 'Job Application Tracker',
    description: 'Full-stack productivity tool designed to bring structure and visibility to the job search process, giving users a centralized workspace to manage their applications end to end.',
    points: `
    - Kanban-style board for tracking applications across stages like Applied, Interviewing, and Offer
    - Secure user authentication (sign-up/sign-in) via Better Auth
    - Full CRUD operations for managing job application records
    - Responsive, mobile-first design built with Tailwind CSS and Shadcn/UI
    - MongoDB database integration via Mongoose, with Next.js Server Actions for data mutations
    `,
    tags: ['Next.js', 'BetterAuth', 'Tailwind CSS', 'MongoDB'],
    image: JobAppTrack,
    github: 'https://github.com/hasaRanger/job-application-tracker',
    live: 'https://job-application-tracker-chi-opal.vercel.app/',
    status: 'live',
  },
  {
    id: 4,
    title: 'Crackcode',
    description: `Gamified full-stack coding platform that uses a detective-themed interface to engage users in solving multi-language programming challenges while offering AI-powered assistance, XP-based progression, and a virtual rewards system.`,
    points: `
    - Built-in code editor with real-time execution across Python, C++, Java, and JavaScript, powered by the Judge0 API
    - Narrative content pipeline that transforms raw problem datasets into story-driven, multi-language questions, refined through a persona-based AI layer powered by Groq's LLaMA 3.3 70B
    - Gamification system with XP, levels, daily streaks, virtual currency, and achievement badges
    - AI-powered assistance including generated hints, error diagnosis, and guided learning support
    - User analytics dashboard tracking problems solved, difficulty distribution, and XP growth
    - Secure authentication with JWT, email verification/OTP, and bcrypt password hashing
    `,
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Digital Ocean'],
    image: CrackcodeImage,
    github: 'https://github.com/hasaRanger',
    live: 'https://crackcodehq.com',
    status: 'live',
  },
]