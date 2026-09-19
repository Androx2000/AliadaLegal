import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

root_css = """:root {
  --background: 42 33% 94%;
  --foreground: 221 39% 11%;
  
  --card: 0 0% 100%;
  --card-foreground: 221 39% 11%;
  
  --popover: 0 0% 100%;
  --popover-foreground: 221 39% 11%;
  
  --primary: 221 39% 11%;
  --primary-foreground: 0 0% 100%;
  
  --secondary: 220 14% 96%;
  --secondary-foreground: 221 39% 11%;
  
  --accent: 46 65% 53%;
  --accent-foreground: 0 0% 100%;
  
  --muted: 220 14% 96%;
  --muted-foreground: 215 16% 47%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  
  --border: 220 14% 91%;
  --input: 220 14% 91%;
  --ring: 221 39% 11%;
  
  --radius: 0.5rem;
}"""

content = re.sub(r':root\s*\{.*?\n\s*\}', root_css, content, flags=re.DOTALL)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("CSS variables updated")
