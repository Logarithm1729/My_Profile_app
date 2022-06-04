import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

import styles from "../../styles/works.module.scss";

const DataAnalysisField = () => {
  const [openAnalysis, setOpenAnalysis] = useState<boolean>(false);

  const onClickOpenAnalysis = () => setOpenAnalysis(!openAnalysis);
  return (
    <>
      <ListItemButton
        onClick={onClickOpenAnalysis}
        sx={{ backgroundColor: "#ffe4e1", marginBottom: "10px" }}
      >
        <ListItemIcon>
          <AutoGraphIcon />
        </ListItemIcon>
        <ListItemText primary="Data Analysis" />
      </ListItemButton>
      <Collapse in={openAnalysis} timeout="auto" unmountOnExit>
        <Box width="90%" margin="0 auto">
          <h2 style={{ fontWeight: "200" }}>Comming soon ...</h2>
        </Box>
      </Collapse>
    </>
  );
};

export default DataAnalysisField;
