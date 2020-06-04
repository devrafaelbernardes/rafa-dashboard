import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding:15px;
`;

export const Description = styled(Row)`
    display: block !important;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled(Row)`
    padding:0;
    margin-top:10px;
`;

export const PurchaseButton = styled(ButtonContained)``;