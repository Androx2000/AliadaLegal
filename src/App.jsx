import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import ServicesSection from '@/features/services/ServicesSection'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesSection />
      </main>
    </>
  )
}

export default App