import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import TrophyIcon from "@mui/icons-material/EmojiEvents";
import GraduationCapIcon from "@mui/icons-material/School";
import StethoscopeIcon from "@mui/icons-material/LocalHospital";
import UsersIcon from "@mui/icons-material/People";
import MegaphoneIcon from "@mui/icons-material/Campaign";

const services = [
  {
    icon: TrophyIcon,
    title: "Sports for Health & Fitness",
    description:
      "Promoting a drug-free and active lifestyle through tournaments, rural games, and sports coaching that build teamwork, discipline, and confidence among youth.",
  },
  {
    icon: GraduationCapIcon,
    title: "Education & Career Growth",
    description:
      "Empowering students through tuition centers, scholarships, and career guidance — helping youth access education, explore careers, and build a better future.",
  },
  {
    icon: StethoscopeIcon,
    title: "Medical Services & Blood Donation",
    description:
      "Ensuring accessible healthcare for all through medical camps, awareness drives, blood donation networks, and medical counseling for communities in need.",
  },
  {
    icon: UsersIcon,
    title: "Community Upliftment & Tribal Rights",
    description:
      "Supporting marginalized and tribal communities through skill development, legal awareness, and advocacy — protecting their culture, land, and rights.",
  },
  {
    icon: MegaphoneIcon,
    title: "Social Awareness & Environmental Stewardship",
    description:
      "Creating a responsible society through tree planting, pollution awareness, moral education, elderly care, women’s rights, and child safety initiatives.",
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

                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
