import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container = styled.div`

`;

const Success = () => {

    return (
        <Container>
            <Navbar />
            <Announcement />
            Payment successful

            <Footer />
        </Container>
    )
}

export default Success
