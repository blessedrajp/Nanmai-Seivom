import { Box, Typography } from "@mui/material";
import { AnimatedCounter } from "./AnimatedCounter";

export const WebImpact = () => {
  const impactData = [
    { label: "Youth Engaged", target: 5000, suffix: "+" },
    { label: "Tournaments Conducted", target: 30, suffix: "+" },
    { label: "Medical Beneficiaries", target: 1000, suffix: "+" },
    { label: "Years of Service", target: 5, suffix: "+" },
  ];

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "primary.main",
        background: "linear-gradient(to right,#086843, #0a7ba4)",
        color: "common.white",
        px: { xs: 2, md: 6 },
        py: 8,
      }}
    >
      <Box maxWidth={800} mx="auto" textAlign="center" mb={8}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 900,
            mb: 1.5,
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Our Impact
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            maxWidth: { xs: "100%", md: "65%" },
            margin: "auto",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          Numbers that tell our story of community transformation
        </Typography>
      </Box>

      {/* Impact Items */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={6}>
        {impactData.map((item, index) => (
          <Box key={index} textAlign="center" minWidth={150} flex="1 1 150px">
            <Typography
              variant="h3"
              component="div"
              fontWeight="bold"
              mb={1}
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
            >
              <AnimatedCounter target={item.target} suffix={item.suffix} />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
