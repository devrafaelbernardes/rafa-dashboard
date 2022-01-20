import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ImageDefault from 'components/Image';

export const Container = styled(Row)`
    width: 100% !important;
`;

export const Image = styled(ImageDefault)`
    width: 100% !important;
`;

export const Title = styled(Row)`
    width: 100% !important;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
    text-transform: uppercase;
`;