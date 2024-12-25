import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-4 w-full text-center text-white/80">
      <a
        href="https://github.com/edemdev7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        <span>Made by Edemdev</span>
        <Github className="w-4 h-4" />
      </a>
    </footer>
  );
};

export default Footer;