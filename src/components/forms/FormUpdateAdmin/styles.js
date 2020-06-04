import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)``;

export const Line = styled(Row)`
    padding: 0;
    & + &{
        margin-top: 10px;
    }
`;

export const ContainerInputFile = styled.div`
    margin-right: 10px;
`;

export const AdminPreviewContainer = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
`;

export const BoxResult = styled(Row)`
    padding: 10px 0;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    height: 40px !important;
`;