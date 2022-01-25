import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { mobile } from "../responsive";


const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px"})}

`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Wishlist = () => {
    return (
        <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
        <Title>YOUR WISHLIST</Title>

        </Wrapper>

        
        </Container>
    );
};

export default Wishlist;
