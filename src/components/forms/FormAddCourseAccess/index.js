import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Subtitle, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import Texts from 'config/Texts';
import objectMutation, { GENERATE_COURSE_ACCESS } from 'services/api/mutation';

export function FormAddCourseAccess({ courseId, ...props }) {
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const [submit, { loading }] = useMutation(GENERATE_COURSE_ACCESS);

    const TEXTS = Texts.FORM_GENERATE_COURSE_ACCESS;

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

    const onSubmit = async() => {
        let OKEY = false;
        try {
            await submit(objectMutation({
                courseId,
                email,
            }))
                .then(response => {
                    if(response && response.data && response.data.response){
                        OKEY = true;
                        resetInputs();
                    }
                }).catch(e => {
                    console.log(e);
                })
        } catch (error) {}
        setResult(OKEY);
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
                onSubmit={() => onSubmit()}
            >
                <Line>
                    <Input
                        required
                        label={TEXTS.EMAIL}
                        placeholder={"example@gmail.com"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(String(e.target.value))}
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
export default FormAddCourseAccess;