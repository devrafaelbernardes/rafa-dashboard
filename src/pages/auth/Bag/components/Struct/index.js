import React from 'react';

import { Container, Header, Body, Menu } from './styles';
import BagURL from 'routes/URLs/BagURL';
import Texts from 'config/Texts';

export function Struct({ title, subtitle, noItems = false, componentHeader = null, componentMenu = null, children, ...props }) {
    const TEXTS = Texts.PAGE_AUTH_BAG.MENU;
    const items = [
        {
            to: BagURL().REDIRECT.BASE,
            text: TEXTS.BUTTON_HOME,
        },
        {
            to: BagURL().REDIRECT.ADD,
            text: TEXTS.BUTTON_ADD,
        },
        {
            to: BagURL().REDIRECT.UPDATE_POSITION,
            text: TEXTS.BUTTON_UPDATE_POSITION,
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