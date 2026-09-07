import argusImage from '../assets/projects/argus.jpeg';
import dpiEngineImage from '../assets/projects/dpi_engine.jpeg';
import auralisImage from '../assets/projects/auralis.jpeg';
import freshersPortalImage from '../assets/projects/freshers_portal.jpeg';
import omniSyncImage from '../assets/projects/omnisync.jpeg';
import huffmanImage from '../assets/projects/huffman.jpeg';
import peerDoubtImage from '../assets/projects/peer_doubt.png';

export const personalInfo = {
  name: 'Shree Pandit',
  firstName: 'Shree',
  brandName: 'Shree',
  title: 'Full Stack Developer & Competitive Programmer',
  location: 'Bhopal, India',
  phone: '+91-9509212348',
  emails: {
    primary: 'shreepandit2015@gmail.com',
    secondary: '24112011131@stu.manit.ac.in',
  },
  summary:
    'Full Stack Web Developer, System Programmer and Competitive Programmer focused on C++, C, Python, JavaScript, React.js, Node.js.',
  resumeUrl: '/Shree_Pandit_Resume.pdf',
};

export const socialLinks = {
  github: 'https://github.com/ShreeMANITCSE8095',
  linkedin: 'https://linkedin.com/in/shree-pandit',
  instagram: 'https://www.instagram.com/_shree_pandit_/',
  x: 'https://x.com/ShreePandi2131',
  leetcode: 'https://leetcode.com/u/ShreePandit',
  codechef: 'https://codechef.com/users/shree_pandit',
  codeforces: 'https://codeforces.com/profile/ShreePandit',
};

export const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'ShreePandit',
    rating: '2170',
    badge: 'Guardian',
    totalQuestions: '1042',
    url: socialLinks.leetcode,
  },
  {
    platform: 'CodeChef',
    username: 'shree_pandit',
    rating: '1815',
    badge: '4 Star',
    totalQuestions: '239',
    url: socialLinks.codechef,
  },
  {
    platform: 'Codeforces',
    username: 'ShreePandit',
    rating: '1610',
    badge: 'Expert',
    totalQuestions: '198',
    url: socialLinks.codeforces,
  },
];

export const achievementsList = [
  {
    title: '2nd Runner Up',
    subtitle: 'Kinetic Coding Challenge, IIPE Visakhapatnam',
    description:
      'Secured 2nd Runner Up at the Kinetic Coding Challenge organized by IIPE Visakhapatnam with strong algorithmic problem solving.',
  },
  {
    title: 'National Finalist',
    subtitle: 'Shaastra Programming Contest, IIT Madras',
    description:
      'Reached the National Finals in the Shaastra Programming Contest hosted by IIT Madras at Shaastra 2026.',
  },
  {
    title: 'National Finalist',
    subtitle: 'Code Wars, IIT Jodhpur',
    description:
      'Secured a Top-5 spot as National Finalist in Code Wars organized by IIT Jodhpur at Prometeo 2026.',
  },
  {
    title: 'State Level Karate Player',
    subtitle: 'Brown Belt',
    description:
      'Represented Gadchiroli at the State level Karate Championsip, Maharasthra and secured 3rd Position in Kumite (60 kg Weight Class).',
  },
  {
    title: 'National Level Chess Player',
    subtitle: '1700 FIDE Rated',
    description:
      'Represented Madhya Pradesh as National Level Chess player (Under-14) and secured 1st Place at Nation Rural Games held at Rajeev Gandhi Stadium, New Delhi.',
  },
];

export const heroContent = {
  greeting: "Hi, I'm Shree Pandit",
  titleHighlight: 'Full Stack Developer & Competitive Programmer',
  subtitle:
    'I build scalable products using Modern Web Technologies and love solving problems with C++, Python.',
  ctaPrimary: { text: 'View My Work', href: '#projects' },
  ctaSecondary: {
  text: 'Contact Me',
  href: '#contact',
},
  ctaResume: { text: 'Download Resume', href: '/Shree_Pandit_Resume.pdf' },
};

export const aboutContent = {
  heading: 'Hello!',
  bio: [
    `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shree Pandit</span>, I am a Pre-Final Year student persuing B.Tech in Computer Science and Engineering (Class of 2028) at Maulana Azad National Institute of Technology (MANIT), Bhopal, with a deep passion for algorithmic problem-solving and robust system architecture. As an active competitive programmer, I hold a Guardian rank on LeetCode, a 4-Star rating on CodeChef, and Expert rank on CodeForces, having solved over 1500+ Data Structures and Algorithms challenges across various platforms.`,
    `My technical foundation spans robust system architecture and modern full-stack development, enabling me to engineer complex, performance-critical solutions. I recently built the DPI Engine, a multi-threaded C++17 network analysis tool with a full-stack web interface, and OmniSync, a secure browser extension that automates retroactive code synchronization to GitHub via a stateless serverless architecture. Building on my experience developing the campus-wide NITBFreshers Study Portal to support 1,000+ concurrent users, I consistently focus on optimizing backend performance, securing authentication flows, and deploying scalable applications.`,
    `Beyond the screen, I serve as a Corporal in the 12 MP BN NCC and act as a Team Management Head at ISTE SC MANIT. Drawing from my experiences as a national-level chess player and state-level karate athlete, I bring strategic foresight, disciplined execution, and strong collaborative leadership to every technical endeavor I undertake.`,
  ],
};
export const skillsContent = {
  badge: 'My Process',
  heading: "Here's how I turn ideas into real-world applications",
  description:
    'I follow a structured, creative, and technical process to turn ideas into robust full-stack applications.',
  cards: [
    {
      number: '01',
      title: 'Research',
      text: 'I begin by understanding goals, use cases, and technical constraints.',
    },
    {
      number: '02',
      title: 'Design',
      text: 'I shape the architecture and UI flow before writing production code.',
    },
    {
      number: '03',
      title: 'Develop',
      text: 'I build responsive frontends and scalable backends with modern tooling.',
    },
    {
      number: '04',
      title: 'Deploy',
      text: 'I test, optimize, and ship the final product with deployment readiness.',
    },
  ],
  endText: 'Ready to ship!',
};

export const techStackItems = [
  { name: 'C++', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React.js', category: 'Library' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Express.js', category: 'Framework' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
];

export const technicalSkills = {
  items: techStackItems,
};

export const experienceList = [
  {
    title: 'Data Engineering Intern',
    organization: 'Transform Rural India Foundation (TRIF)',
    duration: 'May 2026 - July 2026',
    summary: 'Built data pipelines and BI reporting systems for large-scale rural survey data.',
    points: [
      'Centralized unstructured M-Format data into 7 structured fact tables by architecting a grain-aware star-schema ETL pipeline using Python (Pandas, NumPy).',
      'Rectified schema inconsistencies and encoding errors across 186,000+ raw survey responses by engineering a multi-grain data validation pipeline.',
      'Accelerated KPI reporting from weekly manual exports to near-real-time updates for 2000+ GPs across 250+ CLFs, 30+ Rural Blocks and 5 States by designing a multi-page Power BI dashboard tracking 150+ metrics.',
      'Slashed manual report generation time by 80% for BLCC Fact Sheets by automating web scraping workflows via Python (Selenium).',
    ],
  },
];

export const engagementHighlights = [
  {
    title: 'ETL Pipeline',
    description:
      'Centralized unstructured M-Format data into 7 structured fact tables using a grain-aware star-schema pipeline.',
  },
  {
    title: 'KPI Reporting',
    description:
      'Accelerated KPI reporting to near-real-time updates for 2000+ GPs across 5 states using Power BI.',
  },
];

export const leadershipList = [
  {
    title: 'Cadet',
    organization: '12 MP BN NCC, MANIT Bhopal',
    duration: 'Aug 2024 - Feb 2026',
    description: 'Built discipline, coordination, and leadership through NCC responsibilities.',
    points: [
      'Vocalist in NCC Singing Band.',
      'Content Writer for Social Media Handles of 12 MP BN NCC, MANIT Bhopal.',
    ],
  },
  {
    title: 'Executive',
    organization: 'ISTE SC MANIT',
    duration: 'June 2025 - June 2026',
    description: 'Contributed to student technical activities and team execution.',
    points: [
      'Helped set up PRI Network across multiple Private Colleges in Bhopal for Flair Haven Workshop.',
      'Virtually and physically promoted the Flair Haven Workshop in multiple Colleges in Bhopal.',
    ],
  },
  {
    title: 'Corporal',
    organization: '12 MP BN NCC, MANIT Bhopal',
    duration: 'Feb 2026 - Present',
    description: 'Currently serving in a leadership role with active team duties.',
    points: [
      'Performed in Guard of Honour at Republic Day 2026 at MANIT Bhopal and mentored 100+ cadets in drill and vocals.',
      'Content Writing Lead for Social Media Handles of 12 MP BN NCC, MANIT Bhopal.',
    ],
  },
  {
    title: 'Team Management Head',
    organization: 'ISTE SC MANIT',
    duration: 'June 2026 - Present',
    description: 'Managing people, planning, and event coordination for technical work.',
    points: [
      'Collaborated with multiple technical clubs and societies across the nation for Version Beta Hackathon.',
      'Managed a team of 50+ members for the successful execution of Anubhuti Talk Show with more than 400 attendees.',
    ],
  },
];

export const projects = [
  {
    id: 'argus',
    number: '01',
    title: 'A.R.G.U.S',
    image: argusImage,
    description:
      'AI-driven passive network threat detection pipeline for unidirectional (data-diode) monitoring, built for Smart India Hackathon 2026 (PS 26145).',
    techStack: ['C++17', 'ZeroMQ', 'Python', 'XGBoost', 'FastAPI', 'React.js'],
    points: [
      'Engineered a C++17 passive DPI engine for a data-diode threat-detection pipeline, extracting 5-tuple flows, TLS JA3 fingerprints, DNS query entropy, and host fan-out/inter-arrival stats, streaming per-flow features over ZeroMQ PUB/SUB.',
      'Designed the flow-feature schema covering all 6 target threat classes (DDoS, port scan, C2 beaconing, DGA/tunneling, encrypted malware, exfiltration), enabling XGBoost classifiers to hit ~94% F1 (DDoS) and ~96% F1 (port scan) at under 5ms/flow inference.',
      'Hardened the engine for release by fixing an unaligned-pointer UB bug in packet parsing and a variance-calculation bug in host profiling, and rebinding both ZeroMQ sockets to localhost-only for security.',
      'Built RuleManager, a fully implemented IP/app/domain/port blocking layer, deliberately kept out of the live pipeline to match the hackathon problem statement\'s passive-monitoring-only scope.',
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/A.R.G.U.S',
      demo: 'https://argus-sih.vercel.app/',
    },
    isFlagship: true,
  },
  {
    id: 'dpi-engine',
    number: '02',
    title: 'DPI Engine',
    image: dpiEngineImage,
    description:
      'Multi-threaded Deep Packet Inspection engine with a full-stack web interface for PCAP traffic analysis.',
    techStack: ['C++17', 'Python', 'FastAPI', 'React.js', 'Docker'],
    points: [
      'Engineered a multi-threaded C++17 DPI core with FiveTuple flow tracking and TLS SNI extraction to classify 22+ applications.',
      'Implemented rule-based flow blocking and HTTP Host fallback, evaluating IPs and domains at the connection level to drop blocked packets.',
      'Built a Dockerized FastAPI backend on Render to orchestrate the analyzer, processing 50MB .pcap files in <10s JSON flow analytics.',
      'Deployed a React + Vite frontend on Vercel, using Recharts to visualize app distribution, packet tables, and domain intelligence.'
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/DPI_Engine',
      demo: 'https://dpi-engine-ten.vercel.app/',
    },
    isFlagship: true,
  },
  {
    id: 'auralis',
    number: '03',
    title: 'Auralis Network Analyser',
    image: auralisImage,
    description:
      'Real-time network traffic diagnostic instrument built with a decoupled C++/Python/React pipeline for zero-latency flow monitoring.',
    techStack: ['C++20', 'libpcap', 'Python', 'FastAPI', 'React.js'],
    points: [
      'Architected a real-time network diagnostic tool decoupled into a C++ capture engine, Python/FastAPI aggregation service, and React dashboard, applying strict YAGNI principles for zero-latency processing.',
      'Built a single-threaded C++ capture engine on libpcap/Npcap to parse Ethernet/IPv4/TCP/UDP headers and extract 5-tuple flow signatures, streaming structured JSON over a local TCP IPC bridge.',
      'Engineered an asynchronous FastAPI aggregation layer computing per-second bandwidth, packet rates, and protocol distribution via 1-second tumbling windows, holding flow state in a 300-second in-memory ring buffer with zero disk I/O.',
      'Deployed a React/Tailwind instrument-styled dashboard with an SVG oscilloscope bandwidth trace and live WebSocket-driven patch-panel visualization, running the backend natively via systemd on a Linux VPS and the frontend on Vercel.',
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/Auralis-Network-Analyser',
      demo: '',
    },
    isFlagship: false,
  },
  {
    id: 'freshers-portal',
    number: '04',
    title: 'NITBFreshers Study Portal',
    image: freshersPortalImage,
    description:
      'Full-stack scalable academic resource management system for MANIT students.',
    techStack: ['JavaScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    points: [
      'Supported 1000+ concurrent users (adopted by ~95% of fresher batch) via a multi-instance PHP/MySQL architecture',
      'Secured user authentication and eliminated SQL injection vulnerabilities by using prepared statements and 64-char HttpOnly tokens.',
      'Cut material browsing load time by 40% (measured via Lighthouse) for 1000+ concurrent users by replacing synchronous page reloads with asynchronous Fetch API calls, while enforcing PDF.js-based anti-scraping controls on all resources.',
      'Shipped a PYQs Collection module and an App Download page as new platform features, and authored the accompanying LaTeX documentation (Overleaf, v1.2) covering all 14 database tables for future maintainers.',
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/NITBFreshers-Study-Portal',
      demo: 'https://nitbfreshers.42web.io/',
    },
    isFlagship: false,
  },
  {
    id: 'omnisync',
    number: '05',
    title: 'OmniSync',
    image: omniSyncImage,
    description:
      'Cross-platform browser extension that syncs algorithmic submissions from LeetCode, Codeforces, and CodeChef to GitHub.',
    techStack: ['JavaScript (ES6+)', 'Node.js', 'GraphQL', 'REST API', 'Chrome Extensions API'],
    points: [
      'Eliminated auth failures across 3 platforms by architecting per-platform isolated content scripts in Manifest V3 to preserve browser cookie context for credentialed GraphQL and REST API calls.',
      'Enabled retroactive sync of 1500+ historical submissions by implementing a de-duplication layer via chrome.storage.local, separating one-time backfill from real-time live sync to prevent redundant GitHub commits.',
      'Secured GitHub OAuth flow achieving zero client-side secret exposure by building a stateless Node.js serverless function on Vercel to proxy token exchange, keeping credentials exclusively in server environment variables.',
      'Reconstructed per-problem portfolio pages with metadata (tags, acceptance rate, problem statement) by converting LeetCode GraphQL HTML responses to Markdown and batching file pushes via Git Tree API in a single backdated commit.',
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/OmniSync',
      demo: 'https://omni-sync-backend.vercel.app/',
    },
    isFlagship: false,
  },
  {
    id: 'huffman-compressor',
    number: '06',
    title: 'Huffman File Compressor',
    image: huffmanImage,
    description:
      'C++ Huffman-encoding CLI extended into a full-stack web app for lossless text file compression and decompression.',
    techStack: ['C++', 'Node.js', 'Express.js', 'HTML/CSS/JS'],
    points: [
      'Built a C++ Huffman encoding/decoding CLI (`nca`) implementing a priority-queue-based Huffman Tree, frequency table generation, and a custom .nca binary file format for lossless text compression.',
      'Fixed four critical C++ bugs — empty-file and single-character segfaults, incorrect exit codes, and missing header includes — to harden the core compression engine.',
      'Extended the CLI into a full web app by building a dependency-free Node.js/Express backend exposing the compression logic via a CORS-enabled REST API, paired with a plain HTML/JS/CSS frontend.',
      'Deployed the backend on Render and frontend on Vercel, resolving cross-origin CORS trailing-slash and double-slash fetch URL bugs to get the compress/decompress flow working end-to-end in production.',
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/File-Compressor-Huffman',
      demo: '',
    },
    isFlagship: false,
  },
  {
    id: 'peer-learning-platform',
    number: '07',
    title: 'Peer Learning Platform',
    image: peerDoubtImage,
    description:
      'Centralized StackOverflow-style peer learning platform for MANIT Bhopal to streamline doubt resolution and build a persistent, searchable knowledge base.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    points: [
      'Built a Node.js/Express + PostgreSQL (Prisma ORM) Q&A backend for MANIT students, modeling questions, threaded/nested answers (self-referencing replies), tags, votes, and bookmarks with cursor-based pagination for the question feed.',
      "Integrated authentication directly against MANIT's ERP system (erpapi.manit.ac.in) — verifying scholar number + password on first login, auto-provisioning the user profile (name, department, batch year, photo) from official student records, then issuing JWTs for subsequent sessions.",
      'Implemented a toggleable up/down voting system (one vote per user per question or answer, computed as a net score) and a bookmarks feature for saving questions, both enforced via unique database constraints.',
      'Built the ask/answer flow with a Markdown + code-block editor (react-md-editor) on the client for both questions and answers, organized with subject tags (DSA, OS, DBMS, Networks, etc.) via a many-to-many tag join table.',
    ],
    links: {
      github: 'https://github.com/ShreeMANITCSE8095/peer-doubt-platform',
      demo: 'https://peer-doubt-platform-frontend.vercel.app/',
    },
    isFlagship: false,
  },
];

export const education = {
  degree: 'B.Tech - Computer Science & Engineering',
  institution: 'MANIT Bhopal',
  cgpa: '7.40',
  graduation: '2028',
  twelfth: '12th Science - 85.2%',
  tenth: '10th - 93.8%',
};

export const footerContent = {
  taglines: ['C++ / Python / MERN Stack', 'Competitive Programming', 'Full Stack Applications'],
  credential: 'B.Tech CSE - CGPA 7.40',
  copyright: `Copyright ${new Date().getFullYear()} Shree Pandit | Built with React`,
};

export const contentCreation = {};
export const certificates = {};
export const softSkillsList = [];

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
};
