import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';
import Media from 'components/Media';
import Card from 'components/Card';

export const Container = styled(Row)`
    
`;

export const Title = styled(Row)`
    justify-content:center;
    font-weight:bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    margin-bottom: 20px;
`;

export const Line = styled(Row)`
    & + &{
        margin-top: 10px;
    }
`;

export const BoxResult = styled(Row)`
    padding: 15px;
    padding-top: 0;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    margin-left: 15px;
    height: 40px !important;
`;

export const MediaContainer = styled(Col)`
    padding: 20px 15px;
`;

export const MediaCard = styled(Card)`
    padding:0;
    & > *{
        padding: 15px;
    }
    &:hover{
        box-shadow: 0 1px 3px #999;
    }
`;

export const MediaItem = styled(Media)``;