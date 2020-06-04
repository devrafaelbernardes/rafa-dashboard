import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, AdminPreviewContainer, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import Texts from 'config/Texts';
import { ADMIN, IMAGE } from 'services/api/responseAPI';
import objectMutation, { UPDATE_ADMIN } from 'services/api/mutation';
import Avatar from 'components/Avatar';
import { GET_CURRENTY_USER } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdateAdmin({ ...props }) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_UPDATE_ADMIN;

    let { data: dataGetAdmin, loading: loadingGetAdmin } = useQuery(GET_CURRENTY_USER);
    const [submit, { data, error, loading }] = useMutation(UPDATE_ADMIN, objectMutation({ name, lastname }, { image }));

    useEffect(() => {
        if (image) {
            try {
                setImagePreview(URL.createObjectURL(image));
            } catch (error) { }
        } else {
            setImagePreview(null);
        }
    }, [image]);

    useEffect(() => {
        (async () => {
            if (dataGetAdmin && dataGetAdmin.response) {
                const admin = dataGetAdmin.response;
                setName(admin[ADMIN.NAME]);
                setLastname(admin[ADMIN.LASTNAME]);
                setImagePreview(admin[ADMIN.PROFILE_IMAGE] && admin[ADMIN.PROFILE_IMAGE][IMAGE.URL]);
            }
        })()
    }, [dataGetAdmin]);

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const admin = data.response;
                    setName(admin[ADMIN.NAME]);
                    setLastname(admin[ADMIN.LASTNAME]);
                    setImagePreview(admin[ADMIN.PROFILE_IMAGE] && admin[ADMIN.PROFILE_IMAGE][IMAGE.URL]);
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

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetAdmin}>
                <Form
                    onSubmit={() => submit()}
                >
                    <AdminPreviewContainer>
                        <Avatar
                            size={200}
                            title={name}
                            image={imagePreview}
                        />
                    </AdminPreviewContainer>
                    <Line>
                        <ContainerInputFile>
                            <InputFile
                                id="formAddAdmin1"
                                name={"image"}
                                onChange={(e) => setImage(getFile(e))}
                            >
                                {TEXTS.BUTTON_IMAGE}
                            </InputFile>
                        </ContainerInputFile>
                    </Line>
                    <Line>
                        <Input
                            required
                            name={"name"}
                            value={name}
                            label={TEXTS.NAME}
                            placeholder={TEXTS.NAME}
                            onChange={e => setName(String(e.target.value))}
                        />
                    </Line>
                    <Line>
                        <Input
                            required
                            name={"lastname"}
                            value={lastname}
                            label={TEXTS.LASTNAME}
                            placeholder={TEXTS.LASTNAME}
                            onChange={e => setLastname(String(e.target.value))}
                        />
                    </Line>
                    {
                        (result === true) &&
                        <BoxResult color={colors.success}>
                            {TEXTS.SUCCESS_UPDATE}
                        </BoxResult>
                    }
                    {
                        (result === false) &&
                        <BoxResult color={colors.error}>
                            {TEXTS.ERROR_UPDATE}
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
            </ComponentLoading>
        </Container>
    );
}

export default FormUpdateAdmin;