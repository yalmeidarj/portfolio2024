export function Tag({ tag }: { tag: string }) {
    return (
        <span className='rounded-full text-xs  border-solid border-2 border-white font-semibold px-3 py-1'>
            {tag}
        </span>
    )
}
