import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import dhiseLogo from '../assets/dhise-logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-cyber border-b border-primary/20' 
        : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={dhiseLogo} alt="Dhise Technologies" className="h-12 w-auto hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Dhise Technologies
            </span>
          </div>

          {/* Contact Numbers - Desktop */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <span className="text-muted-foreground">
              <a href="tel:+919363215546" className="hover:text-primary transition-colors">
                +91-9363215546
              </a>
              {' | '}
              <a href="tel:+918072022534" className="hover:text-primary transition-colors">
                +91-8072022534
              </a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="relative text-foreground hover:text-transparent hover:bg-gradient-neon hover:bg-clip-text transition-all duration-300 font-medium group"
            >
              Home
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-foreground hover:text-transparent hover:bg-gradient-neon hover:bg-clip-text transition-all duration-300 font-medium group"
            >
              About
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="relative text-foreground hover:text-transparent hover:bg-gradient-neon hover:bg-clip-text transition-all duration-300 font-medium group"
            >
              Curriculum
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="relative text-foreground hover:text-transparent hover:bg-gradient-neon hover:bg-clip-text transition-all duration-300 font-medium group"
            >
              Gallery
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-foreground hover:text-transparent hover:bg-gradient-neon hover:bg-clip-text transition-all duration-300 font-medium group"
            >
              Contact Us
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('curriculum')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Curriculum
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </button>
              <div className="text-sm text-muted-foreground pt-2">
                <a href="tel:+919363215546" className="hover:text-primary transition-colors">
                  +91-9363215546
                </a>
                {' | '}
                <a href="tel:+918072022534" className="hover:text-primary transition-colors">
                  +91-8072022534
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;