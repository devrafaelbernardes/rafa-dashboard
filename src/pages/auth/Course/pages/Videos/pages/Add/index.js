import React, { useContext } from 'react';

import { Container } from './styles';
import ContextCourse from 'context/ContextCourse';
import FormAddCourseVideo from 'components/forms/FormAddCourseVideo';

export function Add() {
    const { id } = useContext(ContextCourse);
    return (
        <Container>
            <FormAddCourseVideo
                courseId={id}
            />
        </Container>
    );
}
export default Add;