import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeBar } from './components/MarqueeBar'
import { AboutSection } from './components/AboutSection'
import { TrustSection } from './components/TrustSection'
import { ServicesSection } from './components/ServicesSection'
import { PersonnelSection } from './components/PersonnelSection'
import { EquipmentSection } from './components/EquipmentSection'
import { QuoteForm } from './components/QuoteForm'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { StickyMobileCTA } from './components/StickyMobileCTA'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink-950 text-white">
        <Navbar />
        <main>
          <Hero />
          <MarqueeBar />
          <AboutSection />
          <TrustSection />
          <ServicesSection />
          <PersonnelSection />
          <EquipmentSection />
          <QuoteForm />
          <ContactSection />
        </main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  )
}

export default App
