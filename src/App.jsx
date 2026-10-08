import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import ProcessSection from '@/features/process/ProcessSection'
import RequestWizard from '@/features/request/RequestWizard'
import ServicesSection from '@/features/services/ServicesSection'
import { Toaster } from '@/components/ui/sonner'



function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesSection />
        <ProcessSection/>
        <RequestWizard />
      </main>
      <Toaster
  position="top-right"
  richColors
/>
    </>
  )
}

export default App