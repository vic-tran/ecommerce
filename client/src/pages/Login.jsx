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
    height: 60vh;
    padding: 25px 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    ${mobile({width: "75%"})}
`;

const Form = styled.form`
    width: 100%;
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
    margin-top: 10px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    border: 3px solid gray;
`;

const Button = styled.button`
    width: 31%;
    height: 5vh;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 70px;
    background-color: #FDA769;
    color: white;
    border: 2px solid gray;
`;

const Link = styled.a`
    font-size: 17px;
    text-decoration: underline;
    cursor: pointer;
`;


const Login = () => {
  return (
    <Container> 
    <Announcements />
    <Navbar />
    <Wrapper>
        <Title>login</Title>
        <Form>
            <Input placeholder="Username"/>
            <Link>Forgot Password?</Link>
            <Input placeholder="Password"/>
            <Button>Login</Button>
            <Link>Create an Account</Link>
        </Form>
    </Wrapper>
    <Footer />
    </Container>
  )
}

export default Login;