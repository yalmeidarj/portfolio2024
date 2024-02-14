"use client";
import { useFormStatus } from "react-dom";


export default function SubmitFormButton({ title }: { title: string }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={`text-sm max-w-[120px] mx-auto border-2 rounded-sm font-bold px-4 focus:outline-none ${pending ? "bg-custom-dark border-custom-border-primary text-custom-text-light" : "bg-custom-light border-custom-border-secondary text-custom-text-dark"} hover:bg-custom-accent hover:border-custom-border-primary hover:text-custom-text-light`}
        >
            {pending ? "Pending..." : title}
        </button>
    );
}
