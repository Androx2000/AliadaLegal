import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import RequirementsCard from './RequirementsCard'
import {
  countries,
  documents,
} from './request.data'

function RequestStepService({
  country,
  document,
  requirements,
  onCountryChange,
  onDocumentChange,
}) {
  return (
    <div>
      <div>
        <h3 className="font-heading text-2xl">
          ¿Qué trámite necesitas?
        </h3>

        <p className="mt-2 text-muted-foreground">
          Selecciona el país donde se emitió el documento y el tipo de
          documento que necesitas.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">
            País de origen
          </label>

          <Select
            value={country}
            onValueChange={onCountryChange}
          >
            <SelectTrigger className="mt-2 w-full">
              <SelectValue placeholder="Selecciona un país" />
            </SelectTrigger>

            <SelectContent>
              {countries.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">
            Documento
          </label>

          <Select
            value={document}
            onValueChange={onDocumentChange}
          >
            <SelectTrigger className="mt-2 w-full">
              <SelectValue placeholder="Selecciona un documento" />
            </SelectTrigger>

            <SelectContent>
              {documents.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <RequirementsCard
          requirements={requirements}
        />
      </div>
    </div>
  )
}

export default RequestStepService