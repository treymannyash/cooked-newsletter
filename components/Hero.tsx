import EmailForm from './EmailForm'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-28 pb-20 max-w-6xl mx-auto relative">
      <div className="max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-sage-400/10 to-terracotta-400/10 border border-sage-400/15 rounded-full mb-7 animate-slide-up">
          <div className="w-2 h-2 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full animate-pulse-slow" />
          <span className="text-[13px] font-semibold text-sage-600">
            New issues every week
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-sage-900 animate-slide-up">
          Your money is
          <br />
          <span className="gradient-text">cooked.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-sage-500 leading-relaxed mt-6 max-w-xl animate-slide-up animate-delay-200">
          Macro and Bitcoin news for people who know something's broken but don't have time for the finance bro BS.
        </p>

        {/* Email Form */}
        <div className="mt-10 max-w-md animate-slide-up animate-delay-400">
          <EmailForm />
        </div>

        {/* Secondary CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-4 animate-slide-up animate-delay-400">
          
            href="https://twitter.com/asheredwards_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-sage-200 rounded-xl text-sage-700 text-sm font-semibold hover:border-sage-300 hover:shadow-md transition-all"
          >
            🐦 Follow on Twitter
          </a>
          
            href="https://instagram.com/ashsatmanny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-sage-200 rounded-xl text-sage-700 text-sm font-semibold hover:border-sage-300 hover:shadow-md transition-all"
          >
            📸 Follow on Instagram
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-40 animate-float">
        <span className="text-[11px] font-semibold tracking-widest text-sage-500">
          SCROLL
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-sage-400 to-transparent" />
      </div>
    </section>
  )
}
