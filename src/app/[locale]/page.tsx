import { useTranslations } from 'next-intl';
import AboutMe from "@/components/AboutMe";
import { Projects } from "@/components/Projects/Projects";
import ContactMe from "@/components/contactMe/ContactMe";
import Controllers from "@/components/Controllers";
import MyTechs from '@/components/myTechs/MyTechs';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
// import { useRef } from 'react';

import Image from 'next/image';
import { SiGit, SiGithub } from 'react-icons/si';


export default function Home() {
  const t = useTranslations('Home');
  
  return (

    <div className='transition ease-in-out delay-200 flex flex-col dark:bg-gradient-to-tl bg-gradient-to-tl bg-custom-background dark:bg-custom-black bg-custom-background-light mx-auto scroll-smooth min-h-screen w-full justify-between gap-8 items-center dark:text-custom-text-dark text-custom-text-light '>
      <div id="aboutMe" className='mx-auto flex items-center justify-between w-full py-2 '>
        {/* <h1 className='ml-8   text-3xl'>Yuri Almeida</h1> 
        <Controllers />       */}
  
      </div>
      <Section
      id='asdf'
      >
        <div className='flex flex-col '>
          <div className='flex flex-row justify-between w-full'>
          <h1 className='text-3xl text-custom-title-accent-light dark:text-custom-text-dark'>Yuri Almeida</h1>
          <Controllers />   
        </div>
      
      <AboutMe />
        </div>
      </Section>    
      
      <div className="dark:bg-custom-midBackground">
      <NavBar />
      
      <Section id="myTechs">
      
        <MyTechs />
      </Section>
      <Section id="projects" >

      <Projects />
      </Section>
      <Section id="contactMe">
        <div className='flex flex-col sm:flex sm:flex-row gap-6 sm:gap-2 '>
          <Profile />
      <ContactMe />
      </div>
      </Section>
      {/* </div> */}
    </div>
      <Footer />
    </div>
  );
}

function Section({ id,  children}: { id: string,  children: React.ReactNode}) {
  return (
    <section id={id} className='px-8 my-4 gap-8 w-full '>
      {children}
    </section>
  )
}

function Profile() {
  return (
    // <div className="flex justify-center p-4 sm:justify-start w-full h-full border-solid border-2 border-color">
    <div className="flex justify-center p-4 sm:justify-start w-full h-full">
      <div className='flex flex-col items-center sm:flex sm:flex-row gap-4 '>

        <Image
          src="https://avatars.githubusercontent.com/u/73500564?v=4"
          // src="/profile1.png"
          alt="Picture of the author"
          width={180}
          height={180}
          className='rounded-full'
        />
        <div className='flex flex-col gap-2'>
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







