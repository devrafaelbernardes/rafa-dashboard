import React, { useState, memo } from 'react';

import NoImage from 'assets/images/no-image.png';

import {
    Container,
    Body,
    Header,
    HeaderTitle,
    HeaderImage,
    HeaderInfo,
    HeaderDate,
    ButtonRemove,
} from './styles';

import { toDate } from 'utils/convertValue';
import Texts from 'config/Texts';
import { RemoveIcon } from 'components/Icons';
import RemoveContainer from 'components/RemoveContainer';

export const Item = memo(({ id, title, image, date, onRemove, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);

    const TEXTS = Texts.PAGE_AUTH_COURSE.STUDENTS;

    return (
        <Container
            {...props}
        >
            <Header>
                <HeaderImage
                    src={image || NoImage}
                />
                <HeaderInfo>
                    <HeaderTitle>
                        {title}
                    </HeaderTitle>
                    <HeaderDate>
                        {toDate(date)}
                    </HeaderDate>
                </HeaderInfo>
            </Header>
            <Body>
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