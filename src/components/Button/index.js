import React from 'react';
import Link from 'components/Link';
import { Loading, Clean, Outlined, Contained } from './styles';

const STYLE_BUTTON = {
    clean: Clean,
    outlined: Outlined,
    default: Contained
};

const styleButton = (type) => STYLE_BUTTON[type] || STYLE_BUTTON.default;

export function Button({ onClick, type, loading = false, typeButton, children, href, to, style, disabled, full, onHover, ...props }) {
    disabled = disabled ? disabled === true : false;
    full = full === true;
    type = type || "button";

    const Container = styleButton(typeButton);

    return (
        <Container
            {...props}
            as={(href || to) && Link}
            onClick={() => !loading && onClick ? onClick() : null}
            to={to}
            href={href}
            disabled={disabled}
            onMouseOver={onHover ? onHover : null}
            onMouseOut={onHover ? onHover : null}
            type={type}
        >
            {loading === true ? <Loading size={18} /> : children}
        </Container>
    );
}

export function ButtonContained({ children, ...props }) {
    return (
        <Button
            {...props}
            typeButton="contained"
        >
            {children}
        </Button>
    );
}

export function ButtonOutlined({ children, ...props }) {
    return (
        <Button
            {...props}
            typeButton="outlined"
        >
            {children}
        </Button>
    );
}

export function ButtonClean({ children, ...props }) {
    return (
        <Button
            {...props}
            typeButton="clean"
        >
            {children}
        </Button>
    );
}

export default Button;