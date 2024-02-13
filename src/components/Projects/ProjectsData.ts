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
      link: "#",
      description: t1("description"),
      imgSrc:"/projects/tdx.png",
      alt: t1("alt"),
      tags: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: t2("title"),
      link: "#",
      description: t2("description"),
      imgSrc:"/projects/y.png" ,
      alt: t2("alt"),
      tags: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: t3("title"),
      link: "#",
      description: t3("description"),
      imgSrc:"/projects/movies.png",
      alt: t3("alt"),
      tags: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  return projects;
}