import React from 'react';
import EmailsURL from 'routes/URLs/EmailsURL';
import Texts from 'config/Texts';

import { Container } from './styles';

export function Menu() {
    const TEXTS = Texts.PAGE_AUTH_EMAILS.MENU;
    const REDIRECT = EmailsURL().REDIRECT;
    return (
        <Container
            items={[
                {
                    to : REDIRECT.BASE, 
                    text : TEXTS.HOME,
                },
                {
                    to : REDIRECT.SEND_TO.BASE, 
                    text : TEXTS.SEND_TO,
                },
            ]}
        />
    );
}

export default Menu;