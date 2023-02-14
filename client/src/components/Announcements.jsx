import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
    background-color: black;
    color: white;
    display: flex;
    padding-top: 10px;
    justify-content: center;
`

const Announcements = () => {
  return (
    <Container>FREE ECONOMY SHIPPING ON U.S. ORDERS OVER $100</Container>
  )
}

export default Announcements