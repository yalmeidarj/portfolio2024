import { useTranslations } from 'next-intl';
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaAnglesDown, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
    const t = useTranslations('aboutMe');
    return (
        <div className="flex flex-col sm:flex-row bg-transparent justify-between max-h-screen  h-full pt-6 gap-4 text-base leading-6 rounded-md w-full text-custom-text dark:text-custom-text-dark ">
            <div className='w-sm text-custom-text dark:text-custom-text-dark'>
                <div className='flex flex-col gap-2 '>
                
                <p className='text-left max-w-2xl leading-relaxed'>{t('passion')}</p>
                <p className='text-left max-w-2xl leading-relaxed'>{t('passion2')}</p>
                {/* <p className='text-left max-w-2xl leading-relaxed'>{t('passion3')}</p> */}
                </div>
            </div>
            <div className='flex flex-row w-full sm:w-auto justify-between items-center mb-12 sm:h-full self-start '>
                <Socials />
                <div className='w-16 h-18 visible sm:hidden text-white animate-pulse'>
                    <a
                        href="#myTechs"
                        className='flex flex-col gap-2 items-center text-custom-borderColor-light dark:text-custom-borderColor text-center hover:text-custom-accent dark:hover:text-custom-accent transition-colors duration-150 hover:scale-110 transition-transform duration-300'
                    >
                        <FaAnglesDown className='font-semibold text-2xl dark:text-custom-nav-light text-custom-borderColor hover:text-custom-accent dark:hover:text-custom-accent transition-colors duration-300 hover:rotate-12' />
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}

function Socials() {
    return (
        <div className='flex  flex-row sm:flex-col text-2xl text-custom-borderColor-light dark:text-custom-borderColor gap-4'>
           <FiExternalLink />
            <SiGithub />
            <FaXTwitter />
            <FaLinkedin />
        </div>
    );
}
            
function SocialIcon({children}: {children: React.ReactNode}) {
    return (
        <div className=' rounded-md border-solid border-2 border-custom-borderColor' >
            {children}
        </div>
    )
}
