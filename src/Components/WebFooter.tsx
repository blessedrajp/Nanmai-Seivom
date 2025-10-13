import React, { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { images } from "../assets/Images/Images";

const LINKS = [
  { label: "Home", id: "#home" },
  { label: "About", id: "#about" },
  { label: "Services", id: "#services" },
  { label: "Contact", id: "#contact" },
] as const;

export const WebFooter = () => {
  const [active, setActive] = useState<string>("#home");

  // Smooth scroll
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Track active section
  useEffect(() => {
    const targets = LINKS.map((l) => document.querySelector(l.id)).filter(
      (n): n is Element => !!n
    );

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          )[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { root: null, threshold: [0.3, 0.6] }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--dark)",
        color: "white",
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Main footer container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Logo + Description */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              component="img"
              src={images.logo}
              alt="Nanmai Seivom Trust Logo"
              sx={{ height: 80 }}
            />
          </Box>
          {/* <Box
              component="img"
              src={images.qr}
              alt="Nanmai Seivom QR"
              sx={{ height: 80,width:'max-content',margin:'10px 0px 10px 20px',}}
            /> */}
          <Typography variant="body2" color="grey.400">
            Empowering communities through truth, love, and dedicated service
            since 2014.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {LINKS.map((link) => (
              <Button
                key={link.label}
                onClick={() => handleScroll(link.id)}
                sx={{
                  color: active === link.id ? "var(--primary)" : "grey.400",
                  fontWeight: active === link.id ? 600 : 400,
                  textTransform: "none",
                  justifyContent: "flex-start",
                  "&:hover": { color: "var(--primary)" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Services */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Our Services
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1.5 }}
          >
            {[
              "Sports Programs",
              "Education Support",
              "Medical Services",
              "Community Development",
              "Social Awareness",
            ].map((service) => (
              <Typography key={service} variant="body2" color="grey.400">
                {service}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Social + CTA */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Connect With Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, mt: 1.5 }}>
            {[InstagramIcon, FacebookIcon, YouTubeIcon].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "var(--primary)",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
          <Button
            onClick={() => handleScroll("#contact")}
            variant="contained"
            sx={{
              backgroundColor: "var(--primary)",
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              borderRadius: "30px",
              px: 3,
              "&:hover": { backgroundColor: "var(--primary)", opacity: 0.9 },
            }}
          >
            Join With Us
          </Button>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Divider sx={{ borderColor: "grey.700", my: 6 }} />
      <Typography
        variant="body2"
        color="grey.500"
        align="center"
        sx={{ fontSize: "0.85rem" }}
      >
        &copy; {new Date().getFullYear()} - Nanmai Seivom Trust. All rights
        reserved. Building better society rooted in truth and love.
      </Typography>
    </Box>
  );
};
