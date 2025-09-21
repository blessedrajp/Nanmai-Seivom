import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  Chip,
  ButtonBase,
} from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onMenuClick?: () => void;
  isSidebarCollapsed?: boolean;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const openProfile = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const closeProfile = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    Cookies.remove("sampling_token");
    Cookies.remove("role");
    Cookies.remove("name");
    Cookies.remove("id");
    Cookies.remove("email");
    navigate("/login");
  };

  const username = Cookies.get("name");
  const role = Cookies.get("role");
  // Dummy user
  const user = useMemo(() => ({ name: username, role: role, image: "" }), []);
  const userInitial = user.name?.trim()?.charAt(0)?.toUpperCase() ?? "U";

  const pageTitle = "Welcome back,";

  // Theme toggle: sync with localStorage and HTML attribute
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "dark" || attr === "light") return attr;
    } catch {}
    return "dark";
  });
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "var(--white)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
          px: { xs: 1.5, md: 2.5 },
          py: { xs: 0.75, md: 1.4 },
          backgroundColor: "var(--white)",
        }}
      >
        {/* Left: menu + title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flex: 1,
            minWidth: 0,
          }}
        >
          <IconButton
            onClick={onMenuClick}
            aria-label="toggle sidebar"
            size="small"
            sx={{ color: "var(--titleThird)" }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              color: "var(--title)",
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: "15px", md: "16px" },
              letterSpacing: 0.2,
            }}
            noWrap
          >
            {pageTitle + " " + user.name}
          </Typography>
        </Box>

        {/* Center: search (md+) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            px: 2,
          }}
        ></Box>

        {/* Right: actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: "solid 1px var(--border-color)",
            padding: "5px",
            borderRadius: "6px",
          }}
        >
          {/* Clickable identity area */}
          <ButtonBase
            onClick={openProfile}
            aria-label="open profile menu"
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
              px: 1,
              py: 0.25,
              borderRadius: 2,
              transition: "background-color 0.2s ease",
              "&:hover": { backgroundColor: "var(--hover)" },
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "var(--title)",
                  lineHeight: 1.15,
                  fontWeight: 700,
                }}
                noWrap
                title={user.name || ""}
              >
                {user.name}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Chip
                  label={user.role || "Member"}
                  size="small"
                  sx={{
                    height: 18,
                    "& .MuiChip-label": {
                      px: 0.75,
                      fontSize: 10,
                      color: "var(--titleSec)",
                    },
                    border: "1px solid var(--border-color)",
                    bgcolor: "transparent",
                  }}
                  variant="outlined"
                />
              </Box>
            </Box>

            <Badge
              overlap="circular"
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              sx={{
                "& .MuiBadge-badge": { border: "2px solid var(--white)" },
              }}
            >
              <Avatar
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: "var(--avatar-bg)",
                  color: "var(--avatar-fg)",
                  fontSize: 14,
                  fontWeight: 700,
                }}
                src={user.image || undefined}
              >
                {!user.image && userInitial}
              </Avatar>
            </Badge>
          </ButtonBase>

          {/* Fallback avatar button for xs screens */}
          <Tooltip title="Account">
            <IconButton
              onClick={openProfile}
              sx={{ p: 0.25, display: { xs: "inline-flex", sm: "none" } }}
              aria-label="open profile menu"
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "var(--avatar-bg)",
                  color: "var(--avatar-fg)",
                  fontSize: 14,
                  fontWeight: 700,
                }}
                src={user.image || undefined}
              >
                {!user.image && userInitial}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeProfile}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "hidden",
                mt: 1,
                borderRadius: 2,
                border: "1px solid var(--border-color)",
                boxShadow: "0px 4px 16px rgba(0,0,0,0.06)",
                minWidth: 240,
                backgroundColor: "var(--white)",
              },
            }}
          >
            <Box sx={{ px: 1.5, py: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "var(--title)", lineHeight: 1.2, fontWeight: 700 }}
              >
                {user.name}
              </Typography>
              <Typography variant="caption" sx={{ color: "var(--titleSec)" }}>
                {user.role}
              </Typography>
            </Box>
            <Divider />
            {/* <MenuItem onClick={closeProfile} sx={{ color: "var(--title)" }}>
              Profile
            </MenuItem>
            <MenuItem onClick={closeProfile} sx={{ color: "var(--title)" }}>
              Settings
            </MenuItem> */}
            <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};
