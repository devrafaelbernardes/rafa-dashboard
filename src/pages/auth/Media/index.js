import React from 'react';

import { Container } from './styles';

import RouterMedia from 'routes/RouterMedia';

import Struct from '../components/Struct';

export function Media() {
    return (
        <Container>
            <Struct>
                <RouterMedia />
            </Struct>
        </Container>
    );
}
export default Media;