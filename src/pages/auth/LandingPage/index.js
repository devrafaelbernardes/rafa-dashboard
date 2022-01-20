import React from 'react';

import { Container } from './styles';

import RouterLandingPage from 'routes/RouterLandingPage';

import Struct from '../components/Struct';

export function LandingPage() {
    return (
        <Container>
            <Struct>
                <RouterLandingPage />
            </Struct>
        </Container>
    );
}
export default LandingPage;