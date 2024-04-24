"use client"
import { MdOpenInFull } from "react-icons/md";
import { ProjectProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
    Drawer,
    // DrawerClose,
    DrawerContent,
    // DrawerDescription,
    // DrawerFooter,
    // DrawerHeader,
    // DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export function ProjectCard({ project }: ProjectProps) {
    const { title, link, gitRepo, subHeading, description, imgSrc, alt, tags } = project;
    let target = "_blank"
    if (link === "#") {
        target = "_self"
    }

    return (
        <Drawer>
                <div className="project-card drop-shadow-md ">
                <DrawerTrigger>
                    
                    <div className='rounded-lg dark:border-custom-title border-2 border-custom-nav-light 
                    relative min-w-[400px] h-2/3 aspect-w-3 aspect-h-2 overflow-hidden'>
                            <Image
                                src={imgSrc}
                                alt={alt}
                                width={300}
                                height={200}
                            className='self-start rounded-md max-w-[400px] max-h-[300px] sm:max-h-[200px]  object-cover '
                                layout="responsive"
                            />
                    
                        <div className='w-full absolute p-4 bottom-0 
                        bg-gradient-to-bl from-transparent to-black
                        flex flex-row gap-0 justify-between items-center
                        '>
                            <div className='text-custom-text-dark
                            flex flex-col w-full items-start justify-between '>
                                <h1>{title}</h1>
                                <p className='text-start'>{ subHeading}</p>
                            </div>
                            <MdOpenInFull
                                className='dark:text-gray-200 text-custom-text-dark text-2xl'
                            />
                        </div>
                    </div>
                </DrawerTrigger>
                <DrawerContent
                    className=" px-4 bg-gradient dark:bg-gradient-to-br dark:to-custom-projectCardMix dark:from-custom-projectCard
                    bg-gradient-to-br to-custom-background-light from-custom-text-dark
                    text-custom-text-light dark:text-custom-text-dark
                    "
                >
                    <div className="mx-auto max-w-3xl">
                        <div className='flex w-full  flex-row justify-between'>
                            <h3>{title}</h3>
                            <Link
                                href={link}
                                passHref
                                target={target}
                                aria-label={`Visit ${title}`}
                            >
                                <div className='flex flex-row gap-2 '>
                                    <>
                                    <h1>Visit</h1>
                                    <FaExternalLinkAlt />
                                    </>
                                    {gitRepo && (
                                        <Link
                                            href={gitRepo}
                                            passHref
                                            target="_blank"
                                            aria-label="GitHub Repository Link"
                                        >
                                            <FaGithub />
                                        </Link>
                                    )}
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-row gap-2">
                            {tags?.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))}
                        </div>
                        <p
                            className="my-4 leading-loose text-left"
                            aria-label={description}
                        >
                            {description}                            
                        </p>
                        
                    </div>
                </DrawerContent>
        </div>
            </Drawer>
    );
}
