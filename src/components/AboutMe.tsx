import { useTranslations } from 'next-intl';
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
    const t = useTranslations('aboutMe');
    return (
        <div className="flex flex-col gap-4 text-base leading-6 my-4 rounded-md w-full text-custom-text dark:text-custom-text-dark ">
            <div className='flex flex-col justify-between gap-8 sm:flex-row'>
                <div className='w-sm text-custom-text   dark:text-custom-text-dark'>
                    <h2>Full Stack Software developer</h2>
                    <p className='text-left max-w-2xl leading-relaxed'> {t('passion')}</p>
                </div>
                <Socials />
            </div>
        </div>
    );
}

function Socials() {
    return (
        <div className='flex flex-row sm:flex-col text-2xl text-custom-borderColor-light dark:text-custom-borderColor gap-4'>
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
