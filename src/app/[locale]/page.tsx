import Image from "next/image";
import { useTranslations } from 'next-intl';
import AboutMe from "@/components/AboutMe";
import ThemeSwitch from "@/components/ThemeSwitch";
import LanguageSelector from "@/components/LanguageSelector";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";


export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className=' w-screen h-screen items-center justify-center text-white '>
      <ThemeSwitch />
      <LanguageSelector />
      <AboutMe />
      <Projects />
    </div>
      );
}

function Projects() {
  const t = useTranslations('Projects');

  const projects: ProjectCardProps[] = [
    {
      title: 'Project 1',
      description: "This is a description of project 1A bit about me: Welcome to my portfolio! My name is Yuri Almeida, and I'm a self- taught Full Stack Developer living in Toronto.I'm passionate by the full range of web development, but particularly fascinated by the Backend.",
      link: '#',
      imgSrc:'/projects/movies.png',
      alt: 'project image',
      tags: ['React', 'TypeScript', 'TailwindCSS']

    },
    {
      title: 'Project 2',
      description: 'This is a front-end project, built with React, TypeScript and TailwindCSS',
      link: '#',
      imgSrc: '/projects/y.png',
      alt: 'project image',
      tags: ['Project43', 'Project 2']
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3',
      link: '#',
      imgSrc:'/projects/tdx.png',
      alt: 'project image',
      // tags: ['Project 3', 'Project 3']
    }
  ];
  return (
    <div className=' w-screen h-screen items-center justify-center text-white '>
      <h1>Projects</h1>
      {/* <h1>{t('Projects')}</h1> */}
      <div className=' '>
        {projects.map((project: ProjectCardProps) => (
        <ProjectCard
          key={project.alt}
          project={project}          
        />
      ))}
      </div>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  link: string;
  description: string;
  imgSrc: string;
  alt: string;
  tags?: string[];
};

type ProjectProps = {
  project: ProjectCardProps;
};


function ProjectCard({ project }: ProjectProps) {
  const { title, link, description, imgSrc, alt, tags } = project;

  return (
    <>
    <Link href={link}>
      <div className='mx-auto  my-2 px-5 py-8 max-w-2xl flex flex-col justify-between gap-8 md:flex md:flex-row md:justify-between  bg-background-light dark:bg-background-dark shadow-xl rounded-lg  cursor-pointer'>
        <div className='flex flex-col justify-between '>
            <div className="flex flex-col max-w-[450px] gap-2">
              <div className=' '>
              
              </div>
            <h2 className='flex flex-row items-center font-bold text-lg'>
              {title} <RxExternalLink aria-label={`Open ${title} project in a new tab`} />
            </h2>
            <p className='mt-2 text-sm leading-relaxed text-left'>{description}</p>
          </div>
          <div className='flex flex-wrap gap-4 mt-2 '>
            {tags?.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className='max-w-[300px]'>
          
            <Image
              src={imgSrc}
              alt={alt}
              layout="responsive" // Changed from 'fill' to 'responsive' for maintaining aspect ratio
              width={200} // Specify a default width
              height={100} 
              // width={200}
              // height={100}
              sizes="(max-width: 200px) 100vw, 200px"
              // objectFit='contain'
              className='rounded-md '
            />

        </div>
      </div>
    </Link>

        </>

  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <span className='rounded-full text-xs  border-solid border-2 border-white font-semibold px-3 py-1'>
      {tag}
    </span>
  )
}



