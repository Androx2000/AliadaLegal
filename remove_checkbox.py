import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

checkbox_ui_pattern = r'<div className="mt-6 pt-4 border-t border-border space-y-4">.*?</label>'

content = re.sub(checkbox_ui_pattern, "", content, flags=re.DOTALL)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed checkbox")
