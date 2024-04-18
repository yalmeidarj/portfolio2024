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

    <div className='transition ease-in-out delay-600 flex flex-col   mx-auto scroll-smooth w-full sm:justify-between max-h-auto gap-2 items-center '>
      <div className='dark:bg-custom-midBackground bg-custom-background-light
       sm:gap-8 h-auto  sm:h-auto w-full  sm:mb-0  sm:min-h-0'>
        <div className='sticky top-0 z-10 w-full overflow-visible dark:bg-custom-midBackground'>
          <NavBar />
        </div> 
        <div className='dark:text-custom-text-dark text-custom-text-light 
      dark:bg-gradient-to-tl bg-custom-background-light dark:bg-custom-black
        flex flex-col sm:h-full sm:max-h-full px-8 '> 
            <div
            id='aboutMe'
            className='flex flex-col min-h-screen sm:min-h-0 justify-center pb-12  items-start w-full'
          >
            <div className=' '>
            
            <h1 className="text-5xl font-extrabold self-start text-transparent bg-clip-text bg-gradient-to-r from-custom-text-accent to-custom-text-accent-light dark:from-custom-tittleDarker dark:to-custom-tittleLighter">
              Yuri Almeida
            </h1>
            <h2 className="text-xl font-semibold self-start text-transparent bg-clip-text dark:bg-gradient-to-r bg-custom-tittleDarker dark:from-slate-200 dark:to-custom-title from-custom-text-accent-light to-custom-tittleDarker">
              Full Stack Software Developer
            </h2>

            </div>
                <AboutMe />

          </div>
        </div>
 
        <div className="bg-custom-background-light flex flex-col gap-4 pt-4 sm:mt-0 dark:bg-custom-midBackground ">
          <div className='w-full flex flex-col  sm:flex sm:flex-row justify-between '>
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
    <section id={id} className='px-8 mt-4 gap-8 w-full '>
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







