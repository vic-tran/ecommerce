import SendIcon from '@mui/icons-material/Send';
import news from "../assets/news.png";
import  styled  from "styled-components";
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: white;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    color: white;
    ${mobile({textAlign: "center"})}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "80%"})}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    cursor: pointer;
    flex: 1;
    color: black;
`


const Newsletter = () => {
  return (
    <Container>
        <Image src={news}/>
        <Info>
            <Title>DON'T MISS OUT.</Title>
            <Desc>Get updates on new collections, sales, and more.</Desc>
            <InputContainer>
                <Input placeholder="Email" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Info>
    </Container>
  );
}

export default Newsletter