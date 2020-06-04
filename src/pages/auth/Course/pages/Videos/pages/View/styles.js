import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding:15px;
`;

export const General = styled(Row)`
    padding:0;
`;

export const Description = styled(Row)`
    margin-top: 15px;
    flex-direction: column;
`;

export const ButtonEdit = styled(ButtonContained)`
    margin-top: 15px;
`;

export const NotFoundContainer = styled(Row)``;

export const NotFoundTitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text_light};
`;