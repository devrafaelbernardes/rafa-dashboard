import React, { useState, memo } from 'react';

import {
    Container,
    Body,
    Header,
    BodyTitle,
    BodyInfo,
    BodyDate,
    ButtonRemove,
} from './styles';

import { toDate } from 'utils/convertValue';
import Texts from 'config/Texts';
import { RemoveIcon } from 'components/Icons';
import RemoveContainer from 'components/RemoveContainer';
import Student from 'components/Student';

export const Item = memo(({ id, title, subtitle, image, date, onRemove, isValidated, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);

    const TEXTS = Texts.PAGE_AUTH_COURSE.STUDENTS;

    return (
        <Container
            {...props}
        >
            <Header>
                <Student
                    isValidated={isValidated}
                    title={title}
                    subtitle={subtitle}
                    image={image}
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
                    <ButtonRemove
                        onClick={() => setTryRemove(true)}
                    >
                        <RemoveIcon /> {TEXTS.BUTTON_REMOVE}
                    </ButtonRemove>
                </RemoveContainer>
            </Body>
        </Container>
    );
});
export default Item;