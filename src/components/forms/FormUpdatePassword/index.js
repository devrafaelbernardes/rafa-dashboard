import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import InputPassword from 'components/InputPassword';
import Texts from 'config/Texts';
import objectMutation, { UPDATE_PASSWORD } from 'services/api/mutation';

export function FormUpdatePassword({ children, ...props }) {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const [updatePassword, { data, loading, error }] = useMutation(UPDATE_PASSWORD, objectMutation({
        password,
        newPassword
    }));

    const TEXTS = Texts.FORM_UPDATE_PASSWORD;

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    await resetInputs();
                    setResult(true);
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
        setPassword("");
        setNewPassword("");
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => updatePassword()}
            >
                <Line>
                    <InputPassword
                        required
                        value={password}
                        label={TEXTS.PASSWORD}
                        placeholder={TEXTS.PASSWORD}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Line>
                <Line>
                    <InputPassword
                        required
                        value={newPassword}
                        label={TEXTS.NEW_PASSWORD}
                        placeholder={TEXTS.NEW_PASSWORD}
                        onChange={(e) => setNewPassword(e.target.value)}
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
export default FormUpdatePassword;