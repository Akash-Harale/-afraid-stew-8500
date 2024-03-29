import React from "react";
// import { NavLink } from 'react-router-dom';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Box,
  Image,
 
} from "@chakra-ui/react";
import "../pages/Navbar.css";
import Login from "./Login";


import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import MiniNavbar from "../Components/MiniNavbar";
import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContex } from "./AuthContexProvider";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
const theme = extendTheme({ breakpoints });

export const Navbar = () => {
  const {Logout,isAuth}=useContext(AuthContex)
  return (
    <>
      <MiniNavbar />
      <Box w={theme} className="nav-container">
        <div className="logo">
          <Link to="/">
            <Image
              width="200px"
              height="35px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bath_%26_Body_Works_logo.svg/2560px-Bath_%26_Body_Works_logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>

        <Box w={theme} className="menu-container">
          <ul>
            <li>
              <Text color="#434757" fontSize="md" as="b">
               Body care
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="md" as="b">
                Candles
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="md" as="b">
                wall flowers and Air freshners
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="md" as="b">
                Hand soap and sanitizers
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="md" as="b">
                Men's shop
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="md" as="b">
                Moxy
              </Text>
            </li>
          </ul>
        </Box>

        {/* serch part of nav */}

        <Box w={theme} className="search-bar-icons">
          <div>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.2em"
                children={<HiOutlineMagnifyingGlass />}
              />
              <Input
                variant="filled"
                width={theme}
                type="text"
                placeholder="Search Product,Brands and more"
              />
            </InputGroup>
          </div>
          <div>
            <HiOutlineUser className="icon-profile-bag-wishlist" />
            <Login />
            {/* <Text color="#434757" fontSize="sm" as="b"> */}
            {/* Profile */}
            {/* </Text> */}
          </div>
          <div>
            <IoIosHeartEmpty className="icon-profile-bag-wishlist" />
            <Text color="#434757" fontSize="sm" as="b">
              Wishlist
            </Text>
          </div>
          <div>
            <HiOutlineShoppingBag style={{ marginLeft: "5px" }} />
            <Text color="#434757" fontSize="sm" as="b">
              Bag
            </Text>
          </div>
           {isAuth?
           <div>
            <Image onClick={()=> Logout("")} style={{backgroundColor:"white",marginLeft:'10px'}} src='https://www.clipartkey.com/mpngs/m/20-203483_transparent-buttons-clipart-logout-icon-black.png' width='25px' alt='logout'/>
         
           </div>:''}
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
