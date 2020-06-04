import React from 'react';

import NoImageSRC from 'assets/images/no-thumbnail.png';

import { Container, Image, Title, Header, Body/* , Description */ } from './styles';

export function Course({ image = null, title = null, description = null, link = "", componentHeader, componentBody, ...props }) {
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
                {
                    //description &&
                    //<Description>{description}</Description>
                }
            </Body>
        </Container>
    );
}
export default Course;