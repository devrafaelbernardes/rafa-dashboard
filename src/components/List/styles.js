import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)``;

export const NotFoundContainer = styled(Row)`
    padding: 15px;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text_light};
`;