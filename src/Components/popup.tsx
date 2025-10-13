import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { images } from "../assets/Images/Images";

const PopupModal = () => {
  const [open, setOpen] = useState(false);

  // Show popup when page refreshes or loads
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          textAlign: "center",

        "@media (max-width: 800px)": {
            width:'90%',
        }
        }}
      >
        <Box component='img' src={images.appLogo} sx={{width:'100px','& img':{width:'100%'}}}/>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          About Blood Donation App
        </Typography>
        <Typography variant="body1" gutterBottom>
          A bridge between donors and seekers
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          App is releasing soon at Play Store 
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleClose}
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PopupModal;