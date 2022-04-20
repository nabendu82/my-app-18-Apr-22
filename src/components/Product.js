import React from 'react'
import './Product.css'
import styled from 'styled-components'

const headerStyle = {
    color: 'darkblue',
    backgroundColor: 'yellow',
    padding: '10px'
}

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    margin-bottom: 1em;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


const Product = ({ product }) => {
    return (
        <Wrapper>
            <h1 style={headerStyle}>{product.title}</h1>
            <p style={{color: 'darkmagenta', backgroundColor: 'lightgreen'}}>{product.price}</p>
            <img className='img-product' src={product.image} alt={product.title} />
            <br />
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    )
}

export default Product