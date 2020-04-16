import React, { useState, useContext, useEffect, memo, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import {
    Container,
    Header,
    HeaderInfo,
    HeaderButtonContainer,
    ButtonAdd,
    Body,
    CardItem,
    ContainerItem,
    Footer,
    ButtonLoadMore,
} from './styles';

import Texts from 'config/Texts';
import ContextCourse from 'context/ContextCourse';

import objectQuery, { GET_COURSE_ACCESSES } from 'services/api/query';
import { PAGINATION, COURSE_ACCESS, PAGE_INFO } from 'services/api/responseAPI';
import { objectPagination } from 'services/api/config';

import { PlusIcon } from 'components/Icons';
import List from 'components/List';
import ComponentLoading from 'components/ComponentLoading';

import Access from 'components/Access';
import { LINK_ACCESS_COURSE } from 'config/infos';
import objectMutation, { GENERATE_COURSE_ACCESS } from 'services/api/mutation';

const Item = memo(({ ...props }) => (
    <ContainerItem>
        <CardItem>
            <Access {...props} />
        </CardItem>
    </ContainerItem>
));

export function Home() {
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 15;
    const orderBy = [{ column: COURSE_ACCESS.CREATED_AT, order: 'desc' }];

    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [totalAccess, setTotalAccess] = useState(0);
    const [accesses, setAccesses] = useState([]);
    const { id: courseId } = useContext(ContextCourse);
    const { data, loading, fetchMore } = useQuery(GET_COURSE_ACCESSES, objectQuery({
        courseId,
        ...objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy
        })
    }));
    const [addNewAccess, { data: dataNewAccess, loading: loadingNewAccess }] = useMutation(GENERATE_COURSE_ACCESS);
    const TEXTS = Texts.PAGE_AUTH_COURSE.CREATE_ACCESS;

    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            const items = data.response[PAGINATION.ITEMS];
            const pageInfo = data.response[PAGINATION.PAGE_INFO];
            setTotalAccess(data.response[PAGINATION.TOTAL_ITEMS]);
            setAccesses(prev => more ? [...prev, ...items] : items);
            if (pageInfo) {
                setHasNextPage(pageInfo[PAGE_INFO.HAS_NEXT_PAGE] === true);
            }
            return;
        }
        setAccesses([]);
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
        if (dataNewAccess && dataNewAccess.response) {
            const newAccess = dataNewAccess.response;
            newAccess.isNew = true;
            setTotalAccess(prev => prev + 1);
            setAccesses(prev => [newAccess, ...prev]);
        }
    }, [dataNewAccess]);

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    {TEXTS.TITLE}
                    <span>{totalAccess}</span>
                </HeaderInfo>
                <HeaderButtonContainer>
                    <ButtonAdd
                        onClick={() => addNewAccess(objectMutation({ courseId }))}
                        loading={loadingNewAccess}
                    >
                        <PlusIcon />
                        {TEXTS.ADD_ACCESS}
                    </ButtonAdd>
                </HeaderButtonContainer>
            </Header>
            <Body>
                <ComponentLoading loading={loading}>
                    <List
                        items={accesses}
                        renderItem={(item, key) => {
                            const accessId = item[COURSE_ACCESS.ID];
                            const token = item[COURSE_ACCESS.TOKEN];
                            const state = item[COURSE_ACCESS.CURRENTY_STATE];
                            const createdAt = item[COURSE_ACCESS.CREATED_AT];
                            const student = item[COURSE_ACCESS.STUDENT];
                            let link = null;
                            if (token) {
                                link = `${LINK_ACCESS_COURSE}${token}`;
                            }
                            return (
                                <Item
                                    key={key}
                                    isNew={item.isNew === true}
                                    id={accessId}
                                    state={state}
                                    student={student}
                                    link={link}
                                    createdAt={createdAt}
                                />
                            );
                        }}
                    />
                </ComponentLoading>
            </Body>
            {
                hasNextPage && accesses && accesses.length > 0 &&
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