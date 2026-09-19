import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Backgrounds
content = content.replace("bg-[#F5F1E8]", "bg-background")
content = content.replace("bg-[#111827]", "bg-primary")
content = content.replace("bg-[#D4AF37]", "bg-accent")
content = content.replace("bg-[#E5E7EB]", "bg-secondary")
content = content.replace("bg-white", "bg-card") # Be careful with this, but it generally makes sense for cards/surfaces

# Text Colors
content = content.replace("text-[#111827]", "text-foreground")
content = content.replace("text-white", "text-primary-foreground")
content = content.replace("text-[#D4AF37]", "text-accent")

# Border Colors
content = content.replace("border-[#111827]", "border-primary")
content = content.replace("border-[#D4AF37]", "border-accent")
content = content.replace("border-gray-200", "border-border")
content = content.replace("border-[#111827]/15", "border-primary/15")
content = content.replace("border-[#111827]/20", "border-primary/20")
content = content.replace("border-[#111827]/30", "border-primary/30")

# Text Grays -> Muted
content = content.replace("text-gray-500", "text-muted-foreground")
content = content.replace("text-gray-900", "text-foreground")

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated classes to Shadcn utilities")
