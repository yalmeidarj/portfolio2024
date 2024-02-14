import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className='flex justify-center items-center w-full h-16 bg-custom-primary text-custom-text-dark'>
            <p>{t('rights')} <span>{t('madeBy')}</span></p>
        </footer>
    );
}

