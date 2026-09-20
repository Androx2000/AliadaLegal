import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("setIsEn(document.cookie.includes('googtrans=/es/en'));\n", "")

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed cookie logic")
