import styled from "styled-components";


const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg,  ${(props) => props.theme.text} 0%, #fff 90%);
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script"; 
  font-weight: 300;
  color: ${props => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 30%;
  font-size: ${(props) => props.theme.fontlg};
  font-family:"Kaushan Script";
  position: relative;
  z-index: 1;
  margin-top: 10%;
  right: 5%;
  color: ${(props) => props.theme.body};
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  
  img {
    width: 80vh;
    height: 70vh;
    object-fit: contain;
  }

  .small-img-1 {
    width: 25%;
    position: absolute;
    right: 85%;
    bottom: 10%;
    height: 50%;
  }

  .small-img-2 {
    width: 25%;
    position: absolute;
    left: 60%;
    bottom: 25%;
    height: 50%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        About Us
      </Title>
      <Left
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target">
        <p id="fixed-target">
        At PEE+ Glam, we&#39;re all about Elegance, Trendsetting, and the ultimate
        Luxury Experience in fashion. Our mission is to make every moment in
        your life a glamorous one, with clothing and accessories that
        effortlessly combine timeless elegance with the latest trends.<br/> 
        <br/>

        We are very dedicated to making our designs. We offer unique and 
        creative designs to a wide range of fashion lovers. We have a variety
        of styles, but for most people all of the options are in the box. We specialize
        in making things that make you happy.
        <br/>
        <br/>

        Step into
        the world of PEE+ Glam and discover a place where you&#39;re always the
        center of attention, where fashion becomes an expression of your unique
        style, and where luxury isn&#39;t just a word. Welcome to PEE+ Glam!
        </p>
      </Left>
      <Right>
        <img src="/images/Serwaa-Amihere.webp" alt="about image" />
        {/* Add delay for smooth animation */}
        <img 
          data-scroll 
          data-scroll-speed="5" 
          data-scroll-delay="0.5" // Adjusted timing for smooth animation
          className="small-img-1" src="/images/cooperate 1.jpg" alt="about image" />
        {/* Add delay for smooth animation */}
        <img 
          data-scroll 
          data-scroll-speed="2" 
          data-scroll-delay="0.2" // Adjusted timing for smooth animation
          className="small-img-2 " src="/images/cooperate 4.jpg" alt="about image" />
      </Right>
    </Section>
  );
};

export default About;
