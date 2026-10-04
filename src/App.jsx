
import Button from './components/ui/Button.jsx'


function App() {
  return (
    <main>
<h1>Aliada Legal</h1>
      <p>Migracion a React + Vite funcionando</p>

<Button
onClick={() => alert('Botón clickeado')}
aria-label="Iniciar trámite"
disabled={false}
>
  Iniciar Tramite
</Button>


<Button type="submit">
  Enviar solicitud
</Button>

<Button className="boton-principal">
  Iniciar trámite
</Button>

    </main>
  )
}

export default App