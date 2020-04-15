import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const defineColor = ({ theme, color = null, disabled = false }) => {
    if(disabled){
        return theme.colors.disabled;
    }else if(color){
        return color;
    }
    return theme.colors.primary
};

export const Container = styled.div`
    outline: 0;
`;

export const ContainerInput = styled(Row)`
    display: none;
`;

export const ContainerButton = styled.label`
    margin: 0;
    padding: 6px 16px !important;
    line-height : 1.75;
    font-weight: 500;
    font-size: 14px;
    font-family : ${({ theme }) => theme.fonts.normal};
    border-radius : ${({ theme }) => theme.sizes.border_radius};
    box-shadow : none;
    text-transform : uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border : 1px solid; 
    color : ${ ({ theme, color }) => color === theme.colors.white ? theme.colors.black : theme.colors.white} !important;
    border-color: ${ (props) => defineColor(props)} !important;
    background : ${ (props) => defineColor(props)} !important;
    cursor: pointer;

    &:hover, &:focus, &:active{
        text-decoration: none !important;
        outline : 0;
        filter: brightness(130%);
    }
`;