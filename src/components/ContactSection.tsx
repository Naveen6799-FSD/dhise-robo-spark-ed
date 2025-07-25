import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in Dhise Technologies robotics education program.
    
Name: ${formData.name}
Email: ${formData.email}
School: ${formData.school}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919363215546?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Ready to transform your school's education? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-200">
            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Phone Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span>Primary:</span>
                    <a href="tel:+919363215546" className="text-primary hover:underline">
                      +91-9363215546
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>Secondary:</span>
                    <a href="tel:+918072022534" className="text-primary hover:underline">
                      +91-8072022534
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                  <span>WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => window.open('https://wa.me/919363215546', '_blank')}
                  variant="whatsapp"
                  className="w-full"
                >
                  Chat with us on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-accent" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For detailed inquiries, feel free to reach out via phone or WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in delay-300">
            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="school"
                      placeholder="School Name"
                      value={formData.school}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;