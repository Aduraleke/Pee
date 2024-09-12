import styled from "styled-components";

const Offer = styled.div`
width: 65%;
height: 90vh;
display: flex;
margin: auto;
padding : 0 140px;
margin-bottom: 150px;
background: linear-gradient(180deg,  ${(props) => props.theme.text} 0%, #fff 90%);
`;
const OffersLeft = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;

  h1{
     color: ${(props) => props.theme.body};
     font-size: 80px;
     font weight: 600px;
     font-family:"Kaushan Script";
     margin-bottom: 20px;
  };

  p{
    color: ${(props) => props.theme.body};
    font-size: 22px;
    font-weight: 600;
    font-family:"Kaushan Script";
  };
  button{
    width: 282px;
    height: 70px;
    border-radius: 35px;
    background: #EEC3C3;
    border: none; 
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top:30px;
    cursor: pointer;
  }

`;
const OffersRight = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: center;
  padding-top: 50px;
  img{
    border-radius: 8px;
  }
`;

const Offers = () => {
  return (
    <>
    <Offer>
        <OffersLeft>
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>Only On Best Sellers Product</p>
          <button>Check Now</button>
        </OffersLeft>

        <OffersRight>
          <img src="/images/carousel 3.jpg" alt="" />
        </OffersRight>
    </Offer>
    </>
  )
}

export default Offers