import React from 'react';

import { Container, Header, Body, Menu } from './styles';
import ModelingURL from 'routes/URLs/ModelingURL';
import Texts from 'config/Texts';

export function Struct({ title, subtitle, noItems = false, componentHeader = null, componentMenu = null, children, ...props }) {
    const TEXTS = Texts.PAGE_AUTH_MODELING.MENU;
    const REDIRECT = ModelingURL().REDIRECT;
    const items = [
        {
            to: REDIRECT.BASE,
            text: TEXTS.BUTTON_HOME,
        },
        {
            to: REDIRECT.ADD,
            text: TEXTS.BUTTON_ADD,
        },
    ];
    return (
        <Container {...props}>
            <Header
                as={componentHeader}
                title={title}
                subtitle={subtitle}
            />
            <Menu
                as={componentMenu}
                items={!noItems && items}
            />
            {
                children &&
                <Body>
                    { children }
                </Body>
            }
        </Container>
    );
}
export default Struct;