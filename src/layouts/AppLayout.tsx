import { Outlet } from "react-router-dom";


export default function AppLayout() {

    const date = new Date()

  return (
    <>
        <header className=" bg-black w-full py-5">
            <div className="container mx-auto flex justify-center lg:justify-between items-center">
                <div className="hidden lg:block">
                    {/* <Image
                        src={'/logo.webp'}
                        width={150}
                        height={150}
                        alt="Logo"
                    /> */}
                </div>

                <nav className="text-white text-xs md:text-lg lg:text-xl uppercase font-bold flex gap-5">
                    <a className="hover:text-blue-400" href="#home">Inicio</a>
                    <a className="hover:text-blue-400" href="#sobre-nosotros">Sobre Nosotros</a>
                    <a className="hover:text-blue-400" href="#services">Servicios</a>
                    <a className="hover:text-blue-400" href="#contact">Contacto</a>
                </nav>
            </div>
        </header>

        <main>
            <Outlet/>
        </main>


        <footer className="bg-black w-full py-5 mt-10">
            <div className="container mx-auto text-white text-lg md:text-xl font-bold flex justify-evenly">
                <nav className="flex flex-col gap-4">
                    <p className="text-xl mb-4 text-blue-400">Secciones</p>
                    <a className="hover:text-blue-400" href="#home">Inicio</a>
                    <a className="hover:text-blue-400" href="#sobre-nosotros">Sobre Nosotros</a>
                    <a className="hover:text-blue-400" href="#services">Servicios</a>
                    <a className="hover:text-blue-400" href="#contact">Contacto</a>
                </nav>

                <nav>
                    <p className="text-xl mb-4 text-blue-400">Contacto</p>
                    <a className="hover:text-blue-400" href="#">Whatsapp</a>
                </nav>

            </div>

            <p className="text-center text-lg text-white mt-4">Todos los derechos reservados {date.getFullYear()} </p>
        </footer>
    </>
  )
}
