"use client"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { SiGithub, SiTwitter , SiMaildotru } from "react-icons/si";
import Link from "next/link";

export default function ContactMeForm({
    children,
    label
}: {
        children: React.ReactNode, label: string
    }) {
    
    const ref = useRef<HTMLFormElement>(null);
    const clientAction = async (formData: FormData) => {
        const name = formData.get('name') as string;
        const replyToEmail = formData.get('email') as string;
        const message = formData.get('message') as string;

        const formattedMessage = `Name: ${name}\nEmail: ${replyToEmail}\nMessage: ${message}`;
        const templateParams = {
            name: name,
            message: formattedMessage,
            replyToEmail: replyToEmail,
        };

        const res = emailjs
            .send(
                process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID as string,
                templateParams,
                process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID as string
            )
            .then(
                (result) => {
                    console.log(result.text);
                    return true;
                },
                (error) => {
                    console.log(error.text);
                    return false;
                }
        );
        if (res !== undefined) {
            return true;
        } else {
            return false;
        }

    }
    
    return (
        <div className='mx-auto max-w-md rounded-md flex px-2 py-4 border border-solid-2 border-color '>        
            <form                
                ref={ref}
                className="flex flex-col mx-auto px-5 py-2 gap-4"
                action={async (formData) => {
                const result = await clientAction(formData);
                if (result !== false) {
                    ref.current?.reset();
                    toast.success("Email sent!\nI'll get back to you soon!");
                } else {
                    toast.error("Something went wrong :(\n...Email failed to send");
                }
                
                }}                
            >
                <div className='flex mx-auto gap-2 justify-between items-center '>
                    <h1 className="">{label}</h1>
                    {/* <div className='flex gap-2 '>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://github.com/yalmeidarj'
                        >                    
                            <SiGithub />
                        </Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://twitter.com/yalmeidarj'
                            >
                            <SiTwitter />
                        </Link>
                        <Link
                            href='mailto:yalmeida.rj@gmail.com'
                            >
                            <SiMaildotru />
                        </Link>
                    </div> */}
                </div>
                {children}
            </form>
        </div>
    );
}
