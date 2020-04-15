import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';
import ContextCourse from 'context/ContextCourse';
import FormUpdateCourseVideo from 'components/forms/FormUpdateCourseVideo';

export function Edit() {
    const { id : courseId } = useContext(ContextCourse);
    const { videoId } = useParams();

    return (
        <Container>
            <FormUpdateCourseVideo
                videoId={videoId}
                courseId={courseId}
            />
        </Container>
    );
}
export default Edit;