import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="home" className="relative">
        <div className="h-[150px] md:h-[270px] lg:h-[500px] w-full">
          <Image
              src={'/hero.webp'}
              fill
              alt="logo"
          />

          <div className="absolute bg-black inset-0 flex flex-col items-center justify-center bg-opacity-65 gap-4 md:gap-14">
            <p className=" text-center text-xl md:text-3xl lg:text-4xl text-white font-bold">Transforma tus ideas en <span className="text-blue-400">Experiencias Digitales Increíbles</span></p>   

            <a 
              href="#contact" 
              className="text-center text-lg md:text-2xl lg:text-3xl text-white font-bold bg-blue-700 py-2 px-4 rounded-2xl hover:bg-blue-800  ">Contáctanos</a>
          </div>        
        </div>
      </div>
    </>
  )
}
