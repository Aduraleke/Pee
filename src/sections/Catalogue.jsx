import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";




import img1 from '/images/carousel 1.jpg';
import img2 from '/images/carousel 2.jpg';
import img3 from '/images/carousel 3.jpg';
import img4 from '/images/carousel 4.jpg';
import img5 from '/images/carousel 1.jpg';
import img6 from '/images/carousel 1.jpg';
import img7 from '/images/carousel 1.jpg';
import img8 from '/images/carousel 1.jpg';
import img9 from '/images/carousel 1.jpg';
import img10 from '/images/carousel 1.jpg';


const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.grey};
  color: ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.grey}; 
  color: ${(props) => props.theme.body};

    min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
/* width: 65%; */
position: absolute;
left: 35%;
padding-left: 30%;
  background-color: #fff;
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
display: inline-block;
width: 20rem;
/* background-color: black; */
margin-right: 6rem;
img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

h1 {
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}

@media (max-width: 48em) {
  width: 15rem;
}
`;

const Product = ({ img, title }) => { 
  return (
    <Item
    initial={{ filter: "grayscale(100%)" }}
    whileInView={{ filter: "grayscale(0%)" }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: "all" }}
  >
    <motion.div initial={{ filter: "grayscale(100%)" }}>
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </motion.div>
  </Item>
);
};
Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Catalogue = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
          onUpdate: (self) => {
            scrollingElement.scrollLeft = self.scrollLeft;
          }
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        New Collections
      </Title>
      <Left>
      <p>
          Our brand new collection are developed With a deep love for fashion
          and an eye for detail, We&#39;ve dedicated ourselves to crafting
          elegant, trendsetting designs, with the best quality materials
          including the use of some pure fabrics that resonate with your unique
          sense of style. From sketch to runway, every piece we create is a
          labor of love, blending timeless elegance with a touch of modernity.
          But this journey isn&#39;t just about us; it&#39;s about you.
          <br />
          <br />
          Together, we&#39;ll explore the world of fashion, share style tips,
          and celebrate the beauty of self-expression through clothing. Join us
          on this stylish adventure, and let&#39;s redefine fashion, one outfit
          at a time. Stay tuned for exclusive behind-the-scenes glimpses,
          exciting collections, fashion Tips and lastly, a dash of glamor.
          Let&#39;s create, inspire, and make every day a fashionable statement!
        </p>
      </Left>
      <Right ref={Horizontalref}>
        <Product img={img1} title='Cooperate Skirt & Blouse'/>
        <Product img={img2} title='xyz'/>
        <Product img={img3} title='xyz'/>
        <Product img={img4} title='xyz'/>
        <Product img={img5} title='xyz'/>
        <Product img={img6} title='xyz'/>
        <Product img={img7} title='xyz'/>
        <Product img={img8} title='xyz'/>
        <Product img={img9} title='xyz'/>
        <Product img={img10} title='xyz'/>
        {/* Add more Product components here */}
      </Right>
    </Section>
  );
};

export default Catalogue;
