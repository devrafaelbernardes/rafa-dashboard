import React, { useEffect, useState, memo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Container, Modelings, Header, Menu, ModelingContainer, ModelingCard, ModelingCardFooter, ModelingButtonRemove, SendEmailLink } from './styles';

import objectQuery, { GET_MODELINGS } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { PAGINATION, IMAGE, MODELING } from 'services/api/responseAPI';

import Modeling from 'components/Modeling';
import Texts from 'config/Texts';
import objectMutation, { REMOVE_MODELING } from 'services/api/mutation';
import ComponentLoading from 'components/ComponentLoading';
import RemoveContainer from 'components/RemoveContainer';
import { EmailIcon, RemoveIcon } from 'components/Icons';
import ModelingURL from 'routes/URLs/ModelingURL';

const Item = memo(({ onRemove, id, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);
    const TEXTS = Texts.PAGE_AUTH_MODELING.HOME;

    return (
        <ModelingContainer xs="12" sm="12" md="6" lg="4">
            <ModelingCard>
                <Modeling
                    {...props}
                />
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <ModelingCardFooter>
                        <ModelingButtonRemove
                            onClick={() => setTryRemove(true)}
                        >
                            <RemoveIcon />{TEXTS.BUTTON_REMOVE}
                        </ModelingButtonRemove>
                        <SendEmailLink
                            to={ModelingURL().REDIRECT.SEND_EMAIL(id)}
                        >
                            <EmailIcon />{TEXTS.BUTTON_SEND_EMAIL}
                        </SendEmailLink>
                    </ModelingCardFooter>
                </RemoveContainer>
            </ModelingCard>
        </ModelingContainer>
    );
});

export function Home() {
    const [modelings, setModelings] = useState([]);
    const { data, loading, error } = useQuery(GET_MODELINGS, objectQuery(
        objectPagination({
            orderBy: [{ column: MODELING.NAME, order: "asc" }],
        })
    ));
    const [removeModeling, { data: dataRemove, error: errorRemove }] = useMutation(REMOVE_MODELING);
    const TEXTS = Texts.PAGE_AUTH_MODELING.HOME;

    useEffect(() => {
        (async () => {
            if (dataRemove && dataRemove.response) {
                const modeling = dataRemove.response;
                setModelings(prev => prev.filter(item => item[MODELING.ID] !== modeling[MODELING.ID]));
            }
        })()
    }, [dataRemove, errorRemove]);

    useEffect(() => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setModelings(data.response[PAGINATION.ITEMS]);
            return;
        }
        setModelings([]);
    }, [data, error]);

    return (
        <Container
            title={TEXTS.TITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <ComponentLoading loading={loading}>
                <Modelings
                    items={modelings}
                    renderItem={(item, key) => {
                        return (
                            <Item
                                key={key}
                                id={item[MODELING.ID]}
                                image={item[MODELING.IMAGE] && item[MODELING.IMAGE][IMAGE.URL]}
                                linkFile={item[MODELING.LINK]}
                                name={item[MODELING.NAME]}
                                onRemove={() => removeModeling(objectMutation({ id: item[MODELING.ID] }))}
                            />
                        )
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}
export default Home;