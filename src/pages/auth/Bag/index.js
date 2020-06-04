import React from 'react';

import { Container } from './styles';
import Struct from '../components/Struct';
import RouterBag from 'routes/RouterBag';

export function Bag() {
    return (
        <Container>
            <Struct>
                <RouterBag />
            </Struct>
        </Container>
    );
}
export default Bag;