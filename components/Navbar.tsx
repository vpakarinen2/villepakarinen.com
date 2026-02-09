import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full border-b border-white/10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="font-heading text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
          Ville Pakarinen
        </Link>

        <Link 
          href="mailto:ville@villepakarinen.com"
          className="px-5 py-2 text-sm font-semibold text-background bg-white rounded-full hover:bg-primary hover:text-white transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}