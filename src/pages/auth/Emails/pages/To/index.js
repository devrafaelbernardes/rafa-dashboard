import React from 'react';

import {
    Container,
    Header,
    HeaderTitle,
    Body,
} from './styles';
import Texts from 'config/Texts';
import Menu from '../components/Menu';
import RouterEmailTo from 'routes/RouterEmailTo';

export function To() {
    const TEXTS = Texts.PAGE_AUTH_EMAILS.TO;

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    {TEXTS.HEADER.TITLE}
                </HeaderTitle>
            </Header>
            <Menu />
            <Body>
                <RouterEmailTo />
            </Body>
        </Container>
    );
}
export default To;