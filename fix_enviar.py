import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

enviar_start = content.find("const enviar = () => {")
return_start = content.find("return (", enviar_start)

new_logic = """const enviar = () => {
    const e = {};
    if (f.nombre.trim().length < 3) e.nombre = 'Escribe tu nombre completo.';
    if (!emailOk(f.email)) e.email = 'Revisa el correo: falta el @ o el dominio.';
    if (!f.telefono || !f.telefonoValido) e.telefono = 'Escribe un número de teléfono válido para el país.';
    setErr(e);
    if (Object.keys(e).length) return;
    
    // Mostramos el modal de Términos antes de enviar
    setShowTerms(true);
  };

  const confirmarEnvio = () => {
    const code = nuevoCodigo();
    onNuevoTramite(code, {
      cliente: f.nombre, pais: f.pais,
      servicio: f.documento, etapa: 0,
      actualizado: hoy(), fechaEstimada: fechaEstimada(),
      nota: 'Un asesor revisará tu caso y te escribirá por ' + (f.contacto === 'whatsapp' ? 'WhatsApp' : 'correo') + ' en menos de 24 horas.'
    });
    setCodigo(code);
    setPaso(2);
    setShowTerms(false);
  };

  """

if enviar_start != -1 and return_start != -1:
    content = content[:enviar_start] + new_logic + content[return_start:]

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Asistente functions")
