import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, ContainerVideo, NotFoundContainer, NotFoundTitle } from './styles';

import Form from 'components/forms/Form';
import Input from 'components/Input';

import Texts from 'config/Texts';
import objectMutation, { UPDATE_COURSE_VIDEO } from 'services/api/mutation';
import TextEditor from 'components/TextEditor';
import ComponentLoading from 'components/ComponentLoading';
import objectQuery, { GET_COURSE_VIDEO } from 'services/api/query';
import { COURSE_VIDEO, VIDEO } from 'services/api/responseAPI';
import { toHTML } from 'utils/convertValue';
import Video from 'components/Video';

export function FormUpdateCourseVideo({ courseId, videoId, ...props }) {
    const [notFound, setNotFound] = useState(false);
    const [video, setVideo] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_UPDATE_COURSE_VIDEO;

    const { data: dataGetVideo, error: errorGetVideo, loading: loadingGetVideo } = useQuery(GET_COURSE_VIDEO, objectQuery({ courseId, videoId }));

    const [submit, { data, error, loading }] = useMutation(UPDATE_COURSE_VIDEO, objectMutation({ courseId, videoId, name, description }));

    useEffect(() => {
        (async () => {
            if (dataGetVideo && dataGetVideo.response) {
                const video = dataGetVideo.response;
                setNotFound(false);
                setName(video[COURSE_VIDEO.NAME]);
                setVideo(video[COURSE_VIDEO.VIDEO] && video[COURSE_VIDEO.VIDEO][VIDEO.URL]);
                try {
                    const descriptionParse = await toHTML(video[COURSE_VIDEO.DESCRIPTION], false);
                    setDescription(descriptionParse && descriptionParse[0]);
                } catch (error) { }
                return;
            }
            setNotFound(true);
        })()
    }, [dataGetVideo, errorGetVideo]);

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    setResult(true);
                    const video = data.response;
                    setName(video[COURSE_VIDEO.NAME]);
                    try {
                        const descriptionParse = await toHTML(video[COURSE_VIDEO.DESCRIPTION], false);
                        setDescription(descriptionParse && descriptionParse[0]);
                    } catch (error) { }
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

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetVideo}>
                {
                    notFound ? (
                        <NotFoundContainer>
                            <NotFoundTitle>{TEXTS.NOT_FOUND_TITLE}</NotFoundTitle>
                        </NotFoundContainer>
                    ) : (
                            <Form
                                onSubmit={() => submit()}
                            >
                                {
                                    video &&
                                    <Line>
                                        <ContainerVideo>
                                            <Video
                                                controls
                                                url={video}
                                            />
                                        </ContainerVideo>
                                    </Line>
                                }
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
                        )
                }
            </ComponentLoading>
        </Container>
    );
}

export default FormUpdateCourseVideo;