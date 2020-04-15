import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';

import { Container, ButtonAdd, Header, Body, HeaderButtonContainer, Footer, ButtonLoadMore, HeaderInfo, Student, StudentContainer, StudentGeneral } from './styles';

import Texts from 'config/Texts';
import { PlusIcon } from 'components/Icons';
import objectQuery, { GET_COURSE_STUDENTS, getImageUser } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';
import { PAGINATION, COURSE_STUDENT, STUDENT, PAGE_INFO, COURSE } from 'services/api/responseAPI';
import ContextCourse from 'context/ContextCourse';
import List from 'components/List';
import objectMutation, { REMOVE_COURSE_STUDENT } from 'services/api/mutation';
import { objectPagination } from 'services/api/config';
import objectSubscription, { COURSE_STUDENT_ADDED } from 'services/api/subscription';
import CourseURL from 'routes/URLs/CourseURL';

export function Home() {
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 15;
    const orderBy = [{ column: COURSE_STUDENT.CREATED_AT, order: 'desc' }];

    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [totalStudents, setTotalStudents] = useState(0);
    const [students, setStudents] = useState([]);
    const { id } = useContext(ContextCourse);
    const LINK_ADD = CourseURL(id).REDIRECT.STUDENTS.ADD;
    const { data, loading, fetchMore } = useQuery(GET_COURSE_STUDENTS, objectQuery({
        id,
        ...objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy
        })
    }));
    const { data: dataSubcription } = useSubscription(COURSE_STUDENT_ADDED, objectSubscription({ courseId : id }));
    const [remove, { data: dataRemove }] = useMutation(REMOVE_COURSE_STUDENT);
    const TEXTS = Texts.PAGE_AUTH_COURSE.STUDENTS;

    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[COURSE.STUDENTS] && data.response[COURSE.STUDENTS][PAGINATION.ITEMS] && data.response[COURSE.STUDENTS][PAGINATION.ITEMS].length > 0) {
            const items = data.response[COURSE.STUDENTS][PAGINATION.ITEMS];
            const pageInfo = data.response[COURSE.STUDENTS][PAGINATION.PAGE_INFO];
            setTotalStudents(data.response[COURSE.STUDENTS][PAGINATION.TOTAL_ITEMS]);
            setStudents(prev => more ? [...prev, ...items] : items);
            if (pageInfo) {
                setHasNextPage(pageInfo[PAGE_INFO.HAS_NEXT_PAGE] === true);
            }
            return;
        }
        setStudents([]);
    }, []);

    const loadMore = useCallback(async (page = null) => {
        try {
            await fetchMore({
                ...objectQuery(
                    objectPagination({
                        pageSize: ITEMS_PER_PAGE,
                        pageNumber: page,
                        orderBy,
                    })
                ),
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || !fetchMoreResult.response) {
                        return prev;
                    }
                }
            })
                .then(response => {
                    if (response && response.data) {
                        setItems(response.data, true);
                    }
                });

            setPageNumber(prev => prev + 1);
        } catch (error) { }
    }, [fetchMore, setItems, orderBy])

    useEffect(() => {
        setItems(data);
    }, [data, setItems]);

    useEffect(() => {
        if (dataRemove && dataRemove.response) {
            setTotalStudents(prev => prev - 1);
            setStudents(prev => prev.filter(item => item[COURSE_STUDENT.ID] !== dataRemove.response[COURSE_STUDENT.ID]));
        }
    }, [dataRemove]);

    useEffect(() => {
        if (dataSubcription && dataSubcription.response) {
            setTotalStudents(prev => prev + 1);
            setStudents(prev => [dataSubcription.response, ...prev]);
        }
    }, [dataSubcription]);

    return (
        <Container>
            <ComponentLoading loading={loading}>
                <Header>
                    <HeaderInfo>
                        {TEXTS.TITLE}
                        <span>{totalStudents}</span>
                    </HeaderInfo>
                    <HeaderButtonContainer>
                        <ButtonAdd
                            to={LINK_ADD}
                        >
                            <PlusIcon />
                            {TEXTS.ADD_STUDENT}
                        </ButtonAdd>
                    </HeaderButtonContainer>
                </Header>
                <Body>
                    <List
                        items={students}
                        renderItem={(item, key) => {
                            const courseId = id;
                            const date = item[COURSE_STUDENT.CREATED_AT];
                            const student = item[COURSE_STUDENT.STUDENT];
                            let name = null;
                            let image = null;
                            let studentId = null;
                            if (student) {
                                studentId = student[STUDENT.ID];
                                name = student[STUDENT.FULL_NAME];
                                image = getImageUser(student[STUDENT.PROFILE_IMAGE]);
                            }
                            return (
                                <StudentContainer
                                    key={key}
                                >
                                    <StudentGeneral>
                                        <Student
                                            title={name}
                                            image={image}
                                            date={date}
                                            onRemove={() => remove(objectMutation({ courseId, studentId }))}
                                        />
                                    </StudentGeneral>
                                </StudentContainer>
                            );
                        }}
                    />
                </Body>
            </ComponentLoading>
            {
                hasNextPage && students && students.length > 0 &&
                <Footer>
                    <ButtonLoadMore
                        onClick={() => loadMore(pageNumber + 1)}
                    >
                        {TEXTS.LOAD_MORE}
                    </ButtonLoadMore>
                </Footer>
            }
        </Container>
    );
}
export default Home;