import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, CoursePreviewContainer, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import Texts from 'config/Texts';
import { COURSE, IMAGE } from 'services/api/responseAPI';
import objectMutation, { UPDATE_COURSE } from 'services/api/mutation';
import TextEditor from 'components/TextEditor';
import Avatar from 'components/Avatar';
import { toHTML } from 'utils/convertValue';
import objectQuery, { GET_COURSE } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdateCourse({ courseId, ...props }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [purchaseLink, setPurchaseLink] = useState("");
    const [monthsToExpires, setMonthsToExpires] = useState(null);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_UPDATE_COURSE;

    let { data: dataGetCourse, loading: loadingGetCourse } = useQuery(GET_COURSE, objectQuery({ id: courseId }));
    let [submit, { data, error, loading }] = useMutation(UPDATE_COURSE, objectMutation({ courseId, name, description, purchaseLink, monthsToExpires }, { image }));

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
            if (dataGetCourse && dataGetCourse.response) {
                const course = dataGetCourse.response;
                setName(course[COURSE.NAME]);
                setPurchaseLink(course[COURSE.PURCHASE_LINK]);
                setMonthsToExpires(course[COURSE.MONTHS_TO_EXPIRES]);
                setImagePreview(course[COURSE.PROFILE_IMAGE] && course[COURSE.PROFILE_IMAGE][IMAGE.URL]);
                try {
                    const descriptionParse = await toHTML(course[COURSE.DESCRIPTION], false);
                    setDescription(descriptionParse && descriptionParse[0]);
                } catch (error) { }
            }
        })()
    }, [dataGetCourse]);

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const course = data.response;
                    setName(course[COURSE.NAME]);
                    setMonthsToExpires(course[COURSE.MONTHS_TO_EXPIRES]);
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
            <ComponentLoading loading={loadingGetCourse}>
                <Form
                    onSubmit={() => submit()}
                >
                    <CoursePreviewContainer>
                        <Avatar
                            size={200}
                            title={name}
                            image={imagePreview}
                        />
                    </CoursePreviewContainer>
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
                            onChange={(e, editor) => setDescription(String(editor.getData() || ""))}
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

export default FormUpdateCourse;