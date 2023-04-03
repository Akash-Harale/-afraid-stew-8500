import React from "react";
import AutoPlay from "../Components/Carousel";
import { dealoftheday } from "../data/Allcategoryimage";
import { brands } from "../data/Allcategoryimage";
import { DealCard } from "../Components/DealCard";
import { SimpleGrid, Text ,Box} from "@chakra-ui/react";

import { occection } from "../data/Allcategoryimage";
import './Navbar.css'
export const Home = () => {
  return (
    <>
     
      <Box className="auto-play">
      <AutoPlay />
      </Box>
      <Text className='TextHeading' style={{fontWeight:'500'}} fontSize={'2xl'}>DEAL OF THE DAY</Text>
      <SimpleGrid
        style={{
          marginTop: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={0}
        columns={{ base: 4, sm: 2, md: 8 }}
        spacing="40px"
      >
        {dealoftheday?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>
      <Text className='TextHeading' style={{fontWeight:'500'}} fontSize={'2xl'}>
        BEST OF MYNTRA EXCLUSIVE BRANDS
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={2}
        columns={{ base: 2, sm: 2, md: 8 }}
        spacing="40px"
      >
        {brands?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

      <Text className='TextHeading-ONE' style={{fontWeight:'500',}} fontSize={'2xl'}>
       CATEGORIES TO BAG
      </Text>
       <Box className="categories-hidden">
      

       </Box>
     
      

      <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
        NEWNESS FOR EVERY OCCASION
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md: 4 }}
        spacing="40px"
      >
        {occection?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

   

     
   
     
 
    </>
  );
};
