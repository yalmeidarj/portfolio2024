import { useTranslations } from 'next-intl';
import { ProjectCardProps } from './types';
import { ProjectCard } from './ProjectCard';
import { ProjectsData } from './ProjectsData';

export function Projects() {
    const t = useTranslations('projectSection');

    const projects: ProjectCardProps[] = ProjectsData();

    return (
        <div className='mx-auto max-w-[1000px] flex flex-col gap-6 items-center w-full justify-center dark:text-custom-text-dark text-custom-text-light text-textColor-light dark:text-textColor-dark mt-4'>
            <h1 className='self-start text-xl font-semibold'>{t('title')}</h1>            
            <div className='justify-between w-full flex flex-col sm:flex sm:flex-row sm:flex-wrap items-center gap-2 '>
                {projects.map((project: ProjectCardProps, index: number) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}