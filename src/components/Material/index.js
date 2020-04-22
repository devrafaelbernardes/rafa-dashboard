import React from 'react';

import imageSRC from 'assets/images/pdf.png';

import { Container, Image, Title, Header, Body } from './styles';
import Link from 'components/Link';

export function Material({ title = null, link = "", componentHeader, componentBody, ...props }) {
    return (
        <Container
            {...props}
            as={link && Link}
            href={link}
            target={link && "_blank"}
        >
            <Header as={componentHeader}>
                <Image
                    fluid
                    src={imageSRC}
                />
            </Header>
            <Body as={componentBody}>
                {
                    title &&
                    <Title>{title}</Title>
                }
            </Body>
        </Container>
    );
}
export default Material;