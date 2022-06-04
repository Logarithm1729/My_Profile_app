import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import type { NextPage } from "next";
import { Box } from "@mui/system";
import Image from "next/image";

import styles from "../../styles/works.module.scss";

const TwitterField: NextPage = () => {
  const [openTwitter, setOpenTwitter] = useState<boolean>(false);
  const onClickOpenTwitter = () => setOpenTwitter(!openTwitter);

  return (
    <>
      <ListItemButton
        onClick={onClickOpenTwitter}
        sx={{ backgroundColor: "#f0f8ff", marginBottom: "10px" }}
      >
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
              Now I am learning how to deploy.
              <br />
              You can see detail of this app on{" "}
              <a
                href="https://github.com/Logarithm1729/Twitter_Clone_App"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#008dff" }}
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
    </>
  );
};

export default TwitterField;
