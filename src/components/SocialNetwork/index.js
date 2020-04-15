import React from 'react';

import { Container, Image } from './styles';

import Link from 'components/Link';

export function SocialNetwork({ image = null, link = "", ...props }) {
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
        </Container>
    );
}
export default SocialNetwork;