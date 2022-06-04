import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/system";
import { useState } from "react";

import styles from "../../styles/works.module.scss";
import Image from "next/image";

const Index = () => {
  const [openTwitter, setOpenTwitter] = useState<boolean>(false);

  const onClickOpenTwitter = () => setOpenTwitter(!openTwitter);

  return (
    <Box sx={{ paddingTop: "55px", minHeight: "90vh" }}>
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <h2>My works</h2>
        <List>
          <ListItemButton onClick={onClickOpenTwitter}>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter app" />
          </ListItemButton>
          <Collapse in={openTwitter} timeout="auto" unmountOnExit>
            <Box
              sx={{
                width: "90%",
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Box px={3}>
                <h3 style={{ margin: "30px 0", fontWeight: "500" }}>
                  This app is using ...
                </h3>
                <ul className={styles.using}>
                  <li>Docker</li>
                  <li>Django Rest Framework</li>
                  <li>React.js</li>
                  <li>Redux tool kit</li>
                </ul>
                <p style={{ fontWeight: "300" }}>
                  Now I'm learning how to deploy.
                  <br />
                  You can see detail of this app on{" "}
                  <a
                    href="https://github.com/Logarithm1729/Twitter_Clone_App"
                    target="_blank"
                    rel="noreferrer"
                    style={{'color': '#008dff'}}
                  >
                    here
                  </a>
                  .
                </p>
              </Box>
              <Box>
                <Image
                  width={600}
                  height={390}
                  objectFit="contain"
                  src="/assets/worksImg/AppStructure.png"
                />
              </Box>
            </Box>
          </Collapse>
        </List>
      </Box>
    </Box>
  );
};

export default Index;
