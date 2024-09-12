import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5;
`;

const LogoImg = styled.img`
  width: 120px;
  height: 48px;
`;

const Logo = () => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Container>
      <Link to="/" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LogoImg
            src="/images/logo 2 pee.png"
            alt="brand logo"
            initial={{ scale: 1 }}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </Container>
  );
};

export default Logo;
