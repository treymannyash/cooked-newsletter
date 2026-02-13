import {
  Navigation,
  Hero,
  Marquee,
  About,
  Features,
  Quote,
  FinalCTA,
  Footer,
  BackgroundOrbs,
  BIPExplainer, // Add this
} from '@/components'

export default function Home() {
  return (
    <main className="relative">
      <BackgroundOrbs />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Marquee />
        <About />
        <Features />
        <BIPExplainer /> {/* Add this between Features and Quote */}
        <Quote />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  )
}
