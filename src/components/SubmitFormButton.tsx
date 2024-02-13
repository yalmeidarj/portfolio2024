"use client";
import { useFormStatus } from "react-dom";


export default function SubmitFormButton({ title }: { title: string }) {
    const { pending } = useFormStatus();
    return (
        <>
            <button
                type="submit"
                disabled={pending}
                className={
                    `text-sm max-w-[120px] mx-auto border-solid border-2 rounded-sm font-bold px-4 focus:outline-none focus:shadow-outline ${pending ? "bg-gray-400 border-gray-500 text-white" : "bg-white border-blue-600 text-blue-600"
                    } hover:bg-blue-300 hover:border-blue-700 hover:text-gray-800`
                }
            >
                {pending ? "Pending..." : title}
            </button>
        </>
    );
}
