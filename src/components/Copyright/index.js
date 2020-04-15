import React from 'react';

import { Container, Line, Link } from './styles';
import Texts from 'config/Texts';

export function Copyright({ children, center = false, ...props }) {
    const TEXTS = Texts.COPYRIGHT;
    const align = center ? { justifyContent : "center" } : null;
    return (
        <Container {...props}>
            <Line style={align}>
                {TEXTS.TITLE}
            </Line>
            <Line style={align}>
                <span>
                    {TEXTS.SUBTITLE}
                </span>
                <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/developer-bernardes/"}
                >
                    Douglas Pereira Bernardes
                </Link>
            </Line>
        </Container>
    );
}
export default Copyright;