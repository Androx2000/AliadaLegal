import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_function(name, replacement):
    global content
    start_marker = f"function {name}"
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print(f"Could not find {name}")
        return
    
    # find the next function to determine the end of this function
    next_func_idx = content.find("function ", start_idx + 10)
    if next_func_idx == -1:
        # If it's the last function, look for the closing script tag
        next_func_idx = content.find("</script>", start_idx)
        
    content = content[:start_idx] + replacement + "\n\n" + content[next_func_idx:]


home_replacement = """function Home({ db, agregarTramite, codigoRastreo, setCodigoRastreo, setPage }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#002a52] text-white">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <p className="text-sm text-[#F2A900]">8 países · apostilla y traducción incluidas</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Los documentos de tu país, sin volver a tu país
            </h1>
            <p className="mt-5 max-w-measure text-lg text-white/80">
              Si te piden una partida de nacimiento, antecedentes penales o un poder notarial y no tienes quién los tramite allí, nosotros los solicitamos, apostillamos y te los enviamos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="accent" size="lg" onClick={() => irA('solicitud')}>Empezar mi solicitud</Button>
              <Button size="lg" onClick={() => irA('rastreo')} className="border border-white/25 bg-white/10 text-white hover:bg-white/20">
                Rastrear un trámite
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <Asistente onNuevoTramite={agregarTramite} onRastrear={(c) => { setCodigoRastreo(c); setTimeout(() => irA('rastreo'), 80); }} />
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 border-y border-gray-200 py-8 sm:grid-cols-3">
          {[
            ['7 a 15 días hábiles', 'Plazo promedio del trámite, incluida la apostilla.'],
            ['Envío con número de guía', 'Sabes dónde está tu documento en todo momento.'],
            ['Aliados locales verificados', 'Notarios y gestores en cada país de origen.']
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-display text-xl text-[#003B73]">{t}</p>
              <p className="mt-1 text-sm text-gray-500">{d}</p>
            </div>
          ))}
        </div>

        <Rastreo db={db} codigoExterno={codigoRastreo} />
      </div>
    </>
  );
}"""
replace_function("Home({", home_replacement)

servicios_replacement = """function Servicios() {
  const s = [
    { t: 'Antecedentes penales', d: 'Certificados policiales o judiciales para residencia, visa o empleo.', l: ['Gestión presencial o en línea según el país', 'Apostilla de La Haya', 'Traducción certificada'] },
    { t: 'Partidas de nacimiento', d: 'Copias certificadas emitidas por el Registro Civil que corresponde.', l: ['Búsqueda en archivos nacionales', 'Apostilla de La Haya', 'Traducción certificada'] },
    { t: 'Poderes notariales', d: 'Redacción, revisión y legalización de poderes generales o especiales.', l: ['Venta de inmuebles', 'Herencias y sucesiones', 'Trámites bancarios y vehiculares'] },
    { t: 'Otros certificados', d: 'Matrimonio, soltería, divorcio e historial académico.', l: ['Certificados de matrimonio o soltería', 'Sentencias de divorcio', 'Historial académico apostillado'] }
  ];
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6">
      <div>
        <h1 className="font-display text-4xl text-gray-900">Servicios</h1>
        <p className="mt-3 max-w-measure text-gray-500">Gestionamos el documento en tu país de origen y te lo entregamos listo para usar donde vives. Todo lo que sigue incluye apostilla y, si la necesitas, traducción certificada.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {s.map(x => (
            <Card key={x.t} className="p-6">
              <h2 className="font-display text-xl text-[#003B73]">{x.t}</h2>
              <p className="mt-2 text-sm text-gray-500">{x.d}</p>
              <ul className="mt-4 space-y-2">
                {x.l.map(i => (
                  <li key={i} className="flex gap-2 text-sm text-gray-900">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F2A900]" aria-hidden="true" />{i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
      
      <GuiaPais />
      <Pagos />
      <FAQ />
    </div>
  );
}"""
replace_function("Servicios()", servicios_replacement)

nosotros_replacement = """function Nosotros({ setPage }) {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl text-gray-900 text-center">Nosotros</h1>
        <div className="mt-6 max-w-measure mx-auto space-y-4 text-gray-500 text-center">
          <p>Aliada Legal nació de un problema concreto: cuando alguien emigra, los documentos que necesita siguen en su país de origen, y las instituciones que los emiten casi nunca atienden a distancia.</p>
          <p>Trabajamos con notarios, gestores y abogados en ocho países para solicitar esos documentos, apostillarlos y enviarlos. Coordinamos con registros civiles, ministerios y juzgados, y te mantenemos informado en cada etapa.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ['Qué hacemos', 'Simplificamos la burocracia transfronteriza con un proceso trazable de principio a fin.'],
            ['Hacia dónde vamos', 'Ser la plataforma de referencia para la diáspora latinoamericana y los despachos que la representan.'],
            ['Cómo trabajamos', 'Transparencia en costos, plazos realistas y confidencialidad con tus datos.']
          ].map(([t, d]) => (
            <Card key={t} className="p-6 text-left">
              <h2 className="font-display text-lg text-[#003B73]">{t}</h2>
              <p className="mt-2 text-sm text-gray-500">{d}</p>
            </Card>
          ))}
        </div>
      </div>
      
      <ParaQuien setPage={setPage} />
      <Testimonios />
    </div>
  );
}"""
replace_function("Nosotros()", nosotros_replacement)

contacto_replacement = """function Contacto() {
  const [f, setF] = useState({ nombre: '', email: '', asunto: '', mensaje: '', contacto: 'whatsapp' });
  const [sug, setSug] = useState({ email: '', mensaje: '' });
  const [err, setErr] = useState({});
  const [sugErr, setSugErr] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [sugEnviado, setSugEnviado] = useState(false);
  
  const set = (k, v) => { setF(p => ({ ...p, [k]: v })); setErr(e => ({ ...e, [k]: null })); };
  const setS = (k, v) => { setSug(p => ({ ...p, [k]: v })); setSugErr(e => ({ ...e, [k]: null })); };

  const enviar = () => {
    const e = {};
    if (f.nombre.trim().length < 3) e.nombre = 'Escribe tu nombre completo.';
    if (!emailOk(f.email)) e.email = 'Revisa el correo: falta el @ o el dominio.';
    if (!f.asunto) e.asunto = 'Elige un asunto para dirigir tu mensaje.';
    if (f.mensaje.trim().length < 10) e.mensaje = 'Cuéntanos un poco más para poder ayudarte.';
    setErr(e);
    if (Object.keys(e).length) return;
    setEnviado(true);
  };

  const enviarSugerencia = () => {
    const e = {};
    if (sug.email && !emailOk(sug.email)) e.email = 'Correo inválido.';
    if (sug.mensaje.trim().length < 5) e.mensaje = 'Por favor, escribe tu sugerencia.';
    setSugErr(e);
    if (Object.keys(e).length) return;
    setSugEnviado(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl text-gray-900 text-center">Contacto</h1>
      <p className="mt-3 text-gray-500 text-center">¿Tu caso no encaja en la lista? Escríbenos y lo revisamos contigo.</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        
        {/* Formulario Principal */}
        <div className="lg:col-span-3">
          {enviado ? (
            <Card className="p-8 text-center h-full flex flex-col justify-center items-center">
              <h2 className="font-display text-2xl text-gray-900">Mensaje enviado</h2>
              <p className="mt-3 text-gray-500">Te responderemos a {f.email} dentro de las próximas 24 horas hábiles.</p>
              <Button variant="outline" className="mt-6" onClick={() => { setEnviado(false); setF({ nombre: '', email: '', asunto: '', mensaje: '', contacto: 'whatsapp' }); }}>Escribir otro mensaje</Button>
            </Card>
          ) : (
            <Card className="p-6 sm:p-8">
              <h2 className="font-display text-2xl text-[#003B73] mb-6">Escríbenos</h2>
              <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                <Field id="c-nombre" label="Nombre completo" error={err.nombre}>
                  <Input id="c-nombre" value={f.nombre} invalid={!!err.nombre} autoComplete="name" onChange={e => set('nombre', e.target.value)} />
                </Field>
                <Field id="c-email" label="Correo electrónico" error={err.email}>
                  <Input id="c-email" type="email" value={f.email} invalid={!!err.email} autoComplete="email" onChange={e => set('email', e.target.value)} />
                </Field>
              </div>
              <div className="mt-4">
                <Field id="c-asunto" label="Asunto" error={err.asunto}>
                  <Select id="c-asunto" value={f.asunto} invalid={!!err.asunto} onChange={e => set('asunto', e.target.value)}>
                    <option value="">Elige un asunto</option>
                    <option>Consulta general</option>
                    <option>Cotización de un trámite</option>
                    <option>Seguimiento de un trámite en curso</option>
                    <option>Alianza para bufetes</option>
                  </Select>
                </Field>
              </div>
              <div className="mt-4">
                <Field id="c-msg" label="Mensaje" error={err.mensaje}>
                  <Textarea id="c-msg" value={f.mensaje} onChange={e => set('mensaje', e.target.value)} placeholder="Cuéntanos qué documento necesitas y para cuándo." />
                </Field>
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={enviar}>Enviar mensaje</Button>
              </div>
            </Card>
          )}
        </div>

        {/* Formulario de Sugerencias */}
        <div className="lg:col-span-2">
          {sugEnviado ? (
            <Card className="p-8 text-center bg-gray-50 border-gray-200">
              <h2 className="font-display text-xl text-gray-900">¡Gracias por tu sugerencia!</h2>
              <p className="mt-3 text-sm text-gray-500">Valoramos mucho tus comentarios para seguir mejorando.</p>
              <Button variant="outline" size="sm" className="mt-6" onClick={() => { setSugEnviado(false); setSug({ email: '', mensaje: '' }); }}>Enviar otra</Button>
            </Card>
          ) : (
            <Card className="p-6 sm:p-8 bg-gray-50 border-gray-200">
              <h2 className="font-display text-xl text-[#003B73]">Buzón de sugerencias</h2>
              <p className="mt-2 text-sm text-gray-500 mb-6">Ayúdanos a mejorar. Déjanos tus comentarios, quejas o sugerencias.</p>
              <div className="space-y-4">
                <Field id="s-email" label="Correo (Opcional)" error={sugErr.email}>
                  <Input id="s-email" type="email" value={sug.email} invalid={!!sugErr.email} onChange={e => setS('email', e.target.value)} placeholder="Solo si deseas respuesta" />
                </Field>
                <Field id="s-msg" label="Sugerencia" error={sugErr.mensaje}>
                  <Textarea id="s-msg" className="min-h-[80px]" value={sug.mensaje} onChange={e => setS('mensaje', e.target.value)} placeholder="¿Qué podemos hacer mejor?" />
                </Field>
                <div className="mt-4">
                  <Button variant="outline" className="w-full" onClick={enviarSugerencia}>Enviar sugerencia</Button>
                </div>
              </div>
            </Card>
          )}
        </div>

      </div>
    </div>
  );
}"""
replace_function("Contacto()", contacto_replacement)

content = content.replace("{page === 'nosotros' && <Nosotros />}", "{page === 'nosotros' && <Nosotros setPage={setPage} />}")

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully")
