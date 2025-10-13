import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import {
  CalendarToday as Calendar,
  Handshake,
  PersonAdd as UserPlus,
} from "@mui/icons-material";

export const WebUpcomingEvent = () => {
  const events = [
    {
      title: "Autonomous Events",
      description:
        "Self-organized initiatives led by our dedicated team members",
      icon: Calendar,
      color: "var(--primary)",
      buttonText: "Learn More",
      buttonTestId: "button-learn-more-autonomous",
      href: "#about",
    },
    {
      title: "Collaborative Events",
      description:
        "Partnership programs with local organizations and communities",
      icon: Handshake,
      color: "var(--primary)",
      buttonText: "Join Partnership",
      buttonTestId: "button-join-partnership",
      href: "#contact",
    },
    {
      title: "Volunteer Opportunities",
      description:
        "Community participation events where anyone can contribute",
      icon: UserPlus,
      color: "var(--primary)",
      buttonText: "Volunteer Now",
      buttonTestId: "button-volunteer-now",
      href: "#contact",
    },
  ];

  return (
    <Box component="section" sx={{ px: { xs: 2, md: 6 }, py: 8 }}>
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
          Upcoming Events
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--muted-foreground, #6b7280)",
          }}
        >
          Join us in our mission to build better communities
        </Typography>
      </Box>

      {/* Events Container */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {events.map((event, idx) => {
          const Icon = event.icon;
          return (
            <Card
              key={idx}
              sx={{
                width: { xs: "100%", sm: 300, md: 320 },
                textAlign: "center",
                boxShadow: 1,
                border: 1,
                borderColor: "divider",
                flexGrow: 1,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    background: `var(--secondary)`,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <Icon sx={{ color: "var(--primary)", fontSize: 20 }} />
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={event.color}
                  mb={2}
                >
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  {event.description}
                </Typography>
                <Button
                  variant="contained"
                  data-testid={event.buttonTestId}
                  sx={{ mt: 2, mb: 1, background: "var(--primary)" }}
                  onClick={() => {
                    const target = document.querySelector(event.href as string);
                    target?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {event.buttonText}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
