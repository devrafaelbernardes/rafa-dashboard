import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonClean as ButtonCleanDefault, ButtonContained } from 'components/Button';
import Video from 'components/Video';

export const Container = styled(Row)`
    padding: 0;
    position: relative;
`;

export const Header = styled(Row)`
    padding: 0;
`;

export const Player = styled(Video)`
    width: 100%;
    padding: 0;
`;

export const Body = styled(Row)`
    padding: 0;
`;

export const Line = styled(Row)`
    padding: 0;
`;

export const ButtonClean = styled(ButtonCleanDefault)`
    padding: 0 !important;
    margin-top: 10px;
    & > *{
        margin-right: 10px;
    }
    &:hover{
        color:${({ theme }) => theme.colors.text_light} !important;
        background:transparent !important;
    }
`;

export const ButtonView = styled(ButtonContained)`
    margin-top: 10px;
`;