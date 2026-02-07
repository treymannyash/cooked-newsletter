import JargonTerm from './JargonTerm';

const features = [
  {
    icon: '📉',
    title: 'WTF just happened',
    description: (
      <>
        The week's macro news explained like you're not a finance major.{' '}
        <JargonTerm 
          term="Fed Moves" 
          definition="When the Federal Reserve changes interest rates or money supply. These decisions ripple through your mortgage, savings, and job market."
        >
          Fed moves
        </JargonTerm>
        , inflation data, market chaos — translated.
      </>
    ),
  },
  {
    icon: '🔥',
    title: "Why you're cooked",
    description: (
      <>
        Deep dives on the systemic stuff. Why housing is broken. Why your savings are melting. Why the{' '}
        <JargonTerm 
          term="Cantillon Effect" 
          definition="Those closest to newly-created money benefit first. By the time it reaches you, prices have already gone up. The rich get richer, structurally."
        >
          game is rigged
        </JargonTerm>
        .
      </>
    ),
  },
  {
    icon: '₿',
    title: 'The Bitcoin angle',
    description: (
      <>
        What Bitcoiners see that mainstream finance ignores. Not{' '}
        <JargonTerm 
          term="Hopium" 
          definition="Overly optimistic predictions with no basis in reality. Pure hopeful thinking. We don't do that here."
        >
          hopium
        </JargonTerm>
        . Not{' '}
        <JargonTerm 
          term="FUD" 
          definition="Fear, Uncertainty, and Doubt. Spreading negativity to manipulate markets or opinions. Also not our style."
        >
          FUD
        </JargonTerm>
        . Just the perspective, explained clearly.
      </>
    ),
  },
  {
    icon: '🧠',
    title: 'Jargon decoder',
    description:
      "Every confusing term, demystified. Build real understanding, not just surface-level takes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 pb-28 px-6 md:px-8 max-w-6xl mx-auto">
      <h2 className="section-title mb-3">What you get.</h2>
      <p className="text-[17px] text-sage-500 mb-12">
        One email a week. Under 3 minutes. Zero BS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className="w-14 h-14 bg-gradient-to-br from-sage-400/12 to-terracotta-400/10 rounded-2xl flex items-center justify-center mb-6 text-[26px]">
              {feature.icon}
            </div>
            <h3 className="font-display text-lg font-bold text-sage-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-sage-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
