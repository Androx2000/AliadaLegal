import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'

import RequestStepService from './RequestStepService'
import { resolveRequirements } from './request.utils'

function RequestWizard() {
  const [country, setCountry] = useState('')
  const [document, setDocument] = useState('')

  const requirements = useMemo(
    () => resolveRequirements(country, document),
    [country, document]
  )

  const canContinue = Boolean(country && document)

  return (
    <section
      id="iniciar-tramite"
      className="scroll-mt-20 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Inicia tu solicitud
          </p>

          <h2 className="mt-3 font-heading text-3xl tracking-tight sm:text-4xl">
            Cuéntanos qué necesitas.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Antes de pedirte datos personales, te mostramos qué información
            necesitas para el trámite seleccionado.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <RequestStepService
            country={country}
            document={document}
            requirements={requirements}
            onCountryChange={setCountry}
            onDocumentChange={setDocument}
          />

          <div className="mt-8 flex justify-end">
            <Button
              disabled={!canContinue}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequestWizard