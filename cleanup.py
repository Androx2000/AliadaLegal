import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("background: #f6f8fb;", "background: hsl(var(--background));")
content = content.replace("::selection { background: #f2a900; color: #fff; }", "::selection { background: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }")
content = content.replace("accent-[#111827]", "accent-primary")
content = content.replace("confirmButtonColor: '#111827'", "confirmButtonColor: 'hsl(var(--primary))'")

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Cleaned up remaining hex codes")
