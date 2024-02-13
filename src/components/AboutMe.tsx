import { useTranslations } from 'next-intl';
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function AboutMe() {
    const t = useTranslations('aboutMe');
    return(
        <div className="flex flex-col gap-4  text-base leading-6 my-4 rounded-sm  w-full">
            <div className=' w-sm'>            
            {/* <h1 className='text-4xl'>{t('name')}</h1>     */}
            <h2 className=''>Full Stack Software developer</h2>
            </div>
            <p className='text-left max-w-2xl'> {t('passion')}</p>
        </div>
        
    // <div className="bg-background-light dark:bg-background-dark  shadow-lg p-4 font-mono text-base leading-6 my-4 rounded-sm border border-border-color w-full">
    //         <div className=" text-text-primary-light dark:text-text-primary-dark -color my-2 z-50 max-w-md" >
    //         {t('name')}
    //         <span className="text-neutral-color align-middle text-sm ml-2.5 cursor-pointer">icon</span>
    //         <span className="text-neutral-color text-sm">
                
    //                 <div className="ml-5 border-l border-gray-300 pl-2.5">
    //                     <div className="cursor-pointer text-title-color my-2 z-50 max-w-md">
    //                         {t('passionLabel')}<span className="text-neutral-color text-sm"> {t('passion')} </span>
    //                     </div>
    //                     <div className="cursor-pointer text-title-color my-2 z-50 max-w-md">
    //                         {t('skillsLabel')}:
    //                         <span className="text-neutral-color text-sm">
    //                             <div className="ml-5 border-l border-gray-300 pl-2.5">
    //                                 <span className="text-neutral-color text-sm">"Full Stack Development",</span>
    //                                 <span className="text-neutral-color text-sm">"Backend Development"</span>
    //                             </div>
    //                         </span>
    //                     </div>
    //                     <div className="cursor-pointer text-title-color my-2 z-50 max-w-md">
    //                         GitHub: <span className="text-neutral-color text-sm underline"><a target="_blank" rel="noopener noreferrer" title={t('ContactMe.githubTitle') as string} href='https://github.com/yalmeidarj'><SiGithub /></a></span>
    //                     </div>
    //                     <div className="cursor-pointer text-title-color my-2 z-50 max-w-md">
    //                         {t('resumeLabel')}:
    //                         <a target="_blank" rel="noopener noreferrer" title={t('resumeLabel') as string} href='https://yalmeidarj.github.io/portfolio-vanilla/Yuri_Almeida_Resume.pdf'>
    //                             <span className="text-neutral-color text-sm underline">{t('resume')} <FiExternalLink /></span>
    //                         </a>
    //                     </div>
    //                 </div>
    //         </span>
    //     </div>
    // </div>
    )
}