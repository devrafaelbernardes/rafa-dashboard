import React, { useContext } from 'react';

import { Container } from './styles';

import FormUpdateCourse from 'components/forms/FormUpdateCourse';
import ContextCourse from 'context/ContextCourse';

export function Settings() {
    const { id : courseId } = useContext(ContextCourse);
    
    return (
        <Container>
            <FormUpdateCourse
                courseId={courseId}
            />
        </Container>
    );
}
export default Settings;