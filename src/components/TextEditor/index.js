import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Container, Label, Message } from './styles';
import Texts from 'config/Texts';

export function TextEditor({ children, className, label, message, required, colorMessage, ...props }) {
    const TEXTS = Texts.TEXT_EDITOR;
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
                editor={ClassicEditor}
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