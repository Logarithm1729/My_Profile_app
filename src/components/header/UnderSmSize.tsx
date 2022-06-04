import type { NextPage } from "next";
import { Box, SwipeableDrawer } from "@mui/material";

import { HeaderTitle } from "./atoms/HeaderTitle";
import { PROPS_TITLE } from "../../types/type_header";
import { CustomMenuIcon } from "./atoms/CustomMenuIcon";
import { useState } from "react";
import { HeaderUnderItem } from "./atoms/HeaderUnderItem";

const UnderSmSize: NextPage<PROPS_TITLE> = (props) => {
  const { title } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleDrawer =
    (menuOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMenuOpen(!menuOpen);
    };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SwipeableDrawer
        anchor="top"
        open={menuOpen}
        onClose={toggleDrawer(menuOpen)}
        onOpen={toggleDrawer(menuOpen)}
      >
        <Box
          px={3}
          sx={{
            minHeight: "35vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Box onClick={() => setMenuOpen(!menuOpen)}>
            <HeaderTitle>{title}</HeaderTitle>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <HeaderUnderItem
              content="about"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <HeaderUnderItem
              content="works"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {/* <HeaderUnderItem
              content="contact"
              onClick={() => setMenuOpen(!menuOpen)}
            /> */}
          </Box>
        </Box>
      </SwipeableDrawer>
      <HeaderTitle>{title}</HeaderTitle>
      <Box onClick={() => setMenuOpen(true)}>
        <CustomMenuIcon />
      </Box>
    </Box>
  );
};

export default UnderSmSize;
