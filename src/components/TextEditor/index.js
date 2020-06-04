import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Container, Label, Message } from './styles';
import Texts from 'config/Texts';
import { LINK_UPLOAD_IMAGE_API } from 'services/api/config';

export function TextEditor({ children, data, className, label, message, required, colorMessage, ...props }) {
    const [value, setValue] = useState();
    const TEXTS = Texts.TEXT_EDITOR;

    useEffect(() => {
        setValue(data);
    }, [data]);
    return (
        <Container className={className}>
            {
                label &&
                <Label>
                    {label}{!required && <span>- {TEXTS.OPTIONAL}</span>}
                </Label>
            }
            <CKEditor
                {...props}
                data={value}
                editor={ClassicEditor}
                config={{
                    ckfinder: {
                        options: {
                            resourceType: 'Images'
                        },
                        // Upload the images to the server using the CKFinder QuickUpload command.
                        uploadUrl: LINK_UPLOAD_IMAGE_API
                    }
                }}
            />
            {
                message &&
                <Message style={{ color: colorMessage }}>
                    {message}
                </Message>
            }
        </Container>
    );
}
export default TextEditor;