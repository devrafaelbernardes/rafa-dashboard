import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';
import Card from 'components/Card';

export const Container = styled(Row)``;

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
    padding-left: 15px;

    @media screen and (max-width:${({ theme }) => theme.sizes.sm }){
        padding-left: 0;
        padding-top: 15px;
    }
`;

export const Line = styled(Row)`
    & + &{
        margin-top: 10px;
    }
`;

export const ContainerInputFile = styled.div`
    margin-top: 10px;
`;

export const BoxResult = styled(Row)`
    padding: 10px 0;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    margin-top: 5px;
`;

export const NotFoundContainer = styled(Row)`

`;

export const NotFoundTitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text_light};
`;