import TechSkills from "./TechSkills";


export default function MyTechs (){
    return (
        <> 
        <div className='flex flex-col gap-6 justify-center w-full h-full'>
            <h1 className='text-2xl font-bold text-custom-text dark:text-custom-text-dark'>My Techs</h1>
            <TechSkills />
        </div>
        </>
    );
};

