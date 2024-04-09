import { useTranslations } from 'next-intl';
import AboutMe from "@/components/AboutMe";
import { Projects } from "@/components/Projects/Projects";
import ContactMe from "@/components/contactMe/ContactMe";
import Controllers from "@/components/Controllers";
import MyTechs from '@/components/myTechs/MyTechs';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
// import { useRef } from 'react';
import { CgScrollV } from "react-icons/cg";
import { FaAnglesDown } from "react-icons/fa6";

import Image from 'next/image';
import { SiGit, SiGithub } from 'react-icons/si';


export default function Home() {
  const t = useTranslations('Home');
  const tC = useTranslations('contact');
  
  return (

    <div className='transition ease-in-out delay-200 flex flex-col dark:bg-gradient-to-tl bg-custom-background-light dark:bg-custom-black  mx-auto scroll-smooth w-full sm:justify-between max-h-auto gap-8 items-center dark:text-custom-text-dark text-custom-text-light '>
      <div className=' sm:gap-8 h-auto min-h-screen sm:h-auto w-full  sm:mb-0  sm:min-h-0'>
        <div className='px-8 flex flex-col h-full sm:h-full sm:max-h-full '>
          <div id='aboutMe' className='flex flex-col items-end w-full'>
            
            <Controllers />   
            <h1 className="text-5xl font-extrabold self-start text-transparent bg-clip-text bg-gradient-to-r from-custom-text-accent to-custom-text-accent-light dark:from-custom-tittleDarker dark:to-custom-tittleLighter">
              Yuri Almeida
            </h1>
            <h2 className="text-xl font-semibold self-start text-transparent bg-clip-text dark:bg-gradient-to-r bg-custom-tittleDarker dark:from-slate-200 dark:to-custom-title from-custom-text-accent-light to-custom-tittleDarker">
              Full Stack Software Developer
            </h2>

          </div>
      
        </div>
        <div className='flex flex-col px-8 mb-12 xs:mb-8 sm:mb-0 border-b border-solid border-gray-100 min-h-[640px] sm:min-h-[280px] h-5/5 sm:h-3/4'>
          <AboutMe />
        </div>      
        <div className="bg-custom-background-light flex flex-col gap-4 mt-4 sm:mt-0 dark:bg-custom-midBackground ">
          <div className='sticky top-0 z-10 w-full overflow-visible mb-6'>        
            <NavBar />
          </div>        
          <Section id="myTechs">
            <MyTechs />
          </Section>
          <Section id="projects" >
            <Projects />
          </Section>
          <Section id="contactMe">
            <div className='flex flex-col gap-6'>
            <h1 className=' text-xl font-semibold'>{tC('title')}</h1>
            <div className='flex flex-col  justify-between md:flex md:flex-row gap-10 sm:gap-2'>
                <Profile />
              <ContactMe />
            </div>
            </div>
          </Section>
        </div>      
      <Footer />
    </div>
    </div>
  );
}

function Section({ id,  children}: { id: string,  children: React.ReactNode}) {
  return (
    <section id={id} className='px-8 mt-4 gap-8 w-full'>
      {children}
    </section>
  )
}

function Profile() {
  return (
    <div className="flex min-w-[300px] justify-start items-center  w-full h-full">
      <div className='flex  flex-col justify-center items-center sm:flex sm:flex-row  gap-4 '>
           <Image
            src="/avatarProfile.png"
            alt="Picture of the developer"
            width={240}
            height={240}
            className='mb-8 pt-4 border-4 border-custom-title border-solid  w-fulls bg-custom-midBackground dark:bg-custom-nav-light rounded-full shadow-lg' 
          />
        <div className='flex flex-col gap-2 max-w-md '>
          <p className='text-sm leading-relaxed'>Bem-vindo ao meu portfólio! Meu nome é Yuri Almeida e eu sou um desenvolvedor Full Stack autodidata morando em Toronto. Sou apaixonado por toda a gama do desenvolvimento web, mas particularmente fascinado pelo Backend. Gosto de enfrentar desafios com positividade e determinação. Entre em contato!</p>
        <h1>Connect with me</h1>
        <div className='flex flex-row-wrap gap-2 '>
          <SiGithub />
          <SiGit />        
        </div>
        </div>
      </div>
    </div>
  )
}







