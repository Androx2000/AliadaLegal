import {
  CheckCircle2,
  Mail,
  MessageCircle,
} from 'lucide-react'

function RequestSuccess({
  contactMethod,
  email,
}) {
  const isWhatsApp =
    contactMethod === 'whatsapp'

  return (
    <div
      className="py-8 text-center sm:py-12"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary">
        <CheckCircle2 className="size-7 text-accent" />
      </div>

      <h3 className="mt-5 font-heading text-2xl sm:text-3xl">
        Recibimos tu solicitud
      </h3>

      <p className="mx-auto mt-3 max-w-lg leading-7 text-muted-foreground">
        Nuestro equipo revisará la información antes de iniciar cualquier
        trámite.
      </p>

      <div className="mx-auto mt-7 max-w-md rounded-2xl border bg-muted/30 p-5 text-left">
        <div className="flex gap-3">
          {isWhatsApp ? (
            <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" />
          ) : (
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
          )}

          <div>
            <p className="text-sm font-semibold">
              Próximo paso
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {isWhatsApp
                ? 'Nos comunicaremos contigo por WhatsApp para revisar tu solicitud y explicarte cómo continuar.'
                : `Nos comunicaremos contigo por correo electrónico a ${email}.`}
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-md text-xs leading-5 text-muted-foreground">
        No realices ningún pago ni envíes documentos sensibles hasta que
        nuestro equipo confirme los siguientes pasos.
      </p>
    </div>
  )
}

export default RequestSuccess