import ProcessStep from "./ProcessStep";
import { processSteps } from "./process.data";

function ProcessSection() {
    return (

        <section 
        id="como-funciona"
        className="scroll-mt-20 bg-background py-20 lg:py-28">

            <div className="mx-auto max-w-7x1 px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                    Cómo funciona
                    </p>

                     <h2 className="mt-3 font heading text-3xl tracking-tight sm:text-4xl">
                                    Un proceso claro de principio a fin.
                     </h2>

 <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Sabes qué está pasando con tu trámite, qué necesitamos de ti y
            cuál es el siguiente paso.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
          <ProcessStep
  key={step.id}
  step={step}
  isLast={index === processSteps.length - 1}
/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection