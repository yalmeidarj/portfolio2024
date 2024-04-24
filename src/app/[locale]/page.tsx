import { useTranslations } from 'next-intl';
import AboutMe from "@/components/AboutMe";
import { Projects } from "@/components/Projects/Projects";
import ContactMe from "@/components/contactMe/ContactMe";
import MyTechs from '@/components/myTechs/MyTechs';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { SiGit, SiGithub } from 'react-icons/si';
import Section from '@/components/Section';
import { FaAnglesDown } from 'react-icons/fa6';


export default function Home() {
  
  return (
    <div className='transition ease-in-out delay-600 flex flex-col   mx-auto scroll-smooth w-full sm:justify-between max-h-auto gap-2 items-center '>
      <div id='aboutMe'
        className='dark:bg-custom-midBackground bg-custom-background-light
               w-full '>
          
        <div className='h-screen lg:max-h-[1000px] sm:max-h-[900px] dark:bg-custom-black'>
        <Section          
            className='flex flex-col justify-between h-4/5 sm:h-full  '>        
          
          <AboutMe />
          <div className=' text-white animate-bounce self-center'>
            <a
              className='dark:text-custom-title text-custom-text-light'
              rel="stylesheet" href="#myTechs"
            >
              <FaAnglesDown className=' text-4xl  dark:text-custom-text-dark text-custom-title' />
            </a>
          </div>
        </Section>
          </div>
        <div id="myTechs" className="bg-custom-background-light flex flex-col gap-4 pt-4 sm:mt-0 dark:bg-custom-midBackground ">
          <div className='w-full flex flex-col  sm:flex sm:flex-row justify-between '>
          </div>
          <Section
            
            className='dark:bg-custom-midBackground '            
            >
            <MyTechs />
          </Section>
          <Section
            className='dark:bg-custom-black '            
            id="projects" >
            <Projects />
          </Section>
          <Section id="contactMe">
              <ContactMe />
          </Section>
        </div>      

    </div>
    </div>
  );
}



function Profile() {
  return (
    <div className="flex min-w-[300px] justify-start items-center  w-full h-full">
      <div className='flex  flex-col justify-center items-center sm:flex sm:flex-row  gap-4 '>
           {/* <Image
            src="/avatarProfile.png"
            alt="Picture of the developer"
            width={240}
            height={240}
            className='mb-8 pt-4 border-4 border-custom-title border-solid  w-fulls bg-custom-midBackground dark:bg-custom-nav-light rounded-full shadow-lg' 
          /> */}
        <div className='flex flex-col gap-2 max-w-md '>
          {/* <p className='text-sm leading-relaxed'>Bem-vindo ao meu portfólio! Meu nome é Yuri Almeida e eu sou um desenvolvedor Full Stack autodidata morando em Toronto. Sou apaixonado por toda a gama do desenvolvimento web, mas particularmente fascinado pelo Backend. Gosto de enfrentar desafios com positividade e determinação. Entre em contato!</p> */}
          <h1 className='3xl' >Connect with me</h1>
        <div className='flex flex-row-wrap gap-2 '>
          <SiGithub />
          <SiGit />        
        </div>
        </div>
      </div>
    </div>
  )
}







