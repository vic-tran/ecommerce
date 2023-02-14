import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import CopyrightIcon from '@mui/icons-material/Copyright';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from "styled-components";
import logo from "../assets/logo.png";
import { mobile } from '../responsive';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  background-color: #DFD3C3;
  ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin-left: 40px;
`;


const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 25px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <a href="/">
        <Image src={logo} />
        </a>
        <SocialContainer>
        <SocialIcon color="black">
            <CopyrightIcon />
          </SocialIcon>
          <SocialIcon color="black">
            <a href="https://www.instagram.com/hermanos.surfco/">
            <InstagramIcon />
            </a>
          </SocialIcon>
          <SocialIcon color="black">
            <a href="">
            <FacebookIcon />
            </a>
          </SocialIcon>
          <SocialIcon color="black">
            <a href="">
            <TwitterIcon />
            </a>
          </SocialIcon>
          
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to = "/">
            Home
            </Link>
          </ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 688 Meder St, Santa Cruz CA 95060
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> contact@hermanossurfco.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;