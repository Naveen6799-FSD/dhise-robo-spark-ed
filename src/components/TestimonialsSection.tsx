import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "MS",
      school: "Modern School",
      location: "Delhi",
      testimonial: "Dhise Technologies has transformed our approach to STEM education. Our students are now excited about learning and solving real-world problems through robotics.",
      rating: 4,
      bgColor: "bg-gradient-primary",
      delay: 0
    },
    {
      initials: "GI",
      school: "Global International School",
      location: "Mumbai",
      testimonial: "The affordability of Dhise Technologies' program allowed us to bring robotics education to all our students, not just a select few. The curriculum is comprehensive and engaging.",
      rating: 4,
      bgColor: "bg-gradient-secondary",
      delay: 100
    },
    {
      initials: "SP",
      school: "St. Paul's Academy",
      location: "Bangalore",
      testimonial: "The teacher training provided by Dhise Technologies was exceptional. Our staff now confidently leads robotics classes, and our students are thriving in STEM subjects.",
      rating: 4,
      bgColor: "bg-gradient-accent",
      delay: 200
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            What Schools Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Hear from our partner schools about their experience with Dhise Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-floating transition-all duration-300 transform hover:scale-105 animate-bounce-in border-0 overflow-hidden"
              style={{ animationDelay: `${testimonial.delay}ms` }}
            >
              <div className={`h-2 ${testimonial.bgColor}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-full ${testimonial.bgColor} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {testimonial.school}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {testimonial.location}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;