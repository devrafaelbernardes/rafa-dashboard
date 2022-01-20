import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ImageDefault from '../Image';

export const Container = styled(Row)`
    width: 100% !important;
    display: flex;
    flex-direction: column;
`;

export const Image = styled(ImageDefault)`
    width: 100% !important;
`;

export const Title = styled(Row)`
    width: 100% !important;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-align: center;
    text-transform: uppercase;
`;