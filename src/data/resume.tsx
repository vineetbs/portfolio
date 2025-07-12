import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vineet",
  initials: "VBS",
  url: "https://vineetbs.tech",
  location: "Bhopal,India",

  description:
    "I write clean code, design systems, and ship full‑stack projects.",
  summary:
    "I’m a full‑stack web developer who brings ideas to life from wireframe to deployment. Comfortable with JavaScript and TypeScript, I design intuitive user interfaces and build reliable back‑end APIs that keep sites fast and secure. I thrive on solving tricky problems and crafting experiences people enjoy—whether that’s sketching a layout, writing clean code, or optimizing performance.",
  avatarUrl: "",
  skills: [
    "React JS",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Tailwind CSS",
    "Express JS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "thevineetbimal@gmail.com",
    tel: "+91 8210722821",
    social: {
      GitHub: {
        name: "GitHub",
        url: "http://github.com/vineetbs",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/vineetbs",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vineetbs",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:thevineetbimal@gmail.com?",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "",
      href: "",
      badges: [],
      location: "",
      title: "",
      logoUrl: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  education: [
    {
      school: "Rajiv Gandhi Technical University",
      degree: "B.Tech in Computer Science",
      logoUrl: "/rgpv.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Repro",
      href: "https://recpro.vineetbs.tech",
      dates: "",
      active: true,
      description:
        "A seamless video messaging platform to upload, and share videos with a single click. Built with Next.js, TypeScript, and Shadcn/UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Imagekit",
      ],
      links: [
        {
          type: "Website",
          href: "https://recpro.vineetbs.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vineetbs/recpro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recpro.png",
      video: "",
    },
    {
      title: "Notelink",
      href: "https://notelink.vineetbs.tech",
      dates: "",
      active: true,
      description:
        "A minimalist link‑saving and sharing app built with Vite, React and a Node.js backend.",
      technologies: [
        "Vite",
        "React",
        "TypeScript",
        "React Router",
        "Tailwind CSS",
        "lucide-react",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://notelink.vineetbs.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vineetbs/notelinks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notelink.png",
      video: "",
    },
    {
      title: "Agrihelp",
      href: "https://agrihelp.netlify.app",
      dates: "",
      active: true,
      description:
        "A one-stop solution for real-time weather reports and agriculture news, built with React, Vite, and Tailwind CSS.",
      technologies: ["React", "Vite", "Tailwind CSS", "WeatherAPI", "NewsAPI"],
      links: [
        {
          type: "Website",
          href: "https://agrihelp.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vineetbs/agrihelp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agrihelp.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
