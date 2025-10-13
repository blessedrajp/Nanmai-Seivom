import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { images } from "../assets/Images/Images";

interface SponsorPopupProps {
  open: boolean;
  onClose: () => void;
}

const SponsorPopup: React.FC<SponsorPopupProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 450,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 3,
          textAlign: "center",
          outline: "none",
          "@media (max-width: 800px)": {
            width: "90%",
            p: 2,
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          Support Our Cause 💖
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Scan the QR code below to become a sponsor.
        </Typography>

        <Box
          component="img"
          src={images.scanner}
          alt="UPI QR"
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: 3,
            mb: 3,
          }}
        />

        <Typography variant="body2" sx={{ mb: 2 }}>
          UPI ID: <strong>nammaiseivomtrustmadurai@sbi</strong>
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={onClose}
          sx={{ borderRadius: 2, textTransform: "none" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default SponsorPopup;
