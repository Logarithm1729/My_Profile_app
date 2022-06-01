import MenuIcon from "@mui/icons-material/Menu";
import { Box, style } from "@mui/system";
import { useState } from "react";

import styles from "../../../styles/header.module.scss";

export const CustomMenuIcon = () => {
  return (
    <Box className={styles.menu__icon}>
      <MenuIcon />
    </Box>
  );
};
