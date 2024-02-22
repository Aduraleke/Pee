import styled from 'styled-components';
import Products from '../assets/data';
import Item from './Item';
import { motion } from 'framer-motion';

const AnimatedHr = styled(motion.hr)`
  width: 0;
  height: 8px;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 50px;
  background: ${(props) => props.theme.body};
`;

const Populars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 75%;
  margin: auto;
  height: 90vh;
  justify-content: center;
  background: linear-gradient(180deg,  ${(props) => props.theme.text} 0%, #fff 90%);

  h1 {
    color: ${(props) => props.theme.body};
    font-size: 50px;
    font-weight: 600;
    font-family:"Kaushan Script";
  }
`;
const PopularItems = styled.div`
  margin-top: 50px;
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
`;
const Popular = () => {
  return (
    <>
      <Populars>
        <h1>Trending Women Wears</h1>
        <AnimatedHr
          initial={{ width: 0 }} // Set initial width to 0
          animate={{ width: '30%' }} // Animate width to 100%
          transition={{
            duration: 2, // Duration of the animation
            repeat: Infinity, // Repeat indefinitely
            repeatType: 'reverse' // Reverse animation direction after each iteration
          }}
        />
        <PopularItems>
          {Products.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            );
          })}
        </PopularItems>
      </Populars>
    </>
  );
};

export default Popular;
