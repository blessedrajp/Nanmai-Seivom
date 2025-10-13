import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import BoltIcon from "@mui/icons-material/FlashOn"; // Vision icon
import FlagIcon from "@mui/icons-material/Flag"; // Mission icon

export const WebAbout = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [showFullJourney, setShowFullJourney] = useState(false);

  const fullJourneyText = `
   Nanmai Seivom Movement was founded in 2020 in Madurai with over 50+ volunteers, working together to carry out social welfare activities. It supports orphans and parentless children by providing education, food, and medical assistance. Along with these, the movement is also engaged in tree-planting initiatives and serves as a bridge between blood donors and patients in need of blood. It continuously conducts blood donation awareness campaigns, helping to save many lives.

The movement also extends support to hill-region communities by arranging livelihood assistance and spreads awareness against drug abuse through sports tournaments. These tournaments help young people maintain a healthy lifestyle. By sending youth to district- and state-level sports competitions, it provides them with training and job opportunities.

Taking it forward, the movement has now begun to expand its social welfare projects across Tamil Nadu. Therefore, we invite you to join hands with us in bringing about this social transformation throughout the state!

  `;

  const truncateText = (text: string, wordLimit = 100) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <Box
      component="section"
      id="about"
      sx={{ p: 8, px: { xs: 2, md: 6 } }}
      bgcolor="grey.100"
      ref={aboutRef}
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
          About Nanmai Seivom
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--muted-foreground, #6b7280)",
          }}
        >
          Building communities through truth, love, and dedicated service since
          2014
        </Typography>
      </Box>

      {/* Image + Vision & Mission */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mb={8}
        alignItems="center"
        justifyContent="center"
      >
        <Box flex={1}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
            alt="Community education program"
            sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
          />
        </Box>

        <Box flex={1} display="flex" flexDirection="column" gap={3}>
          <Typography>
          Building communities through truth, love, and dedicated service since 2020.
Founded on the timeless values of compassion, truth, and service, Nanmai Seivom is a movement dedicated to creating a society rooted in goodness.
We strive to uplift lives by fostering unity, spreading kindness, and empowering individuals to be agents of positive change.
Our journey is guided by the belief that even the smallest acts of service can create lasting impact for generations to come
          </Typography>
          

          {/* Vision Card */}
          <Card
            sx={{
              p: 3,
              borderLeft: "6px solid",
              borderColor: "var(--primary)",
              boxShadow: 2,
            }}
          >
            <Box display="flex" alignItems="start" gap={2}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "var(--secondary)",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BoltIcon sx={{ color: "var(--primary)" }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={1}
                  color="var(--primary)"
                >
                  Our Vision
                </Typography>
                <Typography variant="body2">
                  To inspire and empower communities to build a better society
                  rooted in Truth and Love.
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* Mission Card */}
          <Card
            sx={{
              p: 3,
              borderLeft: "6px solid",
              borderColor: "var(--primary)",
              boxShadow: 2,
            }}
          >
            <Box display="flex" alignItems="start" gap={2}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "var(--secondary)",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FlagIcon sx={{ color: "var(--primary)" }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={1}
                  color="var(--primary)"
                >
                  Our Mission
                </Typography>
                <Typography variant="body2">
                  To build a better society rooted in truth and love by engaging
                  in diverse initiatives that empower communities. Through
                  sports, education, medical services, community development,
                  and environmental stewardship, we cultivate responsible and
                  empowered communities.
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Our Journey */}
      <Card
        sx={{
          mx: "auto",
          boxShadow: 3,
          borderTop: "6px solid",
          borderColor: "var(--primary)",
        }}
      >
        <CardContent sx={{ p: { xs: 4, md: 4 } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: "20px !important" }}
            color="var(--primary)"
          >
            Our Journey
          </Typography>

          <Typography variant="body1" color="text.primary" mb={2}>
            {showFullJourney
              ? fullJourneyText.split("\n").map((line, index) =>
                  line.trim() ? (
                    <Typography key={index} component="p" sx={{ mb: 2 }}>
                      {line.trim()}
                    </Typography>
                  ) : null
                )
              : truncateText(fullJourneyText, 100)}
          </Typography>

          {fullJourneyText.split(" ").length > 100 && (
            <Button
              size="small"
              onClick={() => setShowFullJourney((prev) => !prev)}
              sx={{
                background: "var(--primary)",
                color: "white",
                p: "7px 14px",
                mt: 3,
              }}
            >
              {showFullJourney ? "Show Less" : "Learn More"}
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
