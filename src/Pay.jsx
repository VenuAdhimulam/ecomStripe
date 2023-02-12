import React, { useState } from "react";
import styled from "styled-components";
import StripeCheckout from 'react-stripe-checkout';
import { useEffect } from "react";
import axios from "axios";

const key = "pk_test_51KtCGLDLy9JdTFVEZMw6vCyem2oUivXuOkXIuJZrI8FeRNLYVqRHM6BPz8PcoeL4xqgs8I5sWgln5miyXDNvca1200Z4KDxoJy";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  margin: auto;
  background: black;
  color: white;
  border-radius: 5px;
`;

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null);

  const ontoken = (token) => {
    setStripeToken(token);
  }

  useEffect(()=> {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 2000
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  },[stripeToken])

  return (
    <Container>
      <StripeCheckout 
        name = "Niloufer Cafe"
        image = "/Users/venuadimulam/Documents/Projects/React - Practice/ecomstripe/public/logo192.png"
        description = "Apni Dookan"
        billingAddress
        shippingAddress
        amount={2000}
        token = {ontoken}
        stripeKey = {key}
        > 
        <Button> Pay </Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
