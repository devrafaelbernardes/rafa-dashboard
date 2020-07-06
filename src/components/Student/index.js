import React from 'react';

import { Container, Header, Title, Subtitle, Body, CountCourses, ValidatedContainer } from './styles';
import Avatar from 'components/Avatar';
import Texts from 'config/Texts';
import StudentEmailStatus from 'components/StudentEmailStatus';

export function Student({ title, subtitle, image, isValidated = false, countCourses, ...props }) {
    const TEXTS = Texts.STUDENT;

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
                <ValidatedContainer>
                    <StudentEmailStatus
                        isValidated={isValidated}
                    />
                </ValidatedContainer>
            </Body>
        </Container>
    );
}
export default Student;