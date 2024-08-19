import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { MdAddHome } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineGroups3 } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuMoonStar } from "react-icons/lu";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      component={Paper}
    >
      <List>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <MdAddHome size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Home page
            </Typography>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <RiPagesLine size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Pages
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <MdOutlineGroups3 size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Groups
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <SiMarketo size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Marketplace
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <FaUserFriends size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Friends
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <IoSettingsOutline size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Settings
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <CgProfile size={30} />
            </ListItemIcon>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Profile
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <LuMoonStar size={30} />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
