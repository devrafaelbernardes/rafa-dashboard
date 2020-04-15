import React from 'react';

import { Container, Header, Title, Subtitle, Body } from './styles';
import Avatar from 'components/Avatar';

export function Student({ title, subtitle, image, ...props }){
    return (
        <Container {...props}>
            <Header>
                <Avatar
                    title={title}
                    image={image}
                    size={100}
                />
            </Header>
            <Body>
                {
                    title &&
                    <Title>
                        {title}
                    </Title>
                }
                {
                    subtitle &&
                    <Subtitle>
                        {subtitle}
                    </Subtitle>
                }
            </Body>
        </Container>
    );
}
export default Student;