import React, { useEffect, useState, memo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Container, Medias, Header, Menu, MediaContainer, MediaCard, MediaCardFooter, MediaButtonRemove } from './styles';

import objectQuery, { GET_MEDIAS } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { PAGINATION, IMAGE, MEDIA } from 'services/api/responseAPI';

import Media from 'components/Media';
import Texts from 'config/Texts';
import objectMutation, { REMOVE_MEDIA } from 'services/api/mutation';
import ComponentLoading from 'components/ComponentLoading';
import RemoveContainer from 'components/RemoveContainer';
import { RemoveIcon } from 'components/Icons';

const Item = memo(({ onRemove, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);
    const TEXTS = Texts.PAGE_AUTH_MEDIA.HOME;

    return (
        <MediaContainer xs="12" sm="12" md="6" lg="4">
            <MediaCard>
                <Media
                    {...props}
                />
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <MediaCardFooter>
                        <MediaButtonRemove
                            onClick={() => setTryRemove(true)}
                        >
                            <RemoveIcon />{TEXTS.BUTTON_REMOVE}
                        </MediaButtonRemove>
                    </MediaCardFooter>
                </RemoveContainer>
            </MediaCard>
        </MediaContainer>
    );
});

export function Home() {
    const [medias, setMedias] = useState([]);
    const { data, loading, error } = useQuery(GET_MEDIAS, objectQuery(
        objectPagination({
            orderBy: [{ column: MEDIA.POSITION, order: "asc" }],
        })
    ));
    const [removeMedia, { data: dataRemove, error: errorRemove }] = useMutation(REMOVE_MEDIA);
    const TEXTS = Texts.PAGE_AUTH_MEDIA.HOME;

    useEffect(() => {
        (async () => {
            if (dataRemove && dataRemove.response) {
                const media = dataRemove.response;
                setMedias(prev => prev.filter(item => item[MEDIA.ID] !== media[MEDIA.ID]));
            }
        })()
    }, [dataRemove, errorRemove]);

    useEffect(() => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setMedias(data.response[PAGINATION.ITEMS]);
            return;
        }
        setMedias([]);
    }, [data, error]);

    return (
        <Container
            title={TEXTS.TITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <ComponentLoading loading={loading}>
                <Medias
                    items={medias}
                    renderItem={(item, key) => {
                        return (
                            <Item
                                key={key}
                                id={item[MEDIA.ID]}
                                image={item[MEDIA.IMAGE] && item[MEDIA.IMAGE][IMAGE.URL]}
                                link={item[MEDIA.LINK]}
                                onRemove={() => removeMedia(objectMutation({ id: item[MEDIA.ID] }))}
                            />
                        )
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}
export default Home;