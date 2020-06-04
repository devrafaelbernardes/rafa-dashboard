import React, { useContext } from 'react';

import { Container } from './styles';
import FormAddCourseAccess from 'components/forms/FormAddCourseAccess';
import ContextCourse from 'context/ContextCourse';

export function Add() {
    const { id: courseId } = useContext(ContextCourse);
    return (
        <Container>
            <FormAddCourseAccess
                courseId={courseId}
            />
        </Container>
    );
}
export default Add;