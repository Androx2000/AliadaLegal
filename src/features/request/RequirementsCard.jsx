import {
  FileText,
  Landmark,
  ShieldCheck,
} from 'lucide-react'

function RequirementsCard({ requirements }) {
  if (!requirements) {
    return null
  }

  return (
    <div className="rounded-2xl border bg-muted/40 p-5">
      <div>
        <p className="text-sm font-semibold text-accent">
          Información necesaria
        </p>

        <h3 className="mt-1 font-heading text-xl">
          Qué debes compartir
        </h3>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex gap-3">
          <Landmark className="mt-0.5 size-5 shrink-0 text-accent" />

          <div>
            <p className="text-sm font-semibold">
              Cómo se tramita
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {requirements.tramite}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" />

          <div>
            <p className="text-sm font-semibold">
              Poder o autorización
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {requirements.poder}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <FileText className="mt-0.5 size-5 shrink-0 text-accent" />

          <div>
            <p className="text-sm font-semibold">
              Qué debes presentar
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {requirements.requisitos}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequirementsCard