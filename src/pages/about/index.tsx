import { Button } from "@mui/material";
import { Box, style } from "@mui/system";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import styles from "../../styles/about.module.scss";
import { ImageCard } from "../../components/about/ImageCard";

const Index = () => {
  return (
    <Box
      py={"55px"}
      sx={{
        minHeight: "90vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#222222",
        color: "white",
      }}
    >
      <Box className="my-info" width="90%" mt={3}>
        <Box className="my-name">
          <p className={styles.profile__name}>Kosuke Nakamura</p>
          <p className={styles.profile__subdetail}>
            A university Student (Specializing electronics)
          </p>
        </Box>
        <Box
          className="avatar"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "solid 3px #41b9ae",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image src="/assets/worksImg/no2.png" width={200} height={200} />
          </Box>
        </Box>
        <Box
          className="descriptions"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Box className="About">
            <h2>About me</h2>
            <p className={styles.profile__content}>
              I&#39;m a graduate student of toyama university. My interesting field
              is Web technology, Mearchine Learning. I have been learning
              Machine learnging using Python and TensorFlow. I analyzed image,
              natural language. It is impressed for me. Now, I learn and work
              web technology such as Next.js, Rest Framework API, Programming
              Competition. If you are ok, let&#39;s see video below. This video is
              introducing a web app that I created.
            </p>
            <Box
              className="btn-rapper"
              display="flex"
              justifyContent="center"
              alignItems="centerf"
            >
              <Button variant="contained" sx={{ backgroundColor: "#56beb9" }}>
                <NavigateNextIcon />
                <a
                  href="https://www.youtube.com/watch?v=dMcffr7eMzc"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  watch video
                </a>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              <ImageCard
                width={300}
                height={200}
                imgPath="/assets/worksImg/no4.png"
                title="Auth Modal"
              >
                This Modal is used Login and Sign Up. It is using Modal
                component of Material Ui.
              </ImageCard>
              <ImageCard
                width={300}
                height={200}
                imgPath="/assets/worksImg/no7.png"
                title="Timeline"
              >
                This app have function of follow, like, searching user and tweet
              </ImageCard>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
