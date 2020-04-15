import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

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
    margin: 10px 0 5px;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    width: 100%;
    margin-top: 5px;
    height: 40px !important;
`;