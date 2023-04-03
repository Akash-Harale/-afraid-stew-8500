import "../pages/Navbar.css";
import { FaAlignJustify } from "react-icons/fa";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

import { AccordionSlid } from "./AccordionSlid";

import React from "react";
import { extendTheme } from '@chakra-ui/react'

function MiniNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
  const theme = extendTheme({ breakpoints })

  return (
    <Box w={theme} className="drawer">
      <div
        style={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        
        }}
      >
        <Button
          style={{ marginLeft: "12px" }}
          ref={btnRef}
          variant="unstyled"
          onClick={onOpen}
        >
          <FaAlignJustify style={{ color: "black", width: "15px" }} />
        </Button>
        <div>
          <Image
            width={8}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8c1e9664/images/loyalty/xcat_rewards-update-evergreen_sp1_lacb.jpg?yocs=s_"
            objectFit="cover"
            alt="logo"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Box w={theme}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.2em"
                children={
                  <HiOutlineMagnifyingGlass style={{ marginBottom: "17px" }} />
                }
              />
              <Input
                size="xs"
                variant="filled"
                type="text"
                placeholder="Search Product,Brands and more"
              />
            </InputGroup>
          </Box>
          <div>
            <HiOutlineUser />
          </div>
          <div>
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton style={{ backgroundColor: "#fec5e5" }} /> */}

          <DrawerBody>
            <div>
              <Image
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8c1e9664/images/loyalty/xcat_rewards-update-evergreen_sp1_lacb.jpg?yocs=s_"
                alt="offer-banner"
              />
            </div>
         
            <div>
              <AccordionSlid item={'Body bath'} />
              <AccordionSlid item={'beauty'} />
              <AccordionSlid item={'bodybath'} />
              <AccordionSlid item={'Home&Living'} />
              <AccordionSlid item={'Beauty'} />
            </div>
             <VStack fontSize={12} align='stretch'>
                <Box>body bath Studio <span style={{color:'red',fontSize:'8px'}}>NEW</span></Box>
                <Box>body bath Mall <span style={{color:'red',fontSize:'8px'}}>NEW</span></Box>
                <Box>body bath Insider</Box>
                <Box>Gift Cards</Box>
                <Box>Contact Us</Box>
                <Box>FAQs</Box>
                <Box>Legal</Box>
             </VStack>
             <Box>
                <Image height={100} src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8c1e9664/images/loyalty/xcat_rewards-update-evergreen_sp1_lacb.jpg?yocs=s_' alt='offer-banner'/>
             </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button style={{color:'black',fontSize:'12px'}} colorScheme="unstyled"  mr={3} onClick={onClose}>
              Home
            </Button>
            <Button style={{color:'red',fontSize:'12px'}} colorScheme="unstyled">SIGN UP.LOGIN</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default MiniNavbar;

// Accordion,
// AccordionItem,
// AccordionButton,
// AccordionPanel,
// Box,
// UnorderedList,
// ListItem
