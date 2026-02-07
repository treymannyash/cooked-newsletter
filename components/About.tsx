import JargonTerm from './JargonTerm';

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-8 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <h2 className="section-title mb-6">
          Nobody taught us
          <br />
          <span className="text-sage-300">this stuff.</span>
        </h2>

        <div className="flex flex-col gap-5 text-[17px] leading-relaxed text-sage-600">
          <p>
            Schools don't teach you how money actually works. Finance bros gatekeep 
            with jargon. Mainstream media is either clueless or bought.
          </p>
          <p>
            Meanwhile, your savings are melting.{' '}
            <JargonTerm 
              term="Inflation" 
              definition="When your money loses buying power because there's more money in the system. Your $100 buys less over time."
            >
              Inflation
            </JargonTerm>
            {' '}is eating your paycheck. Housing is impossible. And everyone 
            keeps telling you to "just budget better."
          </p>
          <p className="text-sage-900 font-semibold">
            It's not a personal failure. It's structural.
          </p>
          <p>
            We break down what's actually happening — the{' '}
            <JargonTerm 
              term="The Fed" 
              definition="The Federal Reserve. America's central bank that controls money supply and interest rates. They print money and decide how expensive borrowing is."
            >
              Fed
            </JargonTerm>
            ,{' '}
            <JargonTerm 
              term="Quantitative Easing (QE)" 
              definition="When central banks create new money to buy bonds and pump liquidity into the economy. Basically: money printer go brrr."
            >
              money printing
            </JargonTerm>
            , macro trends, and why{' '}
            <JargonTerm 
              term="Bitcoin" 
              definition="Digital money with a fixed supply (21 million coins, forever). No central bank can print more. Runs on a decentralized network anyone can verify."
            >
              Bitcoiners
            </JargonTerm>
            {' '}see things differently — in plain English. No jargon. 
            No hype. No condescension.
          </p>
        </div>
      </div>
    </section>
  );
}
