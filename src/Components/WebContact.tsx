// WebContact.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { commonWord } from "../assets/CommonWord";

/* ---------- Zod Schema ---------- */
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
    // .max(20, "Phone number must not exceed 10 digits"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});
type ContactForm = z.infer<typeof contactSchema>;

/* ---------- Helpers ---------- */
function parseCssColor(value: string) {
  value = value.trim();
  const rgbMatch = value.match(/rgba?\((.+)\)/);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(",").map((p) => parseFloat(p.trim()));
    return { r: parts[0], g: parts[1], b: parts[2] };
  }
  const hex = value.replace("#", "");
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    return { r, g, b };
  }
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  }
  return { r: 0, g: 0, b: 0 };
}
const toRgba = (rgb: { r: number; g: number; b: number }, a: number) =>
  `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;

/* ---------- Component ---------- */
export const WebContact = () => {
  const [primarySolid, setPrimarySolid] = useState("#06b6d4");
  const [secondarySolid, setSecondarySolid] = useState("#f97316");
  const [primary05, setPrimary05] = useState("rgba(6,182,212,0.05)");
  const [primary10, setPrimary10] = useState("rgba(6,182,212,0.10)");

  const socialLinks = [
  {
    icon: InstagramIcon,
    url: "https://www.instagram.com/yourpage",
  },
  {
    icon: FacebookIcon,
    url: "https://www.facebook.com/profile.php?id=61573974056598",
  },
  {
    icon: YouTubeIcon,
    url: "https://www.youtube.com/@nanmaiseivom368",
  },
  {
    icon: WhatsAppIcon,
    url: "https://wa.me/8695101448",
  },
];

  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    const p = s.getPropertyValue("--primary") || "#06b6d4";
    const sec = s.getPropertyValue("--secondary") || "#f97316";
    const pRgb = parseCssColor(p);
    const secRgb = parseCssColor(sec);

    setPrimary05(toRgba(pRgb, 0.05));
    setPrimary10(toRgba(pRgb, 0.1));
    setPrimarySolid(p.toString().trim() || "#06b6d4");
    setSecondarySolid(sec.toString().trim() || "#f97316");
  }, []);

  /* ---------- Form ---------- */
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    console.log("submit", data);
    await new Promise((res) => setTimeout(res, 600));
    reset();
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box mx="auto">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 900,
              color: "var(--primary, " + primarySolid + ")",
              mb: 1.5,
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "var(--muted-foreground, #6b7280)",
            }}
          >
            Ready to join our mission? Let's connect and build better
            communities together
          </Typography>
        </Box>

        {/* Flex Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Contact Info */}
          <Box flex={1}>
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                border: "1px solid",
                borderColor: "var(--border, rgba(0,0,0,0.08))",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "var(--primary, " + primarySolid + ")",
                    mb: 3,
                  }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={2.5} mt={1.5}>
                  {/* Email */}
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    p={1.5}
                    sx={{ background: primary05, borderRadius: 2 }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        background: primary10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MailIcon sx={{ color: primarySolid }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                      <Typography
                        component="a"
                        sx={{
                          color: "#6b7280",
                          fontSize: "14px",
                          textDecoration: "none",
                        }}
                         href={`mailto:${commonWord.email}`}
                      >
                        {commonWord.email}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    p={1.5}
                    sx={{ background: primary05, borderRadius: 2 }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        background: primary10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon sx={{ color: primarySolid }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        Phone Numbers
                      </Typography>
                      <Typography sx={{ color: "#6b7280", fontSize: "14px" }}>
                        <Typography component="a" sx={{
                          color: "#6b7280",
                          fontSize: "14px",
                          textDecoration: "none",
                        }} href={`tel:+91${commonWord.mob1}`}>
                          +91 {commonWord.mob1}
                        </Typography>
                        <br />
                        <Typography component="a" sx={{
                          color: "#6b7280",
                          fontSize: "14px",
                          textDecoration: "none",
                        }} href={`tel:+91${commonWord.mob2}`}>
                          +91 {commonWord.mob2}
                        </Typography>
                        <br />
                        <Typography component="a" sx={{
                          color: "#6b7280",
                          fontSize: "14px",
                          textDecoration: "none",
                        }} href={`tel:+91${commonWord.mob3}`}>
                          +91 {commonWord.mob3}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Address */}
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    p={1.5}
                    sx={{ background: primary05, borderRadius: 2 }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        background: primary10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <LocationOnIcon sx={{ color: primarySolid }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>Address</Typography>
                      <Typography sx={{ color: "#6b7280", fontSize: "14px" }}>
                        39, Anjal nagar, 2nd Street,
                        <br />
                        Palamedu Main Road,
                        <br />
                        Madurai-625018
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                {/* Socials */}
                <Box mt={3}>
                  <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
                    Follow Us
                  </Typography>
                   <Box display="flex" gap={1.5}>
      {socialLinks.map(({ icon: Icon, url }, idx) => (
        <IconButton
          key={idx}
          onClick={() => window.open(url, "_blank")}
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            background: "#f3f4f6",
            color: primarySolid,
            "&:hover": {
              background: primarySolid,
              color: "#fff",
            },
          }}
        >
          <Icon fontSize="small" />
        </IconButton>
      ))}
    </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Form */}
          <Box flex={1}>
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                border: "1px solid",
                borderColor: "var(--border, rgba(0,0,0,0.08))",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "var(--primary, " + primarySolid + ")",
                    mb: 3,
                  }}
                >
                  Send Us a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={3} mt={2}>
                    {/* Name */}
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Name *"
                          placeholder="Your name"
                          fullWidth
                          size="small"
                          focused
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            "& input": {
                              fontSize: "14px",
                              fontFamily: "Regular_M",
                              padding: "12px 10px",
                            },
                            "& fieldset": {
                              borderWidth: "1.5px !important",
                            },
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "5px",
                              "&.Mui-focused fieldset": {
                                borderColor: "#cacacaff",
                              },
                            },
                            "& .Mui-error fieldset": {
                              borderColor: "#ef4444 !important",
                            },
                            "& label.Mui-focused": {
                              color: "var(--primary)",
                              fontWeight: 600,
                              fontFamily: "Regular_M",
                            },
                          }}
                        />
                      )}
                    />

                    {/* Phone */}
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Phone *"
                          focused
                          placeholder="Your phone number"
                          fullWidth
                          size="small"
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                          sx={{
                            "& input": {
                              fontSize: "14px",
                              fontFamily: "Regular_M",
                              padding: "12px 10px",
                            },
                            "& fieldset": {
                              borderWidth: "1.5px !important",
                            },
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "5px",
                              "&.Mui-focused fieldset": {
                                borderColor: "#cacacaff",
                              },
                            },
                            "& .Mui-error fieldset": {
                              borderColor: "#ef4444 !important",
                            },
                            "& label.Mui-focused": {
                              color: "var(--primary)",
                              fontWeight: 600,
                              fontFamily: "Regular_M",
                            },
                          }}
                        />
                      )}
                    />

                    {/* Email */}
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email *"
                          placeholder="your.email@example.com"
                          fullWidth
                          focused
                          size="small"
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          sx={{
                            "& input": {
                              fontSize: "14px",
                              fontFamily: "Regular_M",
                              padding: "12px 10px",
                            },
                            "& fieldset": {
                              borderWidth: "1.5px !important",
                            },
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "5px",
                              "&.Mui-focused fieldset": {
                                borderColor: "#cacacaff",
                              },
                            },
                            "& .Mui-error fieldset": {
                              borderColor: "#ef4444 !important",
                            },
                            "& label.Mui-focused": {
                              color: "var(--primary)",
                              fontWeight: 600,
                              fontFamily: "Regular_M",
                            },
                          }}
                        />
                      )}
                    />

                    {/* Message */}
                    <Controller
                      name="message"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Message *"
                          placeholder="Tell us how you'd like to get involved..."
                          fullWidth
                          multiline
                          focused
                          minRows={4}
                          size="small"
                          error={!!errors.message}
                          helperText={errors.message?.message}
                          sx={{
                            "& textarea": {
                              fontSize: "14px",
                              fontFamily: "Regular_M",
                            },
                            "& fieldset": {
                              borderWidth: "1.5px !important",
                            },
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "5px",
                              "&.Mui-focused fieldset": {
                                borderColor: "#cacacaff",
                              },
                            },
                            "& .Mui-error fieldset": {
                              borderColor: "#ef4444 !important",
                            },
                            "& label.Mui-focused": {
                              color: "var(--primary)",
                              fontWeight: 600,
                              fontFamily: "Regular_M",
                            },
                          }}
                        />
                      )}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                        backgroundColor: "#15803d",
                        "&:hover": { backgroundColor: "#166534" },
                      }}
                      disabled={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
