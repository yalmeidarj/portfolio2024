import { useTranslations } from 'next-intl';
import { ProjectCardProps } from './types';
import { ProjectCard } from './ProjectCard';
import { ProjectsData } from './ProjectsData';

export function Projects() {
    const t = useTranslations('projectSection');

    const projects: ProjectCardProps[] = ProjectsData();

    return (
        <div className='flex flex-col gap-6 items-center w-full justify-center dark:text-custom-text-dark text-custom-text-light text-textColor-light dark:text-textColor-dark mt-4'>
            <h1 className='self-start text-xl font-semibold'>{t('title')}</h1>
            {/* <h1>{t('Projects')}</h1> */}
            <div className='grid gird-cols-1 justify-evenly w-full sm:grid sm:grid-cols-2 gap-4 '>
                {projects.map((project: ProjectCardProps, index: number) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}