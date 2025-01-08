import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Santhosh",
  initials: "M",
  url: "https://dillion.io",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Passionate Software Engineer. I love building things and contribute positively to grow in career.",
  summary:
    "Full Stack Developer with over 3 years of experience and a degree in Computer Science and Engineering from M S Ramaiah Institute of Technology.Currently employed at Aptean India Pvt Ltd, specializing in React, Node.js, Express.js, and MySQL to create dynamic web applications. Known for problem solving skills and a passion for building scalable solutions that drive innovation.Seeking to contribute expertise to challenging projects that demand creative technical solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Node.js",
    "Express",
    "Mysql",
    "Javascript",
    "Git",
    "REST",
    "HTML/CSS",
    "Technical Documentation",
    "Unit Testing",
    "Linux",
    "Python"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+91 9845405534",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/santhosh15lm",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santhosh15lm/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:santhosh15lm@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Aptean India Pvt Ltd.",
      href: "ttps://www.aptean.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Software Engineer",
      logoUrl: "/aptean.png",
      start: "Sep 2021",
      end: "Present",
      description:
        "Designed and developed intuitive, high-performance interface. Collaborated with cross-functional teams to translate user needs and business requirements into technical solutions. Developed and maintained responsive web applications using React, Node, Javascript for seamless user experience. Optimized application performance to improve efficiency and user experience. Integrated front-end components with backend services and APIs to enhance functionality.",
    },
  ],
  education: [
    {
      school: "M S Ramaiah Institute of Technology",
      href: "https://www.msrit.edu/",
      degree: "Bachelor's of Engineering in Computer Science",
      logoUrl: "/msrit.jpg",
      start: "2018",
      end: "2021",
    },
    {
      school: "Sri Jayachamarajendra Polytechnic",
      href: "https://sjpolytechnic.karnataka.gov.in/en",
      degree: "Diploma in Computer Science and Engineering ",
      logoUrl: "/sjp.png",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Content Dashboard",
      href: "",
      dates: "Jan 2024 - Dec 2024",
      active: true,
      description:
        "Developed a comprehensive Content Dashboard that enables users to track content tickets, monitor system process statuses, view historical status changes, and receive real-time live updates. This dashboard was designed to streamline the management of content workflows, providing a user-friendly interface for tracking the progress of various tasks, identifying bottlenecks, and ensuring seamless content delivery.",
      technologies: [
        "React.js",
        "Node.js",
        "Redux",
        "Express.js",
        "Javascript",
        "Nginx",
        "Mysql"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/content_dashboard.png",
      video:
        "",
    },
    {
      title: "Migration of Legacy Application",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Worked on migrating a legacy web application from Angular to React, refactoring core components and implementing an updated user interface to improve performance and user experience.",
      technologies: [
        "React.js",
        "Javascript",
        "Material UI"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/genomequest.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
