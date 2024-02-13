import { RxExternalLink } from "react-icons/rx";
import { ProjectProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";


export function ProjectCard({ project }: ProjectProps) {
    const { title, link, description, imgSrc, alt, tags } = project;

    return (
        <>
            {/* <Link href={link}> */}
            <div className='mx-auto w-full my-2 px-5 py-8 flex flex-col justify-between gap-8 sm:flex sm:flex-row md:flex md:flex-row-wrap bg-background-light dark:bg-background-dark shadow-xl rounded-lg  '>
                    <div className='flex flex-col justify-between h-auto max-h-[800px]: '>
                        <div className="flex flex-col max-w-[450px] gap-2">
                            <div className=' '>
                            </div>
                            <h1 className='flex flex-row items-center font-bold '>
                                {title} <RxExternalLink aria-label={`Open ${title} project in a new tab`} />
                            </h1>
                            <p className='mt-2 leading-relaxed text-left'>{description}</p>
                        </div>
                        <div className='flex flex-wrap gap-4 mt-2 '>
                            {tags?.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className='max-w-[300px]'>
                        <Image
                            src={imgSrc}
                            alt={alt}
                            layout="responsive"
                            width={200} 
                            height={100}
                            sizes="(max-width: 200px) 100vw, 200px"
                            className='rounded-md '
                        />
                    </div>
                </div>
            {/* </Link> */}
        </>
    );
}