import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const partners = [
  "Partner A",
  "Partner B",
  "Partner C",
  "Partner D",
  "Partner E",
  "Partner F",
];

export const WebPartnersWithus = () => {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "background.paper", px: { xs: 2, md: 6 },py:"3px" }}
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
          Our Partners
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--muted-foreground, #6b7280)",
          }}
        >
          Collaborating with amazing organizations to create lasting impact
        </Typography>
      </Box>

      {/* Scrolling Partners */}
      <Box sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            width: "max-content",
            animation: "scroll 20s linear infinite",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 250,
                flexShrink: 0,
                textAlign: "center",
                boxShadow: 0,
                border: 1,
                borderColor: "divider",
                py:1
              }}
            >
              <CardContent>
                <FavoriteBorderIcon sx={{ fontSize: 20, color: "var(--primary)", mb:.5 }} />
                <Typography variant="h6" color="var(--primary)" fontWeight="bold" sx={{fontSize:'14px'}}>
                  {partner}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Scroll animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};
