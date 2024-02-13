import { useTranslations } from "next-intl";

export default function NavBar() {
    const t = useTranslations('navbar');
    return (
        <nav className='flex justify-around sm:justify-center sticky top-0 z-10 items-center w-full h-16 overflow-x-visible bg-black text-white'>
            <a href="#aboutMe" className='mx-4'>{t('aboutMe').toUpperCase()}</a>
            <a href="#projects" className='mx-4'>{t('projects').toUpperCase()}</a>
            <a href="#contactMe" className='mx-4'>{t('contactMe').toUpperCase()}</a>
        </nav>
    )
}
