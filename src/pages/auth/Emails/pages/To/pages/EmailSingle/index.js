import React from 'react';

import {
    Container,
} from './styles';
import FormSendEmailTo from 'components/forms/FormSendEmailTo';

export function EmailSingle() {
    return (
        <Container>
            <FormSendEmailTo />
        </Container>
    );
}
export default EmailSingle;