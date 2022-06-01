import { Box } from "@mui/material";
import type { NextPage } from "next";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface PROPS_DEFAULT_LAYOUT {
  children: any;
}

export const headerHeight = "55px";

const DefaultLayout: NextPage<PROPS_DEFAULT_LAYOUT> = (props) => {
  const { children } = props;
  return (
    <>
      <Box height={"100vh"} m={0} position={"relative"}>
        <Header height={headerHeight} />
        <main
          style={{
            margin: "0",
            zIndex: "0",
          }}
        >
          {children}
        </main>
        <Footer />
      </Box>
    </>
  );
};

export default DefaultLayout;
