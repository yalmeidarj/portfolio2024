
import { useTranslations } from "next-intl";
import NavItem from "./NavItem";
import Controllers from "./Controllers";

export default function NavBar() {

    const t = useTranslations('navbar');
    return (
        <div
            className="sticky flex justify-center  top-0 z-10 w-full overflow-visible dark:bg-custom-midBackground mx-auto
            dark:bg-opacity-95 bg-gradient-to-r from-custom-title to-custom-nav-light dark:bg-none border-b-2 border-solid border-b-custom-borderColor-light dark:border-b-custom-borderColor shadow-md"
        >
            <div className='sm:pl-0 pl-6 w-full self-center max-w-[1000px] '>
            
                <nav className=' flex justify-between pt-1 gap-6 sm:gap-10 px-2 items-center w-full'>
            <NavItem href="#aboutMe" label={t('aboutMe').toUpperCase()} />
            <NavItem href="#projects" label={t('projects').toUpperCase()} />
            <NavItem href="#contactMe"label={t('contactMe').toUpperCase()} />
        <Controllers />
        </nav>
            </div>
        </div>
    );
}


