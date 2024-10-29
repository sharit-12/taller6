import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    max-width: 300px;
    margin: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
`;

const BuyButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

function ProductCard() {
    return (
        <Card>
            <ProductName>Producto XYZ</ProductName>
            <BuyButton>Comprar</BuyButton>
        </Card>
    );
}

export default ProductCard;
