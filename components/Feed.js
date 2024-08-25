import * as React from "react";
import { Box } from "@mui/material";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={2} p={2}>
      <Posts
        Alt={"Paella dish"}
        Image={
          "https://cdn.shopify.com/s/files/1/0281/0049/3396/files/49-_Q0A3415_1024x1024.jpg?v=1571853062"
        }
        description={
          "Best Dress Shirts For Bodybuilders | Best Muscle Fit Dress Shirts."
        }
      />
      <Posts
        Alt={" ANDREI DEIU"}
        Image={"https://i.ytimg.com/vi/Lv5_frieCGk/sddefault.jpg"}
        description={
          "Andrei Deiu Stylish T - Shirt • Best Outfits For Men's 2024."
        }
      />
      <Posts
        Alt={"Shopping Index"}
        Image={
          "https://images.squarespace-cdn.com/content/v1/5bfc8ca81137a61353c058bf/1566688076242-IHFA1QBXQXBD0SUM7298/women-shopping-alr-3.jpg"
        }
        description={"Shopping Index - Middle Mississippi River Valley."}
      />
    </Box>
  );
};

export default Feed;
