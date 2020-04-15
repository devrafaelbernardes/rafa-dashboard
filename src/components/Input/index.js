import React from 'react';
import { Container, General, Message, Label, IconLeft, IconRight, InputContainer, InputBox } from './styles';
import Texts from 'config/Texts';

function Input({ onChange, label, message, colorMessage, icon, iconRight, name, value, placeholder, type, disabled, required, reset }) {
    value = value || "";
    reset = reset === true;
    disabled = disabled === true;
    required = required === true;
    name = name || "";
    type = type || "text";
    placeholder = placeholder || "";
    colorMessage = colorMessage || "inherit";
    const TEXTS = Texts.BUTTON;

    return (
        <Container>
            {
                label &&
                <Label>
                    { label }{!required && <span>- {TEXTS.OPTIONAL}</span>}
                </Label>
            }
            <General>
                {
                    icon &&
                    <IconLeft>{icon}</IconLeft>
                }
                <InputContainer>
                    <InputBox
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        required={required}
                    />
                </InputContainer>
                {
                    iconRight &&
                    <IconRight>{iconRight}</IconRight>
                }
            </General>
            {
                message &&
                <Message style={{ color : colorMessage }}>
                    { message }
                </Message>
            }
        </Container>
    );
}

export { Input };
export default Input;