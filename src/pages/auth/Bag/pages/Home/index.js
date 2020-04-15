import React, { useEffect, useState, memo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Container, Bags, Header, Menu, BagContainer, BagCard, BagButton, Line, BagButtonRemove } from './styles';

import objectQuery, { GET_BAGS } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { BAG, PAGINATION, IMAGE } from 'services/api/responseAPI';

import Bag from 'components/Bag';
import BagURL from 'routes/URLs/BagURL';
import Texts from 'config/Texts';
import objectMutation, { REMOVE_BAG } from 'services/api/mutation';
import ComponentLoading from 'components/ComponentLoading';
import RemoveContainer from 'components/RemoveContainer';
import { RemoveIcon } from 'components/Icons';

const Item = memo(({ id, onRemove, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);
    const TEXTS = Texts.PAGE_AUTH_BAG.HOME;

    return (
        <BagContainer xs="12" sm="12" md="6" lg="4">
            <BagCard>
                <Bag
                    id={id}
                    {...props}
                />
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <Line>
                        <BagButtonRemove
                            onClick={() => setTryRemove(true)}
                        >
                            <RemoveIcon />{TEXTS.BUTTON_REMOVE}
                        </BagButtonRemove>
                    </Line>
                    <Line>
                        <BagButton
                            to={BagURL().REDIRECT.UPDATE(id)}
                        >
                            {TEXTS.BUTTON_UPDATE}
                        </BagButton>
                    </Line>
                </RemoveContainer>
            </BagCard>
        </BagContainer>
    );
});

export function Home() {
    const [bags, setBags] = useState([]);
    const { data, loading, error } = useQuery(GET_BAGS, objectQuery(
        objectPagination({
            orderBy: [{ column: BAG.POSITION, order: "asc" }],
        })
    ));
    const [removeBag] = useMutation(REMOVE_BAG);
    const TEXTS = Texts.PAGE_AUTH_BAG.HOME;

    useEffect(() => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setBags(data.response[PAGINATION.ITEMS]);
            return;
        }
        setBags([]);
    }, [data, error]);

    const remove = async (bagId) => {
        try {
            removeBag(objectMutation({ id: bagId }))
                .then(async(response) => {
                    if (response && response.data && response.data.response) {
                        const bag = response.data.response;
                        setBags(prev => prev.filter(item => item[BAG.ID] !== bag[BAG.ID]));
                    }
                })
                .catch(e => { })
        } catch (error) { }
    }

    return (
        <Container
            title={TEXTS.TITLE}
            subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <ComponentLoading loading={loading}>
                <Bags
                    items={bags}
                    renderItem={(item, key) => {
                        let firstImage = item[BAG.FIRST_IMAGE] && item[BAG.FIRST_IMAGE][IMAGE.URL];
                        return (
                            <Item
                                key={key}
                                id={item[BAG.ID]}
                                firstImage={firstImage}
                                title={item[BAG.NAME]}
                                onRemove={() => remove(item[BAG.ID])}
                            />
                        )
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}
export default Home;