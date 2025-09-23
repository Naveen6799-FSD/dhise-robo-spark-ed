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
    <section id="about" className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Abstract purple background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>
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