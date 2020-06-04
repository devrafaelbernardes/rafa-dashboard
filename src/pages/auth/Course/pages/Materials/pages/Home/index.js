import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Container, ButtonAdd, Header, Body, HeaderButtonContainer, Footer, ButtonLoadMore, HeaderInfo, Material, MaterialContainer, MaterialGeneral } from './styles';

import Texts from 'config/Texts';
import { PlusIcon } from 'components/Icons';
import objectQuery, { GET_COURSE_MATERIALS } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';
import { PAGINATION, COURSE_MATERIAL, MATERIAL, PAGE_INFO, COURSE } from 'services/api/responseAPI';
import ContextCourse from 'context/ContextCourse';
import List from 'components/List';
import objectMutation, { REMOVE_COURSE_MATERIAL } from 'services/api/mutation';
import { objectPagination } from 'services/api/config';
import CourseURL from 'routes/URLs/CourseURL';

export function Home() {
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 16;
    const orderBy = [{ column: COURSE_MATERIAL.NAME, order: 'asc' }];

    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [totalMaterials, setTotalMaterials] = useState(0);
    const [students, setMaterials] = useState([]);
    const { id } = useContext(ContextCourse);
    const LINK_ADD = CourseURL(id).REDIRECT.MATERIALS.ADD;
    const { data, loading, fetchMore } = useQuery(GET_COURSE_MATERIALS, objectQuery({
        id,
        ...objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy
        })
    }));
    const [remove, { data: dataRemove }] = useMutation(REMOVE_COURSE_MATERIAL);
    const TEXTS = Texts.PAGE_AUTH_COURSE.MATERIALS;

    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[COURSE.MATERIALS] && data.response[COURSE.MATERIALS][PAGINATION.ITEMS] && data.response[COURSE.MATERIALS][PAGINATION.ITEMS].length > 0) {
            const items = data.response[COURSE.MATERIALS][PAGINATION.ITEMS];
            const pageInfo = data.response[COURSE.MATERIALS][PAGINATION.PAGE_INFO];
            setTotalMaterials(data.response[COURSE.MATERIALS][PAGINATION.TOTAL_ITEMS]);
            setMaterials(prev => more ? [...prev, ...items] : items);
            if (pageInfo) {
                setHasNextPage(pageInfo[PAGE_INFO.HAS_NEXT_PAGE] === true);
            }
            return;
        }
        setMaterials([]);
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
            setTotalMaterials(prev => prev - 1);
            setMaterials(prev => prev.filter(item => item[COURSE_MATERIAL.ID] !== dataRemove.response[COURSE_MATERIAL.ID]));
        }
    }, [dataRemove]);

    return (
        <Container>
            <ComponentLoading loading={loading}>
                <Header>
                    <HeaderInfo>
                        {TEXTS.TITLE}
                        <span>{totalMaterials}</span>
                    </HeaderInfo>
                    <HeaderButtonContainer>
                        <ButtonAdd
                            to={LINK_ADD}
                        >
                            <PlusIcon />
                            {TEXTS.ADD_MATERIAL}
                        </ButtonAdd>
                    </HeaderButtonContainer>
                </Header>
                <Body>
                    <List
                        items={students}
                        renderItem={(item, key) => {
                            const courseId = id;
                            const date = item[COURSE_MATERIAL.CREATED_AT];
                            const materialId = item[COURSE_MATERIAL.MATERIAL] && item[COURSE_MATERIAL.MATERIAL][MATERIAL.ID];
                            const materialUrl = item[COURSE_MATERIAL.MATERIAL] && item[COURSE_MATERIAL.MATERIAL][MATERIAL.URL];
                            const name = item[COURSE_MATERIAL.NAME]
                            return (
                                <MaterialContainer
                                    key={key}
                                >
                                    <MaterialGeneral>
                                        <Material
                                            title={name}
                                            link={materialUrl}
                                            date={date}
                                            onRemove={() => remove(objectMutation({ courseId, materialId }))}
                                        />
                                    </MaterialGeneral>
                                </MaterialContainer>
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