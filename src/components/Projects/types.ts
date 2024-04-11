export type ProjectCardProps = {
  title: string;
  link: string;
  gitRepo?: string;
  subHeading:string;
  description: string;
  imgSrc: string;
  alt: string;
  tags?: string[];
};

export type ProjectProps = {
  project: ProjectCardProps;
};
