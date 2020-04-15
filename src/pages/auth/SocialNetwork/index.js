import React from 'react';

import { Container } from './styles';

import RouterSocialNetwork from 'routes/RouterSocialNetwork';

import Struct from '../components/Struct';

export function SocialNetwork() {
    return (
        <Container>
            <Struct>
                <RouterSocialNetwork />
            </Struct>
        </Container>
    );
}
export default SocialNetwork;