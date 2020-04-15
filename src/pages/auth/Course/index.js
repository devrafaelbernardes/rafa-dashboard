import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { Container, Header, Body, Menu, NotFoundContainer, NotFoundTitle, HeaderAvatarContainer, HeaderAvatar, HeaderTitle } from './styles';

import { COURSE } from 'services/api/responseAPI';
import objectQuery, { GET_COURSE, getImageUser } from 'services/api/query';

import Struct from 'pages/auth/components/Struct';
import RouterCourse from 'routes/RouterCourse';
import Texts from 'config/Texts';
import ContextCourse from 'context/ContextCourse';
import ComponentLoading from 'components/ComponentLoading';
import objectSubscription, { COURSE_UPDATED } from 'services/api/subscription';

export function Course() {
    const [course, setCourse] = useState(null);
    const { id } = useParams();
    const { data, loading } = useQuery(GET_COURSE, objectQuery({ id }));
    const { data: dataUpdated } = useSubscription(COURSE_UPDATED, objectSubscription({ courseId: id }));
    const TEXTS = Texts.PAGE_AUTH_COURSE.STRUCT;

    useEffect(() => {
        if (data && data.response) {
            setCourse(data.response);
        }
    }, [data]);

    useEffect(() => {
        if (dataUpdated && dataUpdated.response) {
            setCourse(dataUpdated.response);
        }
    }, [dataUpdated]);

    let values = {
        id,
        course,
    };

    return (
        <Container>
            <Struct>
                <ContextCourse.Provider value={values}>
                    <ComponentLoading loading={loading}>
                        {
                            course ? (
                                <>
                                    <Header>
                                        <HeaderAvatarContainer>
                                            <HeaderAvatar
                                                image={getImageUser(course[COURSE.PROFILE_IMAGE])}
                                                title={course[COURSE.NAME]}
                                            />
                                        </HeaderAvatarContainer>
                                        <HeaderTitle>
                                            {course[COURSE.NAME]}
                                        </HeaderTitle>
                                    </Header>
                                    <Menu />
                                    <Body>
                                        <RouterCourse />
                                    </Body>
                                </>
                            ) : (
                                    <NotFoundContainer>
                                        <NotFoundTitle>{TEXTS.NOT_FOUND}</NotFoundTitle>
                                    </NotFoundContainer>
                                )
                        }
                    </ComponentLoading>
                </ContextCourse.Provider>
            </Struct>
        </Container>
    );
}
export default Course;