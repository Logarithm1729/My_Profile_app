import type { NextPage } from "next";
import Link from "next/link";

import styles from "../../../styles/header.module.scss";

interface PROPS_HEADER_ITEM {
  content: string;
}

export const HeaderUpperItem: NextPage<PROPS_HEADER_ITEM> = (props) => {
  const { content } = props;

  const text = content.toLowerCase();

  return (
    <Link href={`/${text}`}>
      <a className={styles.header__upperItem}>{text.toUpperCase()}</a>
    </Link>
  );
};
