import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/50 backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          Ville Pakarinen
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/blog" className="text-sm font-medium text-secondary hover:text-white transition-colors">
            Blog
          </Link>

          <Link 
            href="mailto:ville@villepakarinen.com"
            className="px-5 py-2 text-sm font-semibold text-background bg-white rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
