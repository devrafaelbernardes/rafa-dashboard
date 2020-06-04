import React, { useState, useEffect, useContext, memo } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Row } from 'react-bootstrap';

import { Container, Line, BagItem, Button, BoxResult, BagContainer, BagCard } from './styles';

import Form from 'components/forms/Form';
import List from 'components/List';

import Texts from 'config/Texts';
import { BAG, IMAGE, PAGINATION } from 'services/api/responseAPI';
import objectMutation, { UPDATE_POSITON_BAGS } from 'services/api/mutation';
import { objectPagination } from 'services/api/config';
import objectQuery, { GET_BAGS } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdatePositionBags({ children, ...props }) {
    const [bags, setBags] = useState([]);
    const [positions, setPositions] = useState([]);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { data: dataGetBags, loading: loadingGetBags, error: errorGetBags } = useQuery(GET_BAGS, objectQuery(
        objectPagination({
            orderBy: [{ column: BAG.POSITION, order: "asc" }],
        })
    ));
    let [submit, { data, error, loading }] = useMutation(UPDATE_POSITON_BAGS, objectMutation({
        positions
    }));

    const TEXTS = Texts.FORM_UPDATE_POSITION_BAGS;

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (errorGetBags && MOUNTED) {
                setBags([]);
            } else if (dataGetBags) {
                if (dataGetBags.response && dataGetBags.response[PAGINATION.ITEMS] && MOUNTED) {
                    setBags(dataGetBags.response[PAGINATION.ITEMS]);
                } else {
                    setBags([]);
                }
            }
        })()

        return () => {
            MOUNTED = false;
        }
    }, [dataGetBags, errorGetBags]);

    useEffect(() => {
        (async () => {
            if (bags && bags.length > 0) {
                const list = await bags.map((item, key) => ({ id: item[BAG.ID], position: (key + 1) }));
                setPositions(list);
            } else {
                setPositions([]);
            }
        })()
    }, [bags]);

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

    const moveBag = async (currentPos, newPos) => {
        if (currentPos !== newPos && newPos >= 0 && newPos < bags.length) {
            let list = [...bags];
            let currentElement = bags[currentPos];
            await list.splice(currentPos, 1);//REMOVE O ELEMENTO DA POSIÇÃO ANTIGA
            await list.splice(newPos, 0, currentElement); //ADICIONA O ELEMENTO NA NOVA POSIÇÃO
            setBags(list);
        }
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetBags}>
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
                            items={bags}
                            renderItem={(bag, key) => {
                                const image = bag && bag[BAG.FIRST_IMAGE] && bag[BAG.FIRST_IMAGE][IMAGE.URL];
                                return (
                                    <BagContainer key={key} xs="12" sm="12" md="6" lg="4">
                                        <Bag
                                            image={image}
                                            name={bag[BAG.NAME]}
                                            currentPos={key}
                                            onDrop={(pos) => moveBag(pos, key)}
                                        />
                                    </BagContainer>
                                );
                            }}
                        />
                    </DndProvider>
                </Form>
            </ComponentLoading>
        </Container>
    );
}



const Bag = memo(({ name, image, currentPos, onDrop }) => {
    const BAG = "Bag";

    const [/*{ isDragging }*/, drag] = useDrag({
        item: { type: BAG, pos: currentPos },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const [{ isOver }, drop] = useDrop({
        accept: BAG,
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
            <BagCard>
                <Row
                    ref={drag}
                >
                    <BagItem
                        firstImage={image}
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
            </BagCard>

        </Row>
    );
});

export default FormUpdatePositionBags;