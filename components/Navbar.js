"use client";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoIosMail, IoLogoJavascript } from "react-icons/io";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          color="white"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          ZEE DEV
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IoLogoJavascript />
        </Box>
        <Search sx={{ p: 1 }}>
          <InputBase placeholder="Search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <IoIosMail color="action" size={30} />
          </Badge>
          <Badge badgeContent={1} color="error" sx={{ cursor: "pointer" }}>
            <IoNotificationsCircleOutline size={30} />
          </Badge>
          <Avatar
            alt="Person"
            src="data:image/jpeg;base64,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"
          />
        </Icons>
        <UserBox>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="span">Zeeshan</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
