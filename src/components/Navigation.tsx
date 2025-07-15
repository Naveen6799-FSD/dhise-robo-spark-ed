import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import dhiseLogo from '../assets/dhise-logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={dhiseLogo} alt="Dhise Technologies" className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">Dhise Technologies</span>
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
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact Us
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