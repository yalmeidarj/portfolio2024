import { useTranslations } from "next-intl";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaRegCopyright } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();
    return (

        <footer className=' flex justify-around relative  items-center w-full h-full pb-2 bg-gradient-to-br dark:from-custom-midBackground dark:to-custom-black dark:text-custom-text-accent dark:shadow-md dark:shadow-custom-title from-custom-title to-custom-background-dark 
         text-custom-text-dark'>
            {/* <p>{t('rights')} <span>{t('madeBy')}</span></p> */}
            <div className='flex flex-col w-full self-center max-w-[1000px]   sm:flex sm:flex-row sm:justify-center sm:gap-3 items-center  '>
            
                <div className='flex flex-row gap-1 items-center '>
                    <div className='shadow-md rounded-full text-xs '>
                                    <Image 
                src='/avatarProfile.svg'
                 alt='logo' 
                 width={50}
                  height={50}
                    className='rounded-full absolute bottom-2 left-4 sm:left-[28rem] '
                   />
                </div>
                    <HiOutlinePaintBrush />
                    <p
                        className='text-xs mt-1 '
                    >{`${t('madeBy')} Yuri Almeida`}</p>
                </div>
                <div className='flex flex-row gap-1 items-center '>
                    <FaRegCopyright /><p className=''> {currentYear} </p>

                </div>
            </div>
        </footer>
    );
}

