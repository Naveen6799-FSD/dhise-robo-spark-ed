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
            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300 hover:scale-105 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Contact Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span>Primary:</span>
                    <a href="tel:+919363215546" className="text-primary hover:underline hover:text-secondary transition-colors">
                      +91-93632 15546
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300 hover:scale-105 hover:shadow-glow">
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
                  className="w-full hover:shadow-glow transition-all duration-300"
                >
                  Chat with us on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300 hover:scale-105 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-accent" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <a href="mailto:info.dhisetechnologies@gmail.com" className="text-primary hover:underline hover:text-secondary transition-colors">
                    info.dhisetechnologies@gmail.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <a href="https://www.dhisetechnologies.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-secondary transition-colors">
                    www.dhisetechnologies.in
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300 hover:scale-105 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No. 3/21 Mothi Nagar Main Road,<br />
                  Karambakkam, Porur,<br />
                  Chennai - 600116, TN, India
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-shadow duration-300 hover:scale-105 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  <span>Social Media</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Proprietor:</span> V. Dhivya<br />
                    <span className="text-xs">Sr. Technical Analyst & Founder</span>
                  </p>
                  <a 
                    href="https://www.instagram.com/dhise_official?igsh=MTZxdnNuMGJxMDIzcA%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-primary hover:underline hover:text-secondary transition-colors"
                  >
                    @dhise_official on Instagram
                  </a>
                </div>
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