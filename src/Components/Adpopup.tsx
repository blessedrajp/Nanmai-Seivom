import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button, Stack } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import { images } from "../assets/Images/Images";

const PopupModal = () => {
  const [open, setOpen] = useState(false);

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
          width: 500,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          outline: "none",
          "@media (max-width: 800px)": {
            width: "90%",
            p: 3,
          },
        }}
      >
        <Box
          component="img"
          src={images.appLogo}
          alt="App Logo"
          sx={{ width: "100px", mb: 2 }}
        />

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "error.main" }}
        >
          Blood Donation App
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          This app will be released soon!
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <AndroidIcon color="success" />
          <Typography variant="body2" color="text.secondary">
            Available soon on Google Play
          </Typography>
        </Stack>

        <Button
          variant="contained"
          color="error"
          onClick={handleClose}
          sx={{ borderRadius: 2, textTransform: "none" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PopupModal;
