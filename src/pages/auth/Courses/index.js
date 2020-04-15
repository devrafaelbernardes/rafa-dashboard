import React from 'react';

import { Container } from './styles';
import Struct from '../components/Struct';
import RouterCourses from 'routes/RouterCourses';

export function Courses() {
    return (
        <Container>
            <Struct>
                <RouterCourses />
            </Struct>
        </Container>
    );
}
export default Courses;