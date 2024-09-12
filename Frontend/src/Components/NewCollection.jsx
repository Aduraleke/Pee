/** @format */
import {motion} from 'framer-motion';
import styled from "styled-components";
import Item from "../Components/Item";
import newCollections from "../assets/newCollection";
const NewCollections = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin: auto;
width: 65%;
height: auto;
justify-content: center;
background: linear-gradient(180deg,  ${(props) => props.theme.text} 0%, #fff 90%);

h1 {
  font-family:"Kaushan Script";
  margin-top: 50px;
  color: ${(props) => props.theme.body};
  font-size: 50px;
  font-weight: 600;
}
`;

const AnimatedHr = styled(motion.hr)`
  width: 0;
  height: 8px;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 50px;
  background: ${(props) => props.theme.body};
`;

const Collections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 50px;
`;
const NewCollection = () => {
  return (
    <NewCollections>
      <h1>New Collections</h1>
      <AnimatedHr
          initial={{ width: 0 }} // Set initial width to 0
          animate={{ width: '30%' }} // Animate width to 100%
          transition={{
            duration: 2, // Duration of the animation
            repeat: Infinity, // Repeat indefinitely
            repeatType: 'reverse' // Reverse animation direction after each iteration
          }}
        />
      <Collections>
        {newCollections.map((item, i) => {
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
      </Collections>
    </NewCollections>
  );
};

export default NewCollection;
