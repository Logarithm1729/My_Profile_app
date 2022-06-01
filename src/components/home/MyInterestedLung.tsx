import { Box } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import path from "path";

SwiperCore.use([Autoplay]);

const imagePaths: any = []
const createImagePath = [...Array(7)].map((v, k) => imagePaths.push(`/assets/homeImg/No${k}.png`))

interface PROPS_WORKS_IMAGE {
  width: number,
  height: number,
  numOfShowImg: number
}

const MyInterestedLung: NextPage<PROPS_WORKS_IMAGE> = (props) => {
  const {width, height, numOfShowImg} = props
  return (
    <Box sx={{ width: "100%" }}>
      <Swiper
        spaceBetween={10}
        slidesPerView={numOfShowImg}
        autoplay={{ delay: 0.1, disableOnInteraction: false }}
        speed={3000}
        freeMode={true}
        loop
        loopedSlides={10}
      >
        {imagePaths.map((path: any) => (
          <SwiperSlide key={path}>
            <Image
              src={path}
              width={width}
              height={height}
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MyInterestedLung;
