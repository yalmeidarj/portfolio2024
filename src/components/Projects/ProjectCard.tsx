import { RxExternalLink } from "react-icons/rx";
import { ProjectProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";


export function ProjectCard({ project }: ProjectProps) {
    const { title, link, description, imgSrc, alt, tags } = project;
    let target = "_blank"
    if (link === "#") {
        target = "_self"
    }
    return (
        <div className='mx-auto w-full my-2 px-5 py-8 flex flex-col md:flex-row justify-between gap-8 light-bg-gradient dark:bg-gradient-to-br dark:to-custom-projectCardMix dark:from-custom-projectCard shadow-xl rounded-lg '>
            <div className='flex flex-col justify-between'>
                <Link
                    href={link}
                    target={target}
                >
                <div className="flex flex-col max-w-[450px] gap-2">
                    <h1 className='flex flex-row items-center font-bold text-custom-title-light dark:text-custom-text-dark'>
                    {/* <h1 className='flex flex-row items-center font-bold text-custom-title-light dark:text-custom-title'> */}
                        {title} <RxExternalLink aria-label={`Open ${title} project in a new tab`} />
                    </h1>
                </div>
                </Link>
                <div className='flex flex-wrap gap-1 mt-2'>
                    {tags?.map((tag) => (
                        <Tag key={tag} tag={tag} />
                        ))}
                </div>
                        <p className='mt-2 max-w-sm leading-relaxed text-left'>{description}</p>
            </div>
            <div className=''>
            {/* <div className='max-w-[300px]'> */}
                <Image
                    src={imgSrc}
                    alt={alt}
                    // layout="responsive"
                    width={260}
                    height={160}
                    sizes="100vw, 200px"
                    className='rounded-md'
                />
            </div>
        </div>
    );
}

// background - color: #ff9f1c;
// background - image: linear - gradient(315deg, #ff9f1c 15 %, #e1d09c 91 %);
