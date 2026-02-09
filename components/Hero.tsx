import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center text-center px-6">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="flex flex-col items-center gap-8 max-w-4xl z-10">
        
        {/* GREEN Badge */}
        <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center font-heading">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Building Intelligent
          </h1>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400 pb-2">
            Architectures
          </h1>
        </div>

        {/* Contact Button */}
        <div className="flex flex-col md:flex-row gap-5 justify-center pt-2">
          <Link 
            href="mailto:ville@villepakarinen.com"
            className="px-10 py-3 rounded-full border border-white/10 bg-white/5 text-white text-base font-semibold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
}