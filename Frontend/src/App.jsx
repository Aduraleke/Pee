/** @format */

import { ThemeProvider } from "styled-components";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useState } from "react";

import GlobalStyles from "./Styles/GlobalStyles";
import { dark } from "./Styles/Themes";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import NavBar from "../src/Components/Navbar";
import Logo from "../src/Components/Logo";
import { Link } from "react-router-dom";
import Loader from "./Components/Loader";

function App() {
  const containerRef = useRef(null);

  const Layout = ({ children }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    // Render NavBar and Logo on all pages except the login page
    return (
      <>
        {!isLoginPage && (
          <>
            <NavBar />
            <Link to="/">
              <Logo />
            </Link>
          </>
        )}
        {children}
      </>
    );
  };
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [loaded, setLoaded] = useState(false);

 useEffect(() => {
   setTimeout(() => {
     setLoaded(true);
 }, 3000);
}, []);
 


  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // Add more Locomotive Scroll instance options here if needed
          }}
          containerRef={containerRef}
          watch={
            [
              /* Add props to watch here */
            ]
          }>
            <AnimatePresence>
            {loaded ? null : <Loader />} 
            </AnimatePresence>
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />{" "}
                  {/* Corrected path casing */}
                  <Route path="/login" element={<Login />} />{" "}
                  {/* Corrected path casing */}
                  <Route path="/cart" element={<Cart />} />{" "}
                  {/* Corrected path casing */}
                </Routes>
              </Layout>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
