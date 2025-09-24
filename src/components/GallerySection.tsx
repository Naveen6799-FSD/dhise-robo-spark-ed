import { useState } from 'react';
import { X } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const galleryRef = useStaggeredScrollAnimation<HTMLDivElement>(100);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Students engaged in robotics workshop - learning hands-on STEM concepts",
      title: "Interactive Learning Session"
    },
    {
      src: gallery2,
      alt: "Classroom robotics training with experienced instructors",
      title: "Expert-Led Training"
    },
    {
      src: gallery3,
      alt: "Students proudly displaying their robotics certificates and achievements",
      title: "Achievement Recognition"
    }
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-gradient-cyber">
      {/* AI Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neon-cyan rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-neon-magenta rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our students' journey through robotics education
          </p>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm shadow-cyber border border-primary/20 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-neon hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-magenta/10 to-neon-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scanning Line Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                  <h3 className="text-primary font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;