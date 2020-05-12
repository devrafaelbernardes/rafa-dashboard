import React from 'react';

import {
    Container,
    Header,
    Body,
    Title,
    HeaderIcon,
    ButtonContainer,
    Button,
} from './styles';

export function Item({ icon, title, titleButton, to, ...props }) {
    return (
        <Container {...props}>
            <Header>
                <HeaderIcon>
                    {icon}
                </HeaderIcon>
            </Header>
            <Body>
                <Title>
                    {title}
                </Title>
                <ButtonContainer>
                    <Button
                        to={to}
                    >
                        {titleButton}
                    </Button>
                </ButtonContainer>
            </Body>
        </Container>
    );
}

export default Item;