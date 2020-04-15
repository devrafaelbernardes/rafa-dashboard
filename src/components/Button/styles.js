import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const defineColor = ({ theme, color = null, disabled = false }) => {
    if(disabled){
        return theme.colors.disabled;
    }else if(color){
        return color;
    }
    return theme.colors.primary
};

export const Button = styled.button`
    margin: 0;
    padding: 6px 16px !important;
    line-height : 1.75;
    font-weight: 500;
    font-size: 14px;
    font-family : ${({ theme }) => theme.fonts.normal};
    border-radius : ${({ theme }) => theme.sizes.border_radius};
    box-shadow : none;
    color : ${({ theme }) => theme.colors.white};
    text-transform : uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover, &:focus, &:active{
        text-decoration: none !important;
        outline : 0;
    }
`;

export const Clean = styled(Button)`
    border: 0;
    background : 0;
    color : ${ (props) => defineColor(props)} !important;

    &:hover{
        border: 0;
        background : rgba(0,0,0,.1);
    }
`;

export const Outlined = styled(Button)`
    border : 2px solid;
    background : 0;
    color: ${ (props) => defineColor(props)};
    border-color : ${ (props) => defineColor(props)} !important;

    &:hover{
        color : ${ ({ theme, color, disabled }) => defineColor({ theme, disabled, color : (color === theme.colors.white ? theme.colors.black : theme.colors.white) }) } !important;
        background : ${ (props) => defineColor(props)} !important;
    }
`;

export const Contained = styled(Button)`
    border : 1px solid; 
    color : ${ ({ theme, color }) => color === theme.colors.white ? theme.colors.black : theme.colors.white} !important;
    border-color: ${ (props) => defineColor(props)} !important;
    background : ${ (props) => defineColor(props)} !important;

    &:hover{
        filter: brightness(130%);
    }
`;

export const Loading = styled(CircularProgress)`
    color: ${({ theme }) => theme.colors.white} !important;
`