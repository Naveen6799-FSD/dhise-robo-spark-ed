import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-robotics.jpg';

const HeroSection = () => {
  const handleStartNow = () => {
    window.open('https://wa.me/919363215546', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            An EdTech - Robotic Education Company
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-100">
            We Provide STEM & AI bases Robotics Education for School Students from Class Pre KG - 12th Std as 
            Curriculum, One Day Workshop, Camp in Affordable Cost.
          </p>
          
          <p className="text-md md:text-lg text-white/80 mb-10 animate-fade-in delay-200">
            – We Provide Kit Material, Workbook, Certificate & Trainer for Whole Curriculum Year.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Button 
              onClick={handleStartNow}
              variant="cyber"
              size="lg"
              className="text-lg px-8 py-4 group"
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-neon backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-cyan/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-neon-magenta/20 rounded-full animate-float delay-700 blur-sm"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-neon-lime/20 rounded-full animate-float delay-1000 blur-sm"></div>

      {/* Particle Network */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-magenta rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-neon-lime rounded-full animate-pulse delay-600"></div>
      </div>
    </section>
  );
};

export default HeroSection;