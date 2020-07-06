import NoImageSRC from 'assets/images/no-thumbnail.png';
import React, { useMemo } from 'react';
import { Body, Container, Expiration, Header, Image, Title } from './styles';
import Texts from 'config/Texts';
import { toDateExpiration } from 'utils/convertValue';

export function Course({ image = null, title = null, description = null, expiration = null, link = "", componentHeader, componentBody, ...props }) {
    const TEXTS = Texts.COURSE;

    const textExpiration = useMemo(() => {
        return toDateExpiration(expiration);
    }, [expiration]);

    return (
        <Container
            {...props}
        >
            <Header as={componentHeader}>
                <Image
                    fluid
                    src={image}
                    srcNoImage={NoImageSRC}
                />
            </Header>
            <Body as={componentBody}>
                {
                    title &&
                    <Title>{title}</Title>
                }
                <Expiration>
                    <p>{TEXTS.EXPIRATION_TITLE}</p>
                    <span>{textExpiration}</span>
                </Expiration>
            </Body>
        </Container>
    );
}
export default Course;