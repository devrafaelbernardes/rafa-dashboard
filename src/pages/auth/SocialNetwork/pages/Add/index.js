import React from 'react';

import { Container, Header, Menu, Body } from './styles';
import Texts from 'config/Texts';
import FormAddSocialNetwork from 'components/forms/FormAddSocialNetwork';

export function Add() {
    const TEXTS = Texts.PAGE_AUTH_SOCIAL_NETWORK.ADD;

    return (
        <Container
            title={TEXTS.TITLE}
            //subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <Body>
                <FormAddSocialNetwork />
            </Body>
        </Container>
    );
}
export default Add;