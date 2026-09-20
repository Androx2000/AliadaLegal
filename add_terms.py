import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

terms_modal = """
function TerminosModal({ open, onClose, onAccept }) {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6">
      <div 
        className="w-full max-w-2xl bg-card rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog" aria-modal="true" aria-labelledby="terms-title"
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-border">
          <h2 id="terms-title" className="font-display text-xl text-foreground">Términos y Condiciones</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div className="px-6 py-6 overflow-y-auto flex-1 prose prose-sm max-w-none text-foreground/80" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          <h3 className="text-lg font-bold text-foreground">ALIADA LEGAL</h3>
          <p>Al contratar, solicitar o utilizar los servicios de Aliada Legal, el cliente declara que ha leído, comprendido y aceptado los siguientes Términos y Condiciones. Estos términos regulan la prestación de servicios de coordinación, gestión e intermediación logística relacionados con la obtención, procesamiento, traducción, apostilla, legalización, transporte y entrega de documentos.</p>
          
          <h4 className="font-bold mt-4 text-foreground">1. NATURALEZA DEL SERVICIO</h4>
          <p>Aliada Legal presta servicios de coordinación, gestión e intermediación administrativa y logística. Aliada Legal <strong>no es una firma de abogados, no es una autoridad gubernamental, no representa a gobiernos ni autoridades migratorias y no presta asesoría legal, migratoria ni jurídica</strong>. La contratación de nuestros servicios no constituye una relación abogado-cliente ni garantiza la aprobación de ningún trámite, solicitud, beneficio migratorio o procedimiento ante una autoridad.</p>
          <p>Cuando sea necesario, Aliada Legal podrá coordinar con abogados, firmas de abogados, gestores, traductores, empresas de mensajería, couriers, instituciones públicas, registros, autoridades y otros proveedores independientes para ejecutar el servicio solicitado.</p>

          <h4 className="font-bold mt-4 text-foreground">2. INFORMACIÓN Y DOCUMENTOS PROPORCIONADOS POR EL CLIENTE</h4>
          <p>El cliente declara que toda la información, identificación, documentos, fotografías, firmas, datos y demás materiales proporcionados a Aliada Legal son verdaderos, legítimos, completos y proporcionados de manera autorizada.</p>
          <p>El cliente es responsable de verificar la exactitud de la información proporcionada y de contar con autorización para proporcionar información o documentos pertenecientes a terceros. Aliada Legal no será responsable por consecuencias derivadas de información falsa, incompleta, incorrecta, alterada, fraudulenta o proporcionada sin la autorización correspondiente.</p>
          <p>Aliada Legal podrá rechazar, suspender o cancelar un servicio cuando existan indicios razonables de fraude, falsificación, suplantación de identidad, uso ilegal de documentos o cualquier otra actividad ilícita.</p>

          <h4 className="font-bold mt-4 text-foreground">3. AUTORIZACIÓN PARA EL USO Y TRATAMIENTO DE INFORMACIÓN</h4>
          <p>Al aceptar estos Términos y Condiciones, el cliente autoriza expresamente a Aliada Legal, en la medida permitida por la legislación aplicable, a recopilar, recibir, almacenar, organizar, utilizar, procesar, transmitir y compartir la información y documentación necesaria para prestar el servicio solicitado.</p>
          <p>Esta autorización puede incluir el intercambio de información con abogados, firmas de abogados, gestores, traductores, empresas de mensajería, couriers, proveedores de servicios, autoridades, registros públicos, instituciones gubernamentales, procesadores de pago y otros terceros que razonablemente necesiten dicha información para ejecutar, completar, verificar o dar seguimiento al servicio contratado.</p>
          <p>Cuando sea necesario para prestar el servicio, la información y documentación podrá ser transferida o procesada en otros países.</p>

          <h4 className="font-bold mt-4 text-foreground">4. DATOS PERSONALES Y DOCUMENTACIÓN SENSIBLE</h4>
          <p>El cliente entiende que determinados servicios pueden requerir documentos que contengan información personal o sensible, incluyendo, entre otros, documentos de identidad, pasaportes, certificados, antecedentes o registros policiales, información migratoria, datos de contacto y documentación relacionada con trámites personales.</p>
          <p>Aliada Legal adoptará medidas razonables para proteger la información bajo su control. Sin embargo, el cliente reconoce que ningún sistema de almacenamiento, transmisión electrónica, correo electrónico, plataforma digital o servicio de terceros puede garantizar una seguridad absoluta.</p>
          <p>Aliada Legal no será responsable por accesos no autorizados, pérdida, uso indebido, fraude o robo de identidad cuando estos hechos sean exclusivamente atribuibles al cliente, a sus dispositivos, cuentas, contraseñas, conexiones, acciones u omisiones, o a terceros independientes fuera del control razonable de Aliada Legal, sin perjuicio de aquellas responsabilidades que legalmente no puedan excluirse.</p>

          <h4 className="font-bold mt-4 text-foreground">5. PROVEEDORES, AUTORIDADES Y TERCEROS</h4>
          <p>Aliada Legal podrá depender de autoridades gubernamentales, registros públicos, abogados, gestores, traductores, couriers, empresas de transporte, proveedores tecnológicos, procesadores de pago y otros terceros para completar los servicios.</p>
          <p>Aliada Legal no controla las decisiones, requisitos, tiempos de procesamiento, tarifas, cambios de procedimientos, disponibilidad, sistemas, políticas o actuaciones de dichos terceros.</p>
          <p>Por lo tanto, Aliada Legal no garantiza que una autoridad emita un documento, que un trámite sea aprobado, que una institución acepte un documento, que un proveedor cumpla un plazo determinado o que un tercero mantenga sus procedimientos sin modificaciones.</p>

          <h4 className="font-bold mt-4 text-foreground">6. DOCUMENTOS, TRADUCCIONES, APOSTILLAS Y LEGALIZACIONES</h4>
          <p>Aliada Legal podrá coordinar la obtención, preparación, traducción, apostilla, legalización o envío de documentos solicitados por el cliente.</p>
          <p>El cliente reconoce que la aceptación de un documento, traducción, apostilla, legalización o certificación depende de la autoridad, institución, tribunal, consulado, agencia gubernamental, firma legal u organismo receptor correspondiente.</p>
          <p>Aliada Legal no garantiza que un documento sea aceptado por una autoridad o institución determinada cuando dicha decisión corresponda exclusivamente a dicha autoridad o institución.</p>

          <h4 className="font-bold mt-4 text-foreground">7. DOCUMENTOS PERDIDOS, NO RECIBIDOS, DAÑADOS O EXTRAVIADOS</h4>
          <p>Cuando el servicio incluya el envío, traslado, entrega o recepción de documentos físicos, Aliada Legal podrá utilizar servicios de mensajería, courier, correo, transporte u otros proveedores independientes.</p>
          <p>El cliente reconoce que durante el transporte pueden ocurrir pérdidas, extravíos, retrasos, daños, entregas incorrectas, devoluciones, retenciones o imposibilidad de entrega por circunstancias que se encuentren fuera del control directo de Aliada Legal.</p>
          <p>Aliada Legal realizará las gestiones razonables de seguimiento y coordinación que correspondan ante el proveedor responsable. Sin embargo, <strong>Aliada Legal no garantiza la entrega efectiva de los documentos ni será responsable por pérdidas, extravíos, daños, retrasos, entregas incorrectas o documentos que no lleguen a su destinatario cuando dichos hechos sean atribuibles al servicio de mensajería, courier, correo, transporte, authority, proveedor externo u otro tercero</strong>, salvo cuando la legislación aplicable establezca una responsabilidad que no pueda excluirse.</p>
          <p>En caso de pérdida, extravío, daño o no recepción de documentos, <strong>el cliente acepta que el monto pagado por el servicio no necesariamente será reembolsado en su totalidad y que Aliada Legal no garantiza un reembolso del 100%</strong>.</p>
          <p>Cualquier reembolso o compensación que pudiera corresponder podrá estar sujeto a los costos ya incurridos, al estado de ejecución del servicio, a las condiciones aplicables y, cuando corresponda, a los montos efectivamente recuperados de la empresa de mensajería, proveedor o tercero responsable.</p>
          <p>Los gastos ya utilizados o pagados a terceros, incluyendo, entre otros, tasas gubernamentales, documentos, certificados, traducciones, apostillas, legalizaciones, honorarios profesionales, transporte, mensajería y otros costos no recuperables, podrán no ser reembolsables.</p>
          <p>Aliada Legal no será responsable por los costos adicionales que resulten de tener que solicitar, obtener, procesar, traducir, apostillar, legalizar o enviar nuevamente un documento perdido, extraviado, dañado o no recibido cuando el incidente sea atribuible a un tercero o a circunstancias fuera del control razonable de Aliada Legal.</p>
          <p>Cuando exista la posibilidad de contratar un seguro o cobertura adicional para un envío, el cliente podrá asumir dicho costo si desea contar con una protección adicional.</p>

          <h4 className="font-bold mt-4 text-foreground">8. PAGOS, COSTOS Y REEMBOLSOS</h4>
          <p>El cliente acepta pagar el precio informado para el servicio solicitado y cualquier costo adicional que haya sido previamente informado y aceptado.</p>
          <p>Una vez iniciado el servicio, determinados costos pueden haber sido utilizados, pagados o comprometidos con terceros y, por lo tanto, pueden no ser recuperables.</p>
          <p>El hecho de que un trámite no produzca el resultado esperado, sea retrasado, rechazado por una autoridad o no pueda completarse por circunstancias externas no implica automáticamente el derecho a un reembolso total.</p>
          <p>Los reembolsos, cuando correspondan, estarán sujetos a las condiciones específicas del servicio y a la legislación aplicable.</p>

          <h4 className="font-bold mt-4 text-foreground">9. RETRASOS, CAMBIOS Y FUERZA MAYOR</h4>
          <p>Aliada Legal no garantiza fechas exactas de entrega o finalización cuando el servicio dependa de autoridades, proveedores, sistemas electrónicos, couriers, transporte internacional, condiciones climáticas, conflictos, cierres institucionales, cambios regulatorios, fallas técnicas, interrupciones de servicios, restricciones de viaje, desastres naturales u otras circunstancias fuera de su control razonable.</p>

          <h4 className="font-bold mt-4 text-foreground">10. LIMITACIÓN DE RESPONSABILIDAD</h4>
          <p>En la máxima medida permitida por la legislación aplicable, Aliada Legal no será responsable por daños, pérdidas, costos, retrasos o consecuencias derivados exclusivamente de actuaciones u omisiones del cliente, información o documentación incorrecta proporcionada por el cliente, decisiones de autoridades, actuaciones de terceros independientes, fallas de servicios de mensajería o transporte, cambios legales o regulatorios, fallas de plataformas o sistemas de terceros, fuerza mayor u otras circunstancias fuera del control razonable de Aliada Legal.</p>
          <p>Ninguna disposición de estos Términos y Condiciones pretende excluir o limitar responsabilidades que legalmente no puedan ser excluidas o limitadas.</p>

          <h4 className="font-bold mt-4 text-foreground">11. COMUNICACIONES</h4>
          <p>El cliente autoriza a Aliada Legal a comunicarse con él mediante correo electrónico, teléfono, WhatsApp u otros medios de contacto proporcionados por el cliente para solicitar información, confirmar datos, informar avances, solicitar documentos, comunicar incidencias y gestionar el servicio contratado.</p>
          <p>El cliente es responsable de mantener actualizados sus datos de contacto y de revisar las comunicaciones relacionadas con su servicio.</p>

          <h4 className="font-bold mt-4 text-foreground">12. CONSERVACIÓN DE INFORMACIÓN</h4>
          <p>Aliada Legal podrá conservar información y documentación durante el tiempo razonablemente necesario para prestar el servicio, cumplir obligaciones legales, resolver reclamaciones, prevenir fraude, mantener registros de las operaciones y proteger sus derechos.</p>
          <p>Cuando ya no exista una razón legítima o legal para conservar determinada información, esta podrá ser eliminada, destruida o anonimizada conforme a las prácticas y obligaciones aplicables.</p>

          <h4 className="font-bold mt-4 text-foreground">13. ACEPTACIÓN ELECTRÓNICA</h4>
          <p>El cliente reconoce que la selección de la casilla de aceptación y el posterior envío, contratación o continuación del servicio constituyen una manifestación electrónica de su consentimiento y aceptación de estos Términos y Condiciones.</p>
          <p>Aliada Legal podrá conservar registros de la aceptación electrónica, incluyendo la versión de los términos aceptados, fecha, hora, datos de contacto y registros técnicos disponibles, con el propósito de acreditar la aceptación y gestionar la relación de servicio.</p>

          <h4 className="font-bold mt-4 text-foreground">14. USO LEGÍTIMO DEL SERVICIO</h4>
          <p>El cliente se compromete a utilizar los servicios de Aliada Legal únicamente para fines legítimos.</p>
          <p>No está permitido utilizar los servicios para falsificar documentos, suplantar identidades, presentar información falsa, cometer fraude, evadir requisitos legales o realizar cualquier actividad contraria a la legislación aplicable.</p>
          <p>Aliada Legal podrá rechazar, suspender o cancelar cualquier servicio cuando considere razonablemente que existe un riesgo de uso fraudulento, ilegal o indebido.</p>

          <h4 className="font-bold mt-4 text-foreground">15. LEGISLACIÓN APLICABLE</h4>
          <p>Estos Términos y Condiciones se interpretarán y aplicarán en la máxima medida permitida por las leyes aplicables al servicio y a la jurisdicción correspondiente. En aquellos aspectos en los que resulte legalmente aplicable y permitido, podrá aplicarse la legislación de la República de El Salvador.</p>
          <p>Si alguna disposición de estos Términos y Condiciones fuera considerada inválida o inaplicable, las demás disposiciones permanecerán vigentes en la medida permitida por la legislación aplicable.</p>

          <div className="mt-8 pt-4 border-t border-border flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>Cerrar</Button>
            <Button variant="accent" onClick={() => { onAccept(); onClose(); }}>Aceptar términos</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PASOS = """

content = content.replace("const PASOS =", terms_modal)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Terms modal injected")
