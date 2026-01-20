import EmailForm from './EmailForm'

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 md:px-8 max-w-2xl mx-auto text-center">
      <h2 className="section-title mb-5">
        Stop letting your savings
        <br />
        <span className="gradient-text">melt in silence.</span>
      </h2>
      <p className="text-[17px] text-sage-500 mb-10 leading-relaxed">
        Join thousands of people who finally understand what's happening to their money.
      </p>

      <EmailForm className="max-w-md mx-auto" />
    </section>
  )
}
