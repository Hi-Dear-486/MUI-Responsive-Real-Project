import React from "react";
import {
  Feed,
  Sidebar,
  Rightbar,
  Navbar,
  AddConversion,
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
      <AddConversion />
    </Box>
  );
};

export default Home;
