import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'

import RequestStepConfirmation from './RequestStepConfirmation'
import RequestStepContact from './RequestStepContact'
import RequestStepService from './RequestStepService'
import { resolveRequirements } from './request.utils'

function RequestWizard() {
  const [step, setStep] = useState(1)

  const [country, setCountry] = useState('')
  const [document, setDocument] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneValid: false,
    contactMethod: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const requirements = useMemo(
    () => resolveRequirements(country, document),
    [country, document]
  )

  const canContinue = Boolean(country && document)

  function handleFieldChange(field, value) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }))
  }

  function validateContactStep() {
    const newErrors = {}

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Escribe tu nombre completo.'
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = 'Ingresa un correo electrónico válido.'
    }

    if (!formData.phone || !formData.phoneValid) {
  newErrors.phone = 'Ingresa un número de teléfono válido.'
}

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  function handleContactContinue() {
    if (!validateContactStep()) {
      return
    }

    setStep(3)
  }

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
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <span
            className={
              step === 1
                ? 'font-semibold text-accent'
                : 'text-muted-foreground'
            }
          >
            1. Tu trámite
          </span>

          <span className="text-border">—</span>

          <span
            className={
              step === 2
                ? 'font-semibold text-accent'
                : 'text-muted-foreground'
            }
          >
            2. Tus datos
          </span>

          <span className="text-border">—</span>

          <span
            className={
              step === 3
                ? 'font-semibold text-accent'
                : 'text-muted-foreground'
            }
          >
            3. Confirmación
          </span>
        </div>

        <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          {step === 1 && (
            <RequestStepService
              country={country}
              document={document}
              requirements={requirements}
              onCountryChange={setCountry}
              onDocumentChange={setDocument}
            />
          )}

          {step === 2 && (
            <RequestStepContact
              formData={formData}
              errors={errors}
              onFieldChange={handleFieldChange}
            />
          )}

          {step === 3 && (
            <RequestStepConfirmation
              country={country}
              document={document}
              formData={formData}
            />
          )}

          <div className="mt-8 flex justify-between gap-3">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Atrás
              </Button>
            ) : (
              <div />
            )}

            {step === 1 && (
              <Button
                disabled={!canContinue}
                onClick={() => setStep(2)}
              >
                Continuar
              </Button>
            )}

            {step === 2 && (
              <Button onClick={handleContactContinue}>
                Continuar
              </Button>
            )}

            {step === 3 && (
              <Button>
                Enviar solicitud
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequestWizard