import React, { useContext, useState } from 'react';

import {
    Container,
    Header,
    Body,
    Footer,
    FooterDate,
    FooterState,
    FooterStateContainer,
    BodyTitle,
    BodyLink,
    HeaderTitle,
    HeaderUserContainer,
    HeaderUserTitle,
    HeaderUserName,
    HeaderNewItem,
    HeaderUserAvatarContainer,
    HeaderUserInfo,
    BodyBox,
    ShowLinkButton
} from './styles';

import Texts from 'config/Texts';
import { toDate } from 'utils/convertValue';
import { ThemeContext } from 'styled-components';
import { STUDENT, COURSE } from 'services/api/responseAPI';
import Avatar from 'components/Avatar';
import { getImageUser } from 'services/api/query';

export function Home({ id, state, email = null, link = null, course = null, student = null, createdAt, isNew = false, ...props }) {
    const [showLink, setShowLink] = useState(false);
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.PAGE_AUTH_COURSE.CREATE_ACCESS;

    const defineState = () => {
        const STATE = {
            "1": {
                color: colors.orange,
                text: TEXTS.PENDING,
            },
            "2": {
                color: colors.green,
                text: TEXTS.FINISHED,
            },
            "3": {
                color: colors.red,
                text: TEXTS.CANCELED,
            },
        };
        return STATE[state] || STATE[1]
    }

    const handleShowLink = (e) => {
        e.preventDefault();
        setShowLink(prev => !prev);
    }

    return (
        <Container {...props}>
            <Header>
                <HeaderTitle>
                    {TEXTS.CODE}: #{id || "0"}
                </HeaderTitle>
                {
                    isNew &&
                    <HeaderNewItem>
                        {TEXTS.NEW_ITEM}
                    </HeaderNewItem>
                }
                {
                    course &&
                    <HeaderUserContainer>
                        <HeaderUserTitle>
                            {TEXTS.COURSE_TITLE}
                        </HeaderUserTitle>
                        <HeaderUserInfo>
                            <HeaderUserAvatarContainer>
                                <Avatar
                                    size={35}
                                    image={getImageUser(course[COURSE.PROFILE_IMAGE])}
                                    title={course[COURSE.NAME]}
                                />
                            </HeaderUserAvatarContainer>
                            <HeaderUserName>
                                {course[COURSE.NAME]}
                            </HeaderUserName>
                        </HeaderUserInfo>
                    </HeaderUserContainer>
                }
                {
                    student &&
                    <HeaderUserContainer>
                        <HeaderUserTitle>
                            {TEXTS.ADDED_USER}
                        </HeaderUserTitle>
                        <HeaderUserInfo>
                            <HeaderUserAvatarContainer>
                                <Avatar
                                    size={35}
                                    image={getImageUser(student[STUDENT.PROFILE_IMAGE])}
                                    title={student[STUDENT.FULL_NAME]}
                                />
                            </HeaderUserAvatarContainer>
                            <HeaderUserName>
                                {student[STUDENT.FULL_NAME]}
                            </HeaderUserName>
                        </HeaderUserInfo>
                    </HeaderUserContainer>
                }
            </Header>
            <Body>
                {
                    email &&
                    <BodyBox>
                        <BodyTitle>
                            {TEXTS.EMAIL}
                        </BodyTitle>
                        <BodyLink>
                            {email}
                        </BodyLink>
                    </BodyBox>
                }
                {
                    link &&
                    <BodyBox>
                        <BodyTitle>
                            {TEXTS.LINK}
                        </BodyTitle>
                        <BodyLink>
                            {showLink && link}
                            <ShowLinkButton
                                onClick={(e) => handleShowLink(e)}
                            >
                                {showLink ? TEXTS.HIDE_LINK : TEXTS.SHOW_LINK}
                            </ShowLinkButton>
                        </BodyLink>
                    </BodyBox>
                }
            </Body>
            <Footer>
                <FooterStateContainer>
                    <FooterState color={defineState().color}>
                        {defineState().text}
                    </FooterState>
                </FooterStateContainer>
                {
                    createdAt &&
                    <FooterDate>
                        {toDate(createdAt)}
                    </FooterDate>
                }
            </Footer>
        </Container>
    );
}
export default Home;