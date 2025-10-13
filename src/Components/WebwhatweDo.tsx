import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import TrophyIcon from "@mui/icons-material/EmojiEvents";
import GraduationCapIcon from "@mui/icons-material/School";
import StethoscopeIcon from "@mui/icons-material/LocalHospital";
import UsersIcon from "@mui/icons-material/People";
import MegaphoneIcon from "@mui/icons-material/Campaign"; // Example icon

const services = [
  {
    icon: TrophyIcon,
    title: "Sports for Health & Fitness",
    description:
      "We believe in beating drugs with sports. Through tournaments, awareness programs, and youth engagement.",
    stats: "30+ tournaments across Trichy, Ooty, Madurai, Kodaikanal and more",
    partners: "HCA Trust,DMK Sports Wing, CCJ Ministries",
  },
  {
    icon: GraduationCapIcon,
    title: "Education & Career Growth",
    description:
      "Empowering the next generation through quality education and career guidance.",
    features:
      "Tuition centers, scholarships, career counseling by Dr. Sujith from Rotary Club",
  },
  {
    icon: StethoscopeIcon,
    title: "Medical Services & Blood Donation",
    description: "Ensuring accessible healthcare for all communities.",
    achievements:
      "Major medical camp at Madurai Ambalathadi (300+ beneficiaries)",
    partners: "Christian Fellowship Hospital, Oddanchatram",
  },
  {
    icon: UsersIcon,
    title: "Community Upliftment & Tribal Rights",
    description:
      "Uplifting marginalized communities through skill development and legal awareness.",
    features: "Tribal rights awareness by Adv. Albert and Dr. Anbu Chezhiyan",
  },
  {
    icon: MegaphoneIcon,
    title: "Social Awareness & Environmental Stewardship",
    description:
      "Driving change through education, environmental action, and social inclusion.",
    activities:
      "Tree plantation, moral education, elderly care, social media awareness",
  },
];

export const WebWhatWeDo = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setServicesVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <Box
      component="section"
      id="services"
      sx={{ py: 8, px: { xs: 2, md: 6 } }}
      ref={servicesRef}
    >
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
          What We Do
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--muted-foreground, #6b7280)",
          }}
        >
          Comprehensive community development through five core service areas
        </Typography>
      </Box>

      {/* Service Cards */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: 300, md: 320 },
                boxShadow: 3,
                border: 1,
                borderColor: "divider",
                p: 2,
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    background: "linear-gradient(to right,#086843, #0a7ba4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Icon sx={{ color: "white", fontSize: 28 }} />
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={1}
                  color="var(--primary)"
                >
                  {service.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={1}>
                  {service.description}
                </Typography>

                <Box component="div" sx={{ mt: 1 }}>
                  {service.stats && (
                    <Typography variant="caption" display="block">
                      <strong>Stats:</strong> {service.stats}
                    </Typography>
                  )}
                  {service.partners && (
                    <Typography variant="caption" display="block">
                      <strong>Partners:</strong> {service.partners}
                    </Typography>
                  )}
                  {service.features && (
                    <Typography variant="caption" display="block">
                      <strong>Features:</strong> {service.features}
                    </Typography>
                  )}
                  {service.achievements && (
                    <Typography variant="caption" display="block">
                      <strong>Achievements:</strong> {service.achievements}
                    </Typography>
                  )}
                  {service.activities && (
                    <Typography variant="caption" display="block">
                      <strong>Activities:</strong> {service.activities}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
