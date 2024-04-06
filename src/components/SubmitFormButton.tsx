"use client";
import { useFormStatus } from "react-dom";


export default function SubmitFormButton({ title }: { title: string }) {
    const { pending } = useFormStatus();
    return (
        <div className='shadow-md'>
            <button
                type="submit"
                disabled={pending}
                className={`bg-gradient-to-br from-custom-title to-custom-nav-light max-w-[180px] px-6 py-2 text-sm rounded-sm text-custom-text-dark transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-bl active:scale-95 active:bg-custom-midBackground shadow hover:shadow-lg ${pending ? "bg-custom-dark border-custom-border-primary text-custom-text-light" : "bg-custom-light border-custom-border-secondary text-custom-text-dark"} hover:bg-custom-accent hover:border-custom-border-primary hover:text-custom-text-light`}
            >
                {pending ? "Pending..." : title}
            </button>
        </div>
    );
}
