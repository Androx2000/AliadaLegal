import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

function LegalDialog({
  type,
  trigger,
}) {
  const isTerms = type === 'terms'

  return (
    <Dialog>
      <DialogTrigger render={trigger} />

      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            {isTerms
              ? 'Términos y Condiciones'
              : 'Política de Privacidad'}
          </DialogTitle>

          <DialogDescription>
            Última actualización: octubre de 2026
          </DialogDescription>
        </DialogHeader>

        {isTerms ? (
          <TermsContent />
        ) : (
          <PrivacyContent />
        )}
      </DialogContent>
    </Dialog>
  )
}

function TermsContent() {
  return (
    <div className="space-y-6 text-sm leading-7 text-muted-foreground">
      <section>
        <h3 className="font-semibold text-foreground">
          1. Naturaleza del servicio
        </h3>

        <p className="mt-2">
          Aliada Legal facilita la gestión de solicitudes de documentos y
          trámites mediante coordinación con profesionales, gestores,
          notarios y otras personas o instituciones relacionadas con cada
          trámite.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          2. Solicitudes
        </h3>

        <p className="mt-2">
          El envío de una solicitud mediante este sitio no constituye por sí
          mismo la contratación definitiva del servicio. Cada caso será
          revisado antes de confirmar disponibilidad, requisitos, precio y
          plazo estimado.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          3. Información proporcionada
        </h3>

        <p className="mt-2">
          El usuario declara que la información proporcionada es correcta y
          que cuenta con autorización para entregar los datos y documentos
          relacionados con el trámite solicitado.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          4. Pagos
        </h3>

        <p className="mt-2">
          Los pagos solo deberán realizarse después de recibir una
          confirmación y cotización de Aliada Legal mediante los medios
          oficiales indicados al cliente.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          5. Plazos
        </h3>

        <p className="mt-2">
          Los tiempos indicados son estimados y pueden variar debido a
          autoridades gubernamentales, registros, consulados, notarías,
          servicios de mensajería u otros terceros.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          6. Documentos sensibles
        </h3>

        <p className="mt-2">
          El cliente no deberá enviar documentos sensibles u originales
          hasta recibir instrucciones específicas por parte de Aliada Legal.
        </p>
      </section>
    </div>
  )
}

function PrivacyContent() {
  return (
    <div className="space-y-6 text-sm leading-7 text-muted-foreground">
      <section>
        <h3 className="font-semibold text-foreground">
          1. Datos que recopilamos
        </h3>

        <p className="mt-2">
          Podemos recopilar nombre, correo electrónico, número de teléfono,
          país, tipo de documento solicitado, medio de contacto preferido y
          la información adicional proporcionada por el usuario.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          2. Finalidad
        </h3>

        <p className="mt-2">
          Utilizamos estos datos para revisar solicitudes, comunicarnos con
          los clientes, preparar cotizaciones y gestionar los servicios
          solicitados.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          3. Almacenamiento
        </h3>

        <p className="mt-2">
          La información enviada mediante el sitio puede almacenarse en
          proveedores tecnológicos utilizados por Aliada Legal para operar
          el servicio y gestionar solicitudes.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          4. Acceso a la información
        </h3>

        <p className="mt-2">
          El acceso a los datos se limita al personal y colaboradores que
          necesiten la información para atender o gestionar una solicitud.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-foreground">
          5. Contacto
        </h3>

        <p className="mt-2">
          Los usuarios pueden solicitar información relacionada con sus
          datos personales utilizando los canales oficiales de contacto de
          Aliada Legal.
        </p>
      </section>
    </div>
  )
}

export default LegalDialog