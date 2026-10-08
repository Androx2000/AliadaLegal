import { useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

function LegalDialog(
  {
  type,
  trigger,
  requireAcceptance = false,
  onAccept,
}) {
  const scrollRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [canAccept, setCanAccept] = useState(false)
  const isTerms = type === 'terms'

 function handleOpenChange(nextOpen) {
  setOpen(nextOpen)

  if (nextOpen && requireAcceptance) {
    setCanAccept(false)

    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    })
  }
}

  function handleScroll(event) {
    if (!requireAcceptance) {
      return
    }

    const element = event.currentTarget

    const distanceFromBottom =
      element.scrollHeight -
      element.scrollTop -
      element.clientHeight

    if (distanceFromBottom <= 20) {
      setCanAccept(true)
    }
  }

  function handleAccept() {
    if (!canAccept) {
      return
    }

    onAccept?.()
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
    >
      <DialogTrigger render={trigger} />

      <DialogContent className="max-h-[90vh] sm:max-w-3xl">
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

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="max-h-[60vh] overflow-y-auto pr-3"
        >
          {isTerms ? (
            <TermsContent />
          ) : (
            <PrivacyContent />
          )}
        </div>

        {isTerms && requireAcceptance && (
          <DialogFooter>
            <div className="flex w-full flex-col gap-3">
              {!canAccept && (
                <p className="text-center text-xs text-muted-foreground sm:text-left">
                  Desplázate hasta el final para habilitar la aceptación.
                </p>
              )}

              <Button
                type="button"
                disabled={!canAccept}
                onClick={handleAccept}
                className="sm:ml-auto"
              >
                Aceptar Términos y Condiciones
              </Button>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

function TermsContent() {
  return (
    <div className="space-y-5 text-sm leading-7 text-muted-foreground">
      <div>
        <h3 className="text-lg font-bold text-foreground">
          ALIADA LEGAL
        </h3>

        <p className="mt-2">
          Al contratar, solicitar o utilizar los servicios de Aliada Legal,
          el cliente declara que ha leído, comprendido y aceptado los
          siguientes Términos y Condiciones. Estos términos regulan la
          prestación de servicios de coordinación, gestión e intermediación
          logística relacionados con la obtención, procesamiento,
          traducción, apostilla, legalización, transporte y entrega de
          documentos.
        </p>
      </div>

      <section>
        <h4 className="font-bold text-foreground">
          1. NATURALEZA DEL SERVICIO
        </h4>

        <p className="mt-2">
          Aliada Legal presta servicios de coordinación, gestión e
          intermediación administrativa y logística. Aliada Legal{' '}
          <strong className="text-foreground">
            no es una firma de abogados, no es una autoridad gubernamental,
            no representa a gobiernos ni autoridades migratorias y no presta
            asesoría legal, migratoria ni jurídica
          </strong>
          . La contratación de nuestros servicios no constituye una relación
          abogado-cliente ni garantiza la aprobación de ningún trámite,
          solicitud, beneficio migratorio o procedimiento ante una
          autoridad.
        </p>

        <p className="mt-2">
          Cuando sea necesario, Aliada Legal podrá coordinar con abogados,
          firmas de abogados, gestores, traductores, empresas de mensajería,
          couriers, instituciones públicas, registros, autoridades y otros
          proveedores independientes para ejecutar el servicio solicitado.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          2. INFORMACIÓN Y DOCUMENTOS PROPORCIONADOS POR EL CLIENTE
        </h4>

        <p className="mt-2">
          El cliente declara que toda la información, identificación,
          documentos, fotografías, firmas, datos y demás materiales
          proporcionados a Aliada Legal son verdaderos, legítimos, completos
          y proporcionados de manera autorizada.
        </p>

        <p className="mt-2">
          El cliente es responsable de verificar la exactitud de la
          información proporcionada y de contar con autorización para
          proporcionar información o documentos pertenecientes a terceros.
          Aliada Legal no será responsable por consecuencias derivadas de
          información falsa, incompleta, incorrecta, alterada, fraudulenta o
          proporcionada sin la autorización correspondiente.
        </p>

        <p className="mt-2">
          Aliada Legal podrá rechazar, suspender o cancelar un servicio
          cuando existan indicios razonables de fraude, falsificación,
          suplantación de identidad, uso ilegal de documentos o cualquier
          otra actividad ilícita.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          3. AUTORIZACIÓN PARA EL USO Y TRATAMIENTO DE INFORMACIÓN
        </h4>

        <p className="mt-2">
          Al aceptar estos Términos y Condiciones, el cliente autoriza
          expresamente a Aliada Legal, en la medida permitida por la
          legislación aplicable, a recopilar, recibir, almacenar, organizar,
          utilizar, procesar, transmitir y compartir la información y
          documentación necesaria para prestar el servicio solicitado.
        </p>

        <p className="mt-2">
          Esta autorización puede incluir el intercambio de información con
          abogados, firmas de abogados, gestores, traductores, empresas de
          mensajería, couriers, proveedores de servicios, autoridades,
          registros públicos, instituciones gubernamentales, procesadores de
          pago y otros terceros que razonablemente necesiten dicha
          información para ejecutar, completar, verificar o dar seguimiento
          al servicio contratado.
        </p>

        <p className="mt-2">
          Cuando sea necesario para prestar el servicio, la información y
          documentación podrá ser transferida o procesada en otros países.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          4. DATOS PERSONALES Y DOCUMENTACIÓN SENSIBLE
        </h4>

        <p className="mt-2">
          El cliente entiende que determinados servicios pueden requerir
          documentos que contengan información personal o sensible,
          incluyendo, entre otros, documentos de identidad, pasaportes,
          certificados, antecedentes o registros policiales, información
          migratoria, datos de contacto y documentación relacionada con
          trámites personales.
        </p>

        <p className="mt-2">
          Aliada Legal adoptará medidas razonables para proteger la
          información bajo su control. Sin embargo, el cliente reconoce que
          ningún sistema de almacenamiento, transmisión electrónica, correo
          electrónico, plataforma digital o servicio de terceros puede
          garantizar una seguridad absoluta.
        </p>

        <p className="mt-2">
          Aliada Legal no será responsable por accesos no autorizados,
          pérdida, uso indebido, fraude o robo de identidad cuando estos
          hechos sean exclusivamente atribuibles al cliente, a sus
          dispositivos, cuentas, contraseñas, conexiones, acciones u
          omisiones, o a terceros independientes fuera del control razonable
          de Aliada Legal, sin perjuicio de aquellas responsabilidades que
          legalmente no puedan excluirse.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          5. PROVEEDORES, AUTORIDADES Y TERCEROS
        </h4>

        <p className="mt-2">
          Aliada Legal podrá depender de autoridades gubernamentales,
          registros públicos, abogados, gestores, traductores, couriers,
          empresas de transporte, proveedores tecnológicos, procesadores de
          pago y otros terceros para completar los servicios.
        </p>

        <p className="mt-2">
          Aliada Legal no controla las decisiones, requisitos, tiempos de
          procesamiento, tarifas, cambios de procedimientos, disponibilidad,
          sistemas, políticas o actuaciones de dichos terceros.
        </p>

        <p className="mt-2">
          Por lo tanto, Aliada Legal no garantiza que una autoridad emita un
          documento, que un trámite sea aprobado, que una institución acepte
          un documento, que un proveedor cumpla un plazo determinado o que
          un tercero mantenga sus procedimientos sin modificaciones.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          6. DOCUMENTOS, TRADUCCIONES, APOSTILLAS Y LEGALIZACIONES
        </h4>

        <p className="mt-2">
          Aliada Legal podrá coordinar la obtención, preparación, traducción,
          apostilla, legalización o envío de documentos solicitados por el
          cliente.
        </p>

        <p className="mt-2">
          El cliente reconoce que la aceptación de un documento, traducción,
          apostilla, legalización o certificación depende de la autoridad,
          institución, tribunal, consulado, agencia gubernamental, firma
          legal u organismo receptor correspondiente.
        </p>

        <p className="mt-2">
          Aliada Legal no garantiza que un documento sea aceptado por una
          autoridad o institución determinada cuando dicha decisión
          corresponda exclusivamente a dicha autoridad o institución.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          7. DOCUMENTOS PERDIDOS, NO RECIBIDOS, DAÑADOS O EXTRAVIADOS
        </h4>

        <p className="mt-2">
          Cuando el servicio incluya el envío, traslado, entrega o recepción
          de documentos físicos, Aliada Legal podrá utilizar servicios de
          mensajería, courier, correo, transporte u otros proveedores
          independientes.
        </p>

        <p className="mt-2">
          El cliente reconoce que durante el transporte pueden ocurrir
          pérdidas, extravíos, retrasos, daños, entregas incorrectas,
          devoluciones, retenciones o imposibilidad de entrega por
          circunstancias que se encuentren fuera del control directo de
          Aliada Legal.
        </p>

        <p className="mt-2">
          Aliada Legal realizará las gestiones razonables de seguimiento y
          coordinación que correspondan ante el proveedor responsable. Sin
          embargo,{' '}
          <strong className="text-foreground">
            Aliada Legal no garantiza la entrega efectiva de los documentos
            ni será responsable por pérdidas, extravíos, daños, retrasos,
            entregas incorrectas o documentos que no lleguen a su
            destinatario cuando dichos hechos sean atribuibles al servicio
            de mensajería, courier, correo, transporte, autoridad, proveedor
            externo u otro tercero
          </strong>
          , salvo cuando la legislación aplicable establezca una
          responsabilidad que no pueda excluirse.
        </p>

        <p className="mt-2">
          En caso de pérdida, extravío, daño o no recepción de documentos,{' '}
          <strong className="text-foreground">
            el cliente acepta que el monto pagado por el servicio no
            necesariamente será reembolsado en su totalidad y que Aliada
            Legal no garantiza un reembolso del 100%
          </strong>
          .
        </p>

        <p className="mt-2">
          Cualquier reembolso o compensación que pudiera corresponder podrá
          estar sujeto a los costos ya incurridos, al estado de ejecución
          del servicio, a las condiciones aplicables y, cuando corresponda,
          a los montos efectivamente recuperados de la empresa de
          mensajería, proveedor o tercero responsable.
        </p>

        <p className="mt-2">
          Los gastos ya utilizados o pagados a terceros, incluyendo, entre
          otros, tasas gubernamentales, documentos, certificados,
          traducciones, apostillas, legalizaciones, honorarios profesionales,
          transporte, mensajería y otros costos no recuperables, podrán no
          ser reembolsables.
        </p>

        <p className="mt-2">
          Aliada Legal no será responsable por los costos adicionales que
          resulten de tener que solicitar, obtener, procesar, traducir,
          apostillar, legalizar o enviar nuevamente un documento perdido,
          extraviado, dañado o no recibido cuando el incidente sea atribuible
          a un tercero o a circunstancias fuera del control razonable de
          Aliada Legal.
        </p>

        <p className="mt-2">
          Cuando exista la posibilidad de contratar un seguro o cobertura
          adicional para un envío, el cliente podrá asumir dicho costo si
          desea contar con una protección adicional.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          8. PAGOS, COSTOS Y REEMBOLSOS
        </h4>

        <p className="mt-2">
          El cliente acepta pagar el precio informado para el servicio
          solicitado y cualquier costo adicional que haya sido previamente
          informado y aceptado.
        </p>

        <p className="mt-2">
          Una vez iniciado el servicio, determinados costos pueden haber sido
          utilizados, pagados o comprometidos con terceros y, por lo tanto,
          pueden no ser recuperables.
        </p>

        <p className="mt-2">
          El hecho de que un trámite no produzca el resultado esperado, sea
          retrasado, rechazado por una autoridad o no pueda completarse por
          circunstancias externas no implica automáticamente el derecho a un
          reembolso total.
        </p>

        <p className="mt-2">
          Los reembolsos, cuando correspondan, estarán sujetos a las
          condiciones específicas del servicio y a la legislación aplicable.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          9. RETRASOS, CAMBIOS Y FUERZA MAYOR
        </h4>

        <p className="mt-2">
          Aliada Legal no garantiza fechas exactas de entrega o finalización
          cuando el servicio dependa de autoridades, proveedores, sistemas
          electrónicos, couriers, transporte internacional, condiciones
          climáticas, conflictos, cierres institucionales, cambios
          regulatorios, fallas técnicas, interrupciones de servicios,
          restricciones de viaje, desastres naturales u otras circunstancias
          fuera de su control razonable.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          10. LIMITACIÓN DE RESPONSABILIDAD
        </h4>

        <p className="mt-2">
          En la máxima medida permitida por la legislación aplicable, Aliada
          Legal no será responsable por daños, pérdidas, costos, retrasos o
          consecuencias derivados exclusivamente de actuaciones u omisiones
          del cliente, información o documentación incorrecta proporcionada
          por el cliente, decisiones de autoridades, actuaciones de terceros
          independientes, fallas de servicios de mensajería o transporte,
          cambios legales o regulatorios, fallas de plataformas o sistemas
          de terceros, fuerza mayor u otras circunstancias fuera del control
          razonable de Aliada Legal.
        </p>

        <p className="mt-2">
          Ninguna disposición de estos Términos y Condiciones pretende
          excluir o limitar responsabilidades que legalmente no puedan ser
          excluidas o limitadas.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          11. COMUNICACIONES
        </h4>

        <p className="mt-2">
          El cliente autoriza a Aliada Legal a comunicarse con él mediante
          correo electrónico, teléfono, WhatsApp u otros medios de contacto
          proporcionados por el cliente para solicitar información,
          confirmar datos, informar avances, solicitar documentos, comunicar
          incidencias y gestionar el servicio contratado.
        </p>

        <p className="mt-2">
          El cliente es responsable de mantener actualizados sus datos de
          contacto y de revisar las comunicaciones relacionadas con su
          servicio.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          12. CONSERVACIÓN DE INFORMACIÓN
        </h4>

        <p className="mt-2">
          Aliada Legal podrá conservar información y documentación durante
          el tiempo razonablemente necesario para prestar el servicio,
          cumplir obligaciones legales, resolver reclamaciones, prevenir
          fraude, mantener registros de las operaciones y proteger sus
          derechos.
        </p>

        <p className="mt-2">
          Cuando ya no exista una razón legítima o legal para conservar
          determinada información, esta podrá ser eliminada, destruida o
          anonimizada conforme a las prácticas y obligaciones aplicables.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          13. ACEPTACIÓN ELECTRÓNICA
        </h4>

        <p className="mt-2">
          El cliente reconoce que la selección de la casilla de aceptación y
          el posterior envío, contratación o continuación del servicio
          constituyen una manifestación electrónica de su consentimiento y
          aceptación de estos Términos y Condiciones.
        </p>

        <p className="mt-2">
          Aliada Legal podrá conservar registros de la aceptación
          electrónica, incluyendo la versión de los términos aceptados,
          fecha, hora, datos de contacto y registros técnicos disponibles,
          con el propósito de acreditar la aceptación y gestionar la relación
          de servicio.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          14. USO LEGÍTIMO DEL SERVICIO
        </h4>

        <p className="mt-2">
          El cliente se compromete a utilizar los servicios de Aliada Legal
          únicamente para fines legítimos.
        </p>

        <p className="mt-2">
          No está permitido utilizar los servicios para falsificar
          documentos, suplantar identidades, presentar información falsa,
          cometer fraude, evadir requisitos legales o realizar cualquier
          actividad contraria a la legislación aplicable.
        </p>

        <p className="mt-2">
          Aliada Legal podrá rechazar, suspender o cancelar cualquier
          servicio cuando considere razonablemente que existe un riesgo de
          uso fraudulento, ilegal o indebido.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-foreground">
          15. LEGISLACIÓN APLICABLE
        </h4>

        <p className="mt-2">
          Estos Términos y Condiciones se interpretarán y aplicarán en la
          máxima medida permitida por las leyes aplicables al servicio y a la
          jurisdicción correspondiente. En aquellos aspectos en los que
          resulte legalmente aplicable y permitido, podrá aplicarse la
          legislación de la República de El Salvador.
        </p>

        <p className="mt-2">
          Si alguna disposición de estos Términos y Condiciones fuera
          considerada inválida o inaplicable, las demás disposiciones
          permanecerán vigentes en la medida permitida por la legislación
          aplicable.
        </p>
      </section>

      <div className="border-t pt-5">
        <p className="font-medium text-foreground">
          Fin de los Términos y Condiciones
        </p>
      </div>
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