import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Clock, Camera, Lightbulb, Users, BookOpen, Briefcase } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Future-Ready Skills",
      description: "Students develop critical thinking, problem-solving, and technical skills essential for the jobs of tomorrow.",
      bgColor: "bg-gradient-primary",
      delay: 0
    },
    {
      icon: <Camera className="h-12 w-12 text-secondary" />,
      title: "Cost-Effective",
      description: "High-quality robotics education at affordable prices, making advanced technology accessible to all schools.",
      bgColor: "bg-gradient-secondary",
      delay: 100
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-accent" />,
      title: "Ignites Creativity",
      description: "Hands-on projects that spark imagination and encourage innovative thinking in students of all ages.",
      bgColor: "bg-gradient-accent",
      delay: 200
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Teamwork & Collaboration",
      description: "Students learn to work together, communicate effectively, and solve problems as a team.",
      bgColor: "bg-gradient-primary",
      delay: 300
    },
    {
      icon: <BookOpen className="h-12 w-12 text-secondary" />,
      title: "Academic Excellence",
      description: "Robotics education enhances performance in math, science, and other STEM subjects through practical application.",
      bgColor: "bg-gradient-secondary",
      delay: 400
    },
    {
      icon: <Briefcase className="h-12 w-12 text-accent" />,
      title: "School Distinction",
      description: "Stand out as a forward-thinking institution by offering cutting-edge robotics and AI education to your students.",
      bgColor: "bg-gradient-accent",
      delay: 500
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Benefits of Our Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Discover how our robotics education program transforms learning and prepares students for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-floating transition-all duration-300 transform hover:scale-105 animate-bounce-in border-0 overflow-hidden"
              style={{ animationDelay: `${benefit.delay}ms` }}
            >
              <div className={`h-2 ${benefit.bgColor}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-muted/50 group-hover:bg-muted transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;