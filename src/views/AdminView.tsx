import { useQuery } from "@tanstack/react-query";
import ContactCard from "../components/admin/ContactCard";
import { getContacts } from "../api/ContactApi";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function AdminView() {
    let datos
    const [status, setStatus] = useState(0)

    const {data, isLoading} = useQuery({
        queryKey: ["contacts"],
        queryFn: getContacts
    })

    if(data) {
        switch (status) {
            case 0:
                datos = data
                break
            case 1 :
                datos = data.filter( dato => dato.contacted === false)
                break
            case 2: 
                datos = data.filter( dato => dato.contacted === true)
                break
            default:
                break;
        }
    }
    if (isLoading) return "Cargando...";
  if(datos) 
    return (
        <>
            <header className=" bg-black w-full py-5">
                <div className="container mx-auto flex justify-end">

                <nav className="text-white text-xs md:text-lg lg:text-xl uppercase font-bold flex gap-5">
                    <a className="hover:text-blue-400" href="#home">
                    Inicio
                    </a>
                    <a className="hover:text-blue-400" href="#sobre-nosotros">
                    Sobre Nosotros
                    </a>
                    <a className="hover:text-blue-400" href="#services">
                    Servicios
                    </a>
                    <a className="hover:text-blue-400" href="#contact">
                    Contacto
                    </a>
                </nav>
                </div>
            </header>

            <main className="container bg-white shadow-2xl mx-auto rounded-lg p-6 mt-16 space-y-4">
                <div className="flex gap-4">
                <button
                    className="bg-purple-300 px-2 py-1 border-2 border-purple-700 rounded-lg text-purple-700 font-bold uppercase cursor-pointer hover:bg-purple-400"
                    onClick={() => setStatus(0)}
                >
                    Todas
                </button>
                <button
                    className="bg-orange-200 px-2 py-1 border-2 border-orange-700 rounded-lg text-orange-700 font-bold uppercase cursor-pointer hover:bg-orange-300"
                    onClick={() => setStatus(1)}
                >
                    Pendientes
                </button>

                <button
                    className="bg-green-200 px-2 py-1 border-2 border-green-700 rounded-lg text-green-700 font-bold uppercase cursor-pointer hover:bg-green-300"
                    onClick={() => setStatus(2)}
                >
                    Completadas
                </button>
                </div>

                <h2 className="font-bold text-2xl">Solicitudes de Contacto</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {datos.map( contact => <ContactCard key={contact._id} contact={contact} />)}
                </div>
            </main>
            <ToastContainer/>
        </>
    )
}
