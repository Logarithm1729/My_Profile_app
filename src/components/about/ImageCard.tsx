import { Box } from "@mui/system";
import type { NextPage } from "next";
import Image from "next/image";

interface PROPS_IMAGE_CARD {
  children: any;
  width: number;
  height: number;
  imgPath: string;
  title: string;
}

export const ImageCard: NextPage<PROPS_IMAGE_CARD> = (props) => {
  const { children, width, height, imgPath, title } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      //   width={width}
      //   height={height}
    >
      <Box
        sx={{ overflow: "hidden", borderRadius: "10px" }}
        width={width}
        height={height}
        m={3}
      >
        <Image width={width} height={height} src={imgPath} objectFit="cover" />
      </Box>
      <Box
        width={width}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <p style={{ fontWeight: "600", margin: "0 0 20px 0" }}>{title}</p>
        <p style={{ margin: "0" }}>{children}</p>
      </Box>
    </Box>
  );
};
