import React, { useState, useCallback, useEffect, memo } from 'react';
import { useSubscription, useQuery } from '@apollo/react-hooks';

import {
    Container,
    Header,
    Body,
    Footer,
    HeaderTitle,
    ButtonLoadMore,
    ContainerItem,
    CardItem,
    HeaderSubtitle
} from './styles';

import Struct from '../components/Struct';
import objectQuery, { GET_STUDENTS, getImageUser } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { STUDENT_ADDED } from 'services/api/subscription';
import { PAGINATION, PAGE_INFO, STUDENT } from 'services/api/responseAPI';
import Texts from 'config/Texts';
import ComponentLoading from 'components/ComponentLoading';
import List from 'components/List';
import Student from 'components/Student';

const Item = memo(({ ...props }) => {
    return (
        <ContainerItem>
            <CardItem>
                <Student {...props} />
            </CardItem>
        </ContainerItem>
    );
});

export function Students() {
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 15;

    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [totalStudents, setTotalStudents] = useState(0);
    const [students, setStudents] = useState([]);
    const { data: dataNewStudent } = useSubscription(STUDENT_ADDED);
    const { data, loading, fetchMore } = useQuery(GET_STUDENTS, objectQuery(
        objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy: [{ column: STUDENT.NAME, order: "asc" }],
        })
    ));

    const TEXTS = Texts.PAGE_AUTH_STUDENTS;

    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            const items = data.response[PAGINATION.ITEMS];
            const pageInfo = data.response[PAGINATION.PAGE_INFO];
            setStudents(prev => more ? [...prev, ...items] : items);
            setTotalStudents(data.response[PAGINATION.TOTAL_ITEMS] || 0);
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
                        orderBy: [{ column: STUDENT.NAME, order: "asc" }],
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
        if (dataNewStudent && dataNewStudent.response) {
            setStudents(prev => [dataNewStudent.response, ...prev]);
        }
    }, [dataNewStudent]);

    useEffect(() => {
        setItems(data);
    }, [data, setItems]);

    return (
        <Container>
            <Struct>
                <Header>
                    <HeaderTitle>
                        {TEXTS.HEADER.TITLE}
                    </HeaderTitle>
                    <HeaderSubtitle>
                        {TEXTS.HEADER.SUBTITLE}
                        <span>{loading ? TEXTS.HEADER.LOADING : totalStudents}</span>
                    </HeaderSubtitle>
                </Header>
                <Body>
                    <ComponentLoading loading={loading}>
                        <List
                            items={students}
                            renderItem={(item, key) => {
                                return (
                                    <Item
                                        key={key}
                                        image={getImageUser(item[STUDENT.PROFILE_IMAGE])}
                                        title={item[STUDENT.FULL_NAME]}
                                        subtitle={item[STUDENT.EMAIL]}
                                    />
                                );
                            }}
                        />
                    </ComponentLoading>
                </Body>
                {
                    hasNextPage && students && students.length > 0 &&
                    <Footer>
                        <ButtonLoadMore
                            onClick={() => loadMore(pageNumber + 1)}
                        >
                            {TEXTS.FOOTER.BUTTON_LOAD_MORE}
                        </ButtonLoadMore>
                    </Footer>
                }
            </Struct>
        </Container>
    );
}
export default Students;