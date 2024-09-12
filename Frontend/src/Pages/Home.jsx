/** @format */

import styled from "styled-components";
import CoverVideo from "../Components/CoverVideo";
import Logo from "../Components/Logo";
import NavBar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import Offers from "../Components/Offers";
// import Popular from "../Components/Popular";
// import NewCollection from "../Components/NewCollection";
// import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import GlobalStyles from "../Styles/GlobalStyles";
import About from "./About";
const Section = styled.section`
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <GlobalStyles />
      <Section id="home">
        <CoverVideo />
        {!isHomePage && (
          <>
            <NavBar />
            <Link to="/">
              <Logo />
            </Link>
          </>
        )}
      </Section>
        {/* <Popular />
        <Offers />
        <NewCollection/> */}
        <Carousel/>
        <About/>
        <Section>
        {/* <Footer/> */}
        </Section>
        
    </>
  );
};

export default Home;
