import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';import type { SidebarProps } from "../Interface/Custom";
import { images } from "../assets/Images/Images";
import Cookies from "js-cookie";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

export const Sidebar = ({
  onNavigate,
  onNavigateLink,
  onLogout,
  onProfileSettings,
}: SidebarProps) => {
  const location = useLocation();
  const role = Cookies.get("role");

  const navLinks = useMemo(() => {
    if (role === "requestor") {
      return [
        {
          label: "My Requests",
          path: "/tickets",
          icon: <DescriptionOutlinedIcon fontSize="small" />,
        },
        {
          label: "New Sampling",
          path: "/create-sampling",
          icon: <AddOutlinedIcon fontSize="small" />,
        },
      ];
    } else if (role === "BH") {
      return [
        {
          label: "Pending Approvals",
          path: "/pending-approvals",
          icon: <HistoryIcon fontSize="small" />,
        },
        {
          label: "Reports",
          path: "/reports",
          icon: <DescriptionOutlinedIcon fontSize="small" />,
        },
      ];
    } else if (role === "FOH") {
      return [
        {
          label: "Approved Requests",
          path: "/approved-requests",
          icon: <AssignmentTurnedInOutlinedIcon fontSize="small" />,
        },
        {
          label: "Completed Requests",
          path: "/completed-requests",
          icon: <CheckCircleOutlineIcon fontSize="small" />,
        },
        {
          label: "FOH Reports",
          path: "/foh-reports",
          icon: <AssessmentOutlinedIcon fontSize="small" />,
        },
      ];
    } else {
      return [
        {
          label: "Sampling Requests",
          path: "/sampling-requests",
          icon: <CheckBoxOutlinedIcon fontSize="small" />,
        },
      ];
    }
  }, [role]);

  const user = { name: "John Doe", role: "Admin", image: "" };
  const userInitial = user.name?.trim()?.charAt(0)?.toUpperCase() ?? "U";

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const openMenu = (e: React.MouseEvent<HTMLElement>) =>
    setMenuAnchor(e.currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  const handleNavClick = (path: string) => {
    onNavigateLink?.(path);
    onNavigate?.();
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--white)",
      }}
    >
      {/* Logo / Brand */}
      <Box
        sx={{
          p: 2,
          backgroundColor: "var(--white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Box
          component="img"
          src={images.logo}
          alt="Brand"
          sx={{ width: 50, display: "block", userSelect: "none" }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Sampling
        </Typography>
      </Box>

      {/* Navigation */}
      <Box sx={{ flex: 1, overflow: "auto", p: 1.25 }}>
        <List sx={{ mt: 0.5 }}>
          {navLinks.map((link) => {
            const selected = location.pathname === link.path; // Compare with current location
            return (
              <Tooltip
                key={link.path}
                title={link.label}
                placement="right"
                disableInteractive
              >
                <ListItemButton
                  selected={selected}
                  onClick={() => handleNavClick(link.path)}
                  sx={{
                    position: "relative",
                    borderRadius: "5px",
                    mb: 0.5,
                    px: 1.25,
                    py: 0.8,
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    color: "var(--title)",
                    "& .MuiListItemIcon-root": {
                      minWidth: 32,
                      color: "var(--titleSec)",
                    },
                    "&:not(.Mui-selected):hover": {
                      backgroundColor: "var(--secondary)",
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                      backgroundColor: "var(--primary)",
                    },
                    "&.Mui-selected .MuiListItemIcon-root, &.Mui-selected .MuiListItemText-primary":
                      {
                        color: "var(--white)",
                      },
                  }}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 700,
                      noWrap: true,
                      letterSpacing: 0.2,
                    }}
                  />
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>
      </Box>

      <Divider />
    </Box>
  );
};
