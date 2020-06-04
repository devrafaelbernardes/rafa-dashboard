import React from 'react';

import { Container, Header, Body, Menu } from './styles';
import SocialNetworkURL from 'routes/URLs/SocialNetworkURL';
import Texts from 'config/Texts';

export function Struct({ title, subtitle, noItems = false, componentHeader = null, componentMenu = null, children, ...props }) {
    const TEXTS = Texts.PAGE_AUTH_SOCIAL_NETWORK.MENU;
    const items = [
        {
            to: SocialNetworkURL().REDIRECT.BASE,
            text: TEXTS.BUTTON_HOME,
        },
        {
            to: SocialNetworkURL().REDIRECT.ADD,
            text: TEXTS.BUTTON_ADD,
        },
        {
            to: SocialNetworkURL().REDIRECT.UPDATE_POSITION,
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