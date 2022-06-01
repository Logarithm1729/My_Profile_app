import { Link } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";

interface PROPS_ICON_BOX {
  children: any;
  link: string;
}

export const IconBox: NextPage<PROPS_ICON_BOX> = (props) => {
  const { children, link } = props;
  return (
    <Box ml={{ xs: 3, md: 6 }}>
      <Link href={link} target="_blank" sx={{ color: "gray" }}>
        {children}
      </Link>
    </Box>
  );
};
