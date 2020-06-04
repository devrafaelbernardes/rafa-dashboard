import React from 'react';

import { Container, Header, Body } from './styles';

export function CardInfo({ title, value, componentHeader = null, componentBody = null, ...props }) {
    return (
        <Container {...props}>
            {
                title &&
                <Header
                    as={componentHeader}
                >
                    {title}
                </Header>
            }
            {
                (value || value >= 0) &&
                <Body
                    as={componentBody}
                >
                    {value}
                </Body>
            }
        </Container>
    );
}
export default CardInfo;