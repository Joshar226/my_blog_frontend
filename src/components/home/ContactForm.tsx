import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"
import { TbMessageCircleStar } from "react-icons/tb";
import CreateContactForm from "./CreateContactForm";

export default function ContactForm() {
  const [whatsappButton, setWhatsappButton] = useState(true);

  return (
    <div
      id="contact"
      className=" w-full lg:w-1/2 bg-white shadow-2xl mx-auto rounded-lg p-5 md:p-6"
    >
      <div>
        <h2 className="font-bold text-2xl mb-7 text-center">
          Formulario de Contacto
        </h2>

        <div className="md:p-5 rounded-lg">
          <p className="text-xl mb-4 font-bold">
            ¿De que forma desea contactarnos?
          </p>

          <div className="flex gap-10 justify-center md:justify-start">
            <button 
              type="button"
              className={`flex flex-col items-center p-2 rounded-lg border-2 border-black/0 cursor-pointer ${whatsappButton ? 'border-black/100' : ''}`}
              onClick={() => setWhatsappButton(true)} 
            >
              <FaWhatsapp 
                color="green"
                size={40}
              />
              <p>Whatsapp</p>
            </button>

            <button 
              type="button"
              className={`flex flex-col items-center w-24 p-2 rounded-lg border-2 border-black/0 cursor-pointer ${!whatsappButton ? 'border-black/100' : ''}`}
              onClick={() => setWhatsappButton(false)}    
            >
              <TbMessageCircleStar
                size={40}
              />
              <p>Contáctame</p>
            </button>
          </div>

          {whatsappButton ? (
            <div className="mt-10 flex justify-center">
              <a
                href="https://wa.me/50687468528"
                className="text-center text-lg md:text-2xl lg:text-3xl text-white font-bold bg-green-700 py-2 px-4 rounded-2xl hover:bg-green-800"
              >
                Contáctanos
              </a>
            </div>
          ) : (
            <CreateContactForm/>
          )}
        </div>
      </div>
    </div>
  );
}
