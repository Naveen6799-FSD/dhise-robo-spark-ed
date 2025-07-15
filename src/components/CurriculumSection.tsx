import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Users, Cog, BookOpen, UserCheck, School } from 'lucide-react';
import earlyYearsImage from '../assets/early-years.jpg';
import elementaryImage from '../assets/elementary.jpg';
import middleSchoolImage from '../assets/middle-school.jpg';
import highSchoolImage from '../assets/high-school.jpg';
import teacherTrainingImage from '../assets/teacher-training.jpg';
import schoolIntegrationImage from '../assets/school-integration.jpg';

const CurriculumSection = () => {
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
    <section id="curriculum" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Our Curriculum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Comprehensive robotics education programs designed for every age group and skill level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumLevels.map((level, index) => (
            <Card 
              key={index}
              className="group hover:shadow-floating transition-all duration-300 transform hover:scale-105 animate-bounce-in border-0 overflow-hidden"
              style={{ animationDelay: `${level.delay}ms` }}
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