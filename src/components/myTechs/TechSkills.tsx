import { useTranslations } from 'next-intl';
import SortButton from "./sortButton";

export default function TechSkills() {
    const t = useTranslations('techSkills')

    const categories = [t('all'), t('development'), t('design'), t('tools')];
    return (
        <>
        <SortButton
            categories={categories}
            />
        </>
    );

}