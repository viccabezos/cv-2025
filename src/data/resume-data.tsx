import { Portrait } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Victoria Cabezos",
  initials: "VC",
  location: "Biarritz, France",
  locationLink: "https://www.google.com/maps/place/Biarritz",
  about:
    "Frontend-focused Full Stack Web Developer interested on building high-quality products.",
  summary: (
    <>
      Full Stack Web Developer specializing in React applications and modern web
      technologies. Experienced in building and maintaining streaming video
      production tools and sports platforms.
    </>
  ),
  avatarUrl: Portrait,
  personalWebsiteUrl: "https://www.victoria-92.dev",
  contact: {
    email: "cabezosvic@gmail.com",
    tel: "+33789457996",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/viccabezos",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/victoriacabezos",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Wild Code School",
      degree: "Full Stack Web Developer",
      start: "2022",
      end: "2023",
      key: "wcs-fullstack-2023",
    },
    {
      school: "Wild Code School",
      degree: "React Web Mobile Developer",
      start: "2021",
      end: "2021",
      key: "wcs-react-2021",
    },
    {
      school: "Bachelor",
      degree: "Bachelor of Arts",
      start: "2009",
      end: "2011",
      key: "university-ba-2011",
    },
  ],
  work: [
    {
      company: "Origins D / Simply Live",
      link: "",
      badges: ["React", "MUI", "Websocket", "TypeScript", "Go", "Redux"],
      title: "Full Stack Web Developer",
      logo: null,
      start: "2024",
      end: null,
      description: <>Working on streaming video production tools.</>,
    },
    {
      company: "Origins Digital",
      link: "",
      badges: ["Next.js", "Tailwind CSS", "ReactQuery", "Zod", "TypeScript"],
      title: "Front End Web Developer",
      logo: null,
      start: "2023",
      end: "2024",
      description: (
        <>
          Developing platforms for sports content including Sportslab, Origins
          digital site, Swiss Football League, and Qatar Tennis Federation.
          <ul className="list-inside list-disc">
            <li>
              Blending editorial and statistical content for sports platforms
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Origins Digital",
      link: "",
      badges: ["Next.js", "Tailwind CSS", "TypeScript"],
      title: "Work-Study Front End Developer",
      logo: null,
      start: "2022",
      end: "2023",
      description: (
        <>
          Worked on OTT platforms for Royal Sporting Club Anderlecht, Prospero
          Sportlab, Aviron Bayonnais, and Roland Garros Balos.
          <ul className="list-inside list-disc">
            <li>
              Blending editorial, video and statistical content for sports
              platforms
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "EIWIE",
      link: "",
      badges: ["React", "Material UI"],
      title: "Intern Front End Web Developer",
      logo: null,
      start: "2021",
      end: "2021",
      description: (
        <>
          Worked on restaurant management platform.
          <ul className="list-inside list-disc">
            <li>Technical assistant in AC management platform</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "MySQL",
    "Prisma",
    "React Query",
  ],
  projects: [
    {
      title: "DEPECHETOUA",
      techStack: [
        "Next.js",
        "Mantine",
        "Axios",
        "Apollo GraphQL",
        "Prisma",
        "PostgreSQL",
        "Docker",
      ],
      description:
        "Full-stack project developed during Wild Code School, from brainstorming to design and tech selection.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "FIVERR Hackathon",
      techStack: ["React.js", "Next.js", "TypeScript", "Hasura", "Tailwind"],
      description:
        "Creative challenge for improving the connection among entrepreneurs.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
