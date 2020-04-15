import React from 'react';

import { Container, Header, Menu, Body } from './styles';
import Texts from 'config/Texts';
import FormAddMedia from 'components/forms/FormAddMedia';

export function Add() {
    const TEXTS = Texts.PAGE_AUTH_MEDIA.ADD;

    return (
        <Container
            title={TEXTS.TITLE}
            //subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <Body>
                <FormAddMedia />
            </Body>
        </Container>
    );
}
export default Add;