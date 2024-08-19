"use client";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
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
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          color="initial"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          ZEE DEV
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IoLogoJavascript />
        </Box>
        <Search>
          <InputBase placeholder="Search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <IoIosMail color="action" size={30} />
          </Badge>
          <Badge badgeContent={1} color="error">
            <IoNotificationsCircleOutline size={30} />
          </Badge>
          <Avatar alt="Person" src="/static/images/avatar/1.jpg" />
        </Icons>
        <UserBox>
          <Avatar alt="Person" src="/static/images/avatar/1.jpg" />
          <Typography variant="span">Zeeshan</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
