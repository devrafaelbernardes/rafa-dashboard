import React from 'react';

import { Container, Header, Menu } from './styles';
import Texts from 'config/Texts';
import FormUpdatePositionMedias from 'components/forms/FormUpdatePositionMedias';

export function UpdatePosition() {
    const TEXTS = Texts.PAGE_AUTH_MEDIA.UPDATE_POSITION;

    return (
        <Container
            title={TEXTS.TITLE}
            subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <FormUpdatePositionMedias />
        </Container>
    );
}
export default UpdatePosition;