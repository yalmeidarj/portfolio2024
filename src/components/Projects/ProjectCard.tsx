
// import { RxExternalLink } from "react-icons/rx";


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
    // return (
    //     <div className='mx-auto w-full my-2 px-5 py-8 flex flex-col md:flex-row justify-between gap-8  shadow-xl rounded-lg '>
    //         <div className='flex flex-col justify-between'>
    //             <Link
    //                 href={link}
    //                 target={target}
    //             >
    //             <div className="flex flex-col max-w-[450px] gap-2">
    //                 <h1 className='flex flex-row items-center font-bold text-custom-title-light dark:text-custom-text-dark'>
    //                 {/* <h1 className='flex flex-row items-center font-bold text-custom-title-light dark:text-custom-title'> */}
    //                     {title} <RxExternalLink aria-label={`Open ${title} project in a new tab`} />
    //                 </h1>
    //             </div>
    //             </Link>
    //             <div className='flex flex-wrap gap-1 mt-2'>
    //                 {tags?.map((tag) => (
    //                     <Tag key={tag} tag={tag} />
    //                     ))}
    //             </div>
    //                     <p className='mt-2 max-w-sm leading-relaxed text-left'>{description}</p>
    //         </div>
    //         <div className=''>
    //         {/* <div className='max-w-[300px]'> */}
    //             <Image
    //                 src={imgSrc}
    //                 alt={alt}
    //                 // layout="responsive"
    //                 width={260}
    //                 height={160}
    //                 sizes="100vw, 200px"
    //                 className='rounded-md'
    //             />
    //         </div>
    //     </div>
    // );
    return (
        <div className="project-card drop-shadow-md">
            <Drawer>
                <DrawerTrigger>
                    <div className='relative '>                    
                        <Image
                            src={imgSrc}
                            alt={alt}
                            width={300}
                            height={200}
                            className='rounded-md max-w-[600px]'
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
            </Drawer>
        </div>
    );
}
