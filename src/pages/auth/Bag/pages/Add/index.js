import React from 'react';

import { Container, Header, Menu, Body } from './styles';
import Texts from 'config/Texts';
import FormAddBag from 'components/forms/FormAddBag';

export function Add() {
    const TEXTS = Texts.PAGE_AUTH_BAG.ADD;

    return (
        <Container
            title={TEXTS.TITLE}
            //subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <Body>
                <FormAddBag />
            </Body>
        </Container>
    );
}
export default Add;