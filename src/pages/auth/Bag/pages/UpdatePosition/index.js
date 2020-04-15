import React from 'react';

import { Container, Header, Menu } from './styles';
import Texts from 'config/Texts';
import FormUpdatePositionBags from 'components/forms/FormUpdatePositionBags';

export function UpdatePosition() {
    const TEXTS = Texts.PAGE_AUTH_BAG.UPDATE_POSITION;

    return (
        <Container
            title={TEXTS.TITLE}
            subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <FormUpdatePositionBags />
        </Container>
    );
}
export default UpdatePosition;