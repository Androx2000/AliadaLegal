function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-heading text-xl">
            Aliada Legal
          </p>

          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            Gestión de documentos y trámites legales de Latinoamérica para
            personas que viven fuera de su país de origen.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">
            Navegación
          </p>

          <nav className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href="#servicios"
              className="transition-colors hover:text-foreground"
            >
              Servicios
            </a>

            <a
              href="#como-funciona"
              className="transition-colors hover:text-foreground"
            >
              Cómo funciona
            </a>

            <a
              href="#iniciar-tramite"
              className="transition-colors hover:text-foreground"
            >
              Iniciar solicitud
            </a>

            <a
              href="#faq"
              className="transition-colors hover:text-foreground"
            >
              Preguntas frecuentes
            </a>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold">
            Legal
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <button
              type="button"
              className="w-fit text-left transition-colors hover:text-foreground"
            >
              Términos y Condiciones
            </button>

            <button
              type="button"
              className="w-fit text-left transition-colors hover:text-foreground"
            >
              Política de Privacidad
            </button>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {currentYear} Aliada Legal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer