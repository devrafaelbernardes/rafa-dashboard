import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    
`;

export const Title = styled(Row)`
    font-weight:bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 10px;

    & > b{
        margin-left: 5px;
        color: ${({ theme }) => theme.colors.secondary};
    }
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
    margin-top: 5px;
`;