import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
const theme = extendTheme({ breakpoints });

export default function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Box w={theme} style={{ marginTop: "35px" }}>
      <Slider {...settings}>
        <Box>
          <Image width="100%" 
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2839e78/images/Spring2023/595TBC_sp3_16x9.gif?yocs=s_"
            alt="banner"
          />
        </Box>
        <Box>
          <Image width="100%" 
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw3b9cd33b/images/Spring2023/sp_mothersdaygifting_sp3_hm.jpg?yocs=s_"
            alt="image"
          />
        </Box>
        <Box> 
          <Image width="100%" 
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2839e78/images/Spring2023/595TBC_sp3_16x9.gif?yocs=s_"
            alt="frome"
          />
        </Box>
        <Box>
          <Image width="100%" 
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2839e78/images/Spring2023/595TBC_sp3_16x9.gif?yocs=s_"
            alt="frome"
          />
        </Box>
        <Box>
        <Image width="100%" 
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2839e78/images/Spring2023/595TBC_sp3_16x9.gif?yocs=s_"
            alt="frome"
          />
        </Box>
      </Slider>
    </Box>
  );
}
