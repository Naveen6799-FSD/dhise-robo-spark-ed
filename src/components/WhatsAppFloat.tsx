import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919363215546', '_blank');
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Window */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-card rounded-2xl shadow-cyber border border-primary/30 backdrop-blur-lg animate-fade-in">
              {/* Header */}
              <div className="bg-gradient-hero p-4 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Dhise Technologies</h3>
                      <p className="text-white/80 text-sm">Typically replies instantly</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleToggleChat}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-4 space-y-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-foreground">
                    👋 Hello! Welcome to Dhise Technologies. 
                  </p>
                  <p className="text-sm text-foreground mt-2">
                    We provide STEM & AI based Robotics Education for students. How can we help you today?
                  </p>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left bg-primary/10 hover:bg-primary/20 border border-primary/30 p-3 rounded-lg transition-colors duration-200"
                  >
                    <p className="text-sm text-foreground">💡 Learn about our curriculum</p>
                  </button>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left bg-primary/10 hover:bg-primary/20 border border-primary/30 p-3 rounded-lg transition-colors duration-200"
                  >
                    <p className="text-sm text-foreground">📞 Schedule a demo</p>
                  </button>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left bg-primary/10 hover:bg-primary/20 border border-primary/30 p-3 rounded-lg transition-colors duration-200"
                  >
                    <p className="text-sm text-foreground">💰 Get pricing information</p>
                  </button>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#20c158] text-white font-semibold group"
                >
                  <MessageCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Start WhatsApp Chat
                  <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {/* Floating Button */}
          <Button
            onClick={handleToggleChat}
            size="icon"
            className="h-14 w-14 rounded-full bg-gradient-hero shadow-cyber hover:shadow-glow hover:scale-110 transition-all duration-300 animate-pulse"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MessageCircle className="h-6 w-6 text-white" />
            )}
          </Button>

          {/* Notification Dot */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-neon-lime rounded-full animate-pulse border-2 border-background"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;