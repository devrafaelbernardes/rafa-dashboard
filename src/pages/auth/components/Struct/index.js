import React, { useContext } from 'react';

import { ContainerAuth, ContainerDefault, RightContainer, LeftContainer } from './styles';
import Menu from '../Menu';
import ContextApp from 'context/ContextApp';

export function Struct({ colorLeft = null, colorRight = null, children, ...props }) {
    const { authenticated } = useContext(ContextApp);

    if (authenticated) {
        return (
            <ContainerAuth {...props}>
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
            </ContainerAuth>
        );
    }
    return (
        <ContainerDefault {...props}>
            {children}
        </ContainerDefault>
    );
}

export default Struct;