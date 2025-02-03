
type ServiceCardProps = {
    imageUrl: string,
    description: string
}

export default function ServiceCard({imageUrl, description} : ServiceCardProps) {
    return (
    <div className="bg-slate-100 px-2 py-4 rounded-md shadow-2xl flex flex-col justify-start items-center gap-3">
            <img 
                src={imageUrl} 
                alt="Service Info" 
                className=" w-11/12"
            />
        

        <p className="text-xl text-center font-bold">{description}</p>
    </div>
  )
}
