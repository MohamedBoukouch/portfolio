import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mohamed",
  lastName: "Boukouch",
  name: `Mohamed Boukouch`,
  role: "Software Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "boukouchmohamed7@gmail.com",
  location: "Africa/Casablanca", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Anglais", "French", "Arabe"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MohamedBoukouch",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohamed-boukouch-b889b824a ",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mohammed_boukouch",
    essential: false,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between ideas and real projects</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4"></strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Mohamed, a software development student at <Text as="span" size="xl" weight="strong">ENSIASD TAROUDANT</Text>, where I create practical <br /> digital solutions. After classes, I work on personal projects and explore new technologies.
    
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Mohamed is a Morocco-based software developer passionate about transforming complex problems
      into simple, efficient digital solutions. His work spans mobile and web applications,
      backend systems, and the intersection of modern technologies and user-centered design.
      </>    
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SKOLUTION",
        timeframe: "July 2025 – September 2025",
        role: "Mobile Application Development Intern",
        achievements: [
          <>
          Contributed to the development and improvement of digital solutions aimed at
          enhancing user experience and platform reliability.
        </>,
        <>
          Participated in the design, development, and testing of application features
          in collaboration with the technical team.
        </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/stages/stage_4_img_1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/stages/stage_4_img_2.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Gm-Soft",
        timeframe: "April 2024 – June 2024",
        role: "Mobile Application Development Intern",
        achievements: [
          <>
          Developed a mobile application for student guidance, focusing on usability,
          performance, and accurate information delivery.
        </>,
        <>
          Implemented core features using Flutter with Firebase and Laravel for backend
          integration and data management.
        </>,
        ],
        images: [
          {
            src: "/images/stages/stage_3_img_1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/stages/stage_3_img_2.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Developpeur-informatique.ma",
        timeframe: "May 2023 - July 2023",
        role: "Mobile Application Development Intern",
        achievements: [
          <>
          Built a mobile application to guide tourists, providing location-based information
          and an intuitive user experience.
        </>,
        <>
          Integrated Firebase services for authentication and real-time data handling.
        </>,
        ],
        images: [
          {
            src: "/images/stages/stage_2_img_1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/stages/stage_2_img_2.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fiduciaire Ben Aamer",
        timeframe: "June 2022 - July 2022",
        role: "Desktop Software Development Intern",
        achievements: [
          <>
          Developed a desktop application for customer management, including data storage,
          retrieval, and reporting features.
        </>,
        <>
          Designed and managed a MySQL database to ensure data consistency and reliability.
        </>,
        ],
        images: [
          // {
          //   src: "/images/projects/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ensiasd Taroudant",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Higher School of Technology Meknes",
        description: <>Professional Bachelor’s Degree (LP) in Information and Communication Systems Development.</>,
      },
      {
        name: "Higher School of Technology Guelmim",
        description: <>University of Technology Diploma (DUT) in Computer Engineering.</>,
      },
      {
        name: "Ibn Zouhair High School, Agadir",
        description: <>Bachelor of Physical Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages:",
        tags: [
          { name: "C", icon: "c" },
          { name: "C++", icon: "cplusplus" },
          { name: "Java", icon: "java" },
          { name: "Dart", icon: "dart" },
          { name: "JavaScript", icon: "javascript" },
        ],
      },
      {
        title: "Web Development:",
        tags: [
          { name: "JEE", icon: "java" },
          { name: "Spring Boot", icon: "spring" },
          { name: "HTML", icon: "html5" },
          { name: "CSS", icon: "css3" },
          { name: "PHP", icon: "php" },
          { name: "Laravel", icon: "laravel" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "React JS", icon: "react" },
          { name: "Angular", icon: "angular" },
        ],
      },
      {
        title: "Mobile Development:",
        tags: [
          { name: "Flutter", icon: "flutter" },
          { name: "Kotlin", icon: "kotlin" },
        ],
      },
      {
        title: "Databases:",
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Oracle", icon: "oracle" },
          { name: "SQLite", icon: "sqlite" },
          { name: "Firebase", icon: "firebase" },
        ],
      },
      {
        title: "Project Management Tools:",
        tags: [
          { name: "MS Project", icon: "microsoft" },
          { name: "Jira", icon: "jira" },
          { name: "Trello", icon: "trello" },
        ],
      },
    ],
  },
  hackathons: {
    display: true, // set to false to hide this section
    title: "Key Achievements",
    experiences: [
      {
        company: "Healthcare FSA Agadir 2025",
        achievements: [
          <Text key="health-1">
            Contributed to designing and developing innovative digital solutions for the HealthTech Hackathon,
            focused on improving healthcare services using AI, embedded systems, and software engineering.
          </Text>,
          <Text key="health-2">
            Collaborated with a team of 4 participants to build, test, and refine application features,
            ensuring reliability and usability of the prototype.
          </Text>,
          <Text key="health-3">
            Presented the final solution to the jury, highlighting technical implementation, innovation, and impact.
          </Text>,
        ],
        
        images: [
          {
            src: "/images/hackathons/hackathon_1/hack_1_1.png",
            alt: "HealthTech Hackathon Project",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "IDEATHON AGADIR 2024",
        achievements: [
          <Text key="idea-1">
            Participated in the Ideathon Agadir 2030, an innovation challenge focused on designing smart,
            inclusive, and sustainable solutions for the future development of the city of Agadir.
          </Text>,
          <Text key="idea-2">
            Contributed to proposing technology-driven ideas addressing key urban challenges, including
            the enhancement of Souk Al-Had, cultural and tourism promotion, and the promotion of health
            and well-being through sports.
          </Text>,
          <Text key="idea-3">
            Collaborated with multidisciplinary teams to conceptualize impactful solutions aligned with
            the vision of “Agadir 2030: Smart and Accessible City for All”, and presented ideas to a jury
            of professionals and organizers.
          </Text>,
        ],
        images: [
          {
            src: "/images/hackathons/hackathon_2/hack_2_1.png",
            alt: "Ideathon Agadir 2030",
            width: 16,
            height: 9,
          },
          {
            src: "/images/hackathons/hackathon_2/hack_2_2.png",
            alt: "Ideathon Agadir 2030",
            width: 16,
            height: 9,
          },
          {
            src: "/images/hackathons/hackathon_2/hack_2_3.png",
            alt: "Ideathon Agadir 2030",
            width: 16,
            height: 9,
          },
        ],
      }
    ],
  },
  
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
