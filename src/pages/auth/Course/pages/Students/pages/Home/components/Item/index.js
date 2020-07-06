import React, { useState, memo } from 'react';

import {
    Container,
    Body,
    Header,
    BodyTitle,
    BodyInfo,
    BodyDate,
    ButtonRemove,
    HeaderAvatarBox,
    HeaderInfoBox,
    HeaderTitle,
    HeaderSubtitle,
    Footer,
} from './styles';

import { toDate } from 'utils/convertValue';
import Texts from 'config/Texts';
import { RemoveIcon } from 'components/Icons';
import RemoveContainer from 'components/RemoveContainer';
import Avatar from 'components/Avatar';

export const Item = memo(({ id, title, subtitle, expiresAt, image, date, onRemove, isValidated, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);

    const TEXTS = Texts.PAGE_AUTH_COURSE.STUDENTS;

    return (
        <Container
            {...props}
        >
            <RemoveContainer
                tryRemove={tryRemove}
                onCancel={() => setTryRemove(false)}
                onRemove={onRemove}
            >
                <Header>
                    <HeaderAvatarBox>
                        <Avatar
                            title={title}
                            image={image}
                            size={40}
                        />
                    </HeaderAvatarBox>
                    <HeaderInfoBox>
                        <HeaderTitle>
                            {title}
                        </HeaderTitle>
                        <HeaderSubtitle>
                            {subtitle}
                        </HeaderSubtitle>
                    </HeaderInfoBox>
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
                    <BodyInfo>
                        <BodyTitle>
                            {TEXTS.EXPIRES}
                        </BodyTitle>
                        <BodyDate>
                            {expiresAt ? toDate(expiresAt) : TEXTS.UNLIMITED}
                        </BodyDate>
                    </BodyInfo>
                </Body>
                <Footer>
                    <ButtonRemove
                        onClick={() => setTryRemove(true)}
                    >
                        <RemoveIcon /> {TEXTS.BUTTON_REMOVE}
                    </ButtonRemove>
                </Footer>
            </RemoveContainer>
        </Container>
    );
});
export default Item;