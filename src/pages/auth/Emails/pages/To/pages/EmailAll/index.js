import React from 'react';

import {
    Container,
} from './styles';
import FormSendEmailToAll from 'components/forms/FormSendEmailToAll';

export function EmailAll() {
    return (
        <Container>
            <FormSendEmailToAll />
        </Container>
    );
}
export default EmailAll;