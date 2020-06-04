import React from 'react';

import { Container } from './styles';
import Link from 'components/Link';

export function Card({ children, to, href, ...props }) {
    return (
        <Container as={(to || href) && Link} to={to} href={href} {...props}>
            { children }
        </Container>
    );
}
export default Card;