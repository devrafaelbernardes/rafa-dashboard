import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Container, NotFoundContainer, NotFoundTitle, General, Description, ButtonEdit } from './styles';
import ContextCourse from 'context/ContextCourse';
import objectQuery, { GET_COURSE_VIDEO, getImageUser } from 'services/api/query';
import Texts from 'config/Texts';
import Video from 'components/Video';
import { COURSE_VIDEO, VIDEO } from 'services/api/responseAPI';
import ComponentLoading from 'components/ComponentLoading';
import { toHTML } from 'utils/convertValue';
import CourseURL from 'routes/URLs/CourseURL';

export function View() {
    const [video, setVideo] = useState(null);
    const { id: courseId } = useContext(ContextCourse);
    const { videoId } = useParams();
    let { data, loading } = useQuery(GET_COURSE_VIDEO, objectQuery({ courseId, videoId }));

    let linkToEdit = CourseURL(courseId).REDIRECT.VIDEOS.EDIT(videoId);
    const TEXTS = Texts.PAGE_AUTH_COURSE.VIDEOS.VIEW;

    useEffect(() => {
        (async () => {
            if (data && data.response) {
                setVideo(data.response);
            }
        })()
    }, [data]);

    return (
        <Container>
            <ComponentLoading loading={loading}>
                {
                    video ? (
                        <General>
                            <Video
                                controls
                                title={video[COURSE_VIDEO.NAME]}
                                thumbnail={getImageUser(video[COURSE_VIDEO.THUMBNAIL])}
                                url={video[COURSE_VIDEO.VIDEO] && video[COURSE_VIDEO.VIDEO][VIDEO.URL]}
                            />
                            <ButtonEdit
                                to={linkToEdit}
                            >
                                {TEXTS.BUTTON_EDIT}
                            </ButtonEdit>
                            {
                                video[COURSE_VIDEO.DESCRIPTION] &&
                                <Description>
                                    {toHTML(video[COURSE_VIDEO.DESCRIPTION])}
                                </Description>
                            }
                        </General>
                    ) : (
                            <NotFoundContainer>
                                <NotFoundTitle>{TEXTS.NOT_FOUND}</NotFoundTitle>
                            </NotFoundContainer>
                        )
                }
            </ComponentLoading>
        </Container>
    );
}
export default View;