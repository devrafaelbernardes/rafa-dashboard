import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, CancelButton, CoursePreview, CoursePreviewContainer, ContainerButtonResult, ContainerResult, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Course from 'components/Course';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import NoImageSRC from 'assets/images/no-image.png';

import Texts from 'config/Texts';
import { IMAGE, COURSE } from 'services/api/responseAPI';
import objectMutation, { CREATE_COURSE } from 'services/api/mutation';
import CourseURL from 'routes/URLs/CourseURL';
import TextEditor from 'components/TextEditor';

export function FormAddCourse({ ...props }) {
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [purchaseLink, setPurchaseLink] = useState("");
    const [monthsToExpires, setMonthsToExpires] = useState(null);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_ADD_COURSE;

    const [submit, { data, error, loading }] = useMutation(CREATE_COURSE, objectMutation({ purchaseLink, name, description, monthsToExpires }, { image }));

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const course = data.response;
                    setId(course[COURSE.ID]);
                    setName(course[COURSE.NAME]);
                    setImagePreview(course[COURSE.PROFILE_IMAGE] && course[COURSE.PROFILE_IMAGE][IMAGE.URL]);
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

    useEffect(() => {
        if (image) {
            try {
                setImagePreview(URL.createObjectURL(image));
            } catch (error) { }
        } else {
            setImagePreview(NoImageSRC);
        }
    }, [image]);

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const resetParams = () => {
        setId(null);
        setName("");
        setDescription("");
        setPurchaseLink("");
        setMonthsToExpires("");
        setImage(null);
        setImagePreview(null);
        setResult("");
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => submit()}
            >
                <CoursePreviewContainer>
                    <CoursePreview>
                        <Course
                            title={name}
                            image={imagePreview}
                            expiration={monthsToExpires}
                        />
                        {
                            (result === true) &&
                            <ContainerResult>
                                <BoxResult color={colors.success}>
                                    {TEXTS.SUCCESS_UPDATE}
                                </BoxResult>
                                <ContainerButtonResult>
                                    <Button
                                        to={CourseURL(id).REDIRECT.BASE}
                                    >
                                        {TEXTS.BUTTON_VIEW}
                                    </Button>
                                    <CancelButton
                                        onClick={() => resetParams()}
                                    >
                                        {TEXTS.BUTTON_CANCEL}
                                    </CancelButton>
                                </ContainerButtonResult>
                            </ContainerResult>
                        }
                    </CoursePreview>
                </CoursePreviewContainer>
                {
                    (result !== true) &&
                    <>
                        <Line>
                            <ContainerInputFile>
                                <InputFile
                                    id="formAddCourse1"
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
                                name={"purchaseLink"}
                                value={purchaseLink}
                                label={TEXTS.PURCHASE_LINK}
                                placeholder={TEXTS.PURCHASE_LINK}
                                onChange={e => setPurchaseLink(String(e.target.value))}
                            />
                        </Line>
                        <Line>
                            <Input
                                name={"monthsToExpires"}
                                value={monthsToExpires}
                                label={TEXTS.MONTHS_TO_EXPIRES}
                                placeholder={TEXTS.MONTHS_TO_EXPIRES}
                                type="number"
                                onChange={e => setMonthsToExpires(parseInt(e.target.value))}
                            />
                        </Line>
                        <Line>
                            <TextEditor
                                data={description}
                                label={TEXTS.DESCRIPTION}
                                placeholder={TEXTS.DESCRIPTION}
                                onChange={(e, editor) => setDescription(String(editor.getData()))}
                            />
                        </Line>
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
                    </>
                }
            </Form>
        </Container>
    );
}

export default FormAddCourse;