import styled from 'styled-components';
import React from 'react';

const Title = styled.h1`
    color: blue;
    font-size: 25px;
`;

const NavBar = () => {
    return (
        <div>
            <Title>Hello There</Title>
        </div>
    )
}
export default NavBar;