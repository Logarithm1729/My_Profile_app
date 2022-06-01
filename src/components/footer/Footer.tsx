import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import styles from "../../styles/footer.module.scss";
import { IconBox } from "./atoms/IconBox";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#white",
      }}
    >
      <Box display={"flex"} flexDirection="column" px={4}>
        <Box
          className="link-icons-related-me"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItem: "center",
          }}
        >
          <Box className="text-container">
            <p>You can get me! !</p>
          </Box>
          <Box
            className="icon-container"
            sx={{
              margin: "auto 0",
              display: "flex",
            }}
          >
            <IconBox link="https://github.com/Logarithm1729?tab=repositories">
              <GitHubIcon />
            </IconBox>
            <IconBox link="#">
              <GoogleIcon />
            </IconBox>
            <IconBox link="#">
              <TwitterIcon />
            </IconBox>
            <IconBox link="#">
              <InstagramIcon />
            </IconBox>
            <IconBox link="#">
              <FacebookIcon />
            </IconBox>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection="row">
          <Box
            className="my-using-lang"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <h3>LUNGUAGE</h3>
            <h5>React</h5>
            <h5>Nextjs</h5>
            <h5>TypeScript</h5>
            <h5>Python</h5>
          </Box>
          <Box className="Contact"></Box>
        </Box>
        <Box className="copy-right"></Box>
      </Box>
    </Box>
  );
}
