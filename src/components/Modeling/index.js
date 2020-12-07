import React from 'react';

import { Container, ContainerName, Image, ContainerFile, FileIcon, FileLink } from './styles';

import Link from 'components/Link';
import Texts from 'config/Texts';

export function Modeling({ image = null, link = "", linkFile = "", name = "", ...props }) {
    const TEXTS = Texts.MODELING;
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

            {
                name &&
                <ContainerName>
                    {name}
                </ContainerName>
            }

            {
                linkFile &&
                <ContainerFile>
                    <FileLink href={linkFile} target="_blank">
                        <FileIcon />
                        {TEXTS.FILE_LINK}
                    </FileLink>
                </ContainerFile>
            }
        </Container>
    );
}
export default Modeling;