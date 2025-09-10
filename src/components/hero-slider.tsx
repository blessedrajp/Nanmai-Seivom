import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: 'primary' | 'secondary';
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Building a Better Society Rooted in Truth & Love!",
    subtitle: "Empowering communities through education, sports, healthcare, and social change",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Community building together",
    buttonText: "Learn More",
    buttonLink: "#about",
    buttonVariant: "primary"
  },
  {
    id: 2,
    title: "Sports for Health & Fitness",
    subtitle: "Beating Drugs with Sports - 14 tournaments conducted, 1,200+ youth participated",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Youth sports tournament",
    buttonText: "Our Programs",
    buttonLink: "#services",
    buttonVariant: "secondary"
  },
  {
    id: 3,
    title: "Community Development & Tribal Rights",
    subtitle: "Uplifting marginalized communities in Kodaikanal downhills",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Community development program",
    buttonText: "Get Involved",
    buttonLink: "#services",
    buttonVariant: "primary"
  },
  {
    id: 4,
    title: "Medical Services & Blood Donation",
    subtitle: "300+ villagers benefited from our medical camps",
    image: "https://pixabay.com/get/g6268da2f293fb238f47faa31727010bfa3ac07273797b5f998d3ed33c9f777ed4ddb232c86f36fcb3c31cc13b3efa9957fe9d1aac8f362bb914f4226d79c0adc_1280.jpg",
    alt: "Medical camp healthcare services",
    buttonText: "Support Us",
    buttonLink: "#contact",
    buttonVariant: "secondary"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSlideClick = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 ${
              index === currentSlide ? 'slide-active' : 'slide-enter'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4 pl-20">
                <div className="max-w-3xl text-white">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-white/90">
                    {slide.subtitle}
                  </p>
                  <Button
                    data-testid={`button-${slide.buttonText.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleSlideClick(slide.buttonLink)}
                    variant={slide.buttonVariant === 'secondary' ? 'secondary' : 'default'}
                    size="lg"
                    className={`text-lg font-semibold ${
                      slide.buttonVariant === 'secondary' 
                        ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' 
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        data-testid="button-previous-slide"
        onClick={previousSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full w-12 h-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        data-testid="button-next-slide"
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full w-12 h-12"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            data-testid={`button-slide-indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
