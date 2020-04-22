import React, { useState, useEffect, useContext, memo } from 'react';

import { Container, Header, Body, ContainerItem, CardItem, HeaderInfo, HeaderButtonContainer, ButtonAdd } from './styles';

import Texts from 'config/Texts';
import { useQuery, useMutation } from '@apollo/react-hooks';
import objectQuery, { GET_COURSE_VIDEOS, getImageUser } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';
import List from 'components/List';
import { PAGINATION, COURSE, COURSE_VIDEO, VIDEO } from 'services/api/responseAPI';
import ContextCourse from 'context/ContextCourse';
import Item from './components/Item';
import { PlusIcon } from 'components/Icons';
import CourseURL from 'routes/URLs/CourseURL';
import objectMutation, { REMOVE_COURSE_VIDEO } from 'services/api/mutation';
import { objectPagination } from 'services/api/config';

const Video = memo(({ ...props }) => (
    <ContainerItem>
        <CardItem>
            <Item {...props} />
        </CardItem>
    </ContainerItem>
));

export function Home() {
    const [totalVideos, setTotalVideos] = useState(0);
    const [videos, setVideos] = useState([]);
    const { id: courseId } = useContext(ContextCourse);
    let { data, loading } = useQuery(GET_COURSE_VIDEOS, objectQuery({
        id: courseId,
        ...objectPagination({
            orderBy: [{ column: COURSE_VIDEO.NAME }]
        })
    }));
    let [remove, { data: dataRemove }] = useMutation(REMOVE_COURSE_VIDEO);
    const TEXTS = Texts.PAGE_AUTH_COURSE.VIDEOS;
    const LINK_ADD = CourseURL(courseId).REDIRECT.VIDEOS.ADD;
    const linkEdit = (editId) => CourseURL(courseId).REDIRECT.VIDEOS.EDIT(editId);
    const linkView = (viewId) => CourseURL(courseId).REDIRECT.VIDEOS.VIEW(viewId);

    useEffect(() => {
        if (data && data.response && data.response[COURSE.VIDEOS] && data.response[COURSE.VIDEOS][PAGINATION.ITEMS] && data.response[COURSE.VIDEOS][PAGINATION.ITEMS].length > 0) {
            setTotalVideos(data.response[COURSE.VIDEOS][PAGINATION.TOTAL_ITEMS]);
            setVideos(data.response[COURSE.VIDEOS][PAGINATION.ITEMS]);
        }
    }, [data]);

    useEffect(() => {
        if (dataRemove && dataRemove.response) {
            setTotalVideos(prev => prev - 1);
            setVideos(prev => prev.filter(item => dataRemove.response[COURSE_VIDEO.ID] !== item[COURSE_VIDEO.ID]));
        }
    }, [dataRemove]);

    return (
        <Container>
            <ComponentLoading loading={loading}>
                <Header>
                    <HeaderInfo>
                        {TEXTS.TITLE}
                        <span>{totalVideos}</span>
                    </HeaderInfo>
                    <HeaderButtonContainer>
                        <ButtonAdd
                            to={LINK_ADD}
                        >
                            <PlusIcon />
                            {TEXTS.ADD_VIDEO}
                        </ButtonAdd>
                    </HeaderButtonContainer>
                </Header>
                <Body>
                    <List
                        items={videos}
                        renderItem={(item, key) => {
                            const videoId = item[COURSE_VIDEO.VIDEO] && item[COURSE_VIDEO.VIDEO][VIDEO.ID];
                            return (
                                <Video
                                    key={key}
                                    thumbnail={getImageUser(item[COURSE_VIDEO.THUMBNAIL])}
                                    title={item[COURSE_VIDEO.NAME]}
                                    date={item[COURSE_VIDEO.CREATED_AT]}
                                    linkEdit={linkEdit(videoId)}
                                    linkView={linkView(videoId)}
                                    onRemove={() => remove(objectMutation({ courseId, videoId }))}
                                />
                            )
                        }}
                    />
                </Body>
            </ComponentLoading>
        </Container>
    );
}
export default Home;