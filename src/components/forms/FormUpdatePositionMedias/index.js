import React, { useState, useEffect, useContext, memo } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Row } from 'react-bootstrap';

import { Container, Line, MediaItem, Button, BoxResult, MediaContainer, MediaCard } from './styles';

import Form from 'components/forms/Form';
import List from 'components/List';

import Texts from 'config/Texts';
import { MEDIA, IMAGE, PAGINATION } from 'services/api/responseAPI';
import objectMutation, { UPDATE_POSITON_MEDIAS } from 'services/api/mutation';
import { objectPagination } from 'services/api/config';
import objectQuery, { GET_MEDIAS } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdatePositionMedias({ children, isLandingPage = false, ...props }) {
    const [medias, setMedias] = useState([]);
    const [positions, setPositions] = useState([]);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { data: dataGetMedias, loading: loadingGetMedias, error: errorGetMedias } = useQuery(GET_MEDIAS(isLandingPage), objectQuery(
        objectPagination({
            orderBy: [{ column: MEDIA.POSITION, order: "asc" }],
        })
    ));
    let [submit, { data, loading, error }] = useMutation(UPDATE_POSITON_MEDIAS, objectMutation({
        positions
    }));

    const TEXTS = Texts.FORM_UPDATE_POSITION_MEDIAS;

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (errorGetMedias && MOUNTED) {
                setMedias([]);
            } else if (dataGetMedias) {
                if (dataGetMedias.response && dataGetMedias.response[PAGINATION.ITEMS] && MOUNTED) {
                    setMedias(dataGetMedias.response[PAGINATION.ITEMS]);
                } else {
                    setMedias([]);
                }
            }
        })()

        return () => {
            MOUNTED = false;
        }
    }, [dataGetMedias, errorGetMedias]);

    useEffect(() => {
        (async () => {
            if (medias && medias.length > 0) {
                const list = await medias.map((item, key) => ({ id: item[MEDIA.ID], position: (key + 1) }));
                setPositions(list);
            } else {
                setPositions([]);
            }
        })()
    }, [medias]);

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

    const moveMedia = async (currentPos, newPos) => {
        if (currentPos !== newPos && newPos >= 0 && newPos < medias.length) {
            let list = [...medias];
            let currentElement = medias[currentPos];
            await list.splice(currentPos, 1);//REMOVE O ELEMENTO DA POSIÇÃO ANTIGA
            await list.splice(newPos, 0, currentElement); //ADICIONA O ELEMENTO NA NOVA POSIÇÃO
            setMedias(list);
        }
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetMedias}>
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
                            items={medias}
                            renderItem={(media, key) => {
                                const image = media && media[MEDIA.IMAGE] && media[MEDIA.IMAGE][IMAGE.URL];
                                return (
                                    <MediaContainer key={key} xs="12" sm="12" md="6" lg="4">
                                        <Media
                                            image={image}
                                            name={media[MEDIA.NAME]}
                                            currentPos={key}
                                            onDrop={(pos) => moveMedia(pos, key)}
                                        />
                                    </MediaContainer>
                                );
                            }}
                        />
                    </DndProvider>
                </Form>
            </ComponentLoading>
        </Container>
    );
}



const Media = memo(({ name, image, currentPos, onDrop }) => {
    const MEDIA = "Media";

    const [/*{ isDragging }*/, drag] = useDrag({
        item: { type: MEDIA, pos: currentPos },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const [{ isOver }, drop] = useDrop({
        accept: MEDIA,
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
            <MediaCard>
                <Row
                    ref={drag}
                >
                    <MediaItem
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
            </MediaCard>

        </Row>
    );
});

export default FormUpdatePositionMedias;