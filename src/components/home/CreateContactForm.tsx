import { useMutation } from "@tanstack/react-query";
import { ContactForm } from "../../types";
import { useForm } from "react-hook-form";
import { createContact } from "../../api/ContactApi";
import {toast} from 'react-toastify'
import ErrorMessage from "./ErrorMessage";

export default function CreateContactForm() {

  const initialValues : ContactForm = {
    name: "",
    phone: 0,
    email: "",
    message: ""
  }

  const { register, reset, handleSubmit, formState: {errors} } = useForm( {defaultValues: initialValues} )

  const {mutate} = useMutation({
    mutationFn: createContact,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      toast.success(data)
      reset()
    }
  })
  
  const handleForm = async (formData : ContactForm) => mutate(formData)

  return (
    <form 
      onSubmit={handleSubmit(handleForm)}
      noValidate  
    >
        <div className=" flex flex-col justify-start mt-4 w-full">
          <label htmlFor="name" className="text-lg">
            Nombre y apellido
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa tu nombre y tu apellido"
            className="py-3 px-4 rounded-md flex-1 border border-gray-400"
            {...register("name", {
              required: "Digita tu nombre"
            })}
          />
            
          {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}

        </div>
        <div className="flex flex-col md:flex-row mt-6 md:justify-between md:items-center gap-6 md:gap-10">
          <div className=" flex flex-col gap-1 flex-1">
            <label htmlFor="phone" className="text-lg">
              Número de teléfono
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Ingresa tu número de teléfono"
              className="py-3 px-4 rounded-md flex-1 border border-gray-400"
              {...register("phone", {
                required: "Digita tu número de teléfono"
              })}
            />

            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </div>
          <div className=" flex flex-col gap-1 flex-1">
            <label htmlFor="emailInput" className="text-lg">
              Correo
            </label>
            <input
              id="emailInput"
              type="email"
              placeholder="Ingresa correo electrónico"
              className="py-3 px-4 rounded-md flex-1 border border-gray-400"
              {...register("email", {
                required: "Digita tu email"
              })}
            />

            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="text-lg block mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            className="py-3 px-4 rounded-md flex-1 border border-gray-400 w-full h-44"
            {...register("message", {
              required: "Digita un mensaje"
            })}
          ></textarea>

            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
        </div>
        <div className=" flex justify-between items-center gap-10 md:mr-5 ">
          <p className="text-gray-500">
            <span className="font-bold text-red-600">* </span>En caso de no poder
            ser contactado o contactada por medio de E-mail, se te estará
            contactando por medio de Whatsapp o llamada telefónica
          </p>
          <input
            type="submit"
            className="w-full md:w-auto shadow-lg text-center text-lg md:text-2xl text-white font-bold bg-blue-800 py-1 px-8 rounded-2xl hover:bg-blue-900 cursor-pointer"
            value="Enviar"
          />
        </div>
      
    </form>
  );
}
