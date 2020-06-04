import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
    Container,
    Header,
    Title,
    Subtitle,
    Body,
    Message,
    Name,
    Subject,
    To,
    Line,
    AvatarUser,
    HeaderSubject,
    HeaderDate,
    AvatarUserContainer
} from './styles';

import Texts from 'config/Texts';
import { toHTML } from 'utils/convertValue';
import { ButtonClean } from 'components/Button';

export function Email({ to, name, image, message, createdAt, subject, ...props }) {
    const [messageFormated, setMessageFormated] = useState("");
    const [show, setShow] = useState(false);
    const TEXTS = Texts.EMAIL;
    const { colors } = useContext(ThemeContext);

    useEffect(() => {
        try {
            setMessageFormated(toHTML(message));
        } catch (error) { }
    }, [message]);

    const toggle = () => {
        setShow(prev => !prev);
    }

    return (
        <Container
            {...props}
        >
            <Header>
                {
                    name || image ? (
                        <div>
                            <AvatarUserContainer>
                                <AvatarUser
                                    title={name}
                                    image={image}
                                    size={35}
                                />
                            </AvatarUserContainer>
                            <Name>
                                <div>
                                    {name}
                                </div>
                            </Name>
                        </div>
                    ) : (
                            <To>
                                {to}
                            </To>
                        )
                }
                {
                    !show &&
                    <HeaderSubject>
                        {subject}
                    </HeaderSubject>
                }
                <div>
                    <HeaderDate>
                        {createdAt}
                    </HeaderDate>
                    <ButtonClean
                        color={colors.blue}
                        onClick={() => toggle()}
                    >
                        {show ? TEXTS.HIDE : TEXTS.SHOW}
                    </ButtonClean>
                </div>
            </Header>
            {
                show &&
                <Body>
                    {
                        name &&
                        <Line>
                            <Title>
                                {TEXTS.NAME}
                            </Title>
                            <Subtitle style={{ textTransform: 'capitalize' }}>
                                {name}
                            </Subtitle>
                        </Line>
                    }
                    <Line>
                        <Title>
                            {TEXTS.EMAIL}
                        </Title>
                        <Subtitle>
                            {to}
                        </Subtitle>
                    </Line>
                    <Line>
                        <Title>
                            {TEXTS.SUBJECT}
                        </Title>
                        <Subject>
                            {subject}
                        </Subject>
                    </Line>
                    <Line>
                        <Title>
                            {TEXTS.MESSAGE}
                        </Title>
                        <Message>
                            {messageFormated}
                        </Message>
                    </Line>
                </Body>
            }
        </Container>
    );
}
export default Email;