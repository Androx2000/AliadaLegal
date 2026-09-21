import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add confirmarEnvio above the Asistente component render return
confirmarEnvio = """  const confirmarEnvio = () => {
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

  return ("""

content = content.replace("  return (\n    <Card id=\"solicitud\"", confirmarEnvio + "\n    <Card id=\"solicitud\"")

# 2. Modify enviar
content = re.sub(
    r'if \(!termsAccepted\) e\.terms = .*?;\n      setErr\(e\);\n      if \(Object\.keys\(e\)\.length\) return;\n      const code = nuevoCodigo\(\);\n      onNuevoTramite\(code, \{\n        cliente: f\.nombre, pais: f\.pais,\n        servicio: f\.documento, etapa: 0,\n        actualizado: hoy\(\), fechaEstimada: fechaEstimada\(\),\n        nota: .*?\n      \}\);\n      setCodigo\(code\);\n      setPaso\(2\);',
    r'setErr(e);\n      if (Object.keys(e).length) return;\n      setShowTerms(true);',
    content, flags=re.DOTALL
)

# 3. Modify UI buttons
ui_pattern = r'<div className="mt-6 pt-4 border-t border-border space-y-4">.*?<p className="text-xs text-muted-foreground sm:ml-2">Usamos tus datos solo para gestionar el tr.*?</div>\s*</div>'

new_ui = """<div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                  <Button variant="outline" onClick={() => setPaso(0)}>Volver</Button>
                  <Button variant="accent" size="lg" onClick={enviar}>Enviar solicitud</Button>
                  <p className="text-xs text-muted-foreground sm:ml-2">Usamos tus datos solo para gestionar el trámite.</p>
                </div>"""

content = re.sub(ui_pattern, new_ui, content, flags=re.DOTALL)

# 4. Modify modal accept binding
content = content.replace(
    'onAccept={() => { setTermsAccepted(true); setErr(prev => ({...prev, terms: null})); }}',
    'onAccept={confirmarEnvio}'
)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated to force reading Terms before submission")
