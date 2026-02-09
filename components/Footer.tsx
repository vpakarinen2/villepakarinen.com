import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-secondary text-xs font-medium">
          © {new Date().getFullYear()} Ville Pakarinen. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/vpakarinen2" target="_blank" className="text-secondary hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/ville-pakarinen-11928a27a" target="_blank" className="text-secondary hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:ville@villepakarinen.com" className="text-secondary hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}