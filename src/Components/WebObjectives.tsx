import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import DumbbellIcon from "@mui/icons-material/FitnessCenter";
import BookIcon from "@mui/icons-material/Book";
import StethoscopeIcon from "@mui/icons-material/LocalHospital";
import UsersIcon from "@mui/icons-material/People";
import LeafIcon from "@mui/icons-material/Grass";
import HeartIcon from "@mui/icons-material/FavoriteBorder";

const objectives = [
  {
    icon: DumbbellIcon,
    title: "Promote Health and Fitness through Sports",
    description: "Building healthy communities through active engagement",
  },
  {
    icon: BookIcon,
    title: "Enhance Educational Opportunities",
    description: "Creating pathways for learning and growth",
  },
  {
    icon: StethoscopeIcon,
    title: "Ensure Accessible Medical Services",
    description: "Healthcare for all community members",
  },
  {
    icon: UsersIcon,
    title: "Foster Community Development",
    description: "Strengthening bonds and collective growth",
  },
  {
    icon: LeafIcon,
    title: "Engage in Holistic Activities",
    description: "Comprehensive approach to community well-being",
  },
  {
    icon: HeartIcon,
    title: "Promote Truth and Love",
    description: "Foundation of all our community initiatives",
  },
];

export const WebObjectives = () => {
  const objectivesRef = useRef<HTMLDivElement | null>(null);
  const [objectivesVisible, setObjectivesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setObjectivesVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (objectivesRef.current) observer.observe(objectivesRef.current);

    return () => {
      if (objectivesRef.current) observer.unobserve(objectivesRef.current);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{ bgcolor: "background.default",pt:8, px: { xs: 2, md: 6 } }}
      ref={objectivesRef}
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
          Our Objectives
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--muted-foreground, #6b7280)",
          }}
        >
          Six core principles guiding our mission
        </Typography>
      </Box>

      {/* Objectives Cards */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                p: 3,
                width: { xs: "100%", sm: 300, md: 320 },
                boxShadow: 0,
                border: 1,
                borderColor: "divider",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "var(--secondary)",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <Icon sx={{ color: "var(--primary)", fontSize: 24 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="var(--primary)"
                  mb={1}
                  sx={{fontSize:"16px",lineHeight:"20px"}}
                >
                  {objective.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{paddingTop:"10px !important"}}>
                  {objective.description}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
