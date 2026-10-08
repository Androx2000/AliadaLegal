import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  {
    label: 'Servicios',
    href: '#servicios',
  },
  {
    label: 'Cómo funciona',
    href: '#como-funciona',
  },
  {
    label: 'Seguimiento',
    href: '#seguimiento',
  },
  {
    label: 'FAQ',
    href: '#faq',
  },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-heading text-2xl"
        >
          Aliada Legal
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          className="hidden md:inline-flex"
          render={
            <a href="#iniciar-tramite" />
          }
        >
          Iniciar trámite
        </Button>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menú"
                />
              }
            >
              <Menu />
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-2xl">
                  Aliada Legal
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </a>
                ))}

                <Button
                  className="mt-4"
                  render={
                    <a href="#iniciar-tramite" />
                  }
                >
                  Iniciar trámite
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Navbar