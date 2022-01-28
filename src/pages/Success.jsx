import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { userRequest } from '../requestMethods';

const Container = styled.div`

`;

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.data._id);
            } catch (err) {
                console.log(err);
            }
        };
        data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <Container>
            <Navbar />
            <Announcement />
            {orderId ? `Order created successfully! Your order number is: ${orderId}` : `Order is being created. Please wait...`}

            <Footer />
        </Container>
    )
}

export default Success
