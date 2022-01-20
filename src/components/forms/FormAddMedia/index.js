import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, MediaPreviewContainer, ContainerInputFile, MediaPreview } from './styles';

import Form from 'components/forms/Form';
import Media from 'components/Media';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import NoImageSRC from 'assets/images/no-image.png';

import Texts from 'config/Texts';
import { MEDIA, IMAGE } from 'services/api/responseAPI';
import objectMutation, { CREATE_MEDIA } from 'services/api/mutation';

export function FormAddMedia({ isLandingPage = false, ...props }) {
    const [title, setTitle] = useState(null);
    const [link, setLink] = useState(null);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_ADD_MEDIA;

    const [submit, { data, loading, error }] = useMutation(CREATE_MEDIA, objectMutation({ link, title, is_landing_page: isLandingPage }, { image }));

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const media = data.response;
                    setImagePreview(media[MEDIA.IMAGE] && media[MEDIA.IMAGE][IMAGE.URL]);
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

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const resetInputs = () => {
        setLink("");
        setTitle("");
        setImage(null);
        setImagePreview(null);
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => submit()}
            >

                <Line>
                    <MediaPreviewContainer>
                        <MediaPreview>
                            <Media
                                link={link}
                                title={title}
                                image={imagePreview}
                            />
                        </MediaPreview>
                    </MediaPreviewContainer>
                </Line>
                <Line>
                    <ContainerInputFile>
                        <InputFile
                            id="formAddMedia1"
                            name={"image"}
                            onChange={(e) => setImage(getFile(e))}
                        >
                            {TEXTS.BUTTON_IMAGE}
                        </InputFile>
                    </ContainerInputFile>
                </Line>
                <Line>
                    <Input
                        required={false}
                        name={"title"}
                        value={title}
                        label={TEXTS.TITLE}
                        placeholder={TEXTS.TITLE}
                        onChange={e => setTitle(String(e.target.value))}
                    />
                </Line>
                <Line>
                    <Input
                        name={"link"}
                        value={link}
                        label={TEXTS.LINK}
                        placeholder={TEXTS.LINK}
                        onChange={e => setLink(String(e.target.value))}
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

export default FormAddMedia;