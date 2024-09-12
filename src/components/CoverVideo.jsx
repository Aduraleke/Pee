import styled from "styled-components";
import MainVideo from "../assets/_import_6185107ae28b17.99176087.mp4";
import {motion} from "framer-motion";

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    
    video{ 
        width: 100%;
        height: 100vh;
        object-fit: cover
    }`
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1 ;
    
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    `
  const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div{
    display: flex;
    flex-direction: row;
  }
  
  h1{
    font-family:"Kaushan Script";
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
  }
  h2{
    font-family:"sirin-stencil";
    font-size: 25px;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    font-weight: 300;
  }
  `
  const container = {
    hidden: {
      opacity: 0,
    
    },
    show: {
      opacity: 1,
  
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4,
      },
    },
  };
  const items = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  }
  

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
    <DarkOverlay /> 
    <Title variants={container} initial="hidden" animate="show">
      <div>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.17" data-scroll-speed="7" >P</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.15" data-scroll-speed="7" >E</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.13" data-scroll-speed="7" >E</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.11" data-scroll-speed="7" >+</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.09" data-scroll-speed="7" > </motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.07" data-scroll-speed="7" >G</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.05" data-scroll-speed="7" >L</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.03" data-scroll-speed="7" >A</motion.h1>
        <motion.h1 variants={items} data-scroll data-scroll-delay="0.01" data-scroll-speed="7" >M</motion.h1>
      </div>

      <div>
      <motion.h2 variants={items} data-scroll data-scroll-delay="0.05" data-scroll-speed="2">...Your E </motion.h2>
      <motion.h2 variants={items} data-scroll data-scroll-delay="0.05" data-scroll-speed="2">legance R</motion.h2>
      <motion.h2 variants={items} data-scroll data-scroll-delay="0.05" data-scroll-speed="2">edefined</motion.h2>
      </div>
    </Title> 
        <video src={MainVideo} type= "video/mp4" autoPlay muted loop  />
    </VideoContainer>
  )
}

export default CoverVideo