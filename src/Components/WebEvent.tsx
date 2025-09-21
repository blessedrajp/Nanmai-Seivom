import React, { useState } from "react";
import { 
  Card, CardContent, Typography, Box, Modal, IconButton 
} from "@mui/material";
import {
  PlayArrow as Play,
  EmojiEvents as Trophy,
  Campaign as Megaphone,
  CameraAlt as Camera,
  EmojiPeople as Users,
  MilitaryTech as Award,
  HealthAndSafety as Stethoscope,
  Favorite as Heart,
  Handshake,
  Grass as Leaf,
  School as Book,
  School as GraduationCap,
  Close as CloseIcon,
  NavigateBefore as PrevIcon,
  NavigateNext as NextIcon
} from "@mui/icons-material";
import drugimg from '../assets/Images/drug.jpg';

export const WebEvent = () => {
  const [open, setOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = (event:any) => {
    setCurrentEvent(event);
    setCurrentImageIndex(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentEvent(null);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % currentEvent.gallery.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentEvent.gallery.length - 1 : prevIndex - 1
    );
  };

  // Sample gallery images for each event
  const events = [
    {
      title: "Sports Tournament 2024",
      description:
        "District-level championship with 200+ youth participants, promoting sports and teamwork as a powerful alternative to drugs and negative influences. Encouraging discipline, unity, and healthy competition to inspire the younger generation.",
      img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Trophy,
      color: "var(--primary)",
      overlayIcon: Play,
      gallery: [
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      title: "Drug Awareness Campaign",
      description:
        "Community education program in Kodaikanal tribal areas reaching 300+ families",
      img: drugimg,
      icon: Megaphone,
      color: "secondary.main",
      overlayIcon: Camera,
      gallery: [
        drugimg,
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      title: "Youth Championship",
      description:
        "Inter-district sports meet in Madurai bringing together 400+ young athletes",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Users,
      color: "var(--primary)",
      overlayIcon: Award,
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      title: "Health Awareness",
      description:
        "Medical camp and health education at Ooty reaching 150+ tribal community members",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Heart,
      color: "secondary.main",
      overlayIcon: Stethoscope,
      gallery: [
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      title: "Community Development",
      description:
        "Skill development and livelihood training program for marginalized communities",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Leaf,
      color: "var(--primary)",
      overlayIcon: Handshake,
      gallery: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      title: "Education Support",
      description:
        "Scholarship distribution and career guidance session for 100+ underprivileged students",
      img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: GraduationCap,
      color: "secondary.main",
      overlayIcon: Book,
      gallery: [
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
  ];

  return (
    <Box component="section" sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 900,
            color: "var(--primary)",
            mb: 1.5,
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Events Conducted
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--muted-foreground, #6b7280)",
          }}
        >
          Showcasing our impact through cricket tournaments and drug awareness
          campaigns
        </Typography>
      </Box>

      {/* Flex Container */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
      >
        {events.map((event, idx) => {
          const OverlayIcon = event.overlayIcon;
          const EventIcon = event.icon;

          return (
            <Card
              key={idx}
              onClick={() => handleOpen(event)}
              sx={{
                flexBasis: { xs: "100%", sm: 300, md: "30%" },
                boxShadow: 3,
                flexGrow: 1,
                overflow: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                }
              }}
            >
              {/* Image with overlay */}
              <Box position="relative" height={240}>
                <img
                  src={event.img}
                  alt={event.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <OverlayIcon sx={{ color: "white", fontSize: 30 }} />
                </Box>
              </Box>

              {/* Card content */}
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <EventIcon sx={{ color: event.color, mr: 1 }} />
                  <Typography
                    variant="h6"
                    sx={{ color: event.color, fontWeight: "bold", fontSize: "16px" }}
                  >
                    {event.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" fontSize="14px">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Modal for image gallery */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="event-gallery-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2
        }}
      >
        <Box 
          sx={{ 
            position: "relative",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: 900,
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            outline: "none"
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              zIndex: 10,
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              }
            }}
          >
            <CloseIcon />
          </IconButton>

          {currentEvent && (
            <>
              {/* Main image display */}
              <Box position="relative" sx={{ height: { xs: 300, sm: 400, md: 500 } }}>
                <img
                  src={currentEvent.gallery[currentImageIndex]}
                  alt={`${currentEvent.title} ${currentImageIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                
                {/* Navigation arrows */}
                {currentEvent.gallery.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrev}
                      sx={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        }
                      }}
                    >
                      <PrevIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        }
                      }}
                    >
                      <NextIcon />
                    </IconButton>
                  </>
                )}
              </Box>

              {/* Event title */}
              <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                <Typography variant="h5" component="h2">
                  {currentEvent.title}
                </Typography>
              </Box>

              {/* Thumbnail gallery */}
              {currentEvent.gallery.length > 1 && (
                <Box sx={{ p: 2, display: "flex", overflow: "auto", gap: 1 }}>
                  {currentEvent.gallery.map((img:any, index:number) => (
                    <Box
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      sx={{
                        flex: "0 0 auto",
                        width: 80,
                        height: 60,
                        opacity: index === currentImageIndex ? 1 : 0.7,
                        cursor: "pointer",
                        border: index === currentImageIndex ? 2 : 0,
                        borderColor: "primary.main",
                        borderRadius: 1,
                        overflow: "hidden"
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  ))}
                </Box>
              )}

              {/* Image counter */}
              {currentEvent.gallery.length > 1 && (
                <Box sx={{ p: 2, pt: 0, textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    {currentImageIndex + 1} / {currentEvent.gallery.length}
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};