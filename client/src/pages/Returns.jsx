import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
`;

const Desc = styled.p`
    font-size: 17px;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;
    margin-left: 450px;
    margin-right: 450px;
    letter-spacing: 2px;
    line-height: 1.5;
`;

const Returns = () => {
  return (
    <Container>
        <Announcements />
        <Navbar />
        <Title>Return Policy</Title>
        <Desc>
        If you purchased the product from an authorized Hermanos dealer location/website, please contact the retailer directly.
        
        If you purchased the product from Hermanossurfco.com, please follow these instructions:
        If you've used the product you can't return it, sorry! If the product hasn't been used you can return it to us within 30 days of your purchase date using our pre-paid return shipping label. Please note, your return shipping will be deducted from your refund. You can follow the instructions below to get one of those labels. Unfortunately, we don't offer direct exchanges. If you want to exchange something you'll have to return the unwanted product for a full refund. You can go back and purchase what you need. Please allow 7-14 days from when we receive the returned product for the money to be refunded.
        
        
        
        </Desc>
        <Footer />
    </Container>
  )
}

export default Returns