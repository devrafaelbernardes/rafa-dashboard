import React from 'react';

import { LoadingIcon } from 'components/Icons';
import Texts from 'config/Texts';

import { Container, SpinnerContainer, Title } from './styles';

export function Loading({ color = null, ...props }){
    const TEXTS = Texts.LOADING;
    return (
        <Container {...props}>
            <SpinnerContainer color={color}>
                <LoadingIcon spin />
            </SpinnerContainer>
            <Title color={color}>
                { TEXTS.TITLE }...
            </Title>
        </Container>
    );
}

export default Loading;