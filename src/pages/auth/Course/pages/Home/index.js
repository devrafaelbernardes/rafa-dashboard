import React, { useContext } from 'react';

import { Container, Description, Footer, PurchaseButton } from './styles';

import ContextCourse from 'context/ContextCourse';
import { COURSE } from 'services/api/responseAPI';
import { toHTML } from 'utils/convertValue';
import Texts from 'config/Texts';

export function Home() {
    let { course } = useContext(ContextCourse);
    const TEXTS = Texts.PAGE_AUTH_COURSE.HOME;
    
    return (
        <Container>
            {
                course[COURSE.DESCRIPTION] &&
                <Description>
                    {toHTML(course[COURSE.DESCRIPTION])}
                </Description>
            }
            {
                course[COURSE.PURCHASE_LINK] &&
                <Footer>
                    <PurchaseButton
                        href={course[COURSE.PURCHASE_LINK]}
                        target="_blank"
                    >
                        {TEXTS.PURCHASE_BUTTON}
                    </PurchaseButton>
                </Footer>
            }
        </Container>
    );
}
export default Home;