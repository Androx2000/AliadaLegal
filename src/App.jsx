import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/Navbar'

function App() {
  return (
    
    
    <main className="min-h-screen bg-background text-foreground p-10">
      
<Navbar />


      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Aliada Legal
        </p>

        <h1 className="font-heading text-5xl leading-tight">
          Trámites legales internacionales sin complicaciones.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Gestionamos tus documentos legales con claridad, seguimiento y acompañamiento.
        </p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">
            Iniciar trámite
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Consultar trámite
          </Button>
        </div>
      </div>
    </main>
  )
}

export default App