import type { NextPage } from "next";
import { Box } from "@mui/material";
import Link from "next/link";

import styles from "../../styles/header.module.scss";
import { HeaderTitle } from "./atoms/HeaderTitle";
import { PROPS_TITLE } from "../../types/type_header";
import { HeaderUpperItem } from "./atoms/HeaderUpperItem";

const UpperSmSize: NextPage<PROPS_TITLE> = (props) => {
  const { title } = props;
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <HeaderTitle>{title}</HeaderTitle>
      <Box className="header-item">
        <HeaderUpperItem content="about" />
        <HeaderUpperItem content="works" />
        {/* <HeaderUpperItem content="contact" /> */}
      </Box>
    </Box>
  );
};

export default UpperSmSize;
