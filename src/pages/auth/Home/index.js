import React, { useState, useEffect } from 'react';

import { Container, Header, Body, InfoContainer, Info } from './styles';
import Struct from 'pages/auth/components/Struct';
import Texts from 'config/Texts';
import { useQuery } from '@apollo/react-hooks';
import { GET_SYSTEM_INFOS } from 'services/api/query';
import { PAGINATION } from 'services/api/responseAPI';

export function Home() {
    const [countBags, setCountBags] = useState(0);
    const [countCourses, setCountCourses] = useState(0);
    const [countCourseStudents, setCountCourseStudents] = useState(0);
    const [countMedias, setCountMedias] = useState(0);
    const [countSocialNetworks, setCountSocialNetworks] = useState(0);
    const [countStudents, setCountStudents] = useState(0);
    const { data, error, loading } = useQuery(GET_SYSTEM_INFOS);
    const TEXTS = Texts.PAGE_AUTH_HOME.HOME;

    useEffect(() => {
        if (data) {
            const getCount = (info) => info && info[PAGINATION.TOTAL_ITEMS];
            if (data.bags) {
                setCountBags(getCount(data.bags));
            }
            if (data.courses) {
                setCountCourses(getCount(data.courses));
            }
            if (data.course_students) {
                setCountCourseStudents(getCount(data.course_students));
            }
            if (data.medias) {
                setCountMedias(getCount(data.medias));
            }
            if (data.social_networks) {
                setCountSocialNetworks(getCount(data.social_networks));
            }
            if (data.students) {
                setCountStudents(getCount(data.students));
            }
        }
    }, [data, error]);

    return (
        <Container>
            <Struct>
                <Header
                    title={TEXTS.TITLE}
                />
                <Body>
                    <InfoContainer>
                        <Info
                            title={TEXTS.COUNT_BAGS}
                            value={loading ? TEXTS.LOADING : countBags}
                        />
                    </InfoContainer>
                    <InfoContainer>
                        <Info
                            title={TEXTS.COUNT_COURSES}
                            value={loading ? TEXTS.LOADING : countCourses}
                        />
                    </InfoContainer>
                    <InfoContainer>
                        <Info
                            title={TEXTS.COUNT_MEDIAS}
                            value={loading ? TEXTS.LOADING : countMedias}
                        />
                    </InfoContainer>
                    <InfoContainer>
                        <Info
                            title={TEXTS.COUNT_SOCIAL_NETWORKS}
                            value={loading ? TEXTS.LOADING : countSocialNetworks}
                        />
                    </InfoContainer>
                    <InfoContainer>
                        <Info
                            title={TEXTS.COUNT_STUDENTS}
                            value={loading ? TEXTS.LOADING : countStudents}
                        />
                    </InfoContainer>
                    <InfoContainer>
                        <Info
                            title={TEXTS.COUNT_STUDENTS_COURSE}
                            value={loading ? TEXTS.LOADING : countCourseStudents}
                        />
                    </InfoContainer>
                </Body>
            </Struct>
        </Container>
    );
}
export default Home;