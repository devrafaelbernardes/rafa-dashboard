import React from 'react';
import StudentsURL from 'routes/URLs/StudentsURL';
import Texts from 'config/Texts';

import { Container } from './styles';

export function Menu() {
    const TEXTS = Texts.PAGE_AUTH_STUDENTS.MENU;
    const REDIRECT = StudentsURL().REDIRECT;
    return (
        <Container
            items={[
                {
                    to : REDIRECT.BASE, 
                    text : TEXTS.HOME,
                },
                {
                    to : REDIRECT.NO_COURSE, 
                    text : TEXTS.NO_COURSE,
                },
                {
                    to : REDIRECT.HAS_COURSE, 
                    text : TEXTS.HAS_COURSE,
                },
            ]}
        />
    );
}

export default Menu;