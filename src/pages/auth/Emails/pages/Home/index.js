import React, { useState, useCallback, useEffect, memo } from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
    Container,
    Header,
    Body,
    ButtonLoadMoreContainer,
    HeaderTitle,
    ButtonLoadMore,
    ContainerItem,
    CardItem,
    HeaderSubtitle,
    BodyCard,
} from './styles';

import objectQuery, { GET_EMAILS, getImageUser } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { PAGINATION, PAGE_INFO, STUDENT, EMAIL } from 'services/api/responseAPI';
import Texts from 'config/Texts';
import ComponentLoading from 'components/ComponentLoading';
import List from 'components/List';
import Email from 'components/Email';
import Menu from '../components/Menu';
import { toFullDate } from 'utils/convertValue';

const Item = memo(({ ...props }) => {
    return (
        <ContainerItem>
            <CardItem>
                <Email {...props} />
            </CardItem>
        </ContainerItem>
    );
});

export function Home() {
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 15;
    const orderBy = [{ column: EMAIL.CREATED_AT, order: "desc" }];
    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [totalEmails, setTotalEmails] = useState(0);
    const [emails, setEmails] = useState([]);
    const { data, loading, fetchMore } = useQuery(GET_EMAILS, objectQuery(
        objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy,
        })
    ));

    const TEXTS = Texts.PAGE_AUTH_EMAILS.HOME;

    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            const items = data.response[PAGINATION.ITEMS];
            const pageInfo = data.response[PAGINATION.PAGE_INFO];
            setEmails(prev => more ? [...prev, ...items] : items);
            setTotalEmails(data.response[PAGINATION.TOTAL_ITEMS] || 0);
            if (pageInfo) {
                setHasNextPage(pageInfo[PAGE_INFO.HAS_NEXT_PAGE] === true);
            }
            return;
        }
        setEmails([]);
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
                    if (response) {
                        setItems(response.data, true);
                    }
                });

            setPageNumber(prev => prev + 1);
        } catch (error) { }
    }, [fetchMore, setItems, orderBy])

    useEffect(() => {
        setItems(data);
    }, [data, setItems]);

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    {TEXTS.HEADER.TITLE}
                </HeaderTitle>
                <HeaderSubtitle>
                    {TEXTS.HEADER.SUBTITLE}
                    <span>{loading ? TEXTS.HEADER.LOADING : totalEmails}</span>
                </HeaderSubtitle>
            </Header>
            <Menu />
            <Body>
                <BodyCard>
                    <ComponentLoading loading={loading}>
                        <List
                            items={emails}
                            renderItem={(item, key) => {
                                const to = item[EMAIL.TO];
                                const student = item[EMAIL.STUDENT];
                                const subject = item[EMAIL.SUBJECT];
                                const message = item[EMAIL.MESSAGE];
                                const createdAt = item[EMAIL.CREATED_AT];
                                let image = null;
                                let name = null;
                                if (student) {
                                    name = student[STUDENT.FULL_NAME];
                                    image = getImageUser(student[STUDENT.PROFILE_IMAGE]);
                                }
                                return (
                                    <Item
                                        key={key}
                                        to={to}
                                        image={image}
                                        name={name}
                                        subject={subject}
                                        message={message}
                                        createdAt={toFullDate(createdAt)}
                                    />
                                );
                            }}
                        />
                        {
                            hasNextPage && emails && emails.length > 0 &&
                            <ButtonLoadMoreContainer>
                                <ButtonLoadMore
                                    onClick={() => loadMore(pageNumber + 1)}
                                >
                                    {TEXTS.FOOTER.BUTTON_LOAD_MORE}
                                </ButtonLoadMore>
                            </ButtonLoadMoreContainer>
                        }
                    </ComponentLoading>
                </BodyCard>
            </Body>
        </Container>
    );
}
export default Home;