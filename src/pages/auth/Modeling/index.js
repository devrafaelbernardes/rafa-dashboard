import React from 'react';

import { Container } from './styles';

import RouterModeling from 'routes/RouterModeling';

import Struct from '../components/Struct';

export function Modeling() {
    return (
        <Container>
            <Struct>
                <RouterModeling />
            </Struct>
        </Container>
    );
}
export default Modeling;