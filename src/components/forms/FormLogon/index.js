import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputPassword from 'components/InputPassword';
import Texts from 'config/Texts';
import { ADMIN_ACCESS, TOKEN_ACCESS } from 'services/api/responseAPI';
import objectMutation, { DO_LOGIN } from 'services/api/mutation';
import ContextApp from 'context/ContextApp';

export function FormLogon({ children, ...props }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { doLogin } = useContext(ContextApp);
    const [login, { data, error }] = useMutation(DO_LOGIN, objectMutation({
        email,
        password
    }));

    const TEXTS = Texts.FORM_LOGON;

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    setResult(true);
                    const token = data.response[ADMIN_ACCESS.TOKEN] && data.response[ADMIN_ACCESS.TOKEN][TOKEN_ACCESS.TOKEN];
                    if (doLogin) {
                        await doLogin(token);
                    }
                } else {
                    setResult(false);
                }
            }
        })()
        return () => {
            MOUNTED = false;
        }
    }, [data, error, doLogin]);

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

    return (
        <Container {...props}>
            <Form
                title={
                    <Title>{TEXTS.TITLE}</Title>
                }
                onSubmit={() => login()}
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
                    >
                        {TEXTS.BUTTON_SUBMIT}
                    </Button>
                </Line>
            </Form>
        </Container>
    );
}
export default FormLogon;