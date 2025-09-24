import { CheckCircle, Users, Award, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const missionRef = useScrollAnimation<HTMLDivElement>();
  const featuresRef = useStaggeredScrollAnimation<HTMLDivElement>(150);
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
      title: "Comprehensive Curriculum",
      description: "Age-appropriate robotics education from PreKG to 12th standard."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Affordable Solutions",
      description: "Quality robotics education at budget-friendly prices for schools."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Experienced Educators",
      description: "Our team consists of passionate STEM professionals and educators."
    },
    {
      icon: <Zap className="h-6 w-6 text-secondary" />,
      title: "Cutting-edge Technology",
      description: "Students learn using the latest robotics and AI tools."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950">
      {/* AI & Robotics themed background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit pattern grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Grid lines */}
            <defs>
              <pattern id="circuit-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(271, 81%, 56%)" strokeWidth="0.5" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>

        {/* Neural network nodes */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Nodes */}
            <circle cx="200" cy="150" r="3" fill="hsl(271, 81%, 66%)" className="animate-pulse" />
            <circle cx="400" cy="250" r="4" fill="hsl(250, 100%, 70%)" className="animate-pulse delay-300" />
            <circle cx="600" cy="180" r="3" fill="hsl(200, 100%, 60%)" className="animate-pulse delay-600" />
            <circle cx="800" cy="320" r="4" fill="hsl(271, 81%, 66%)" className="animate-pulse delay-900" />
            <circle cx="1000" cy="200" r="3" fill="hsl(250, 100%, 70%)" className="animate-pulse delay-1200" />
            
            {/* Connection lines */}
            <path d="M200,150 Q300,200 400,250" stroke="hsl(271, 81%, 56%)" strokeWidth="1" opacity="0.4" className="animate-pulse delay-150" />
            <path d="M400,250 Q500,215 600,180" stroke="hsl(250, 100%, 70%)" strokeWidth="1" opacity="0.4" className="animate-pulse delay-450" />
            <path d="M600,180 Q700,250 800,320" stroke="hsl(200, 100%, 60%)" strokeWidth="1" opacity="0.4" className="animate-pulse delay-750" />
            <path d="M800,320 Q900,260 1000,200" stroke="hsl(271, 81%, 56%)" strokeWidth="1" opacity="0.4" className="animate-pulse delay-1050" />
          </svg>
        </div>

        {/* Robotic geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-purple-400/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 transform rotate-12 animate-float"></div>

        {/* Glowing AI cores */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        {/* Data streams */}
        <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent to-cyan-400/50 animate-pulse delay-200"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-transparent to-purple-400/50 animate-pulse delay-800"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Dhise Technologies
          </h2>
          
          <div ref={missionRef} className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Dhise Technologies, we're committed to making quality robotics education accessible to all students. 
              We believe that early exposure to STEM and AI concepts through hands-on robotics learning creates 
              future-ready innovators and problem solvers.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-8">Why Choose Us?</h3>
            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-cyan-400/30 hover:shadow-cyber group"
                >
                  <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;