import React from 'react';

import { Container, RightContainer, LeftContainer } from './styles';
import Menu from '../Menu';

export function Struct({ colorLeft = null, colorRight = null, children, ...props }) {
    return (
        <Container {...props}>
            <LeftContainer
                color={colorLeft}
            >
                <Menu />
            </LeftContainer>
            <RightContainer
                color={colorRight}
            >
                {children}
            </RightContainer>
        </Container>
    );
}
export default Struct;