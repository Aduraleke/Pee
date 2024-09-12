import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { useLocomotiveScroll } from "react-locomotive-scroll";

const CartIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;

  }
`;

const CartIconContainer = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 50%;
  padding: 4px;
  font-size: 0.8rem;

  @media screen and (max-width: 480px) {
    top: -6px; /* Adjust position */
    right: -6px; /* Adjust position */
    padding: 3px; /* Adjust padding */
    font-size: 0.7rem; 
    
  }
`;

const NavContainer = styled(motion.div)`
  position: absolute;
  z-index: 6;
  width: 100vw;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 1s ease;

  @media screen and (max-width: 480px) {

    
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: #413e3e;
  color: ${(props) => props.theme.text};
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;

  @media screen and (max-width: 480px) {

    // height: auto; /* Allow the height to adjust based on content */
    flex-direction: row; /* Stack items vertically for smaller screens */
    padding: 0; 
  }
`;

const MenuBtn = styled.div`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
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

  @media screen and (max-width: 480px) {
    width: 8rem; /* Decrease the width for smaller screens */
    height: 2.1rem; /* Decrease the height for smaller screens */
    font-size: ${(props) => props.theme.fontmd}; 
    
    
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 1rem 0; /* Adjust padding */
    font-size: ${(props) => props.theme.fontmd};
    
  }
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const location = useLocation(); // Use useLocation hook to get current location

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    if (!elem) {
      console.error("Target element not found:", id);
      return; // Exit the function if target element is not found
    }
    scroll.scrollTo(elem, {
      duration: 2000,
      offset: -100,
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  
  
  

  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count
  const updateCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <NavContainer
      click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 5,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          onClick={() => handleScroll("#home")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          <Link to="/">Home</Link>
        </MenuItem>
        {location.pathname !== "/shop" ? (
          <MenuItem
            onClick={() => handleScroll("#fixed-target")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, Y: 0 }}
          >
            About
          </MenuItem>
        ) : (
          <>
            <MenuItem
              onClick={() => handleScroll("#african")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              African
            </MenuItem>
            <MenuItem
              onClick={() => handleScroll("#business")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              Business
            </MenuItem>
            <MenuItem
              onClick={() => handleScroll("#casual")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              Casual
            </MenuItem>
            <MenuItem
              onClick={() => handleScroll("#kids")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              Kids
            </MenuItem>
          </>
        )}

        {location.pathname !== "/shop" && (
          <MenuItem
            onClick={() => handleScroll("#shop")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, Y: 0 }}
          >
            <Link to="/shop">Shop</Link>
          </MenuItem>
        )}

        <CartIconContainer onClick={updateCartCount}>
          <Link to="/cart">
            {" "}
            <CartIcon icon={faCartShopping} />
          </Link>
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartIconContainer>

        <MenuItem
          onClick={() => handleScroll("home")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          <Link to="/login">Login</Link>
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
