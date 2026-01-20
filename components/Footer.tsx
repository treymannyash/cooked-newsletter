import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-8 border-t border-sage-400/10 bg-sage-400/[0.03]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="/" className="font-display text-xl font-bold">
            <span className="gradient-text">cooked</span>
          </Link>
          <p className="text-[13px] text-sage-400 mt-1.5">
            © {new Date().getFullYear()} Cooked. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-7">
          <a
            href="https://twitter.com/cooked"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-400 text-sm hover:text-terracotta-500 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://tiktok.com/@cooked"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-400 text-sm hover:text-terracotta-500 transition-colors"
          >
            TikTok
          </a>
          <Link
            href="/archive"
            className="text-sage-400 text-sm hover:text-terracotta-500 transition-colors"
          >
            Archive
          </Link>
        </div>
      </div>
    </footer>
  )
}
