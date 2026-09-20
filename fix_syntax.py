import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

bad_func = """  const toggleLang = () => {
    const nextEn = !isEn;
    const lang = nextEn ? 'en' : 'es';
    document.cookie = googtrans=/es/; path=/;;
    if (window.location.hostname) {
      document.cookie = googtrans=/es/; path=/; domain=;
    }
    window.location.reload();
  };"""

good_func = """  const toggleLang = () => {
    const nextEn = !isEn;
    const lang = nextEn ? 'en' : 'es';
    document.cookie = 'googtrans=/es/' + lang + '; path=/;';
    if (window.location.hostname) {
      document.cookie = 'googtrans=/es/' + lang + '; path=/; domain=' + window.location.hostname;
    }
    window.location.reload();
  };"""

if bad_func in content:
    content = content.replace(bad_func, good_func)
    with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed toggleLang syntax")
else:
    print("Could not find the bad toggleLang function")
