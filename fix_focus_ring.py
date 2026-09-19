import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

focus_ring_def = "const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';\n\nconst Button ="

content = content.replace("const Button =", focus_ring_def)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Added focusRing back")
