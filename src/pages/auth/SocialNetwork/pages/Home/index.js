import React, { useEffect, useState, memo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Container, SocialNetworks, Header, Menu, SocialNetworkContainer, SocialNetworkCard, SocialNetworkCardFooter, SocialNetworkButtonRemove } from './styles';

import objectQuery, { GET_SOCIAL_NETWORKS } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { PAGINATION, IMAGE, SOCIAL_NETWORK } from 'services/api/responseAPI';

import SocialNetwork from 'components/SocialNetwork';
import Texts from 'config/Texts';
import objectMutation, { REMOVE_SOCIAL_NETWORK } from 'services/api/mutation';
import ComponentLoading from 'components/ComponentLoading';
import RemoveContainer from 'components/RemoveContainer';
import { RemoveIcon } from 'components/Icons';

const Item = memo(({ onRemove, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);
    const TEXTS = Texts.PAGE_AUTH_SOCIAL_NETWORK.HOME;

    return (
        <SocialNetworkContainer xs="12" sm="12" md="6" lg="4">
            <SocialNetworkCard>
                <SocialNetwork
                    {...props}
                />
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <SocialNetworkCardFooter>
                        <SocialNetworkButtonRemove
                            onClick={() => setTryRemove(true)}
                        >
                            <RemoveIcon />{TEXTS.BUTTON_REMOVE}
                        </SocialNetworkButtonRemove>
                    </SocialNetworkCardFooter>
                </RemoveContainer>
            </SocialNetworkCard>
        </SocialNetworkContainer>
    );
});

export function Home() {
    const [socialNetworks, setSocialNetworks] = useState([]);
    const { data, loading, error } = useQuery(GET_SOCIAL_NETWORKS, objectQuery(
        objectPagination({
            orderBy: [{ column: SOCIAL_NETWORK.POSITION, order: "asc" }],
        })
    ));
    const [removeSocialNetwork, { data: dataRemove, error: errorRemove }] = useMutation(REMOVE_SOCIAL_NETWORK);
    const TEXTS = Texts.PAGE_AUTH_SOCIAL_NETWORK.HOME;

    useEffect(() => {
        (async () => {
            if (dataRemove && dataRemove.response) {
                const socialNetwork = dataRemove.response;
                setSocialNetworks(prev => prev.filter(item => item[SOCIAL_NETWORK.ID] !== socialNetwork[SOCIAL_NETWORK.ID]));
            }
        })()
    }, [dataRemove, errorRemove]);

    useEffect(() => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setSocialNetworks(data.response[PAGINATION.ITEMS]);
            return;
        }
        setSocialNetworks([]);
    }, [data, error]);

    return (
        <Container
            title={TEXTS.TITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <ComponentLoading loading={loading}>
                <SocialNetworks
                    items={socialNetworks}
                    renderItem={(item, key) => {
                        return (
                            <Item
                                key={key}
                                id={item[SOCIAL_NETWORK.ID]}
                                image={item[SOCIAL_NETWORK.IMAGE] && item[SOCIAL_NETWORK.IMAGE][IMAGE.URL]}
                                link={item[SOCIAL_NETWORK.LINK]}
                                onRemove={() => removeSocialNetwork(objectMutation({ id: item[SOCIAL_NETWORK.ID] }))}
                            />
                        )
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}
export default Home;