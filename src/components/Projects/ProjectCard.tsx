import { RxExternalLink } from "react-icons/rx";
import { ProjectProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";


export function ProjectCard({ project }: ProjectProps) {
    const { title, link, description, imgSrc, alt, tags } = project;

    return (
        <div className='mx-auto w-full my-2 px-5 py-8 flex flex-col sm:flex-row justify-between gap-8 bg-custom-light dark:bg-custom-black shadow-xl rounded-lg '>
            <div className='flex flex-col justify-between'>
                <div className="flex flex-col max-w-[450px] gap-2">
                    <h1 className='flex flex-row items-center font-bold dark:text-custom-title'>
                        {title} <RxExternalLink aria-label={`Open ${title} project in a new tab`} />
                    </h1>
                    <p className='mt-2 leading-relaxed text-left'>{description}</p>
                </div>
                <div className='flex flex-wrap gap-4 mt-2'>
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
                    className='rounded-md'
                />
            </div>
        </div>
    );
}

