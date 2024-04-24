import { useTranslations } from 'next-intl';
import { FaAnglesDown } from "react-icons/fa6";
import Socials from './Socials';

export default function AboutMe() {
    const t = useTranslations('aboutMe');
    return (
        <div className="w-full mx-auto max-w-[1000px]
        flex flex-coljustify-between  gap-6">
        <div className=" 
        flex flex-col justify-between h-full gap-4 text-base leading-6 rounded-md w-full text-custom-text dark:text-custom-text-dark items-start">
            <div className='
            flex flex-col justify-center sm:pt-14 pt-8
            h-4/4
            sm:justify-center
            w-full 
            w-sm text-custom-text dark:text-custom-text-dark
            
            '>
                <div className='flex flex-col gap-2 mb-8 sm:pt-4 '>
                    <div className=' '>
                        <h1 className="text-5xl font-extrabold self-start text-transparent bg-clip-text bg-gradient-to-r from-custom-text-accent to-custom-text-accent-light dark:from-custom-tittleDarker dark:to-custom-tittleLighter">
                            Yuri Almeida
                        </h1>
                        <h2 className="mb-8 text-xl font-semibold self-start text-transparent bg-clip-text dark:bg-gradient-to-r bg-custom-tittleDarker dark:from-slate-200 dark:to-custom-title from-custom-text-accent-light to-custom-tittleDarker">
                            Full Stack Software Developer
                        </h2>
                    </div>
                    <p className='text-xl text-left max-w-6xl leading-normal'>{t('passion')}</p>
                </div>

                <a
                    href='#form'
                    className='flex flex-row gap-1 w-[8rem] px-4
                    items-center justify-center
                    my-4
                    shadow-md shadow-gradient dark:shadow-gradient-dark dark:shadow-gradient-md from-custom-title
                    to-custom-title-accent-light dark:from-custom-tittleDarker dark:to-custom-tittleLighter
                    border border-custom-borderColor-light dark:border-custom-borderColor
                    rounded-md py-2 bg-custom-background-light dark:bg-custom-background-dark
                    text-custom-title dark:text-custom-text
                    hover:text-custom-title-accent-light dark:hover:text-custom-title-accent'
                    >
                    <span
                        className='font-bold text-custom-text dark:text-custom-text-dark'
                    >{t('viewMoreButton')}</span>
                        {/* <FiExternalLink className='text-custom-title dark:text-custom-tittleDarker' /> */}
                    </a>
                <Socials />
            </div>

            </div>

        </div>
    );
}
