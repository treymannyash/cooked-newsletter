const stats = [
  '$100 in 2020 → $80 buying power today',
  'Median home: 7x median income',
  'Your savings rate: 0.5%',
  'Inflation: 3-5%',
  'Bitcoin: 21 million forever',
  'The game is rigged',
]

export default function Marquee() {
  return (
    <section className="py-9 border-y border-sage-400/10 bg-sage-400/[0.03] overflow-hidden">
      <div className="mask-marquee">
        <div className="flex gap-5 animate-marquee">
          {[...stats, ...stats].map((stat, i) => (
            <span key={i} className="tag">
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
