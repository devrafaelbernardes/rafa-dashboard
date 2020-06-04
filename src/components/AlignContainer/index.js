import React from 'react';

import { Container } from './styles';

export function AlignContainer({ children, ...props }) {
    return (
        <Container {...props}>
            { children }
        </Container>
    );
}
export default AlignContainer;