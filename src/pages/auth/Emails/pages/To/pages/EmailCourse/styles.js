import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Card } from '@material-ui/core';

export const Container = styled(Row)`
    padding: 0;
`;

export const ContainerCourse = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4,
})`
    padding: 15px;
`;

export const CourseCard = styled(Card)`
    padding: 15px;
`;

export const ContainerForm = styled(Row)`
    padding: 15px;
`;

export const ContainerList = styled(Row)`
    padding: 0;
`;

export const Title = styled(Row)`
    padding: 15px;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
`;

export const TitleCourse = styled(Title)`
    padding: 0;
    margin-bottom: 4px;
    & > div{
        margin-right: 5px;
    }
    & > span{
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const SubtitleCourse = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;