import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult } from './styles';

import Form from 'components/forms/Form';
import Input from 'components/Input';

import Texts from 'config/Texts';
import objectMutation, { SEND_EMAIL_TO_ALL } from 'services/api/mutation';
import TextEditor from 'components/TextEditor';

export function FormSendEmailToAll({ courseId, ...props }) {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_SEND_EMAIL_TO_ALL;
    const [submit, { loading }] = useMutation(SEND_EMAIL_TO_ALL);

    useEffect(() => {
        if (result !== "") {
            let MOUNTED = true;
            const timeout = setTimeout(() => {
                if (MOUNTED) {
                    setResult("");
                }
            }, 2000);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const upload = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({ subject, message }))
                .then(response => {
                    if (response && response.data && response.data.response) {
                        OKEY = true;
                    }
                })
                .catch(e => { });
        } catch (error) { }

        setResult(OKEY);
    }

    return (
        <Container {...props}>
            <Form
                title={TEXTS.TITLE}
                onSubmit={() => upload()}
            >
                <Line>
                    <Input
                        required
                        name={"subject"}
                        value={subject}
                        label={TEXTS.SUBJECT}
                        placeholder={TEXTS.SUBJECT}
                        onChange={e => setSubject(String(e.target.value))}
                    />
                </Line>
                <Line>
                    <TextEditor
                        required
                        data={message}
                        label={TEXTS.MESSAGE}
                        placeholder={TEXTS.MESSAGE}
                        onChange={(e, editor) => setMessage(String(editor.getData()))}
                    />
                </Line>
                {
                    (result === true) &&
                    <BoxResult color={colors.success}>
                        {TEXTS.SUCCESS}
                    </BoxResult>
                }
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.ERROR}
                    </BoxResult>
                }
                <Line>
                    <Button
                        type={"submit"}
                        loading={loading}
                    >
                        {TEXTS.BUTTON_SUBMIT}
                    </Button>
                </Line>
            </Form>
        </Container>
    );
}

export default FormSendEmailToAll;