import {
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import LegalDialog from '@/features/legal/LegalDialog'

const contactMethodLabels = {
  whatsapp: 'WhatsApp',
  email: 'Correo electrónico',
}

function RequestStepConfirmation({
  country,
  document,
  formData,
  onFieldChange,
}) {
  return (
    <div>
      <div>
        <h3 className="font-heading text-2xl">
          Revisa tu solicitud
        </h3>

        <p className="mt-2 text-muted-foreground">
          Confirma que la información sea correcta antes de enviarla.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border bg-muted/30 p-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                País
              </p>

              <p className="mt-1 font-medium">
                {country}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <FileText className="mt-0.5 size-5 shrink-0 text-accent" />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Documento
              </p>

              <p className="mt-1 font-medium">
                {document}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Correo
              </p>

              <p className="mt-1 break-all font-medium">
                {formData.email}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Teléfono
              </p>

              <p className="mt-1 font-medium">
                {formData.phone}
              </p>
            </div>
          </div>

          <div className="flex gap-3 sm:col-span-2">
            <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Contacto preferido
              </p>

              <p className="mt-1 font-medium">
                {contactMethodLabels[formData.contactMethod]}
              </p>
            </div>
          </div>

          {formData.message && (
            <div className="sm:col-span-2">
              <p className="text-xs font-medium text-muted-foreground">
                Información adicional
              </p>

              <p className="mt-1 whitespace-pre-wrap text-sm leading-6">
                {formData.message}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-3 rounded-xl bg-secondary p-4">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />

        <p className="text-sm leading-6">
          Todavía no se enviará ningún documento sensible. Un asesor
          revisará primero esta solicitud y te indicará el siguiente paso.
        </p>
      </div>

      <div className="mt-6 rounded-xl border p-4">
        {formData.termsAccepted ? (
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" />

            <div>
              <p className="text-sm font-semibold">
                Términos y Condiciones aceptados
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Has leído y aceptado los Términos y Condiciones necesarios
                para enviar esta solicitud.
              </p>

              <div className="mt-3 flex flex-wrap gap-4">
                <LegalDialog
                  type="terms"
                  trigger={
                    <button
                      type="button"
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      Volver a leer los términos
                    </button>
                  }
                />

                <LegalDialog
                  type="privacy"
                  trigger={
                    <button
                      type="button"
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      Política de Privacidad
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm font-semibold">
              Antes de continuar
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Debes leer los Términos y Condiciones completos y aceptarlos
              al final del documento.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <LegalDialog
                type="terms"
                requireAcceptance
                onAccept={() =>
                  onFieldChange(
                    'termsAccepted',
                    true
                  )
                }
                trigger={
                  <Button type="button">
                    Leer Términos y Condiciones
                  </Button>
                }
              />

              <LegalDialog
                type="privacy"
                trigger={
                  <Button
                    type="button"
                    variant="outline"
                  >
                    Política de Privacidad
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RequestStepConfirmation