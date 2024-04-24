import Link from "next/link";
import { PiFilePdfThin } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

export default function Socials() {
    return (
        <div className='mt-2 flex flex-row gap-6 text-text-accent-light dark:text-text-dark'>
            <SocialIcon
                href="resume-Yuri-Almeida.pdf"
            >
                <PiFilePdfThin className='text-sm sm:text-lg  hover:scale-110 hover:bg-transparent ' />
                <span className='text-sm font-bold  '>
                    Resume
                </span>
            </SocialIcon>
            <SocialIcon href="https://github.com/yalmeidarj">
                <SiGithub className='text-sm sm:text-lg hover:text-title-accent-light dark:hover:text-title hover:scale-110' />
                <span className='text-sm font-bold  '>
                    GitHub
                </span>
            </SocialIcon>
        </div>
    );
}

function SocialIcon({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Link
            href={href}
            target='_blank'
            className='rounded-xs group hover:bg-gradient-to-tr from-midTitle to-tittleLighter dark:hover:from-title dark:hover:to-tittleDarker  hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-title-accent-light dark:focus:ring-title'>
            <div
                className='text-custom-borderColor-light dark:text-custom-tittleDarker
            group-hover:scale-110 hover:text-custom-title
            dark:hover:text-custom-nav-light
            flex flex-row justify-between gap-1 items-center
            
            '>
                {children}
            </div>
        </Link>
        // hover:bg-gradient-to-tr hover:from-custom-title-accent-light dark:hover:from-custom-title 
    );
}
