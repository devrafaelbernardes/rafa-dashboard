import React, { useContext } from 'react';

import { Container } from './styles';
import ContextCourse from 'context/ContextCourse';
import FormAddCourseStudent from 'components/forms/FormAddCourseStudent';

export function Add() {
    const { id } = useContext(ContextCourse);
    return (
        <Container>
            <FormAddCourseStudent
                courseId={id}
            />
        </Container>
    );
}
export default Add;