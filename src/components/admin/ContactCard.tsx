import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Contact } from "../../types";
import { updateStatus } from "../../api/ContactApi";
import { toast } from "react-toastify";


type ContactCardProps = {
  contact : Contact
}

export default function ContactCard({contact} : ContactCardProps) {

  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn: updateStatus,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['contacts']})
      toast.success(data)
    }
  })

  const handleChangeStatus = async (id : Contact['_id']) => mutate(id)

  return (
      <div className="bg-slate-100 p-4 rounded-md shadow-2xl flex flex-col gap-3 justify-between">
        <div className=" space-y-4">
          <p className="font-bold text-xl ">{contact.name}</p>
          <p>
            <span className="font-bold text-lg">Numero de teléfono:</span>
            <br />
            {contact.phone}
          </p>
          <p>
            <span className="font-bold text-lg">Correo Electrónico:</span>
            <br />
            {contact.email}
          </p>
          <p>
            <span className="font-bold text-lg">Mensaje:</span>
            <br />
            {contact.message}
          </p>
        </div>

        <button
          type="button"
          className={`text-white uppercase font-bold py-2 rounded-lg mt-2 cursor-pointer border-2 ${contact.contacted ? 'bg-green-500 border-green-500 hover:bg-white hover:text-green-500' : 'bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500'} `}
          onClick={() => handleChangeStatus(contact._id)}
        >
          {contact.contacted ? 'Contactado' : 'Pendiente'}
        </button>
      </div>
  );
}
