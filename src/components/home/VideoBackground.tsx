import { Box } from "@mui/system";

import styles from "../../styles/home.module.scss";

export const VideoBackground = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-100",
        // overflow: "hidden",
        height: "100%",
        width: "100%",
      }}
    >
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/assets/TopBackground.mp4" />
      </video>
    </Box>
  );
};
