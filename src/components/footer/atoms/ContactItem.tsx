import { Box } from "@mui/system";
import type { NextPage } from "next";

interface PROPS_CONTACT_ITEM {
  children: any;
  IconComp: any;
}

export const ContactItem: NextPage<PROPS_CONTACT_ITEM> = (props) => {
  const { children, IconComp } = props;
  return (
    <Box display="flex" justifyContent="center" my={2}>
      {IconComp}
      {children}
    </Box>
  );
};
