export type ProjectCardProps = {
  title: string;
  link: string;
  description: string;
  imgSrc: string;
  alt: string;
  tags?: string[];
};

export type ProjectProps = {
  project: ProjectCardProps;
};
