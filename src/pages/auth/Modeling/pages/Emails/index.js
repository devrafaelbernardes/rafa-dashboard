import FormSendModeling from 'components/forms/FormSendModeling';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Body, Container } from './styles';


export function Emails() {
    const { id } = useParams();
    return (
        <Container
            noItems
        >
            <Body>
                <FormSendModeling
                    modelingId={id}
                />
            </Body>
        </Container>
    );
}
export default Emails;