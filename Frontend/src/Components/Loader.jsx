/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";


const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.text} 0%,
    ${(props) => props.theme.body} 300%
  );
  color: ${(props) => props.theme.body};
  opacity: 0; /* Initially hide the container */

  /* Adjust z-index if needed */
  z-index: 999;

  img{
    width: 20%;
    margin-bottom: 1rem;
  }

`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  padding-top: 1rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      duration: 1,

      yoyo: Infinity,
      ease: "easeInOut",
    },
  },

};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {


  return (
    <>
        <Container
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 2 }}>
          <motion.img
            src="/images/logo 2 pee.png"
            alt="Pee+ Glam"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          />
          <Text variants={textVariants} initial="hidden" animate="visible">
            ...Your Elegance Redefined
          </Text>
          <motion.svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            variants={pathVariants}
            initial="hidden"
            animate="visible">
            <motion.path
              //   d="M12,17.27L18.18,21,l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </motion.svg>
        </Container>

    </>
  );
};

export default Loader;
