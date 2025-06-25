import { Box } from "@mui/material";
import { useSwiper } from "swiper/react";
import Prev from "../../../assets/prev.png";
import Next from "../../../assets/next.png";

function SlidePrevButton() {
    const swiper = useSwiper()
  return (
    <Box
    component='img'
    src={Prev}
        sx={{
            position: "absolute",
            height:48,
            width:48,
            left: 0,
            top: 0,
            cursor: "pointer",
            zIndex: 999,
        bgcolor: "#fff",}}
        onClick={() => swiper.slidePrev()}
    />
    
  );
}

function SlideNextButton() {
    const swiper = useSwiper()
  return (
    <Box
    component='img'
    src={Next}
        sx={{
            position: "absolute",
            height:48,
            width:48,
            right: 0,
            top: 0,
            cursor: "pointer",
            zIndex: 999,
        bgcolor: "#fff",}}
        onClick={() => swiper.slideNext()}
    />
    
  );
}

export { SlidePrevButton, SlideNextButton };