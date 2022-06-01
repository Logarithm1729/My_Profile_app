import type { NextPage } from "next";
import { Box } from "@mui/material";

import styles from "../../styles/home.module.scss";

interface PROPS_MAIN_TEXT {
  children: string;
}

export const MainText: NextPage<PROPS_MAIN_TEXT> = (props) => {
  const { children } = props;
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "100",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className={styles.text__main}
        sx={{ fontSize: { xs: "25px", sm: "50px", lg: "80px" } }}
      >
        {children}
      </Box>
    </Box>
  );
};
