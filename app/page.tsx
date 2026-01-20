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
        <Quote />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  )
}
