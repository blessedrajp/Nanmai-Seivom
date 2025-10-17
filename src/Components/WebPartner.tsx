import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SponsorPopup from "./sponserpopup";

export const WebPartner = () => {
   const [openSponsor, setOpenSponsor] = useState(false);
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        background: "linear-gradient(to right,#086843, #0a7ba4)",
        color: "white",
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={8}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 900,
            mb: 1.5,
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Partner With Us
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            maxWidth:{xs:"100%",md:"65%"},
            margin:"auto",
            display:"inline-block",
            textAlign:"center"
          }}
        >
          Join hands with Nanmai Seivom Trust to create lasting impact in
          communities. Together, we can build a better society rooted in truth
          and love.
        </Typography>
      </Box>

      {/* Three cards with flex */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 8,
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            flex: 1,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            color: "white",
          }}
        >
          <CardContent sx={{ p: 5, textAlign: "center" }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <HandshakeIcon fontSize="large" />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
            Membership
            </Typography>
            <Typography sx={{ margin: "10px 0px !important",display:"inline-block", opacity: 0.9,fontSize:"14px" }}>
              Join as a member and be part of our mission to build a better society
            </Typography>
            <Box component="ul" sx={{ textAlign: "center", opacity: 0.8,fontSize:"12px",listStyleType:"none","& li":{marginBottom:"4px"},"& li:before":{content:'""',marginRight:"4px",display:"inline-block",width:"4px",height:"4px",background:"white",borderRadius:"50%",marginBottom:"3px"} }}>
              <li>Access to regular updates and impact reports</li>
              <li>Invitations to exclusive events and discussions</li>
              <li>Recognition as a supporting member</li>
              <li>Opportunities to contribute ideas for community initiatives</li>
            </Box>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            flex: 1,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            color: "white",
          }}
        >
          <CardContent sx={{ p: 5, textAlign: "center" }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <GroupIcon fontSize="large" />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Community Partnership
            </Typography>
            <Typography sx={{ margin: "10px 0px !important",display:"inline-block", opacity: 0.9,fontSize:"14px" }}>
              Collaborate with us to organize events and awareness programs in
              your area.
            </Typography>
            <Box component="ul" sx={{ textAlign: "center", opacity: 0.8,fontSize:"12px",listStyleType:"none","& li":{marginBottom:"4px"},"& li:before":{content:'""',marginRight:"4px",display:"inline-block",width:"4px",height:"4px",background:"white",borderRadius:"50%",marginBottom:"3px"} }}>
              <li>Joint event organization</li>
              <li>Resource sharing</li>
              <li>Volunteer coordination</li>
              <li>Local impact measurement</li>
            </Box>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            flex: 1,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            color: "white",
          }}
        >
          <CardContent sx={{ p: 5, textAlign: "center" }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <FavoriteIcon fontSize="large" />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Individual Donors
            </Typography>
            <Typography sx={{ margin: "10px 0px !important",display:"inline-block", opacity: 0.9,fontSize:"14px" }}>
              Make a direct difference in someone's life through your generous
              contributions.
            </Typography>
            <Box component="ul" sx={{ textAlign: "center", opacity: 0.8,fontSize:"12px",listStyleType:"none","& li":{marginBottom:"4px"},"& li:before":{content:'""',marginRight:"4px",display:"inline-block",width:"4px",height:"4px",background:"white",borderRadius:"50%",marginBottom:"3px"} }}>
              <li>Monthly giving programs</li>
              <li>Sponsor a child's education</li>
              <li>Fund medical camps</li>
              <li>Support sports equipment</li>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Buttons */}
      <Box textAlign="center">
        <Typography variant="h6"  sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            maxWidth:{xs:"100%",md:"65%"},
            margin:"auto",
            display:"inline-block",
            textAlign:"center"
          }}>
          Ready to make a difference? Get in touch with us to explore
          partnership opportunities.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            mt:2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "var(--primary)",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
           onClick={() => setOpenSponsor(true)}
          >
            Become a Sponsor
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              "&:hover": { bgcolor: "white", color: "var(--primary)" },
            }}
              onClick={() =>
    window.open("https://forms.gle/zZDL5YbFgJm1iZ7t8", "_blank")
  }
          >
            Join Membership
          </Button>
        </Box>

         <SponsorPopup open={openSponsor} onClose={() => setOpenSponsor(false)} />
      </Box>
    </Box>
  );
};
