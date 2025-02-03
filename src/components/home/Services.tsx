import ServiceCard from "./ServiceCard"

export default function Services() {

  const services = [
    {
      imageUrl: "/diseñoydesarrollo.webp",
      description: "Diseño y Desarrollo Web"
    },
    {
      imageUrl: "/frontend&backend.webp",
      description: "Desarrollo frontend/backend"
    },
    {
      imageUrl: "/DB.webp",
      description: "Integraciones con bases de datos"
    }
  ]

  const tecnologies = [
    {
      imageUrl: "/html.webp",
      description: "HTML"
    },
    {
      imageUrl: "/css.webp",
      description: "CSS"
    },
    {
      imageUrl: "/js.webp",
      description: "JavaScript"
    },
    {
      imageUrl: "/react.webp",
      description: "React JS"
    },
    {
      imageUrl: "/nextjs.webp",
      description: "Next.JS"
    },
    {
      imageUrl: "/postgre.webp",
      description: "PostgreSQL"
    },
    {
      imageUrl: "/mongo.webp",
      description: "MongoDB"
    },
    {
      imageUrl: "/prisma.webp",
      description: "Prisma"
    }
  ]

  return (
    <>
      <div id="services" className="container bg-white shadow-2xl mx-auto rounded-lg p-6">
        <h2 className="font-bold text-2xl">Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3">
          {services.map( service => (
            <ServiceCard
              key={service.imageUrl}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          ))}
        </div>

        <h2 className="font-bold text-2xl mt-16">Tecnologías con las que trabajamos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3">
        {tecnologies.map( tecnology => (
            <ServiceCard
              key={tecnology.imageUrl}
              imageUrl={tecnology.imageUrl}
              description={tecnology.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}
