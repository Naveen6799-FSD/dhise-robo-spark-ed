import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import dhiseLogo from '../assets/dhise-logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={dhiseLogo} alt="Dhise Technologies" className="h-10 w-10" />
              <h3 className="text-xl font-bold">Dhise Technologies</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Making quality robotics education accessible to all students through innovative STEM and AI-based learning programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('curriculum')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Curriculum
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Robotics Curriculum (PreKG-12)</li>
              <li>One Day Workshops</li>
              <li>Summer Camps</li>
              <li>Teacher Training</li>
              <li>School Integration</li>
              <li>Kit Materials & Workbooks</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <div className="text-sm">
                  <a href="tel:+919363215546" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91-9363215546
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <div className="text-sm">
                  <a href="tel:+918072022534" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91-8072022534
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-4 w-4 text-primary-foreground/80" />
                <div className="text-sm">
                  <button
                    onClick={() => window.open('https://wa.me/919363215546', '_blank')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    WhatsApp Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Dhise Technologies. All rights reserved. | Empowering Future Innovators through Robotics Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;