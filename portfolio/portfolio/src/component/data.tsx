import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill, RiJavascriptFill, RiReactjsFill, RiVuejsLine } from "react-icons/ri";
import { SiMui, SiExpress, SiMongodb, SiElectron } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import jiraIcon from '../assets/jira.jpg'
import hrIcon from '../assets/hr.jpg'
import soloIcon from '../assets/sololearn.jpg'
export const skillsList = [
    {
        id: 1,
        name: 'HTML',
        icon: <IoLogoHtml5 />
    },
    {
        id: 2,
        name: 'CSS3',
        icon: <IoLogoCss3 />
    },
    {
        id: 4,
        name: 'Bootstrap',
        icon: <BsBootstrapFill />
    },
    {
        id: 5,
        name: 'TailwindCss',
        icon: <RiTailwindCssFill />
    },
    {
        id: 6,
        name: 'MUI',
        icon: <SiMui />
    },
    {
        id: 7,
        name: 'JavaScript',
        icon: <RiJavascriptFill />
    },
    {
        id: 13,
        name: 'TypeScript',
        icon: <BiLogoTypescript />
    },
    {
        id: 8,
        name: 'ReactJS',
        icon: <RiReactjsFill />
    },
    {
        id: 9,
        name: 'VueJS',
        icon: <RiVuejsLine />
    },
    {
        id: 10,
        name: 'NodeJS',
        icon: <FaNodeJs />
    },
    {
        id: 1101,
        name: 'Express',
        icon: <SiExpress />
    },
    {
        id: 11,
        name: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        id: 123,
        name: 'Electron',
        icon: <SiElectron />
    },
    {
        id: 14,
        name: 'MERN Stack',
        icon: ""
    },
    {
        id: 15,
        name: 'Unit Testing',
        icon: ""
    },
    {
        id: 16,
        name: 'GIt/Github',
        icon: ""
    },
]
export const workHistory = [
    {
        id: 1,
        title: 'Botlab Dynamics (IIT Delhi)',
        designation: ' Frontend Developer',
        date: '10/06/23 - Present'
    },
    {
        id: 2,
        title: 'Liberin Technologies Pvt. Ltd. (Noida)',
        designation: 'Software Engineer',
        date: '01/01/23 - 07/06/2024'
    },
    {
        id: 3,
        title: 'Liberin Technologies Pvt. Ltd. (Noida)',
        designation: 'Frontend Developer Intern',
        date: '04/07/22 - 01/2023'
    },
]
export const educations = [
     {
        id: 1,
        title: 'Glocal University Saharanpur',
        designation: `Master's of Computer Application (MCA)`,
        date: '2024 to 2025'
    },
    {
        id: 2,
        title: 'Glocal University Saharanpur',
        designation: `Bachelor's of Computer Application (BCA)`,
        date: '2019 to 2022'
    },
    {
        id: 3,
        title: 'Public Inter Collage Sadholi kadeem',
        designation: '12th Grade',
        date: '2017 to 2019'
    },
]
export const certificates = [
    {
        id: 1,
        title: 'Jira Fundamental badge',
        from: 'Atlassian',
        issueDate: 'Issued Jun 2022',
        icon: jiraIcon,
        link: 'https://university.atlassian.com/student/award/zVwMhmbLfhTnrdckoTTLdqHw'
    },
    {
        id: 2,
        title: 'React (Basic)',
        from: 'HackerRank',
        issueDate: 'Issued Mar 2022',
        icon: hrIcon,
        link: 'https://www.hackerrank.com/certificates/32db0534da5b'
    },
    {
        id: 3,
        title: 'CSS',
        from: 'Sololearn',
        icon: soloIcon,
        issueDate: 'Issued Mar 2021',
        link: 'https://www.sololearn.com/certificates/CT-DQMYSO4H'
    },
    {
        id: 4,
        title: 'HTML',
        from: 'Sololearn',
        icon: soloIcon,
        issueDate: 'Issued Mar 2020',
        link: 'https://www.sololearn.com/certificates/CT-KNEUQ3IP'
    },

]

export const experiences = [
  {
    company: 'Botlab Dynamics (IIT Delhi)',
    duration: 'June 2024 – Present',
    role: 'Software Engineer (Full-time)',
    highlights: [
      'Built a 2D map-based UAV flight planning tool using OpenLayers and React. Included dynamic path drawing, live animation of drones, and geofence restrictions.',
      'Developed a full-stack platform to upload, store, and manage drone survey images. Integrated AWS S3 for image storage, handled backend API with Node.js, and created a responsive dashboard using Next.js.',
      'Rendered high-resolution orthophotos on an interactive OpenLayers map. Implemented measurement tools (distance, area), flight path animation, and image annotation tools.',
      'Rendered 3D terrain models using CesiumJS and Re:Cesium. Developed tools for measuring height, volume, and analyzing surface-level deviations.',
    ],
    techStack: 'Next.js, React.js, Tailwind CSS, Node.js, AWS S3, CesiumJS, Re:Cesium, OpenLayers',
  },
  {
    company: 'Liberin Technologies Pvt. Ltd.',
    duration: 'July 2022 – June 2024',
    role: 'Software Developer (Full-time)',
    highlights: [
      'Developed a desktop-based automation and monitoring tool for testing banking locker systems. Real-time hardware integration using Electron.js.',
      'Created a portal for managing client reports and operational analytics. Added role-based dashboards and integrated real-time data visualization.',
    ],
    techStack: 'Electron.js, Vue.js, React.js, Redux Toolkit, Jest, REST APIs',
  },
];