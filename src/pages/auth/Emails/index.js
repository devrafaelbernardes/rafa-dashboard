import React from 'react';

import { Container } from './styles';

import Struct from 'pages/auth/components/Struct';
import RouterEmails from 'routes/RouterEmails';

export function Emails() {
    return (
        <Container>
            <Struct>
                <RouterEmails />
            </Struct>
        </Container>
    );
}
export default Emails;