import React from 'react';

import { Container } from './styles';

import Struct from 'pages/auth/components/Struct';
import RouterStudents from 'routes/RouterStudents';

export function Students() {
    return (
        <Container>
            <Struct>
                <RouterStudents />
            </Struct>
        </Container>
    );
}
export default Students;