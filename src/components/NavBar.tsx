import { useTranslations } from "next-intl";

export default function NavBar() {
    const t = useTranslations('navbar');
    return (
        <nav className='flex justify-around sm:justify-center sticky top-0 z-10 items-center w-full h-16  dark:bg-opacity-95 bg-custom-nav-light dark:bg-custom-midBackground border-b-2 border-solid border-b-custom-borderColor-light dark:border-b-custom-borderColor  '>
            <NavItem href="#aboutMe" label={t('aboutMe').toUpperCase()} />
            <NavItem href="#projects" label={t('projects').toUpperCase()} />
            <NavItem href="#contactMe"label={t('contactMe').toUpperCase()} />
        </nav>
    );
}

function NavItem({ label, href }: { label: string, href: string }) {
    return (
        <a
            href={href}
            className='mx-4 font-bold dark:text-custom-text-accent text-white dark:hover:text-custom-text-dark hover:text-custom-text-accent-light transition ease-in-out delay-200'
        >
            {label.toUpperCase()}
        </a>
    );
}
