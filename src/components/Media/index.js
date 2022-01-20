import React from 'react';

import { Container, Image, Title } from './styles';

import Link from 'components/Link';

export function Media({ image = null, link = "", title = "", ...props }) {
    return (
        <Container
            {...props}
            as={link && Link}
            href={link}
            target="_blank"
        >
            <Image
                fluid
                src={image}
            />
            {title && <Title>{title}</Title>}
        </Container>
    );
}
export default Media;