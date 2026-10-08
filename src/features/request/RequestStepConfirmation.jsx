import {
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

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

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-muted/40">
        <input
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(event) =>
            onFieldChange(
              'termsAccepted',
              event.target.checked
            )
          }
          className="mt-1 size-4 shrink-0 accent-primary"
        />

        <span className="text-sm leading-6">
          He leído y acepto los Términos y Condiciones y autorizo el uso
          de mis datos para gestionar esta solicitud.
        </span>
      </label>
    </div>
  )
}

export default RequestStepConfirmation