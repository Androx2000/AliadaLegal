import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import ServiceSection from '@/components/home/ServiceSection'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServiceSection />
      </main>
    </>
  )
}

export default App