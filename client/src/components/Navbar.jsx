import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import logo from "../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import {mobile} from "../responsive.js";
import { Link } from "react-router-dom";
import About from '../pages/About';
import Returns from "../pages/Returns";
import { useSelector } from 'react-redux';



const Container = styled.div`
    height: 150px;
    ${mobile({height: "50px"})};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})};
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: -10px;
`
const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
    ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none; 
    ${mobile({width: "50px"})}   
`;


const Logo = styled.image`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 180px;
    ${mobile({fontSize: "24px"})}
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 280px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent: "center"})}
`;
const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    margin-right: 15px;
    ${mobile({fontSize: "12px", marginLeft:"10px"})}
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>ENG</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <SearchIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <a href='/'>
                    <img
                        src={logo}
                        height={140}
                        width={170} 
                        alt='logo'
                    />
                    </a>
                </Logo>
                    
            </Center>
            <Right>
                <MenuItem>
                    <a href="https://www.instagram.com/hermanos.surfco/">
                    <InstagramIcon />
                    </a>
                </MenuItem>
                <MenuItem>
                  <Link to ="/about">
                    About
                    </Link>
                </MenuItem>
                <MenuItem>
                    <a href="/Returns">
                    Returns
                    </a>
                </MenuItem>
                <MenuItem>
                    <Link to = "/Register">
                    Register
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to = "/Login">
                    Login
                    </Link>
                </MenuItem>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartTwoToneIcon/>
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar