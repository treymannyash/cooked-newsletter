export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top right sage orb */}
      <div
        className="glow-orb w-[800px] h-[800px] -top-[350px] -right-[250px] animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(125,154,120,0.15) 0%, transparent 65%)',
        }}
      />
      
      {/* Bottom left terracotta orb */}
      <div
        className="glow-orb w-[600px] h-[600px] bottom-[5%] -left-[200px] animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(224,122,75,0.1) 0%, transparent 65%)',
          animationDelay: '5s',
        }}
      />
      
      {/* Middle right amber orb */}
      <div
        className="glow-orb w-[450px] h-[450px] top-[45%] right-[5%] animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(212,147,93,0.08) 0%, transparent 65%)',
          animationDelay: '2.5s',
        }}
      />
    </div>
  )
}
