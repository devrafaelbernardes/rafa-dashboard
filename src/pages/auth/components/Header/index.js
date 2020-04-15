import React from 'react';

import { Container, Line, Title, Subtitle } from './styles';

export function Header({ title = null, subtitle = null, ...props }) {
    return (
        <Container {...props}>
            <Line>
                {
                    title &&
                    <Title>{title}</Title>
                }
            </Line>
            <Line>
                {
                    subtitle &&
                    <Subtitle>{subtitle}</Subtitle>
                }
            </Line>
        </Container>
    );
}
export default Header;