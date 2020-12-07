import React from 'react';

import { Container, Header, Menu, Body } from './styles';
import Texts from 'config/Texts';
import FormAddModeling from 'components/forms/FormAddModeling';

export function Add() {
    const TEXTS = Texts.PAGE_AUTH_MODELING.ADD;

    return (
        <Container
            title={TEXTS.TITLE}
            //subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <Body>
                <FormAddModeling />
            </Body>
        </Container>
    );
}
export default Add;