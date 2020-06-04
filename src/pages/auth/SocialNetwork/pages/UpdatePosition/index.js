import React from 'react';

import { Container, Header, Menu } from './styles';
import Texts from 'config/Texts';
import FormUpdatePositionSocialNetworks from 'components/forms/FormUpdatePositionSocialNetworks';

export function UpdatePosition() {
    const TEXTS = Texts.PAGE_AUTH_SOCIAL_NETWORK.UPDATE_POSITION;

    return (
        <Container
            title={TEXTS.TITLE}
            subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <FormUpdatePositionSocialNetworks />
        </Container>
    );
}
export default UpdatePosition;