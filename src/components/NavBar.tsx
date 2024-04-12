
import { useTranslations } from "next-intl";
import NavItem from "./NavItem";

export default function NavBar() {

    const t = useTranslations('navbar');
    return (
        <nav className='flex justify-around sm:justify-center  items-center w-full overflow-hidden h-14 dark:bg-opacity-95 bg-gradient-to-r from-custom-title to-custom-nav-light dark:bg-none dark:bg-custom-black border-b-2 border-solid border-b-custom-borderColor-light dark:border-b-custom-borderColor shadow-md '>
            <NavItem href="#aboutMe" label={t('aboutMe').toUpperCase()} />
            <NavItem href="#projects" label={t('projects').toUpperCase()} />
            <NavItem href="#contactMe"label={t('contactMe').toUpperCase()} />
        </nav>
    );
}


