import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  FileText,
} from 'lucide-react'

const contactMethodLabels = {
  whatsapp: 'WhatsApp',
  email: 'Correo electrónico',
}

function RequestStepConfirmation({
  country,
  document,
  formData,
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
        </div>
      </div>

      <div className="mt-6 flex gap-3 rounded-xl bg-secondary p-4">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />

        <p className="text-sm leading-6">
          Todavía no se enviará ningún documento sensible. Un asesor revisará
          primero esta solicitud y te indicará el siguiente paso.
        </p>
      </div>
    </div>
  )
}

export default RequestStepConfirmation