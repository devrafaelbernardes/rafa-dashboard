import React from 'react';

import { Container, Header, Body, Menu } from './styles';

export function HeaderHome({ title, subtitle, noItems = false, componentHeader = null, componentMenu = null, children, ...props }) {
    return (
        <Container {...props}>
            <Header
                as={componentHeader}
                title={title}
                subtitle={subtitle}
            />
            <Menu
                as={componentMenu}
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
export default HeaderHome;