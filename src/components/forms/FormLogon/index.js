import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputPassword from 'components/InputPassword';
import Texts from 'config/Texts';
import objectMutation, { DO_LOGIN } from 'services/api/mutation';
import ContextApp from 'context/ContextApp';

export function FormLogon({ children, ...props }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { doLogin } = useContext(ContextApp);
    const [login, { loading }] = useMutation(DO_LOGIN);

    const TEXTS = Texts.FORM_LOGON;

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

    const makeLogin = async () => {
        let OKEY = false;
        try {
            await login(objectMutation({
                email,
                password
            }))
                .then(async (response) => {
                    if (response && response.data && response.data.response) {
                        OKEY = true;
                        const token = response.data.response;
                        if (doLogin) {
                            await doLogin(token);
                        }
                        return;
                    }
                })
        } catch (error) { }

        if (!OKEY) {
            setResult(OKEY);
        }
    }

    return (
        <Container {...props}>
            <Form
                title={
                    <Title>{TEXTS.TITLE}</Title>
                }
                onSubmit={() => makeLogin()}
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
                <Line>
                    <InputPassword
                        required
                        value={password}
                        label={TEXTS.PASSWORD}
                        placeholder={TEXTS.PASSWORD}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Line>
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.LOGIN_ERROR}
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
export default FormLogon;