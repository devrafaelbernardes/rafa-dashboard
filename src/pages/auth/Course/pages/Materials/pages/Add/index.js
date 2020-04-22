import React, { useContext } from 'react';

import { Container } from './styles';
import ContextCourse from 'context/ContextCourse';
import FormAddCourseMaterial from 'components/forms/FormAddCourseMaterial';

export function Add() {
    const { id } = useContext(ContextCourse);
    return (
        <Container>
            <FormAddCourseMaterial
                courseId={id}
            />
        </Container>
    );
}
export default Add;