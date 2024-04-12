'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef, MouseEvent } from "react";

export default function NavItem({ label, href, className }: { label: string, href: string, className?: string}) {
    // Type the ref with HTMLAnchorElement since this is a navigation link
    const targetRef = useRef<HTMLAnchorElement>(null);

    const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent default anchor link behavior
        const target = document.querySelector(href); // Find the target element by href
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <Link
            ref={targetRef}
            href={href}
            onClick={handleOnClick}
            className={cn(
                'mx-4',
                'font-bold',
                'text-white',
                'dark:text-custom-text-accent',
                'hover:text-custom-text-accent-light',
                'dark:hover:text-custom-text-dark',
                'transition',
                'ease-in-out',
                'delay-200',
                className
            )}
        >
            {label.toUpperCase()}
        </Link>
    );
}