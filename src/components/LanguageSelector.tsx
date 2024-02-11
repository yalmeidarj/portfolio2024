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
        <div className="flex justify-end items-center">
            <Image
                src={flagSrc}
                alt={selectedLang === 'ptBr' ? "Português" : "English"}
                width={30}
                height={30}
                className="rounded-full "
            />
            <select value={selectedLang} onChange={handleLanguageChange} className="ml-2">
                <option value="en">English</option>
                <option value="ptBr">Português</option>
            </select>
        </div>
    );
};

export default LanguageSelector;

