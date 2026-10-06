import { Input } from '@/components/ui/input'
import IntlTelInput from '@intl-tel-input/react'
import 'intl-tel-input/styles'
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
  errors,
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
            aria-invalid={Boolean(errors.name)}

          />
          {errors.name && (
  <p className="mt-2 text-sm text-destructive">
    {errors.name}
  </p>
  
)}
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
            aria-invalid={Boolean(errors.email)}

          />
          {errors.email && (
  <p className="mt-2 text-sm text-destructive">
    {errors.email}
  </p>
)}
        </div>

      
  <div className="mt-2">

<IntlTelInput
  value={formData.phone}
  initialCountry="us"
  onlyCountries={[
    'sv',
    'us',
    'mx',
    'gt',
    'hn',
    'co',
    'ec',
    'pe',
    'ar',
  ]}
  separateDialCode
  strictMode
  loadUtils={() => import('intl-tel-input/utils')}
  onChangeNumber={(number) =>
    onFieldChange('phone', number)
  }
  onChangeValidity={(isValid) =>
    onFieldChange('phoneValid', isValid)
  }
  onChangeCountry={(iso2) =>
    onFieldChange('phoneCountry', iso2)
  }
  inputProps={{
    id: 'request-phone',
    name: 'phone',
    autoComplete: 'tel',
    placeholder: '7000 0000',
    'aria-invalid': Boolean(errors.phone),
    className:
      'h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none',
  }}
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
              <SelectValue placeholder="Medio de contacto preferido" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Whatsapp">
                WhatsApp
              </SelectItem>

              <SelectItem value="Correo electrónico">
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