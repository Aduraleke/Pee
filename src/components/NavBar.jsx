/** @format */

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";



const NavContainer = styled(motion.div)`
  position: absolute;
  z-index: 6;
  width: 100vw;
  top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 1s ease;
`;
const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: #413E3E;
//   background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuBtn = styled.div`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style-type: style-none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
`;
const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text}; 

  cursor: pointer;
`

const NavBar = () => {
    const [click, setClick] = useState(false);
  return (
    <NavContainer click={click}
    initial={{
        y: '-100%'
    }}   
    animate={{
        y: 0
    }}
    transition={{
        duration: 1, delay: 1
    }}
    >
      <MenuItems 
      drag ="y"
      dragConstraints={{
        top: 0,
        bottom: 5,
      }}
      dragElastic={0.05}
      dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
          <MenuItem 
          whileHover={{scale:1.1, y:-5}}
          whileTap={{scale:0.9, Y:0}}
          >Home</MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >About</MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Catalogue</MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >New Arrival</MenuItem>

        <MenuItem
         whileHover={{scale:1.1, y:-5}}
         whileTap={{scale:0.9, Y:0}}
         >Sign-In/Sign-Up
         </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
