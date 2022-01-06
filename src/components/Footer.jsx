import styled from 'styled-components';

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
`;

const Center = styled.div`
flex: 1;
`;

const Right = styled.div`
flex: 1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOP.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero illo laudantium laborum iusto accusamus porro sit cum ab officiis ipsum animi repellendus temporibus, beatae eaque reiciendis est nulla aut.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
            </Center>
            <Right>
            </Right>    
        </Container>
    )
}

export default Footer
