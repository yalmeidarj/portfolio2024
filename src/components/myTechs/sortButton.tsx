"use client"
import React, { useState } from 'react';
// Import icons
import { SiTailwindcss, SiJavascript, SiTypescript, SiExpress, SiPostgresql, SiPython, SiGithub, SiFlask, SiPuppeteer, SiDocker, SiSocketdotio, SiHtml5, SiCss3, SiBootstrap, SiPandas, SiSelenium } from "react-icons/si";
import { FaReact, FaNode, FaGit } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoPrism } from "react-icons/io5";


export default function SortButton({ categories }: { categories: string[] }) {
    const techSkills = {
        all: categories[0],
        development: categories[1],
        design: categories[2],
        tools: categories[3]
    };

    const technologies = [
        { icon: <SiTailwindcss />, name: 'TailwindCSS', category: techSkills.design },
        { icon: <IoPrism />, name: 'Prism', category: techSkills.tools },
        { icon: <SiExpress />, name: 'Express', category: techSkills.development },
        { icon: <SiPostgresql />, name: 'PostgreSQL', category: techSkills.tools },
        { icon: <SiPython />, name: 'Python', category: techSkills.development },
        { icon: <SiGithub />, name: 'GitHub', category: techSkills.tools },
        { icon: <SiTypescript />, name: 'TypeScript', category: techSkills.development },
        { icon: <FaReact />, name: 'React', category: techSkills.development },
        { icon: <TbBrandNextjs />, name: 'Next.js', category: techSkills.development },
        { icon: <SiJavascript />, name: 'JavaScript', category: techSkills.development },
        { icon: <FaNode />, name: 'Node.js', category: techSkills.development },
        { icon: <FaGit />, name: 'Git', category: techSkills.tools },
        { icon: <SiPuppeteer />, name: 'Puppeteer', category: techSkills.tools },
        { icon: <SiDocker />, name: 'Docker', category: techSkills.tools },
        { icon: <SiSocketdotio />, name: 'Socket.IO', category: techSkills.tools },
        { icon: <SiHtml5 />, name: 'HTML5', category: techSkills.development },
        { icon: <SiCss3 />, name: 'CSS3', category: techSkills.design },
        { icon: <SiBootstrap />, name: 'Bootstrap', category: techSkills.design },
        { icon: <SiSelenium />, name: 'Selenium', category: techSkills.tools },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const filteredTechnologies = selectedCategory === techSkills.all ? technologies : technologies.filter(tech => tech.category.includes(selectedCategory));

    return (
        <div className="w-full">
            {/* Categories */}
            <div className="flex mx-auto flex-wrap justify gap-1 mb-2"> 
                
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-2 py-1 text-xs font-medium rounded-md shadow-sm ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`} 
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Technologies */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2"> 
                {filteredTechnologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-2 border rounded-md shadow-sm">
                        <div className="text-2xl">{tech.icon}</div> 
                        <div className="mt-1 text-xs font-medium">{tech.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};