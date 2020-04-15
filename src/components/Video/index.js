import React from 'react';

import {
    Container,
    Body,
    Header,
    Title,
    Player,
    Date,
} from './styles';

import { toDate } from 'utils/convertValue';

export const Video = ({ id, title, url, date, controls = false, ...props }) => {
    return (
        <Container
            {...props}
        >
            <Header>
                <Player
                    url={url}
                    controls={controls}
                />
            </Header>
            <Body>
                <Title>
                    {title}
                </Title>
                <Date>
                    {toDate(date)}
                </Date>
            </Body>
        </Container>
    );
};
export default Video;