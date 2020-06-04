import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, CancelButton, CourseMaterialPreview, CourseMaterialPreviewContainer, ContainerButtonResult, ContainerResult, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Material from 'components/Material';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import Texts from 'config/Texts';
import { COURSE_MATERIAL } from 'services/api/responseAPI';
import objectMutation, { CREATE_COURSE_MATERIAL } from 'services/api/mutation';

export function FormAddCourseMaterial({ courseId, ...props }) {
    const [name, setName] = useState("");
    const [material, setMaterial] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_ADD_COURSE_MATERIAL;
    const [submit, { loading }] = useMutation(CREATE_COURSE_MATERIAL);

    useEffect(() => {
        if (result !== "" && result === false) {
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

    const resetParams = () => {
        setName("");
        setMaterial(null);
        setResult("");
    }

    const upload = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({ courseId, name }, { material }))
                .then(response => {
                    if (response && response.data && response.data.response) {
                        const courseMaterial = response.data.response;
                        setName(courseMaterial[COURSE_MATERIAL.NAME]);
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
                onSubmit={() => upload()}
            >
                <CourseMaterialPreviewContainer>
                    {
                        material &&
                        <CourseMaterialPreview>
                            <Material
                                title={name}
                            />
                            {
                                (result === true) &&
                                <ContainerResult>
                                    <BoxResult color={colors.success}>
                                        {TEXTS.SUCCESS}
                                    </BoxResult>
                                    <ContainerButtonResult>
                                        <CancelButton
                                            onClick={() => resetParams()}
                                        >
                                            {TEXTS.BUTTON_BACK}
                                        </CancelButton>
                                    </ContainerButtonResult>
                                </ContainerResult>
                            }
                        </CourseMaterialPreview>
                    }
                </CourseMaterialPreviewContainer>
                {
                    (result !== true) &&
                    <>
                        <Line>
                            <ContainerInputFile>
                                <InputFile
                                    id="formAddCourse1"
                                    name={"video"}
                                    onChange={(e) => setMaterial(getFile(e))}
                                >
                                    {TEXTS.BUTTON_MATERIAL}
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
                    </>
                }
            </Form>
        </Container>
    );
}

export default FormAddCourseMaterial;