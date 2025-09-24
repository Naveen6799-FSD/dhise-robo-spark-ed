import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Users, Cog, BookOpen, UserCheck, School } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';
import earlyYearsImage from '../assets/early-years.jpg';
import elementaryImage from '../assets/elementary.jpg';
import middleSchoolImage from '../assets/middle-school.jpg';
import highSchoolImage from '../assets/high-school.jpg';
import teacherTrainingImage from '../assets/teacher-training.jpg';
import schoolIntegrationImage from '../assets/school-integration.jpg';

const CurriculumSection = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const cardsRef = useStaggeredScrollAnimation<HTMLDivElement>(200);
  const curriculumLevels = [
    {
      title: "Early Years (PreKG-2)",
      subtitle: "Foundation Building",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      image: earlyYearsImage,
      features: [
        "Introduction to simple machines",
        "Basic building blocks and structures",
        "Colorful, tactile learning materials",
        "Storytelling with robots"
      ],
      bgColor: "bg-gradient-primary",
      delay: 0
    },
    {
      title: "Elementary (Grades 3-5)",
      subtitle: "Skill Development",
      icon: <Users className="h-8 w-8 text-secondary" />,
      image: elementaryImage,
      features: [
        "Basic programming concepts",
        "Simple robot construction",
        "Problem-solving challenges",
        "Team-based projects"
      ],
      bgColor: "bg-gradient-secondary",
      delay: 100
    },
    {
      title: "Middle School (Grades 6-8)",
      subtitle: "Advanced Concepts",
      icon: <Cog className="h-8 w-8 text-accent" />,
      image: middleSchoolImage,
      features: [
        "Block-based programming",
        "Sensors and actuators",
        "Introduction to AI concepts",
        "Competitive robotics challenges"
      ],
      bgColor: "bg-gradient-accent",
      delay: 200
    },
    {
      title: "High School (Grades 9-12)",
      subtitle: "Professional Skills",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      image: highSchoolImage,
      features: [
        "Text-based programming languages",
        "Advanced AI and machine learning",
        "Real-world problem solving",
        "Career preparation in STEM fields"
      ],
      bgColor: "bg-gradient-primary",
      delay: 300
    },
    {
      title: "Teacher Training",
      subtitle: "Educator Development",
      icon: <UserCheck className="h-8 w-8 text-secondary" />,
      image: teacherTrainingImage,
      features: [
        "Comprehensive training workshops",
        "Curriculum implementation support",
        "Ongoing professional development",
        "Teaching resources and materials"
      ],
      bgColor: "bg-gradient-secondary",
      delay: 400
    },
    {
      title: "School Integration",
      subtitle: "Complete Solutions",
      icon: <School className="h-8 w-8 text-accent" />,
      image: schoolIntegrationImage,
      features: [
        "Customized implementation plans",
        "Hardware and software packages",
        "Assessment and evaluation tools",
        "Ongoing technical support"
      ],
      bgColor: "bg-gradient-accent",
      delay: 500
    }
  ];

  return (
    <section id="curriculum" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-950">
      {/* AI & Robotics themed background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Futuristic grid */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <pattern id="futuristic-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(271, 81%, 56%)" strokeWidth="0.8" opacity="0.5"/>
                <circle cx="0" cy="0" r="2" fill="hsl(271, 81%, 66%)" opacity="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#futuristic-grid)" />
          </svg>
        </div>

        {/* Robotic abstract shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-cyan-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-purple-400/30 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transform rotate-45 animate-pulse delay-300"></div>

        {/* AI neural glow */}
        <div className="absolute top-1/5 right-1/5 w-56 h-56 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Digital pathways */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1200"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Curriculum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive robotics education programs designed for every age group and skill level
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumLevels.map((level, index) => (
            <Card 
              key={index}
              className="group hover:shadow-floating transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden hover:shadow-cyber hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className={`h-2 ${level.bgColor}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {level.icon}
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {level.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {level.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;