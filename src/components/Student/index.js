import React, { useContext } from 'react';

import { Container, Header, Title, Subtitle, Body, CountCourses, ValidatedContainer } from './styles';
import Avatar from 'components/Avatar';
import Texts from 'config/Texts';
import { ThemeContext } from 'styled-components';

export function Student({ title, subtitle, image, isValidated = false, countCourses, ...props }) {
    const TEXTS = Texts.STUDENT;
    const { colors } = useContext(ThemeContext);

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
                {
                    countCourses >= 0 &&
                    <CountCourses>
                        <span>
                            {countCourses}
                        </span>
                        <div>
                            {countCourses === 1 ? TEXTS.COURSE : TEXTS.COURSES}
                        </div>
                    </CountCourses>
                }
                <ValidatedContainer color={isValidated ? colors.success : colors.orange}>
                    <span>
                        {isValidated ? TEXTS.VALIDATED : TEXTS.INVALIDATE}
                    </span>
                </ValidatedContainer>
            </Body>
        </Container>
    );
}
export default Student;