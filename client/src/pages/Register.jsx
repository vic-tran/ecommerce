import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`   
 
`;

const Wrapper = styled.div`
    margin-top: 30px;
    width: 100vw;
    height: 90vh;
    padding: 25px 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    ${mobile({width: "75%"})}
`;

const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`;

const Input = styled.input`
    flex: 1;
    min-height: 4%;
    min-width: 40%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    border: 2px solid gray;
`;

const Agreement = styled.span`
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 40%;
    cursor: pointer;
    margin-bottom: 70px;
    background-color: #FDA769;
    color: white;
    border: 2px solid gray;
`;




const Register = () => {
  return (
    <Container>
        <Announcements />
        <Navbar />
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>privacy policy</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Register