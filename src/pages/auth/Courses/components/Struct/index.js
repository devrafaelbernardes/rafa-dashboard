import React from 'react';

import { Container, Header, Body, Menu } from './styles';
import Texts from 'config/Texts';
import CoursesURL from 'routes/URLs/CoursesURL';

export function Struct({ title, subtitle, noItems = false, componentHeader = null, componentMenu = null, children, ...props }) {
    const TEXTS = Texts.PAGE_AUTH_COURSES.MENU;
    const items = [
        {
            to: CoursesURL().REDIRECT.BASE,
            text: TEXTS.BUTTON_HOME,
        },
        {
            to: CoursesURL().REDIRECT.ADD,
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