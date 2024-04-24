"use client";
import { useFormStatus } from "react-dom";


export default function SubmitFormButton({ title }: { title: string }) {
    const { pending } = useFormStatus();
    return (
        <div className=''>
            <button
                type="submit"
                disabled={pending}
                className='flex flex-row gap-1 w-[8rem] px-4
                    items-center justify-center my-4
                    shadow-md shadow-gradient dark:shadow-gradient-dark dark:shadow-gradient-md from-custom-title
                    to-custom-title-accent-light dark:from-custom-tittleDarker dark:to-custom-tittleLighter
                    border border-custom-borderColor-light dark:border-custom-borderColor
                    rounded-md py-2 bg-custom-background-light dark:bg-custom-background-dark
                    text-custom-title dark:text-custom-text
                    hover:text-custom-title-accent-light dark:hover:text-custom-title-accent'
            >
                <span
                    className='font-bold text-custom-text dark:text-custom-text-dark'
                >{pending ? "Pending..." : title}
                </span>
            </button>
        </div>
    );
}
