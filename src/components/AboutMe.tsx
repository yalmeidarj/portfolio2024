import { useTranslations } from 'next-intl';
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaAnglesDown, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import NavItem from './NavItem';

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
                <div className='w-16 h-16
                 flex flex-col items-center justify-center gap-2                 
                  visible sm:hidden text-white animate-pulse'
                >
                    <NavItem
                        href='#myTechs'
                        label={t('viewMoreButton').toUpperCase()}
                        className='dark:text-custom-title text-custom-text-light
                        flex flex-row justify-between
                        text-center items-center gap-1 text-xs  '
                    />
                    <FaAnglesDown className='dark:text-custom-text-dark text-custom-title'/>
                </div>
            </div>
        </div>
    );
}

function Socials() {
    return (
        <div className='flex flex-row sm:flex-col text-2xl gap-6 text-text-accent-light dark:text-text-dark'>
            <SocialIcon href="#">
                <FiExternalLink className=' hover:scale-110 hover:bg-transparent ' />
            </SocialIcon>
            <SocialIcon href="https://github.com/yalmeidarj">
                <SiGithub className='transition-all duration-300 hover:text-title-accent-light dark:hover:text-title hover:scale-110' />
            </SocialIcon>
            {/* <SocialIcon href="#">
                <FaLinkedin className='transition-all duration-300 hover:text-title-accent-light dark:hover:text-title hover:scale-110' />
            </SocialIcon> */}
        </div>
    );
}

function SocialIcon({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Link
            href={href}
            target='_blank'
            className='rounded-xs group hover:bg-gradient-to-tr from-midTitle to-tittleLighter dark:hover:from-title dark:hover:to-tittleDarker  hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-title-accent-light dark:focus:ring-title'>
            <div
                className='text-custom-borderColor-light dark:text-custom-tittleDarker
            group-hover:scale-110 hover:text-custom-title
            dark:hover:text-custom-nav-light
            '>
                {children}
            </div>
        </Link>
        // hover:bg-gradient-to-tr hover:from-custom-title-accent-light dark:hover:from-custom-title 
    );
}

{/* <SocialIcon href="#">
        <FaXTwitter className='transition-colors duration-300 hover:text-title-accent-light dark:hover:text-title' />
    </SocialIcon> */}