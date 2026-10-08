import Hero from '@/components/home/Hero'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

import FAQSection from '@/features/faq/FAQSection'
import ProcessSection from '@/features/process/ProcessSection'
import RequestWizard from '@/features/request/RequestWizard'
import ServicesSection from '@/features/services/ServicesSection'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <RequestWizard />
        <FAQSection />
        <Footer />
      </main>
      
      <Toaster
        position="top-right"
        richColors
      />
    </>
  )
}

export default App