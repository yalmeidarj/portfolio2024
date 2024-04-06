"use client"    
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import Image from 'next/image'

export default function ThemeSwitch(){
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={18}
            height={18}
            alt="logo"
            sizes="100vw"
            priority={false}
            title="Loading light mode/ dark mode switcher"
            />    
    )
    if (resolvedTheme === 'light') {
        return <FiMoon
            className="cursor-pointer w-[22px] h-[22px]"
            onClick={() => setTheme('dark')} />
        }
        
        if (resolvedTheme === 'dark') {
            return <FiSun
            className="cursor-pointer w-[22px] h-[22px]"
            onClick={() => setTheme('light')} />
    }

    
}