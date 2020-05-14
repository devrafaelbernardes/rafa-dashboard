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
    margin-top: 10px;
`;

export const CourseVideoPreviewContainer = styled(Row)`
    padding: 0;
    margin-bottom: 15px;
`;

export const CourseVideoPreviewGeneral = styled(Row)`
    padding: 0;
`;

export const CourseVideoPreviewCard = styled(Card)`
    padding: 15px;
`;

export const CourseVideoPreview = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 6,
})`
    padding: 0;
`;

export const Title = styled(Row)`
    padding: 0 0;
    font-weight: bold;
`;

export const CourseThumbnailPreview = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 6,
})`
    padding: 0;
    /* padding-left: 15px; */

    @media screen and (max-width:${({ theme }) => theme.sizes.sm }){
        padding-left: 0;
        /* padding-top: 15px; */
    }
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
    padding: 10px 0;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    height: 40px !important;
`;

export const CancelButton = styled(ButtonClean)`
    height: 40px !important;
`;