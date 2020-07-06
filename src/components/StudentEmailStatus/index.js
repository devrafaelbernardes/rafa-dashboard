import Texts from 'config/Texts';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';


export function StudentEmailStatus({ isValidated = false, ...props }) {
    const TEXTS = Texts.STUDENT_EMAIL_STATUS;
    const { colors } = useContext(ThemeContext);

    return (
        <Container
            {...props}
            color={isValidated ? colors.success : colors.orange}
        >
            {isValidated ? TEXTS.VALIDATED : TEXTS.INVALIDATE}
        </Container>
    );
}
export default StudentEmailStatus;