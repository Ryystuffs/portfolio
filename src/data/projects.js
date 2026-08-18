import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';

export const projects = [
  {
    pic: project1,
    title: 'Gym Membership Management System',
    role: 'Full-Stack Lead Developer',
    year: '2025',
    status: 'Live',
    featured: true,
    description:
      'A full-stack system that automates gym operations and member attendance with real-time QR check-in.',
    problem:
      'Member check-ins were handled manually, creating long queues at the front desk and frequent attendance errors.',
    highlights: [
      'Built secure QR-based check-in with Simple QrCode and Html5-QrCode for one-step scanning',
      'Designed a responsive Laravel + Blade interface with Tailwind CSS',
      'Modeled the MySQL schema and handled deployment on XAMPP Apache',
      'Added SweetAlert feedback to guide members through the check-in flow',
    ],
    techStack: ['Laravel', 'JavaScript', 'Blade', 'MySQL', 'SweetAlert'],
    link: 'https://github.com/Ryystuffs/gymsystem',
    live: 'https://gym-management-system.infinityfreeapp.com/',
    vid: 'https://www.youtube.com/embed/_lBIpgtJiac',
  },
  {
    pic: project2,
    title: 'Travel Guide',
    role: 'Full-Stack Lead Developer',
    year: '2024',
    status: 'Completed',
    description:
      'A travel planning site that bundles destinations, tips, and ready-made schedules in one place.',
    problem:
      'Travel planning was scattered across sites — users struggled to find destinations, tips, and itineraries together.',
    highlights: [
      'Planned and structured trip information into one searchable experience',
      'Built a responsive layout that works across devices',
      'Stored locations and schedules in MySQL with a PHP backend',
      'Kept the interface simple so travelers find answers fast',
    ],
    techStack: ['PHP', 'JavaScript', 'MySQL'],
    link: 'https://github.com/Ryystuffs/BAO-RESERVATION',
  },
  {
    pic: project3,
    title: 'Reservation Management System',
    role: 'Full-Stack Lead Developer',
    year: '2024',
    status: 'Completed',
    description:
      'A streamlined system for the Business Affairs Office that speeds up book, uniform, and merchandise purchases.',
    problem:
      'Students waited in long queues at the Business Affairs Office to buy books, uniforms, and merchandise, slowing down the whole process.',
    highlights: [
      'Digitized the purchase flow so students reserve items without queueing',
      'Built the logic in C++ with a Visual Studio UI',
      'Connected reservation records to a MySQL database',
      'Reduced manual paperwork for office staff',
    ],
    techStack: ['C++', 'Visual Studio', 'MySQL'],
    link: 'https://github.com/Ryystuffs/compass_php_project',
  },
];
