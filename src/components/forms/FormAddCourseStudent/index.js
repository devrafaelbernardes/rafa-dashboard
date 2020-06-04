import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Subtitle, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import Texts from 'config/Texts';
import objectMutation, { ADD_COURSE_STUDENT } from 'services/api/mutation';

export function FormAddCourseStudent({ courseId, ...props }) {
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const [addCourseStudent, { data, loading, error }] = useMutation(ADD_COURSE_STUDENT, objectMutation({
        courseId,
        studentEmail : email,
    }));

    const TEXTS = Texts.FORM_ADD_COURSE_STUDENT;

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    setResult(true);
                    resetInputs();
                } else {
                    setResult(false);
                }
            }
        })()
        return () => {
            MOUNTED = false;
        }
    }, [data, error]);

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

    const resetInputs = () => {
        setEmail("");
    }

    return (
        <Container {...props}>
            <Form
                title={
                    <Title>{TEXTS.TITLE}</Title>
                }
                subtitle={
                    <Subtitle>{TEXTS.SUBTITLE}</Subtitle>
                }
                onSubmit={() => addCourseStudent()}
            >
                <Line>
                    <Input
                        required
                        label={TEXTS.EMAIL}
                        placeholder={"example@gmail.com"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        type="submit"
                        loading={loading}
                    >
                        {TEXTS.BUTTON_SUBMIT}
                    </Button>
                </Line>
            </Form>
        </Container>
    );
}
export default FormAddCourseStudent;