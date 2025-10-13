import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Container } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";


import { images } from "../assets/Images/Images";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "primary" | "secondary";
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Building a Better Society Rooted in Truth & Love!",
    subtitle:
      "Empowering communities through education, sports, healthcare, and social change",
    image:
      images.banner1,
    alt: "Community building together",
    buttonText: "Learn More",
    buttonLink: "#about",
    buttonVariant: "primary",
  },
  {
    id: 2,
    title: "Sports for Health & Fitness",
    subtitle:
      "Beating Drugs with Sports - 14 tournaments conducted, 1,200+ youth participated",
    image:
      images.banner5,
    alt: "Youth sports tournament",
    buttonText: "Our Programs",
    buttonLink: "#services",
    buttonVariant: "secondary",
  },
  {
    id: 3,
    title: "Community Development & Tribal Rights",
    subtitle: "Uplifting marginalized communities in Kodaikanal downhills",
    image:
      images.banner3,
    alt: "Community development program",
    buttonText: "Get Involved",
    buttonLink: "#services",
    buttonVariant: "primary",
  },
  {
    id: 4,
    title: "Medical Services & Blood Donation",
    subtitle: "300+ villagers benefited from our medical camps",
    image:
      images.banner4,
    alt: "Medical camp healthcare services",
    buttonText: "Support Us",
    buttonLink: "#contact",
    buttonVariant: "secondary",
  },
    {
    id: 5,
    title: "Education & Career Growth",
    subtitle: "Empowering the next generation through quality education and career guidance",
    image:
      images.banner4,
    alt: "Education & Career Growth",
    buttonText: "Learn more",
    buttonLink: "#services",
    buttonVariant: "secondary",
  },
];

export const WebBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const previousSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSlideClick = (link: string) => {
    const element = document.querySelector(link);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="home"
      sx={{ position: "relative", height: "100vh", overflow: "hidden" }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            transition: "opacity 1s ease-in-out",
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 2 : 1,
          }}
        >
          <Box
            component="img"
            src={slide.image}
            alt={slide.alt}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.5)",
            }}
          />

          <Container
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              maxWidth: { xs: "80% !important", md: "60% !important" },
              left: { xs: "2%", md: "8%" },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "30px", md: "50px" },
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                margin: "20px 0px !important",
                fontSize: { xs: "16px", md: "20px" },
              }}
            >
              {slide.subtitle}
            </Typography>
            <Button
              sx={{
                background: "var(--primary)",
                color: "white",
                padding: "8px 20px",
              }}
              onClick={() => handleSlideClick(slide.buttonLink)}
            >
              {slide.buttonText}
            </Button>
          </Container>
        </Box>
      ))}

      {/* Navigation */}
      <IconButton
        onClick={previousSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.3)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
          zIndex: 3,
          visibility: { xs: "hidden", md: "visible" },
        }}
      >
        <ChevronLeft sx={{ color: "white", fontSize: 32 }} />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.3)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
          zIndex: 3,
        }}
      >
        <ChevronRight sx={{ color: "white", fontSize: 32 }} />
      </IconButton>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor:
                index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
