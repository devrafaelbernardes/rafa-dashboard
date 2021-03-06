import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained, ButtonOutlined } from 'components/Button';

export const Container = styled(Row)``;

export const Line = styled(Row)`
    & + &{
        margin-top: 10px;
    }
`;

export const BoxResult = styled(Row)`
    padding: 10px 0;
    color : ${({ color, theme }) => color || theme.colors.text};
`;

export const ButtonCancel = styled(ButtonOutlined)`
    margin-right: 10px;
`;

export const Button = styled(ButtonContained)`
`;