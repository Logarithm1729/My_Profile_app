import { Box } from "@mui/material";
import { bgcolor, height, width } from "@mui/system";
import { MainText } from "../components/home/MainText";
import MyInterestedLung from "../components/home/MyInterestedLung";
import { VideoBackground } from "../components/home/VideoBackground";

import styles from "../styles/home.module.scss";

const mainText = "Welcome Log's Page !!";

export default function Index() {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <VideoBackground />
        <MainText>{mainText}</MainText>
      </Box>
      <Box
        sx={{
          width: "90%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <h2 className={styles.sub__title}>My interested languages</h2>
        <MyInterestedLung width={100} height={100} numOfShowImg={4} />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <p className={styles.sub__content}>
            I have been working Python, JavaScript.
            <br />I hope to be the engineer such as backend, frontend.
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          margin: 0,
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h2 className={styles.sub__title}>My Life and Works</h2>
          <p className={styles.sub__content}>
            I'm a graduete student
            <br />
            and specializing a electronics in Toyama Univ.
            <br />
            I usualy make or consider circuit of oscillator.
            <br />
            In addition, I have been learning English.
            <br />
            Since I sometime want to be engineer in overseas.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
