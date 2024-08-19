import React from "react";
import {
  Feed,
  Sidebar,
  Rightbar,
  Navbar,
} from "../components/custom-component";
import { Box, Stack } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;
