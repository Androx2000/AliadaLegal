import ServiceCard from './ServiceCard'
import { services } from './services.data'

function ServicesSection() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-card py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Nuestros servicios
          </p>

          <h2 className="mt-3 font-heading text-3xl tracking-tight sm:text-4xl">
            Trámites legales sin tener que viajar.
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Te acompañamos durante el proceso para que sepas qué necesitas,
            qué estamos haciendo y cuál es el siguiente paso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection