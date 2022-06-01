import type { NextPage } from "next";
import Link from "next/link";

import styles from "../../../styles/header.module.scss";

interface PROPS_HEADER_ITEM {
  content: string;
  onClick: any;
}

export const HeaderUnderItem: NextPage<PROPS_HEADER_ITEM> = (props) => {
  const { content, onClick } = props;

  const text = content.toLowerCase();

  return (
    <Link href={`/${text}`}>
      <a className={styles.header__underItem} onClick={onClick}>
        {text.toUpperCase()}
      </a>
    </Link>
  );
};
