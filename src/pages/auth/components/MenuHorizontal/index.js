import React, { memo } from 'react';

import { Container, Link } from './styles';
import List from 'components/List';

const Option = memo(({ children, ...props }) => (
    <Link {...props}>{children}</Link>
));

export function MenuHorizontal({ items = [], ...props }) {
    return (
        <Container {...props}>
            {
                items && items.length > 0 &&
                <List
                    items={items}
                    renderItem={({ to, href, text } = {}, key) => (
                        <Option
                            key={key}
                            exact={key === 0}
                            isNavLink
                            to={to}
                            href={href}
                        >
                            {text}
                        </Option>
                    )}
                />
            }
        </Container>
    );
}
export default MenuHorizontal;