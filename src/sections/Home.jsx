/** @format */

import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Section = styled.section`
  position: relative;
  max-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <>
      <Section>
        <CoverVideo />
        <NavBar />
        <Logo />
      </Section>

    </>
  );
};

export default Home;
