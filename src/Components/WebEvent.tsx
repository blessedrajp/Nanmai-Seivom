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
import { images } from "../assets/Images/Images";

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
      title: "Sports for Health & Fitness",
      description:
      "Promoting a drug-free and active lifestyle through tournaments, rural games, and sports coaching that build teamwork, discipline, and confidence among youth.",

      img: images.sports1,
      icon: Trophy,
      color: "var(--primary)",
      overlayIcon: Play,
      gallery: [
       images.sports1,
       images.sports2,
       images.sports3,
       images.sports4,
       images.sports5,
       images.sports6,
       images.sports7,
       images.sports8,
       images.sports9,
       images.sports10,
      ]
    },
    {
      title: "Drug Awareness Campaign",
      description:
              "Promoting a drug-free and active lifestyle through tournaments, rural games, and sports coaching that build teamwork, discipline, and confidence among youth.",
      img: images.drug1,
      icon: Megaphone,
      color: "secondary.main",
      overlayIcon: Camera,
      gallery: [
        images.drug1,
        images.drug2,
        images.drug3,
        images.drug4,
        images.drug5,
      ]
    },
    {
      title: "Medical Services & Blood Donation",
      description:
        "Ensuring accessible healthcare for all through medical camps, awareness drives, blood donation networks, and medical counseling for communities in need.",
      img: images.blood1,
      icon: Users,
      color: "var(--primary)",
      overlayIcon: Award,
      gallery: [
        images.blood1,
        images.blood2,
        images.blood3,
        images.blood4,
        images.blood5,
        images.blood6,
        images.blood7,
        images.blood8,
      ]
    },
    {
      title: "Community Upliftment & Tribal Rights",
      description:
        "Supporting marginalized and tribal communities through skill development, legal awareness, and advocacy — protecting their culture, land, and rights.",
      img: images.communityup1,
      icon: Heart,
      color: "secondary.main",
      overlayIcon: Stethoscope,
      gallery: [
        images.communityup1,
        images.communityup2,
        images.communityup3,
        images.communityup4,
        images.communityup5,
        images.communityup6,
        images.communityup7,

      ]
    },
    {
      title: "Social Awareness & Environmental Stewardship",
      description:
       "Creating a responsible society through tree planting, pollution awareness, moral education, elderly care, women’s rights, and child safety initiatives.",
      img: images.social1,
      icon: Leaf,
      color: "var(--primary)",
      overlayIcon: Handshake,
      gallery: [
       images.social1,
       images.social2,
       images.social3,
       images.social4,
       images.social5,
       images.social6,
       images.social7,
      ]
    },
    {
      title: "Education Support",
      description:
      "Empowering students through tuition centers, scholarships, and career guidance — helping youth access education, explore careers, and build a better future.",
      img: images.edu1,
      icon: GraduationCap,
      color: "secondary.main",
      overlayIcon: Book,
      gallery: [
        images.edu1,
        images.edu2,
        images.edu3,
        images.edu4,
        images.edu5,
        images.edu6,
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
            maxWidth: 700,
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