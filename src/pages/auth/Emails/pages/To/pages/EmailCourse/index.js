import React, { useState, useEffect, memo } from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
    Container,
    ContainerCourse,
    CourseCard,
    Title,
    TitleCourse,
    ContainerForm,
    ContainerList,
    SubtitleCourse,
} from './styles';

import FormSendEmailToCourse from 'components/forms/FormSendEmailToCourse';
import { GET_COURSES_TO_SEND_EMAIL, getImageUser } from 'services/api/query';
import { PAGINATION, COURSE } from 'services/api/responseAPI';
import Course from 'components/Course';
import List from 'components/List';
import { ButtonOutlined } from 'components/Button';
import Texts from 'config/Texts';

const Item = memo(({ onSelected, ...props }) => {
    const TEXTS = Texts.PAGE_AUTH_EMAILS.TO.EMAIL_COURSE;
    return (
        <ContainerCourse>
            <CourseCard>
                <Course
                    {...props}
                />

                <ButtonOutlined
                    onClick={onSelected}
                >
                    {TEXTS.SEND}
                </ButtonOutlined>
            </CourseCard>
        </ContainerCourse>
    );
});

export function EmailCourse() {
    const [courses, setCourses] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [courseName, setCourseName] = useState(null);

    const { data } = useQuery(GET_COURSES_TO_SEND_EMAIL);

    const TEXTS = Texts.PAGE_AUTH_EMAILS.TO.EMAIL_COURSE;

    useEffect(() => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            setCourses(data.response[PAGINATION.ITEMS]);
        }
    }, [data]);

    const setCurrentyCourse = (id, name) => {
        setCourseId(id);
        setCourseName(name);
    }

    const onCancel = () => {
        setCourseId(null);
        setCourseName(null);
    }

    return (
        <Container>
            {
                courseId ? (
                    <ContainerForm>
                        <TitleCourse>
                            <div>
                                {TEXTS.SEND_TO}
                            </div>
                            <span>
                                {courseName}
                            </span>
                        </TitleCourse>
                        <SubtitleCourse>
                            {TEXTS.DESCRIPTION_COURSE}
                        </SubtitleCourse>
                        <FormSendEmailToCourse
                            courseId={courseId}
                            onCancel={() => onCancel()}
                        />
                    </ContainerForm>
                ) : (
                        <ContainerList>
                            <Title>
                                {TEXTS.CHOISE_COURSE}
                            </Title>
                            <List
                                items={courses}
                                renderItem={(item, key) => {
                                    const id = item[COURSE.ID];
                                    const name = item[COURSE.NAME];
                                    const image = getImageUser(item[COURSE.PROFILE_IMAGE]);
                                    return (
                                        <Item
                                            key={key}
                                            onSelected={() => setCurrentyCourse(id, name, image)}
                                            title={name}
                                            image={image}
                                        />
                                    );
                                }}
                            />
                        </ContainerList>
                    )
            }
        </Container>
    );
}
export default EmailCourse;