import React from 'react';

import NoImageSRC from 'assets/images/no-thumbnail.png';

import {
    Container,
    Body,
    Header,
    Title,
    Player,
    Thumbnail,
    Date,
} from './styles';

import { toDate } from 'utils/convertValue';

export const Video = ({ id, title, thumbnail, url, date, controls = false, ...props }) => {
    return (
        <Container
            {...props}
        >
            <Header>
                {
                    url ? (
                        <Player
                            url={url}
                            controls={controls}
                        />
                    ) : (
                            <Thumbnail
                                src={thumbnail}
                                srcNoImage={NoImageSRC}
                            />
                        )
                }
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