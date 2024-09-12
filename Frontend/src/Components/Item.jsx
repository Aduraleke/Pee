import styled from 'styled-components';
import PropTypes from 'prop-types';

const Items = styled.div` 
    width: 100%;
    margin: auto;
    height: 100%;
    padding: 45px;

    :hover{
        transform: scale(1.05);
        transition: 0.6s;
    }
`;

const ItemImage = styled.img`
width: 200px;
height: 240px;

`;

const ItemName = styled.p`
margin: 6px 0px;
font-size: 24px;
font-weight: 600;
color: ${(props) => props.theme.body};
`;

const ItemPrices = styled.div`
    display: flex;
    gap: 20px;
`;

const ItemPriceNew = styled.div`
color: ${(props) => props.theme.body};
font-size: 18px;
font-weight:600;

`;
const ItemPriceOld = styled.div`
    color: #374151;
    font-size: 18px;
    font-weight: 500px;
    text-decoration: line-through;

`;
const Item = (props) => {
  return (
    <>
        <Items>
            <ItemImage src={props.image} alt=''/>
            <ItemName>{props.name}</ItemName>
            <ItemPrices>
                <ItemPriceNew>${props.newPrice}</ItemPriceNew>
                <ItemPriceOld>${props.oldPrice}</ItemPriceOld>
            </ItemPrices>




        </Items>
    </>
  )
}
Item.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    oldPrice: PropTypes.number,
    newPrice: PropTypes.number
  };

export default Item