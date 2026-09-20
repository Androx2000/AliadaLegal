import codecs
import re

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Supabase script to <head>
supabase_script = '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>\n</head>'
content = content.replace('</head>', supabase_script)

# 2. Add Configuration Block at the very top of the script tag
config_block = """
  /* =========================================================================
     CONFIGURACIÓN DE INTEGRACIONES (API KEYS)
     Reemplaza estos valores con tus credenciales reales de producción.
     ========================================================================= */
  const SUPABASE_URL = 'TU_SUPABASE_URL';
  const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY';
  const WOMPI_PUBLIC_KEY = 'TU_WOMPI_PUBLIC_KEY'; // Ej. pub_test_... o pub_prod_...

  // Inicializar Supabase Cliente (solo si las llaves han sido configuradas)
  const supabase = (SUPABASE_URL !== 'TU_SUPABASE_URL') 
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
    : null;

"""

content = content.replace("const { useState, useEffect, useRef, useMemo } = React;", "const { useState, useEffect, useRef, useMemo } = React;\n" + config_block)

# 3. Update Asistente enviar() function to use Supabase
asistente_enviar = """
  const enviar = async () => {
    const e = {};
    if (f.nombre.trim().length < 3) e.nombre = 'Escribe tu nombre completo.';
    if (!emailOk(f.email)) e.email = 'Revisa el correo: falta el @ o el dominio.';
    if (!f.telefono || !f.telefonoValido) e.telefono = 'Escribe un número de teléfono válido para el país.';
    setErr(e);
    if (Object.keys(e).length) return;

    const code = nuevoCodigo();
    const dataObj = {
      cliente: f.nombre, 
      email: f.email,
      telefono: f.telefono,
      pais: f.pais,
      servicio: f.documento, 
      etapa: 0,
      actualizado: hoy(), 
      fechaEstimada: fechaEstimada(),
      nota: 'Un asesor revisará tu caso y te escribirá por ' + (f.contacto === 'whatsapp' ? 'WhatsApp' : 'correo') + ' en menos de 24 horas.',
      codigo_rastreo: code
    };

    // Guardar en Supabase si está configurado
    if (supabase) {
      try {
        Swal.fire({ title: 'Enviando...', text: 'Guardando tu solicitud de forma segura', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
        const { error } = await supabase.from('tramites').insert([dataObj]);
        if (error) throw error;
        Swal.close();
      } catch (err) {
        console.error('Error guardando en Supabase:', err);
        Swal.fire('Atención', 'Hubo un error guardando tu solicitud, pero nuestro equipo la procesará manualmente.', 'warning');
      }
    }

    onNuevoTramite(code, dataObj);
    setCodigo(code);
    setPaso(2);
  };
"""

content = re.sub(r'const enviar = \(\) => \{[\s\S]*?setPaso\(2\);\s*\};', asistente_enviar.strip(), content, count=1)

# 4. Update Pagos Wompi logic
wompi_pagos = """
  function Pagos() {
    const pagar = () => {
      Swal.fire({
        title: 'Pagar con Wompi',
        text: 'Te llevamos a la pasarela segura para completar el pago. Volverás aquí al terminar.',
        icon: 'question', showCancelButton: true,
        confirmButtonColor: 'hsl(var(--primary))', cancelButtonColor: '#5A6779',
        confirmButtonText: 'Continuar a Wompi', cancelButtonText: 'Ahora no'
      }).then(r => {
        if (r.isConfirmed) {
          if (WOMPI_PUBLIC_KEY === 'TU_WOMPI_PUBLIC_KEY') {
            Swal.fire('Configuración pendiente', 'Debes configurar la WOMPI_PUBLIC_KEY en el código para que funcione el pago.', 'warning');
            return;
          }
          Swal.fire({ title: 'Generando tu link de pago', text: 'Te redirigimos en unos segundos.', icon: 'success', confirmButtonColor: 'hsl(var(--primary))', showConfirmButton: false });
          // Redirigir a Wompi Checkout con datos mock. En producción, el monto y la referencia vienen de la base de datos.
          const referenciaUnica = 'ALIADA-' + Math.floor(Math.random() * 1000000);
          const montoCentavos = 500000; // Monto de ejemplo
          window.location.href = https://checkout.wompi.co/p/?public-key=&currency=COP&amountInCents=&reference=;
        }
      });
    };
    return (
      <section className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 sm:p-10">
"""

content = re.sub(r'function Pagos\(\) \{.*?return \(\s*<section className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 sm:p-10">', wompi_pagos.strip(), content, flags=re.DOTALL)

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added Supabase and Wompi logic")
