import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, CancelButton, CourseVideoPreview, CourseVideoPreviewContainer, ContainerButtonResult, ContainerResult, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Video from 'components/Video';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import Texts from 'config/Texts';
import { COURSE_VIDEO, VIDEO } from 'services/api/responseAPI';
import objectMutation, { CREATE_COURSE_VIDEO } from 'services/api/mutation';
import TextEditor from 'components/TextEditor';

export function FormAddCourseVideo({ courseId, ...props }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_ADD_COURSE_VIDEO;    
    const [submit, { loading }] = useMutation(CREATE_COURSE_VIDEO);

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
        if (video) {
            try {
                setVideoPreview(URL.createObjectURL(video));
            } catch (error) { }
        } else {
            setVideoPreview(null);
        }
    }, [video]);

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const resetParams = () => {
        setName("");
        setDescription("");
        setVideo(null);
        setVideoPreview(null);
        setResult("");
    }

    const upload = async() => {
        let OKEY = false;
        try {
            await submit(objectMutation({ courseId, name, description }, { video }))
                .then(response => {
                    if (response && response.data && response.data.response) {
                        const courseVideo = response.data.response;
                        setName(courseVideo[COURSE_VIDEO.NAME]);
                        setVideoPreview(courseVideo[COURSE_VIDEO.VIDEO] && courseVideo[COURSE_VIDEO.VIDEO][VIDEO.URL]);
                        OKEY = true;
                    }
                })
                .catch(e => {});
        } catch (error) {}

        setResult(OKEY);
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => upload()}
            >
                <CourseVideoPreviewContainer>
                    <CourseVideoPreview>
                        <Video
                            controls
                            title={name}
                            url={videoPreview}
                        />
                        {
                            (result === true) &&
                            <ContainerResult>
                                <BoxResult color={colors.success}>
                                    {TEXTS.SUCCESS_UPDATE}
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
                    </CourseVideoPreview>
                </CourseVideoPreviewContainer>
                {
                    (result !== true) &&
                    <>
                        <Line>
                            <ContainerInputFile>
                                <InputFile
                                    id="formAddCourse1"
                                    name={"video"}
                                    onChange={(e) => setVideo(getFile(e))}
                                >
                                    {TEXTS.BUTTON_VIDEO}
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

export default FormAddCourseVideo;