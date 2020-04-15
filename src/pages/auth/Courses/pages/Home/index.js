import React, { useEffect, useState, memo, useCallback, useContext } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import {
    Container,
    Courses,
    Header,
    Menu,
    CourseContainer,
    CourseCard,
    CourseCardFooter,
    CourseButton,
    RemoveButton,
    Footer,
    LoadMoreButton,
    CourseCardBody,
    HeaderSubtitle
} from './styles';

import objectQuery, { GET_COURSES } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { PAGINATION, IMAGE, COURSE, PAGE_INFO } from 'services/api/responseAPI';

import Course from 'components/Course';
import Texts from 'config/Texts';
import CourseURL from 'routes/URLs/CourseURL';
import objectMutation, { REMOVE_COURSE } from 'services/api/mutation';
import { COURSE_ADDED } from 'services/api/subscription';
import { RemoveIcon, PlusIcon } from 'components/Icons';
import { ThemeContext } from 'styled-components';
import ComponentLoading from 'components/ComponentLoading';
import RemoveContainer from 'components/RemoveContainer';

const TEXTS = Texts.PAGE_AUTH_COURSES.HOME;
const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 15;

const Item = memo(({ id, onRemove, data, loading = false, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);
    const { colors } = useContext(ThemeContext);

    return (
        <CourseCard>
            <Course
                {...props}
                componentBody={CourseCardBody}
            />
            <CourseCardFooter>
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <RemoveButton
                        onClick={() => setTryRemove(true)}
                        color={colors.white}
                    >
                        <RemoveIcon /> {TEXTS.BUTTON_REMOVE}
                    </RemoveButton>
                    <CourseButton
                        to={CourseURL(id).REDIRECT.BASE}
                    >
                        {TEXTS.BUTTON_VIEW}
                    </CourseButton>
                </RemoveContainer>
            </CourseCardFooter>
        </CourseCard>
    );
});

export function Home() {
    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [courses, setCourses] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    const [remove, { data: dataRemove, loading: loadingRemove }] = useMutation(REMOVE_COURSE);
    const { data: dataNewCourse } = useSubscription(COURSE_ADDED);
    const { data, loading, fetchMore } = useQuery(GET_COURSES, objectQuery(
        objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy: [{ column: COURSE.NAME, order: "asc" }],
        })
    ));

    /* const loadMore = useCallback(() => {
        try {
            subscribeToMore({
                document: COURSE_ADDED,
                updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData && !subscriptionData.response) {
                        return prev;
                    }
                    const newData = subscriptionData.data.response;
                    const prevData = prev.response[PAGINATION.ITEMS];
                    return Object.assign({}, prev, {
                        response: {
                            ...prev.response,
                            [PAGINATION.ITEMS]: [newData, ...prevData],
                        }
                    });
                }
            });
        } catch (error) { }
    }, [subscribeToMore, courses]);

    useEffect(() => {
        loadMore();
    }, [loadMore]);

 */
    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            const items = data.response[PAGINATION.ITEMS];
            const pageInfo = data.response[PAGINATION.PAGE_INFO];
            setCourses(prev => more ? [...prev, ...items] : items);
            setTotalCourses(data.response[PAGINATION.TOTAL_ITEMS] || 0);
            if (pageInfo) {
                setHasNextPage(pageInfo[PAGE_INFO.HAS_NEXT_PAGE] === true);
            }
            return;
        }
        setCourses([]);
    }, []);

    const loadMore = useCallback(async (page = null) => {
        try {
            await fetchMore({
                ...objectQuery(
                    objectPagination({
                        pageSize: ITEMS_PER_PAGE,
                        pageNumber: page,
                        orderBy: [{ column: COURSE.NAME, order: "asc" }],
                    })
                ),
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || !fetchMoreResult.response) {
                        return prev;
                    }
                }
            })
                .then(response => {
                    if (response) {
                        setItems(response.data, true);
                    }
                });

            setPageNumber(prev => prev + 1);
        } catch (error) { }
    }, [fetchMore, setItems])

    useEffect(() => {
        if (dataNewCourse && dataNewCourse.response) {
            setCourses(prev => [dataNewCourse.response, ...prev]);
        }
    }, [dataNewCourse]);

    useEffect(() => {
        setItems(data);
    }, [data, setItems]);

    const onRemove = useCallback((id) => {
        try {
            remove(objectMutation({ id }))
                .then(async (response) => {
                    if (response && response.data && response.data.response) {
                        const list = await courses.filter(item => item[COURSE.ID] !== response.data.response[COURSE.ID]);
                        setCourses(list);
                    }
                })
                .catch(e => { });
        } catch (error) { }
    }, [remove, courses]);

    return (
        <Container
            title={TEXTS.TITLE}
            subtitle={
                <HeaderSubtitle>
                    {TEXTS.SUBTITLE}
                    <span>{loading ? TEXTS.LOADING_TOTAL_ITEMS : totalCourses}</span>
                </HeaderSubtitle>
            }
            componentHeader={Header}
            componentMenu={Menu}
        >
            <ComponentLoading loading={loading}>
                <Courses
                    items={courses}
                    renderItem={(item, key) => {
                        return (
                            <CourseContainer key={key} xs="12" sm="12" md="6" lg="4">
                                <Item
                                    id={item[COURSE.ID]}
                                    title={item[COURSE.NAME]}
                                    description={item[COURSE.DESCRIPTION]}
                                    image={item[COURSE.PROFILE_IMAGE] && item[COURSE.PROFILE_IMAGE][IMAGE.URL]}
                                    loading={loadingRemove}
                                    data={dataRemove}
                                    onRemove={() => onRemove(item[COURSE.ID])}
                                />
                            </CourseContainer>
                        )
                    }}
                />
                {
                    hasNextPage && courses && courses.length > 0 &&
                    <Footer>
                        <LoadMoreButton
                            onClick={() => loadMore(pageNumber + 1)}
                        >
                            <PlusIcon />{TEXTS.BUTTON_LOAD_MORE}
                        </LoadMoreButton>
                    </Footer>
                }
            </ComponentLoading>
        </Container>
    );
}
export default Home;