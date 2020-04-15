import React, { useState, useEffect, useContext, memo } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Row } from 'react-bootstrap';

import { Container, Line, SocialNetworkItem, Button, BoxResult, SocialNetworkContainer, SocialNetworkCard } from './styles';

import Form from 'components/forms/Form';
import List from 'components/List';

import Texts from 'config/Texts';
import { SOCIAL_NETWORK, IMAGE, PAGINATION } from 'services/api/responseAPI';
import objectMutation, { UPDATE_POSITON_SOCIAL_NETWORKS } from 'services/api/mutation';
import { objectPagination } from 'services/api/config';
import objectQuery, { GET_SOCIAL_NETWORKS } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdatePositionSocialNetworks({ children, ...props }) {
    const [socialNetoworks, setSocialNetworks] = useState([]);
    const [positions, setPositions] = useState([]);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { data: dataGetSocialNetworks, loading: loadingGetSocialNetworks, error: errorGetSocialNetworks } = useQuery(GET_SOCIAL_NETWORKS, objectQuery(
        objectPagination({
            orderBy: [{ column: SOCIAL_NETWORK.POSITION, order: "asc" }],
        })
    ));
    let [submit, { data, loading, error }] = useMutation(UPDATE_POSITON_SOCIAL_NETWORKS, objectMutation({
        positions
    }));

    const TEXTS = Texts.FORM_UPDATE_POSITION_SOCIAL_NETWORKS;

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (errorGetSocialNetworks && MOUNTED) {
                setSocialNetworks([]);
            } else if (dataGetSocialNetworks) {
                if (dataGetSocialNetworks.response && dataGetSocialNetworks.response[PAGINATION.ITEMS] && MOUNTED) {
                    setSocialNetworks(dataGetSocialNetworks.response[PAGINATION.ITEMS]);
                } else {
                    setSocialNetworks([]);
                }
            }
        })()

        return () => {
            MOUNTED = false;
        }
    }, [dataGetSocialNetworks, errorGetSocialNetworks]);

    useEffect(() => {
        (async () => {
            if (socialNetoworks && socialNetoworks.length > 0) {
                const list = await socialNetoworks.map((item, key) => ({ id: item[SOCIAL_NETWORK.ID], position: (key + 1) }));
                setPositions(list);
            } else {
                setPositions([]);
            }
        })()
    }, [socialNetoworks]);

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    setResult(true);
                } else {
                    setResult(false);
                }
            }
        })()
        return () => {
            MOUNTED = false;
        }
    }, [data, error]);

    useEffect(() => {
        if (result !== "") {
            let MOUNTED = true;
            const timeout = setTimeout(() => {
                if (MOUNTED) {
                    setResult("");
                }
            }, 2000);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const moveSocialNetwork = async (currentPos, newPos) => {
        if (currentPos !== newPos && newPos >= 0 && newPos < socialNetoworks.length) {
            let list = [...socialNetoworks];
            let currentElement = socialNetoworks[currentPos];
            await list.splice(currentPos, 1);//REMOVE O ELEMENTO DA POSIÇÃO ANTIGA
            await list.splice(newPos, 0, currentElement); //ADICIONA O ELEMENTO NA NOVA POSIÇÃO
            setSocialNetworks(list);
        }
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetSocialNetworks}>
                <Form
                    onSubmit={() => submit()}
                >
                    {
                        (result === true) &&
                        <BoxResult color={colors.success}>
                            {TEXTS.SUCCESS_UPDATE}
                        </BoxResult>
                    }
                    {
                        (result === false) &&
                        <BoxResult color={colors.error}>
                            {TEXTS.ERROR_UPDATE}
                        </BoxResult>
                    }
                    <Line>
                        <Button
                            type="submit"
                            loading={loading}
                        >
                            {TEXTS.BUTTON_SUBMIT}
                        </Button>
                    </Line>
                    <DndProvider backend={HTML5Backend}>
                        <List
                            items={socialNetoworks}
                            renderItem={(socialNetowork, key) => {
                                const image = socialNetowork && socialNetowork[SOCIAL_NETWORK.IMAGE] && socialNetowork[SOCIAL_NETWORK.IMAGE][IMAGE.URL];
                                return (
                                    <SocialNetworkContainer key={key} xs="12" sm="12" md="6" lg="4">
                                        <SocialNetwork
                                            image={image}
                                            name={socialNetowork[SOCIAL_NETWORK.NAME]}
                                            currentPos={key}
                                            onDrop={(pos) => moveSocialNetwork(pos, key)}
                                        />
                                    </SocialNetworkContainer>
                                );
                            }}
                        />
                    </DndProvider>
                </Form>
            </ComponentLoading>
        </Container>
    );
}



const SocialNetwork = memo(({ name, image, currentPos, onDrop }) => {
    const SOCIAL_NETWORK = "SocialNetwork";

    const [/*{ isDragging }*/, drag] = useDrag({
        item: { type: SOCIAL_NETWORK, pos: currentPos },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const [{ isOver }, drop] = useDrop({
        accept: SOCIAL_NETWORK,
        drop: (itemDrag) => onDrop && itemDrag ? onDrop(itemDrag.pos) : null,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <Row
            ref={drop}
            style={{ cursor: 'pointer' }}
        >
            <SocialNetworkCard>
                <Row
                    ref={drag}
                >
                    <SocialNetworkItem
                        image={image}
                        title={name}
                    />
                    {
                        isOver && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    height: '100%',
                                    width: '100%',
                                    zIndex: 1,
                                    opacity: 0.5,
                                    backgroundColor: 'var(--color-yellow)',
                                }}
                            />
                        )
                    }
                </Row>
            </SocialNetworkCard>

        </Row>
    );
});

export default FormUpdatePositionSocialNetworks;