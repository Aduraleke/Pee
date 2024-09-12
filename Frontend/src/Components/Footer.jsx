
import { motion } from "framer-motion";
import styled from "styled-components";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";

const LogoContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;

img{
    width: 14vw;
    height: auto;

}
h3{
    font-weight: 600;
    margin-top: 3rem;
    font-size: ${props => props.theme.fontxxl};
    font-family: "Kaushan Script";
}

@media screen and (max-width: 480px) {
    
        
        padding: 1rem;
        
        img {
            width: 70%;
            height: auto;
        }

        h3 {
            font-size: ${props => props.theme.fontxl}; /* Adjust font size */
            margin-top: 1rem; 
        }
    }
`;
const Section = styled.section`
height: 100vh;
width: 100vw;
margin: 5rem auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: linear-gradient(180deg,  ${(props) => props.theme.text} 0%, ${(props) => props.theme.body} 300%);
color: ${props =>props.theme.body};

position: relative;

@media screen and (max-width: 480px) {
    height: auto; 
    min-height: 100vh;
    margin: 2rem auto; 
    
    background: linear-gradient(180deg, ${(props) => props.theme.text} 0%, ${(props) => props.theme.body} 300%); 

}
`
const FooterComponent = styled(motion.footer)`
 width: 80vw;

 ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.body};
    border-bottom: 1px solid ${props => props.theme.body};
 }

 li{
    padding: 2rem;
    font-size: ${props => props.theme.fontlg};
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
 }
 @media screen and (max-width: 480px) {
    width: 90vw;
        margin: 2rem auto; /* Adjust margins */
        
        ul {
            margin: 1rem 0; /* Adjust margins */
        }

        li {
            padding: 1rem; /* Adjust padding */
            font-size: ${props => props.theme.fontmd}; /* Adjust font size */
        }

 }
`;

const Bottom = styled.div`padding: 0.5rem 0;
margin: 0 4rem; 
font-size: ${props => props.theme.fontlg};

display: flex;
justify-content: space-between;
align-items: center; 

a{
    text-decoration: underline;
}
@media screen and (max-width: 480px) {
    padding: 0.5rem 1rem;
        margin: 0 1rem; 
        font-size: ${props => props.theme.fontmd};

        a {
            text-decoration: underline;
        }

}
`;




const Footer = () => {

    const {scroll} = useLocomotiveScroll();
    const handleScroll = (id) => {
        let elem = document.querySelector(id);
        scroll.scrollTo(elem,
            {
                duration: 2000,
                offset: -100,
                easing: [0.25, 0.0, 0.35, 1.0]
            })
    };
  return (
    <Section>
        <LogoContainer> 
            <img src="/images/logo 2 pee.png" alt="" />
            <h3>Pee-Glam</h3>
        </LogoContainer>
        <FooterComponent
            initial={{y: "-400px"}}
            whileInView={{y: 0}}
            viewport={{once: false}}
            transition={{duration: 1.5}}
            >
            <ul>
                <li onClick={() => handleScroll("#home")}>home</li>
                <li onClick={() => handleScroll(".about")}>about</li>
                <li onClick={() => handleScroll("#shop")}><Link to="/shop">Shop</Link></li>
                <li><a href="https://wa.link/kuz8i8" target="_blank" rel="no">contact us</a></li>
                <li><a href="https://google.com" target="_blank" rel="no"></a>reviews</li>
            </ul>
            <Bottom>
                <span
                data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"
                >&copy;{new Date().getFullYear()}. All rights reserved </span>
                <span
                data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
                >Made with &hearts; by &nbsp;
                    <a href="https://github.com/Aduraleke" target="_blank" rel="no"> Aduraleke</a>
                </span>
            </Bottom>
        </FooterComponent>
    </Section>
  )
}

export default Footer 