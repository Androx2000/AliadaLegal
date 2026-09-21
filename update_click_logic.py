import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update TerminosModal
modal_start_pattern = r'function TerminosModal\(\{ open, onClose, termsAccepted, setTermsAccepted \}\) \{'
content = re.sub(modal_start_pattern, 'function TerminosModal({ open, onClose, onAccept }) {', content)

old_modal_footer = r'<div className="mt-8 pt-6 border-t border-border">.*?</div>\s*</div>\s*</div>\s*</div>'
new_modal_footer = """<div className="mt-8 pt-4 border-t border-border flex justify-end gap-3 sticky bottom-0 bg-card pb-2">
            <Button variant="outline" onClick={onClose}>Cancelar</Button>
            <Button variant="accent" disabled={!canAccept} onClick={() => { onAccept(); onClose(); }}>
              {canAccept ? 'Aceptar' : 'Desliza para aceptar'}
            </Button>
          </div>
        </div>
      </div>
    </div>"""
content = re.sub(old_modal_footer, new_modal_footer, content, flags=re.DOTALL)

# 2. Update Form Checkbox Logic
ui_pattern = r'<input \s*type="checkbox"\s*className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" \s*checked=\{termsAccepted\} \s*onChange=\{\(e\) => \{ setTermsAccepted\(e\.target\.checked\); setErr\(prev => \(\{\.\.\.prev, terms: null\}\)\); \}\} \s*/>'

new_ui = """<input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer" 
                        checked={termsAccepted} 
                        onChange={(e) => { 
                          if (e.target.checked) {
                            setShowTerms(true);
                          } else {
                            setTermsAccepted(false);
                          }
                          setErr(prev => ({...prev, terms: null}));
                        }} 
                      />"""
content = re.sub(ui_pattern, new_ui, content, flags=re.DOTALL)

# 3. Update Modal invocation in Asistente
content = content.replace(
    '<TerminosModal open={showTerms} onClose={() => setShowTerms(false)} termsAccepted={termsAccepted} setTermsAccepted={(val) => { setTermsAccepted(val); setErr(prev => ({...prev, terms: null})); }} />',
    '<TerminosModal open={showTerms} onClose={() => setShowTerms(false)} onAccept={() => { setTermsAccepted(true); setErr(prev => ({...prev, terms: null})); }} />'
)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated to force modal on checkbox click")
