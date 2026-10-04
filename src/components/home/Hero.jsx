import {
  ArrowRight,
  CheckCircle2,
  Search,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import heroImage from '@/assets/hero.jpg'

function Hero() {
  return (
    <section className="overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Trámites internacionales
          </p>

          <h1 className="font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tus trámites legales,
            <span className="block text-accent">
              sin complicaciones.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Gestionamos documentos y trámites legales en Latinoamérica
            con acompañamiento claro, seguimiento y atención personalizada.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group"
            >
              Iniciar trámite

              <ArrowRight
                data-icon="inline-end"
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              <Search data-icon="inline-start" />
              Consultar trámite
            </Button>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent" />
              Seguimiento de tu trámite
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent" />
              Atención personalizada
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent" />
              Proceso claro
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-8 -top-8 -z-10 size-40 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="overflow-hidden rounded-3xl border bg-card shadow-xl">
            <img
              src={heroImage}
              alt="Representación de los servicios de Aliada Legal"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero