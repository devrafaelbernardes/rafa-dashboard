import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained, ButtonClean } from 'components/Button';

export const Container = styled(Row)`
    padding: 0;
    position: relative;
`;

export const Header = styled(Row)`
    padding: 0;
`;

export const BodyInfo = styled(Row)`
    padding: 0;
    align-items: center;
`;

export const BodyTitle = styled.div`
    margin-top:10px;
    margin-right: 7px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
`;

export const BodyDate = styled.div`
    margin-top:10px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;

export const Body = styled(Row)`
    padding: 0;
`;

export const ContainerButtons = styled(Row)`
    padding: 0;
    flex-direction: column;
`;

export const Line = styled(Row)`
    padding: 0;
`;

export const ButtonRemove = styled(ButtonClean)`
    padding: 0 !important;
    margin-top: 15px;
    justify-content: flex-start;
    & > *{
        margin-right: 10px;
    }
    &:hover{
        color: ${({ theme }) => theme.colors.text_light} !important;
        background: transparent;
    }
`;

export const ButtonView = styled(ButtonContained)`
    margin-top: 10px;
    & > *{
        margin-right: 10px;
    }
`;