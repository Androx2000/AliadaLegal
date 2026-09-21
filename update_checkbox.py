import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update TerminosModal signature and footer
old_modal_start = "function TerminosModal({ open, onClose, onAccept }) {"
new_modal_start = "function TerminosModal({ open, onClose, termsAccepted, setTermsAccepted }) {"
content = content.replace(old_modal_start, new_modal_start)

old_modal_footer_pattern = r'<div className="mt-8 pt-4 border-t border-border flex justify-end gap-3 sticky bottom-0 bg-card pb-2">.*?</div>\s*</div>\s*</div>\s*</div>'
new_modal_footer = """<div className="mt-8 pt-6 border-t border-border">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="flex items-center h-5">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" 
                  checked={termsAccepted} 
                  onChange={(e) => { 
                    setTermsAccepted(e.target.checked); 
                    if (e.target.checked) setTimeout(onClose, 400);
                  }} 
                />
              </div>
              <div className="text-sm">
                <span className="text-foreground font-bold">He leído, comprendido y acepto los Términos y Condiciones de Aliada Legal, incluyendo la autorización para el tratamiento de mi información y las condiciones de servicio.</span>
              </div>
            </label>
          </div>
          <div className="mt-6 flex justify-end sticky bottom-0 bg-card pb-2">
            <Button variant="outline" onClick={onClose}>Cerrar</Button>
          </div>
        </div>
      </div>
    </div>"""

content = re.sub(old_modal_footer_pattern, new_modal_footer, content, flags=re.DOTALL)


# 2. Update Asistente's enviar() and UI
enviar_pattern = r'const enviar = \(\) => \{.*?setPaso\(2\);\n    setShowTerms\(false\);\n  \};'

new_enviar = """const enviar = () => {
    const e = {};
    if (f.nombre.trim().length < 3) e.nombre = 'Escribe tu nombre completo.';
    if (!emailOk(f.email)) e.email = 'Revisa el correo: falta el @ o el dominio.';
    if (!f.telefono || !f.telefonoValido) e.telefono = 'Escribe un número de teléfono válido para el país.';
    if (!termsAccepted) e.terms = "Debes aceptar los Términos y Condiciones para continuar.";
    setErr(e);
    if (Object.keys(e).length) return;
    
    const code = nuevoCodigo();
    onNuevoTramite(code, {
      cliente: f.nombre, pais: f.pais,
      servicio: f.documento, etapa: 0,
      actualizado: hoy(), fechaEstimada: fechaEstimada(),
      nota: 'Un asesor revisará tu caso y te escribirá por ' + (f.contacto === 'whatsapp' ? 'WhatsApp' : 'correo') + ' en menos de 24 horas.'
    });
    setCodigo(code);
    setPaso(2);
  };"""

content = re.sub(enviar_pattern, new_enviar, content, flags=re.DOTALL)

# Add UI checkbox back
ui_pattern = r'<div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">\s*<Button variant="outline" onClick=\{.*?Volver</Button>\s*<Button variant="accent" size="lg" onClick=\{enviar\}>Enviar solicitud</Button>\s*<p className="text-xs text-muted-foreground sm:ml-2">Usamos tus datos solo para gestionar el tr.*?</div>'

new_ui = """<div className="mt-6 pt-4 border-t border-border space-y-4">
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

content = re.sub(ui_pattern, new_ui, content, flags=re.DOTALL)

# 3. Update TerminosModal invocation
content = content.replace(
    '<TerminosModal open={showTerms} onClose={() => setShowTerms(false)} onAccept={confirmarEnvio} />',
    '<TerminosModal open={showTerms} onClose={() => setShowTerms(false)} termsAccepted={termsAccepted} setTermsAccepted={(val) => { setTermsAccepted(val); setErr(prev => ({...prev, terms: null})); }} />'
)


with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Terms Checkbox synced")
