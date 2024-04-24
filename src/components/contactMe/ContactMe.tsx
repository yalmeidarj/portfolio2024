import { useTranslations } from "next-intl";
import ContactMeForm from "./ContactMeForm";
import SubmitFormButton from "../SubmitFormButton";
import FormFields from "./FormFields";
import Socials from "../Socials";


export default function contactMe() {
    
    const t = useTranslations('contact')
    const nameField = t('namePlaceholder');
    const replyToEmailField = t('emailPlaceholder');
    const messageField = t('messagePlaceholder');

    const fieldProps = { nameField, replyToEmailField, messageField };

    return (
        <div
            className="mx-auto max-w-[1000px] flex flex-col gap-4 items-center justify-start sm:mt-0 dark:bg-custom-midBackground"
        >
        <h2 className='self-start text-2xl font-bold text-center'>{t('title')}</h2>
            <Socials />           
            
        <ContactMeForm label={t('title')}>
            <FormFields 
                props={fieldProps}
            />
            <div className='flex justify-end mt-4'>
            
            <SubmitFormButton
                title={t('submit')}
                />
            </div>
        </ContactMeForm>
            </div>                
    )
}
