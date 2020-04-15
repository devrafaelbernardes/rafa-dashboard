import React, { useEffect, useContext, useState } from 'react';
import { Row } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';

import { Container, ContainerInput, ContainerButton } from './styles';

export function InputFile({ id = "", disabled, children, color, onChange = null, name, placeholder, onReset, ...props }) {
    const [idInput, setIdInput] = useState("");
    const { colors } = useContext(ThemeContext);
    disabled = disabled === true;
    
    useEffect(() => {
        if(name || id){
            setIdInput(id+"input-file"+name);
        }else{
            setIdInput("");
        }
    }, [name, id]);
    
    return (
        <Container {...props}>
            <Row>
                <ContainerButton
                    htmlFor={idInput}
                    color={disabled ? colors.disabled : color}
                >
                    { children }
                </ContainerButton>
            </Row>
            <ContainerInput>
                <input
                    onChange={onChange}
                    id={idInput}
                    type={"file"}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </ContainerInput>
        </Container>
    );
}

export default InputFile;