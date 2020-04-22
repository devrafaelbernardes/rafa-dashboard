import React, { useState, memo } from 'react';

import {
    Container,
    Body,
    Header,
    BodyTitle,
    BodyInfo,
    BodyDate,
    ButtonRemove,
    ButtonView,
    ContainerButtons,
    Line
} from './styles';

import { toDate } from 'utils/convertValue';
import Texts from 'config/Texts';
import { RemoveIcon } from 'components/Icons';
import RemoveContainer from 'components/RemoveContainer';
import Material from 'components/Material';

export const Item = memo(({ id, title, date, onRemove, link, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);

    const TEXTS = Texts.PAGE_AUTH_COURSE.MATERIALS;

    return (
        <Container
            {...props}
        >
            <Header>
                <Material
                    title={title}
                />
            </Header>
            <Body>
                <BodyInfo>
                    <BodyTitle>
                        {TEXTS.ADDED}
                    </BodyTitle>
                    <BodyDate>
                        {toDate(date)}
                    </BodyDate>
                </BodyInfo>
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <ContainerButtons>
                        <Line>
                            <ButtonRemove
                                onClick={() => setTryRemove(true)}
                            >
                                <RemoveIcon /> {TEXTS.BUTTON_REMOVE}
                            </ButtonRemove>
                        </Line>
                        <Line>
                            <ButtonView
                                href={link}
                                target="_blank"
                            >
                                {TEXTS.BUTTON_VIEW}
                            </ButtonView>
                        </Line>
                    </ContainerButtons>
                </RemoveContainer>
            </Body>
        </Container>
    );
});
export default Item;