import { useTranslations } from "next-intl";
import { ProjectCardProps } from "./types";

export function ProjectsData() {

  const projectKeys = ["project1", "project2", "project3"];

  const t1 = useTranslations("project1");
  const t2 = useTranslations("project2");
  const t3 = useTranslations("project3");

  const projects: ProjectCardProps[] = [
    {
      title: t1("title"),
      link: "https://league-simulator-smoky.vercel.app",
      gitRepo: "https://github.com/yalmeidarj/leagueSimulator",
      description: t1("description"),
      subHeading: t1("subHeading"),
      imgSrc: "/projects/LeagueSimulator.png",
      alt: t1("alt"),
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    },
    {
      title: t2("title"),
      link: "https://www.ymaadesentupidora.com.br",
      gitRepo: "https://github.com/yalmeidarj/Ymaa-approuter-tailwind",
      description: t2("description"),
      subHeading: t2("subHeading"),
      imgSrc: "/projects/y.png",
      alt: t2("alt"),
      tags: ["React", "Node.js", "TypeScript", "shadcn-UI"],
    },
    {
      title: t3("title"),
      link: "#",
      gitRepo: "https://github.com/yalmeidarj/portfolio2024",
      description: t3("description"),
      subHeading: t3("subHeading"),
      imgSrc: "/projects/portfolioPessoal.png",
      alt: t3("alt"),
      tags: ["React", "NextJs", "Tailwind css", "Shadcn", "API"],
    },
  ];

  return projects;
}