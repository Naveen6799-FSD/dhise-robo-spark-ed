import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import earlyYearsImage from '../assets/early-years.jpg';
import elementaryImage from '../assets/elementary.jpg';
import middleSchoolImage from '../assets/middle-school.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: "Students in robotics competition" },
    { src: gallery2, alt: "Robotics workshop session" },
    { src: gallery3, alt: "Students with completed projects" },
    { src: earlyYearsImage, alt: "Early years robotics learning" },
    { src: elementaryImage, alt: "Elementary robotics class" },
    { src: middleSchoolImage, alt: "Middle school robotics challenge" }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Explore our students' journey through robotics education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-floating transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View Image</span>
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