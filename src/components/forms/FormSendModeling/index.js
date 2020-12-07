import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Subtitle, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import Texts from 'config/Texts';
import objectMutation, { SEND_MODELING_EMAIL } from 'services/api/mutation';
import objectQuery, { GET_MODELING } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';
import PageNotFound from 'pages/errors/PageNotFound';
import { MODELING } from 'services/api/responseAPI';

export function FormSendModeling({ modelingId, ...props }) {
    const [modeling, setModeling] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { data, loading: loadingComponent } = useQuery(GET_MODELING, objectQuery({ id: modelingId }));
    const [submit, { loading }] = useMutation(SEND_MODELING_EMAIL);

    const TEXTS = Texts.FORM_SEND_MODELING;

    useEffect(() => {
        if (data && data.response) {
            setModeling(data.response);
        }
    }, [data]);

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

    const onSubmit = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({
                modelingId: modeling[MODELING.ID],
                to: email,
            }))
                .then(response => {
                    if (response && response.data && response.data.response) {
                        OKEY = true;
                        resetInputs();
                    }
                }).catch(e => {
                    console.log(e);
                })
        } catch (error) { }
        setResult(OKEY);
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingComponent}>
                {
                    modeling ? (
                        <Form
                            title={
                                <Title>{TEXTS.TITLE}</Title>
                            }
                            subtitle={
                                <Subtitle>
                                    {TEXTS.SUBTITLE}
                                    <b>{modeling[MODELING.NAME]}</b>
                                </Subtitle>
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
                    ) : (
                            <PageNotFound />
                        )
                }
            </ComponentLoading>
        </Container>
    );
}
export default FormSendModeling;