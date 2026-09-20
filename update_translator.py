import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Google Translate scripts from head
content = re.sub(r'<script type="text/javascript">\s*function googleTranslateElementInit\(\).*?</script>', '', content, flags=re.DOTALL)
content = re.sub(r'<script type="text/javascript" src="https://translate\.google\.com/translate_a/element\.js\?cb=googleTranslateElementInit"></script>', '', content)
content = re.sub(r'<style>\s*/\* Hide Google Translate top banner.*?</style>', '', content, flags=re.DOTALL)

# Update Navbar toggleLang function
toggle_lang_replacement = """
  const toggleLang = async () => {
    if (!window.translation) {
      Swal.fire({
        title: 'API no soportada',
        text: 'La API de Traducción experimental no está soportada o no está habilitada en este navegador. Revisa edge://flags/#translation-api.',
        icon: 'error',
        confirmButtonColor: 'hsl(var(--primary))'
      });
      return;
    }

    const nextEn = !isEn;
    const targetLang = nextEn ? 'en' : 'es';
    const sourceLang = nextEn ? 'es' : 'en';

    Swal.fire({ title: 'Traduciendo...', text: 'Utilizando AI local de Microsoft Edge', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      const translator = await window.translation.createTranslator({ sourceLanguage: sourceLang, targetLanguage: targetLang });
      
      const walker = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT, null, false);
      const textNodes = [];
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue.trim().length > 1) {
          if (node.parentNode && ['SCRIPT', 'STYLE'].includes(node.parentNode.tagName)) continue;
          textNodes.push(node);
        }
      }

      // Translate in parallel chunks to be faster, but for safety we'll do sequentially or Promise.all if it's small.
      // We'll do sequential to avoid overwhelming the local model API
      for (let i = 0; i < textNodes.length; i++) {
        const text = textNodes[i].nodeValue.trim();
        if (text) {
          const translated = await translator.translate(text);
          textNodes[i].nodeValue = textNodes[i].nodeValue.replace(text, translated);
        }
      }
      
      setIsEn(nextEn);
      Swal.close();
    } catch (e) {
      console.error(e);
      Swal.fire({ title: 'Error', text: 'Error al traducir: ' + e.message, icon: 'error', confirmButtonColor: 'hsl(var(--primary))' });
    }
  };
"""

content = re.sub(r'const toggleLang = \(\) => \{.*?\n  \};', toggle_lang_replacement.strip(), content, flags=re.DOTALL)

# Remove the <div id="google_translate_element"></div>
content = content.replace('<div id="google_translate_element"></div>', '')

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated to Microsoft Edge Translator API")
