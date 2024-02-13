"use client";
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const LanguageSelector = () => {
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        const pathLang = pathname.split('/')[1];
        setSelectedLang(pathLang);
    }, [pathname]);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        const newPath = pathname.replace(/^\/[^\/]+/, `/${newLang}`);
        router.push(newPath);
        setSelectedLang(newLang);
    };

    // Determine which flag to show
    const flagSrc = selectedLang === 'ptBr' ? '/brFlag.png' : '/ukFlag.png';

    return (
        <div className="flex justify-end items-center ">
            <Image
                src={flagSrc}
                alt={selectedLang === 'ptBr' ? "Português" : "English"}
                width={26}
                height={30}
                className="rounded-md "
            />
            <select value={selectedLang} onChange={handleLanguageChange} className="mx-1 text-xs p-1 rounded-xl">
                <option className="mx-1  " value="en">English</option>
                <option className="mx-1  " value="ptBr">Português</option>
            </select>
        </div>
    );
};

export default LanguageSelector;

