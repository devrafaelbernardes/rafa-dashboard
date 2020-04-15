import React from 'react';

import { Container, Header, Menu, Body } from './styles';
import Texts from 'config/Texts';
import FormAddCourse from 'components/forms/FormAddCourse';

export function Add() {
    const TEXTS = Texts.PAGE_AUTH_COURSES.ADD;

    return (
        <Container
            title={TEXTS.TITLE}
            componentHeader={Header}
            componentMenu={Menu}
        >
            <Body>
                <FormAddCourse />
            </Body>
        </Container>
    );
}
export default Add;