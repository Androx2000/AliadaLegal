import {Button} from "@/components/ui/Button"

function Navbar() {
    return (
        <header className="border-b bg-background/95">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a
                    href="https://www.youtube.com/watch?v=C3vaxYtFmOo"
                    className="font-heading text-2x1">
                    Aliada Legal
                    </a>
            <div className="hidden items-center gap-8 md:flex">
                <a 
                href="#servicios"
                className="text-sm font-medium hover:text-accent"
                >
                    Servicios
                </a>

<a 
href="#como-funciona"
className="text-sm font-medium hover:text-accent"
>
    Cómo funciona
</a>

<a
    href="#seguimiento"
    className="text-sm font-medium hover:text-accent"
>
    Seguimiento
</a>

<a 

href="#faq"
className="text-sm font-medium hover:text-accent"
>
    FAQ
</a>
            </div>


<Button>
    Iniciar tramite
</Button>
</nav>

        </header>
    )
}

export default Navbar