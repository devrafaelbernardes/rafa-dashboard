import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, ModelingPreviewContainer, ContainerInputFile, ModelingPreview } from './styles';

import Form from 'components/forms/Form';
import Modeling from 'components/Modeling';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import NoImageSRC from 'assets/images/no-image.png';

import Texts from 'config/Texts';
import { MODELING, IMAGE } from 'services/api/responseAPI';
import objectMutation, { CREATE_MODELING } from 'services/api/mutation';

export function FormAddModeling({ ...props }) {
    const [name, setName] = useState(null);
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_ADD_MODELING;

    const [submit, { data, loading, error }] = useMutation(CREATE_MODELING, objectMutation({ name }, { image, file }));

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            console.log(data);
            console.log("Error: ", error);
        
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const modeling = data.response;
                    setImagePreview(modeling[MODELING.IMAGE] && modeling[MODELING.IMAGE][IMAGE.URL]);
                    setFilePreview(modeling[MODELING.LINK]);
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
                    if (result) {
                        resetInputs();
                    }
                    setResult("");
                }
            }, 2000);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    useEffect(() => {
        if (image) {
            try {
                setImagePreview(URL.createObjectURL(image));
            } catch (error) { }
        } else {
            setImagePreview(NoImageSRC);
        }
    }, [image]);

    useEffect(() => {
        if (file) {
            try {
                setFilePreview(URL.createObjectURL(file));
            } catch (error) { }
        } else {
            setFilePreview(null);
        }
    }, [file]);

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const resetInputs = () => {
        setName("");
        setFile(null);
        setImage(null);
        setImagePreview(null);
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => submit()}
            >

                <Line>
                    <ModelingPreviewContainer>
                        <ModelingPreview>
                            <Modeling
                                name={name}
                                linkFile={filePreview}
                                image={imagePreview}
                            />
                        </ModelingPreview>
                    </ModelingPreviewContainer>
                </Line>
                <Line>
                    <ContainerInputFile>
                        <InputFile
                            id="formAddModeling1"
                            name={"image"}
                            onChange={(e) => setImage(getFile(e))}
                        >
                            {TEXTS.BUTTON_IMAGE}
                        </InputFile>
                    </ContainerInputFile>
                </Line>
                <Line>
                    <ContainerInputFile>
                        <InputFile
                            id="formAddModeling2"
                            name={"file"}
                            onChange={(e) => setFile(getFile(e))}
                        >
                            {TEXTS.BUTTON_MODELING}
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
        </Container>
    );
}

export default FormAddModeling;