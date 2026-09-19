import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("selection:bg-vfs-gold", "selection:bg-accent")

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed vfs-gold from selection")
