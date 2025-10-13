import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { images } from "../assets/Images/Images";

export const WebHeader = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(href);
    }
    setIsMobileOpen(false);
  };

  // Observe sections to update active nav item
  useEffect(() => {
    const ids = ["#home", "#about", "#services", "#contact"] as const;
    const targets = ids
      .map((id) => document.querySelector(id))
      .filter((n): n is Element => !!n);

    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
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

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(6px)",
        borderBottom: "2px solid var(--primary)",
        color: "text.primary",
        boxShadow: 5,
        py: 1,
        px: { xs: 2, md: 6 },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", p: "0px !important" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={images.logo}
            alt="Logo"
            sx={{ height: 64, width: "auto" }}
          />
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color:
                    active === item.href ? "var(--primary)" : "text.primary",
                  fontWeight: active === item.href ? 700 : 500,
                  "&:hover": { color: "var(--primary)" },
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}
            {/* <Button
              variant="contained"
              onClick={() => handleNavClick("#contact")}
              sx={{
                backgroundColor: "var(--primary)",
                color: "#fff",
                borderRadius: "5px",
                px: 3,
                "&:hover": {
                  backgroundColor: "var(--primary)",
                  opacity: 0.9,
                },
              }}
            >
              Login
            </Button> */}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton onClick={toggleDrawer} sx={{ color: "text.primary" }}>
            {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: 280, backgroundColor: "#fff", color: "text.primary" },
        }}
      >
        {/* Drawer Header with Logo + Close */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Box
            component="img"
            src={images.logo}
            alt="Logo"
            sx={{ height: 48, width: "auto" }}
          />
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Drawer Nav Items */}
        <List sx={{ mt: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.href)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: active === item.href ? 700 : 500,
                    sx: {
                      color:
                        active === item.href ? "var(--primary)" : undefined,
                      "&:hover": { color: "var(--primary)" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          {/* <ListItem sx={{ mt: 1 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleNavClick("#contact")}
              sx={{
                backgroundColor: "var(--primary)",
                color: "#fff",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "var(--primary)",
                  opacity: 0.9,
                },
              }}
            >
              Login
            </Button>
          </ListItem> */}
        </List>
      </Drawer>
    </AppBar>
  );
};
