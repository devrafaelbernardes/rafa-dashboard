import React, { useState, memo } from 'react';

import {
    Container,
    Body,
    Header,
    Player,
    ButtonRemove,
    ButtonView,
    Line
} from './styles';

import Texts from 'config/Texts';
import { RemoveIcon } from 'components/Icons';
import RemoveContainer from 'components/RemoveContainer';

export const Item = memo(({ className, onRemove, linkView, ...props }) => {
    const [tryRemove, setTryRemove] = useState(false);
    const TEXTS = Texts.PAGE_AUTH_COURSE.VIDEOS;

    return (
        <Container
            className={className}
        >
            <Header>
                <Player
                    {...props}
                />
            </Header>
            <Body>
                <RemoveContainer
                    tryRemove={tryRemove}
                    onCancel={() => setTryRemove(false)}
                    onRemove={onRemove}
                >
                    <Line>
                        <Line>
                            <ButtonRemove
                                onClick={() => setTryRemove(true)}
                            >
                                <RemoveIcon /> {TEXTS.BUTTON_REMOVE}
                            </ButtonRemove>
                        </Line>
                        <Line>
                            <ButtonView
                                to={linkView}
                            >
                                {TEXTS.BUTTON_VIEW}
                            </ButtonView>
                        </Line>
                    </Line>
                </RemoveContainer>
            </Body>
        </Container>
    );
});
export default Item;