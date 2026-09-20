import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update State
content = re.sub(
    r'const \[codigo, setCodigo\] = useState\(null\);\s*const encabezado = useRef\(null\);',
    'const [codigo, setCodigo] = useState(null);\n    const [termsAccepted, setTermsAccepted] = useState(false);\n    const [showTerms, setShowTerms] = useState(false);\n    const encabezado = useRef(null);',
    content
)

# 2. Update enviar()
# we can look for if (!f.telefono || !f.telefonoValido)
content = re.sub(
    r'(!f\.telefonoValido\) e\.telefono = .*?;)',
    r'\1\n      if (!termsAccepted) e.terms = "Debes aceptar los Términos y Condiciones para continuar.";',
    content
)

# 3. Add checkbox
orig_buttons_regex = r'<div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">.*?Usamos tus datos solo para gestionar el tr.*?</div>'
new_buttons = """<div className="mt-6 pt-4 border-t border-border space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="flex items-center h-5">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" 
                        checked={termsAccepted} 
                        onChange={(e) => { setTermsAccepted(e.target.checked); setErr(prev => ({...prev, terms: null})); }} 
                      />
                    </div>
                    <div className="text-sm">
                      <span className="text-foreground">He leído, comprendido y acepto los </span>
                      <button type="button" onClick={() => setShowTerms(true)} className="text-accent hover:underline font-medium focus:outline-none">Términos y Condiciones de Aliada Legal</button>
                      <span className="text-foreground">, incluyendo la autorización para el tratamiento de mi información y las condiciones de servicio.</span>
                      {err.terms && <p className="text-destructive font-medium mt-1">{err.terms}</p>}
                    </div>
                  </label>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                    <Button variant="outline" onClick={() => setPaso(0)}>Volver</Button>
                    <Button variant="accent" size="lg" onClick={enviar}>Enviar solicitud</Button>
                    <p className="text-xs text-muted-foreground sm:ml-2">Usamos tus datos solo para gestionar el trámite.</p>
                  </div>
                </div>"""
                
content = re.sub(orig_buttons_regex, new_buttons, content, flags=re.DOTALL)

# 4. Inject Modal
content = re.sub(
    r'(</AnimatePresence>\s*</div>\s*)</Card>',
    r'\1  <TerminosModal open={showTerms} onClose={() => setShowTerms(false)} onAccept={() => { setTermsAccepted(true); setErr(prev => ({...prev, terms: null})); }} />\n      </Card>',
    content
)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Asistente UI via Regex")
