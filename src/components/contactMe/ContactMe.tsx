import { useTranslations } from "next-intl";
import ContactMeForm from "./ContactMeForm";
import SubmitFormButton from "../SubmitFormButton";
import FormFields from "./FormFields";


export default function contactMe() {
    
    const t = useTranslations('contact')
    const nameField = t('namePlaceholder');
    const replyToEmailField = t('emailPlaceholder');
    const messageField = t('messagePlaceholder');

    const fieldProps = { nameField, replyToEmailField, messageField };

    return (
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
    )
}
