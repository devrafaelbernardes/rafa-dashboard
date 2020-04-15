import React from 'react';
import styled from 'styled-components';
import { Link as DefaultLink, NavLink } from 'react-router-dom';

const Container = styled.a`
    display: flex;
    padding: 0;
    outline: 0;

    &:hover, &:focus, &:active{
        outline: 0;
        cursor: pointer;
        text-decoration: none;
    }
`;

export function Link({ to, href, disabled, isNavLink, activeClassName, children, className, ...props }) {
    isNavLink = isNavLink === true;
    disabled = disabled === true;
    if(disabled){
        to = null;
        href = null;
    }else{
        href = href ? href : "";
    }
    activeClassName = isNavLink ? activeClassName : null;
    className = className ? " " + className : "";
    return (
        isNavLink ? (
            <Container
                {...props}
                to={to}
                as={NavLink}
                className={className}
                activeClassName={activeClassName}
            >
                {children}
            </Container>
        ) : (
            to ? (
                <Container
                    {...props}
                    as={DefaultLink}
                    to={to}
                    className={className}
                >
                    {children}
                </Container>
            ) : (
                <Container
                    {...props}
                    href={href}
                    className={className}
                >
                    {children}
                </Container>
            )
        )
    );
}

export default Link;