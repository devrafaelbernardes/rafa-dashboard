import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { ButtonContained, ButtonClean } from 'components/Button';
import Card from 'components/Card';

export const Container = styled(Row)``;

export const Line = styled(Row)`
    & + &{
        margin-top: 10px;
    }
`;

export const ContainerInputFile = styled.div`
    margin-right: 10px;
`;

export const CoursePreviewContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4,
})`
    padding: 0;
    margin-bottom: 15px;
`;

export const CoursePreview = styled(Card)`
    padding: 15px;
`;

export const ContainerResult = styled(Row)`
    padding: 0;
`;

export const ContainerButtonResult = styled(Row)`
    padding: 0;

    & > * {
        width: 100%;
        margin-top: 10px;
    }
`;

export const BoxResult = styled(Row)`
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    height: 40px !important;
`;

export const CancelButton = styled(ButtonClean)`
    height: 40px !important;
`;