import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import {
    Container,
    Line,
    Button,
    BoxResult,
    CourseVideoPreview,
    CourseVideoPreviewCard,
    Title,
    CourseThumbnailPreview,
    ContainerInputFile,
    NotFoundContainer,
    NotFoundTitle
} from './styles';

import Form from 'components/forms/Form';
import Input from 'components/Input';

import Texts from 'config/Texts';
import objectMutation, { UPDATE_COURSE_VIDEO } from 'services/api/mutation';
import TextEditor from 'components/TextEditor';
import ComponentLoading from 'components/ComponentLoading';
import objectQuery, { GET_COURSE_VIDEO, getImageUser } from 'services/api/query';
import { COURSE_VIDEO, VIDEO } from 'services/api/responseAPI';
import { toHTML } from 'utils/convertValue';
import Video from 'components/Video';
import InputFile from 'components/InputFile';

export function FormUpdateCourseVideo({ courseId, videoId, ...props }) {
    const [notFound, setNotFound] = useState(false);
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_UPDATE_COURSE_VIDEO;

    let { data: dataGetVideo, error: errorGetVideo, loading: loadingGetVideo } = useQuery(GET_COURSE_VIDEO, objectQuery({ courseId, videoId }));

    const [submit, { loading }] = useMutation(UPDATE_COURSE_VIDEO);

    useEffect(() => {
        (async () => {
            if (dataGetVideo && dataGetVideo.response) {
                const video = dataGetVideo.response;
                await setNotFound(false);
                await setName(video[COURSE_VIDEO.NAME]);
                await setVideo(video[COURSE_VIDEO.VIDEO] && video[COURSE_VIDEO.VIDEO][VIDEO.URL]);
                await setThumbnailPreview(getImageUser(video[COURSE_VIDEO.THUMBNAIL]));
                try {
                    const descriptionParse = await toHTML(video[COURSE_VIDEO.DESCRIPTION], false);
                    await setDescription(descriptionParse && descriptionParse[0]);
                } catch (error) { }
                return;
            }
            setNotFound(true);
        })()
    }, [dataGetVideo, errorGetVideo]);

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

    useEffect(() => {
        if (thumbnail) {
            try {
                setThumbnailPreview(URL.createObjectURL(thumbnail));
            } catch (error) { }
        } else {
            setThumbnailPreview(null);
        }
    }, [thumbnail]);

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const update = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({ courseId, videoId, name, description }, { thumbnail }))
                .then(async (response) => {
                    if (response && response.data && response.data.response) {
                        OKEY = true;
                        const video = response.data.response;
                        setName(video[COURSE_VIDEO.NAME]);
                        try {
                            const descriptionParse = await toHTML(video[COURSE_VIDEO.DESCRIPTION], false);
                            setDescription(descriptionParse && descriptionParse[0]);
                        } catch (error) { }
                    }
                })
                .catch(e => { })
        } catch (error) { }
        setResult(OKEY);
    }

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
                                onSubmit={() => update()}
                            >
                                {
                                    video &&
                                    <Line>
                                        <CourseVideoPreview>
                                            <CourseVideoPreviewCard>
                                                <Title>{TEXTS.VIDEO}</Title>
                                                <Video
                                                    controls
                                                    title={name}
                                                    url={video}
                                                />
                                            </CourseVideoPreviewCard>
                                        </CourseVideoPreview>
                                        <CourseThumbnailPreview>
                                            <CourseVideoPreviewCard>
                                                <Title>{TEXTS.THUMBNAIL}</Title>
                                                <Video
                                                    controls
                                                    title={name}
                                                    thumbnail={thumbnailPreview}
                                                />
                                                <ContainerInputFile>
                                                    <InputFile
                                                        id="formAddCourse2"
                                                        name={"thumbnail"}
                                                        onChange={(e) => setThumbnail(getFile(e))}
                                                    >
                                                        {TEXTS.BUTTON_THUMBNAIL}
                                                    </InputFile>
                                                </ContainerInputFile>
                                            </CourseVideoPreviewCard>
                                        </CourseThumbnailPreview>
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