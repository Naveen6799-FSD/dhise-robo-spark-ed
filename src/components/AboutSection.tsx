import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const AboutSection = () => {
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
      {/* Abstract flowing waves background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave 1 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" fill="none">
            <path d="M0,400 Q300,200 600,300 T1200,250 L1200,800 L0,800 Z" fill="url(#wave1)" />
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(250, 100%, 70%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(271, 81%, 56%)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Wave 2 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1200 800" fill="none">
            <path d="M0,500 Q400,100 800,400 T1200,350 L1200,800 L0,800 Z" fill="url(#wave2)" />
            <defs>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(200, 100%, 60%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(250, 100%, 70%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            About Dhise Technologies
          </h2>
          
          <div className="mb-12 animate-fade-in delay-100">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Dhise Technologies, we're committed to making quality robotics education accessible to all students. 
              We believe that early exposure to STEM and AI concepts through hands-on robotics learning creates 
              future-ready innovators and problem solvers.
            </p>
          </div>

          <div className="mb-12 animate-fade-in delay-200">
            <h3 className="text-2xl font-semibold text-primary mb-8">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card hover:shadow-floating transition-all duration-300 animate-bounce-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
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