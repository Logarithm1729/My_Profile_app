import type { NextPage } from "next";
import { Box } from "@mui/system";

import styles from "../../styles/header.module.scss";
import UnderSmSize from "./UnderSmSize";
import UpperSmSize from "./UpperSmSize";
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { HeaderUpperItem } from "./atoms/HeaderUpperItem";
import { HeaderUnderItem } from "./atoms/HeaderUnderItem";

interface PROPS_HEADER {
  height: string;
}

const appTitle = "Log";

const Header: NextPage<PROPS_HEADER> = (props) => {
  const { height } = props;
  // const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // const toggleDrawer =
  //   (menuOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //     if (
  //       event &&
  //       event.type === "keydown" &&
  //       ((event as React.KeyboardEvent).key === "Tab" ||
  //         (event as React.KeyboardEvent).key === "Shift")
  //     ) {
  //       return;
  //     }

  //     setMenuOpen(!menuOpen);
  //   };

  return (
    <Box
      className={styles.bg_theme}
      height={height}
      width={"100%"}
      position={"fixed"}
      zIndex={1000}
    >
      <Box
        px={3}
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          height: "100%",
        }}
      >
        <UpperSmSize title={appTitle} />
      </Box>
      <Box
        px={3}
        sx={{
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
          height: "100%",
        }}
      >
        <UnderSmSize title={appTitle} />
      </Box>
    </Box>
  );
};

export default Header;
