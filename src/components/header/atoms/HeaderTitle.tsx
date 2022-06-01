import { Box } from "@mui/system";
import type { NextPage } from "next";
import Link from "next/link";

import styles from "../../../styles/header.module.scss";

interface PROPS_HEADER_TITLE {
  children: any;
}

export const HeaderTitle: NextPage<PROPS_HEADER_TITLE> = (props) => {
  const { children } = props;
  return (
    <Box className="header-title">
      <Link href="/">
        <a className={styles.header__title}>{children}</a>
      </Link>
    </Box>
  );
};
