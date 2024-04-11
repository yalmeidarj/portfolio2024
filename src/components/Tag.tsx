export function Tag({ tag }: { tag: string }) {
    return (
        <span className='rounded-md text-xs  border-solid border-2 border-custom-title-accent-light dark:border-custom-borderColor font-semibold px-3 py-1'>
            {tag}
        </span>
    )
}
