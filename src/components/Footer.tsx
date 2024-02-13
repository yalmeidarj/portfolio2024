import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className='flex justify-center bg-slate-200 items-center w-full h-16 '>
            <p>{t('rights')}<span>{t('madeBy')}</span></p>
        </footer>
    )
}
