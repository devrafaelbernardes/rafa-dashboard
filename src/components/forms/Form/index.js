import React from 'react';

import { Container, Header, Title, Subtitle, Body } from './styles';

export function Form({ children, title, subtitle, onSubmit, ...props }) {
    const submit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    }
    return (
        <Container {...props}>
            {
                (title || subtitle) &&
                <Header>
                    {
                        title &&
                        <Title>{title}</Title>
                    }
                    {
                        subtitle &&
                        <Subtitle>{subtitle}</Subtitle>
                    }
                </Header>
            }
            {
                children &&
                <Body onSubmit={submit}>
                    {children}
                </Body>
            }
        </Container>
    );
}
export default Form;