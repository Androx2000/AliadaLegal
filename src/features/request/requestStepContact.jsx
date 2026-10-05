import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

function RequestStepContact({
  formData,
  onFieldChange,
}) {
  return (
    <div>
      <div>
        <h3 className="font-heading text-2xl">
          ¿Cómo podemos contactarte?
        </h3>

        <p className="mt-2 text-muted-foreground">
          Comparte tus datos para que podamos revisar tu solicitud y
          comunicarnos contigo.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="request-name"
            className="text-sm font-medium"
          >
            Nombre completo
          </label>

          <Input
            id="request-name"
            className="mt-2"
            value={formData.name}
            onChange={(event) =>
              onFieldChange('name', event.target.value)
            }
            placeholder="Tu nombre completo"
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="request-email"
            className="text-sm font-medium"
          >
            Correo electrónico
          </label>

          <Input
            id="request-email"
            type="email"
            className="mt-2"
            value={formData.email}
            onChange={(event) =>
              onFieldChange('email', event.target.value)
            }
            placeholder="nombre@correo.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="request-phone"
            className="text-sm font-medium"
          >
            Teléfono
          </label>

          <Input
            id="request-phone"
            type="tel"
            className="mt-2"
            value={formData.phone}
            onChange={(event) =>
              onFieldChange('phone', event.target.value)
            }
            placeholder="+503 7000 0000"
            autoComplete="tel"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-medium">
            Medio de contacto preferido
          </label>

          <Select
            value={formData.contactMethod}
            onValueChange={(value) =>
              onFieldChange('contactMethod', value)
            }
          >
            <SelectTrigger className="mt-2 w-full">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Whatsapp">
                WhatsApp
              </SelectItem>

              <SelectItem value="email">
                Correo electrónico
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="request-message"
            className="text-sm font-medium"
          >
            Información adicional
          </label>

          <Textarea
            id="request-message"
            className="mt-2 min-h-28"
            value={formData.message}
            onChange={(event) =>
              onFieldChange('message', event.target.value)
            }
            placeholder="Cuéntanos algún detalle adicional sobre tu trámite."
          />

          <p className="mt-2 text-xs text-muted-foreground">
            No incluyas contraseñas, números completos de tarjetas ni otra
            información que no sea necesaria para evaluar tu solicitud.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RequestStepContact